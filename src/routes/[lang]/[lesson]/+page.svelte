<script>
    import { goto, invalidateAll } from "$app/navigation";
    import { sound } from "$lib/utils/sound";

    let { data } = $props();

    // Phase tracking: 'teaching' or 'exercises'
    let phase = $state(
        data.lesson.teaching?.length > 0 ? "teaching" : "exercises",
    );
    let currentTeachingSlide = $state(0);

    // Exercise state
    let currentExerciseIndex = $state(0);
    let selectedAnswer = $state(null);
    let wordBankSelection = $state([]);
    let usedIndices = $state(new Set());
    let translationInput = $state("");
    let showFeedback = $state(false);
    let isCorrect = $state(false);
    let mistakes = $state(0);
    let lessonComplete = $state(false);
    let earnedXP = $state(0);

    const teaching = $derived(data.lesson.teaching || []);
    const currentSlide = $derived(teaching[currentTeachingSlide]);
    const exercise = $derived(data.lesson.exercises[currentExerciseIndex]);

    let currentWords = $state([]);
    // Matching game state
    let leftCards = $state([]);
    let rightCards = $state([]);
    let selection = $state(null);
    let userPairs = $state(new Map());

    $effect(() => {
        // Reset state when exercise changes
        if (exercise) {
            if (exercise.type === "word-bank" && exercise.words) {
                // Shuffle words for word bank
                currentWords = [...exercise.words].sort(
                    () => Math.random() - 0.5,
                );
            } else if (exercise.type === "matching" && exercise.pairs) {
                // Setup matching game - separate columns
                selection = null;
                userPairs = new Map();

                // Create independent shuffled lists
                const left = exercise.pairs.map((p, i) => ({
                    id: `word-${i}`,
                    text: p.word,
                    pairId: i,
                    col: "left",
                }));
                const right = exercise.pairs.map((p, i) => ({
                    id: `trans-${i}`,
                    text: p.translation,
                    pairId: i,
                    col: "right",
                }));

                leftCards = left.sort(() => Math.random() - 0.5);
                rightCards = right.sort(() => Math.random() - 0.5);
            }
        }
    });

    const totalSteps = $derived(teaching.length + data.lesson.exercises.length);
    const currentStep = $derived(
        phase === "teaching"
            ? currentTeachingSlide + 1
            : teaching.length + currentExerciseIndex + 1,
    );
    const progress = $derived((currentStep / totalSteps) * 100);

    function nextTeachingSlide() {
        if (currentTeachingSlide < teaching.length - 1) {
            currentTeachingSlide++;
        } else {
            phase = "exercises";
        }
    }

    function prevTeachingSlide() {
        if (currentTeachingSlide > 0) {
            currentTeachingSlide--;
        }
    }

    function handleCardClick(card) {
        if (showFeedback) return;

        // If clicking an already paired card, unpair it
        if (card.col === "left") {
            if (userPairs.has(card.id)) {
                const newPairs = new Map(userPairs);
                newPairs.delete(card.id);
                userPairs = newPairs;
            }
        } else {
            // Find if this right card is paired
            for (const [l, r] of userPairs) {
                if (r === card.id) {
                    const newPairs = new Map(userPairs);
                    newPairs.delete(l);
                    userPairs = newPairs;
                    break;
                }
            }
        }

        if (!selection) {
            selection = card;
            sound.play("select");
            return;
        }

        if (selection.id === card.id) {
            selection = null;
            return;
        }

        if (selection.col === card.col) {
            selection = card;
            sound.play("select");
        } else {
            // Form pair
            const left = selection.col === "left" ? selection : card;
            const right = selection.col === "right" ? selection : card;

            const newPairs = new Map(userPairs);

            // Remove any existing pairings for to-be-paired cards
            // (If right was already paired to a different left, remove that entry)
            for (const [l, r] of newPairs) {
                if (r === right.id) newPairs.delete(l);
            }
            // If left was already paired (entry key), it will be overwritten by set()

            newPairs.set(left.id, right.id);
            userPairs = newPairs;
            selection = null;
            sound.play("match");
        }
    }

    function checkAnswer() {
        const ex = exercise;
        let correct = false;

        if (ex.type === "multiple-choice" || ex.type === "fill-blank") {
            correct = selectedAnswer === ex.correctAnswer;
        } else if (ex.type === "translation") {
            const userAnswer = translationInput.trim().toLowerCase();
            correct = ex.correctAnswers.some(
                (ans) => ans.toLowerCase() === userAnswer,
            );
        } else if (ex.type === "word-bank") {
            const userWords = wordBankSelection.map((item) => item.word);
            correct =
                JSON.stringify(userWords) === JSON.stringify(ex.correctAnswer);
        } else if (ex.type === "matching") {
            // Validate all pairs
            if (userPairs.size !== leftCards.length) {
                correct = false; // Not all matched
            } else {
                correct = true;
                // Check each pair
                for (const [leftId, rightId] of userPairs) {
                    const left = leftCards.find((c) => c.id === leftId);
                    const right = rightCards.find((c) => c.id === rightId);
                    if (!left || !right || left.pairId !== right.pairId) {
                        correct = false;
                        break;
                    }
                }
            }
        }

        isCorrect = correct;
        showFeedback = true;

        if (correct) {
            sound.play("success");
        } else {
            sound.play("error");
            mistakes++;
        }
    }

    function nextExercise() {
        showFeedback = false;
        selectedAnswer = null;
        wordBankSelection = [];
        usedIndices = new Set();
        translationInput = "";
        selection = null; // Reset matching selection
        userPairs = new Map(); // Reset matching pairs

        if (currentExerciseIndex < data.lesson.exercises.length - 1) {
            currentExerciseIndex++;
        } else {
            completelesson();
        }
    }

    async function completelesson() {
        sound.play("complete");
        const score = Math.round(
            ((data.lesson.exercises.length - mistakes) /
                data.lesson.exercises.length) *
                100,
        );
        earnedXP = data.lesson.xpReward;

        await fetch("/api/complete-lesson", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                language: data.language,
                lessonId: data.lesson.id,
                score,
                xp: earnedXP,
            }),
        });

        lessonComplete = true;
    }

    function addWordFromBank(word, originalIndex) {
        if (!usedIndices.has(originalIndex)) {
            wordBankSelection = [...wordBankSelection, { word, originalIndex }];
            usedIndices = new Set([...usedIndices, originalIndex]);
        }
    }

    function removeWordFromSelection(selectionIndex) {
        const removed = wordBankSelection[selectionIndex];
        wordBankSelection = [
            ...wordBankSelection.slice(0, selectionIndex),
            ...wordBankSelection.slice(selectionIndex + 1),
        ];
        usedIndices = new Set(
            [...usedIndices].filter((i) => i !== removed.originalIndex),
        );
    }

    async function finishAndExit() {
        await invalidateAll();
        goto(`/${data.language}`);
    }
</script>

<svelte:head>
    <title>{data.lesson.name} | LinguaQuest</title>
</svelte:head>

{#if lessonComplete}
    <div class="celebration-overlay">
        <div class="celebration-modal">
            <div class="celebration-icon">🎉</div>
            <h2 class="celebration-title">Lesson Complete!</h2>
            <p class="text-muted">You finished {data.lesson.name}</p>

            <div class="celebration-xp">
                <span>⭐</span>
                <span>+{earnedXP} XP</span>
            </div>

            <div class="celebration-stats">
                <div class="stat-card">
                    <span class="stat-value"
                        >{data.lesson.exercises.length - mistakes}</span
                    >
                    <span class="stat-label">Correct</span>
                </div>
                <div class="stat-card">
                    <span class="stat-value"
                        >{Math.round(
                            ((data.lesson.exercises.length - mistakes) /
                                data.lesson.exercises.length) *
                                100,
                        )}%</span
                    >
                    <span class="stat-label">Score</span>
                </div>
            </div>

            <button class="btn btn-primary btn-lg" onclick={finishAndExit}>
                Continue
            </button>
        </div>
    </div>
{:else}
    <div class="lesson-container">
        <header class="lesson-header">
            <a href="/{data.language}" class="close-btn">✕</a>
            <div class="progress-bar">
                <div class="progress-bar-fill" style="width: {progress}%"></div>
            </div>
            <span class="exercise-count">{currentStep}/{totalSteps}</span>
        </header>

        {#if phase === "teaching"}
            <!-- TEACHING PHASE -->
            <div class="teaching-container">
                <div class="teaching-badge">📚 Learn</div>

                <h1 class="teaching-title">{currentSlide.title}</h1>

                <div class="teaching-content">
                    {@html currentSlide.content
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\n/g, "<br>")}
                </div>

                {#if currentSlide.examples && currentSlide.examples.length > 0}
                    <div class="examples-section">
                        <h3 class="examples-heading">Examples</h3>
                        {#each currentSlide.examples as example}
                            <div class="example-card">
                                <div class="example-tokipona">
                                    {example.tokipona ||
                                        example.una ||
                                        example.kokanu ||
                                        example.globasa ||
                                        example.esperanto ||
                                        example[data.language]}
                                </div>
                                <div class="example-english">
                                    {example.english}
                                </div>
                                {#if example.breakdown}
                                    <div class="example-breakdown">
                                        {example.breakdown}
                                    </div>
                                {/if}
                            </div>
                        {/each}
                    </div>
                {/if}

                {#if currentSlide.tip}
                    <div class="teaching-tip">
                        <span class="tip-icon">💡</span>
                        <span>{currentSlide.tip}</span>
                    </div>
                {/if}

                {#if currentSlide.vocabulary && currentSlide.vocabulary.length > 0}
                    <div class="vocab-section">
                        <h3 class="vocab-heading">New Words</h3>
                        <div class="vocab-grid">
                            {#each currentSlide.vocabulary as word}
                                <div class="vocab-card">
                                    <span class="vocab-word">{word.word}</span>
                                    <span class="vocab-translation"
                                        >{word.translation}</span
                                    >
                                </div>
                            {/each}
                        </div>
                    </div>
                {/if}
            </div>

            <footer class="lesson-footer teaching-footer">
                {#if currentTeachingSlide > 0}
                    <button
                        class="btn btn-secondary"
                        onclick={prevTeachingSlide}
                    >
                        ← Back
                    </button>
                {:else}
                    <div></div>
                {/if}
                <button
                    class="btn btn-primary btn-lg"
                    onclick={nextTeachingSlide}
                >
                    {currentTeachingSlide < teaching.length - 1
                        ? "Continue"
                        : "Start Practice →"}
                </button>
            </footer>
        {:else}
            <!-- EXERCISE PHASE -->
            <div class="exercise-container">
                <div class="exercise-badge">✏️ Practice</div>

                {#if exercise.type === "multiple-choice"}
                    <h2 class="exercise-prompt">{exercise.prompt}</h2>
                    <div class="options-list">
                        {#each exercise.options as option}
                            <button
                                class="option-btn"
                                class:selected={selectedAnswer === option}
                                class:correct={showFeedback &&
                                    option === exercise.correctAnswer}
                                class:incorrect={showFeedback &&
                                    selectedAnswer === option &&
                                    option !== exercise.correctAnswer}
                                onclick={() =>
                                    !showFeedback && (selectedAnswer = option)}
                                disabled={showFeedback}
                            >
                                {option}
                            </button>
                        {/each}
                    </div>
                {:else if exercise.type === "translation"}
                    <h2 class="exercise-prompt">{exercise.prompt}</h2>
                    <input
                        type="text"
                        class="translation-input"
                        class:correct={showFeedback && isCorrect}
                        class:incorrect={showFeedback && !isCorrect}
                        bind:value={translationInput}
                        placeholder="Type your translation..."
                        disabled={showFeedback}
                        onkeydown={(e) =>
                            e.key === "Enter" &&
                            !showFeedback &&
                            translationInput &&
                            checkAnswer()}
                    />
                    {#if exercise.hint}
                        <p class="exercise-hint">💡 {exercise.hint}</p>
                    {/if}
                {:else if exercise.type === "fill-blank"}
                    <h2 class="exercise-prompt">{exercise.prompt}</h2>
                    <div class="options-list options-grid">
                        {#each exercise.options as option}
                            <button
                                class="option-btn"
                                class:selected={selectedAnswer === option}
                                class:correct={showFeedback &&
                                    option === exercise.correctAnswer}
                                class:incorrect={showFeedback &&
                                    selectedAnswer === option &&
                                    option !== exercise.correctAnswer}
                                onclick={() =>
                                    !showFeedback && (selectedAnswer = option)}
                                disabled={showFeedback}
                            >
                                {option}
                            </button>
                        {/each}
                    </div>
                {:else if exercise.type === "word-bank"}
                    <h2 class="exercise-prompt">{exercise.prompt}</h2>

                    <div class="word-bank selected-words">
                        {#if wordBankSelection.length === 0}
                            <span class="placeholder-text"
                                >Tap words below to build your answer</span
                            >
                        {:else}
                            {#each wordBankSelection as item, index}
                                <button
                                    class="word-chip"
                                    onclick={() =>
                                        !showFeedback &&
                                        removeWordFromSelection(index)}
                                    disabled={showFeedback}
                                >
                                    {item.word}
                                </button>
                            {/each}
                        {/if}
                    </div>

                    <div class="word-bank available-words">
                        {#each currentWords as word, index}
                            <button
                                class="word-chip"
                                class:used={usedIndices.has(index)}
                                onclick={() =>
                                    !showFeedback &&
                                    addWordFromBank(word, index)}
                                disabled={showFeedback ||
                                    usedIndices.has(index)}
                            >
                                {word}
                            </button>
                        {/each}
                    </div>
                {:else if exercise.type === "matching"}
                    <h2 class="exercise-prompt">{exercise.prompt}</h2>
                    <div class="matching-columns">
                        <div class="match-col">
                            {#each leftCards as card}
                                <button
                                    class="match-card"
                                    class:selected={selection?.id === card.id ||
                                        userPairs.has(card.id)}
                                    class:connected={userPairs.has(card.id)}
                                    class:correct={showFeedback &&
                                        userPairs.has(card.id) &&
                                        rightCards.find(
                                            (r) =>
                                                r.id === userPairs.get(card.id),
                                        )?.pairId === card.pairId}
                                    class:incorrect={showFeedback &&
                                        userPairs.has(card.id) &&
                                        rightCards.find(
                                            (r) =>
                                                r.id === userPairs.get(card.id),
                                        )?.pairId !== card.pairId}
                                    onclick={() => handleCardClick(card)}
                                    disabled={showFeedback}
                                >
                                    {card.text}
                                </button>
                            {/each}
                        </div>
                        <div class="match-col">
                            {#each rightCards as card}
                                <button
                                    class="match-card"
                                    class:selected={selection?.id === card.id ||
                                        Array.from(userPairs.values()).includes(
                                            card.id,
                                        )}
                                    class:connected={Array.from(
                                        userPairs.values(),
                                    ).includes(card.id)}
                                    class:correct={showFeedback &&
                                        (() => {
                                            // Find left card paired with this right card
                                            const leftId = Array.from(
                                                userPairs.entries(),
                                            ).find(
                                                ([k, v]) => v === card.id,
                                            )?.[0];
                                            const left = leftCards.find(
                                                (c) => c.id === leftId,
                                            );
                                            return (
                                                left &&
                                                left.pairId === card.pairId
                                            );
                                        })()}
                                    class:incorrect={showFeedback &&
                                        (() => {
                                            const leftId = Array.from(
                                                userPairs.entries(),
                                            ).find(
                                                ([k, v]) => v === card.id,
                                            )?.[0];
                                            const left = leftCards.find(
                                                (c) => c.id === leftId,
                                            );
                                            return (
                                                left &&
                                                left.pairId !== card.pairId
                                            );
                                        })()}
                                    onclick={() => handleCardClick(card)}
                                    disabled={showFeedback}
                                >
                                    {card.text}
                                </button>
                            {/each}
                        </div>
                    </div>
                {/if}

                {#if showFeedback}
                    <div
                        class="feedback"
                        class:feedback-correct={isCorrect}
                        class:feedback-incorrect={!isCorrect}
                    >
                        {#if isCorrect}
                            <span>✓</span>
                            <span>Correct!</span>
                        {:else}
                            <span>✗</span>
                            <span>
                                Not quite.
                                {#if exercise.type === "multiple-choice" || exercise.type === "fill-blank"}
                                    The answer was: {exercise.correctAnswer}
                                {:else if exercise.type === "translation"}
                                    Correct answer: {exercise.correctAnswers[0]}
                                {:else if exercise.type === "word-bank"}
                                    Correct answer: {exercise.correctAnswer.join(
                                        " ",
                                    )}
                                {/if}
                            </span>
                        {/if}
                    </div>
                {/if}
            </div>

            <footer class="lesson-footer">
                {#if showFeedback}
                    <button
                        class="btn btn-primary btn-lg"
                        onclick={nextExercise}
                    >
                        {currentExerciseIndex < data.lesson.exercises.length - 1
                            ? "Continue"
                            : "Finish"}
                    </button>
                {:else}
                    <button
                        class="btn btn-success btn-lg"
                        onclick={checkAnswer}
                        disabled={!selectedAnswer &&
                            wordBankSelection.length === 0 &&
                            !translationInput &&
                            !(
                                exercise.type === "matching" &&
                                userPairs.size === leftCards.length
                            )}
                    >
                        Check
                    </button>
                {/if}
            </footer>
        {/if}
    </div>
{/if}

<style>
    .lesson-container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .lesson-header {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        padding: var(--space-4);
        background: var(--color-bg-secondary);
    }

    .close-btn {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-text-secondary);
        text-decoration: none;
        font-size: var(--font-size-lg);
        border-radius: var(--radius-full);
        transition: all var(--transition-fast);
    }

    .close-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        color: var(--color-text);
    }

    .lesson-header .progress-bar {
        flex: 1;
    }

    .exercise-count {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
        min-width: 40px;
        text-align: right;
    }

    /* Teaching Styles */
    .teaching-container {
        flex: 1;
        padding: var(--space-6) var(--space-4);
        padding-bottom: 120px;
        max-width: 700px;
        margin: 0 auto;
        width: 100%;
    }

    .teaching-badge,
    .exercise-badge {
        display: inline-block;
        padding: var(--space-1) var(--space-3);
        background: var(--color-primary);
        color: white;
        border-radius: var(--radius-full);
        font-size: var(--font-size-sm);
        font-weight: 600;
        margin-bottom: var(--space-4);
    }

    .exercise-badge {
        background: var(--color-success);
    }

    .teaching-title {
        font-size: var(--font-size-2xl);
        font-weight: 700;
        margin-bottom: var(--space-4);
        color: var(--color-text);
    }

    .teaching-content {
        font-size: var(--font-size-lg);
        line-height: 1.7;
        color: var(--color-text-secondary);
        margin-bottom: var(--space-6);
    }

    .examples-section {
        margin-bottom: var(--space-6);
    }

    .examples-heading,
    .vocab-heading {
        font-size: var(--font-size-sm);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--color-text-muted);
        margin-bottom: var(--space-3);
    }

    .example-card {
        background: var(--color-bg-tertiary);
        border-radius: var(--radius-lg);
        padding: var(--space-4);
        margin-bottom: var(--space-3);
        border-left: 4px solid var(--color-primary);
    }

    .example-tokipona {
        font-size: var(--font-size-xl);
        font-weight: 600;
        color: var(--color-primary-light);
        margin-bottom: var(--space-1);
    }

    .example-english {
        color: var(--color-text);
        margin-bottom: var(--space-2);
    }

    .example-breakdown {
        font-size: var(--font-size-sm);
        color: var(--color-text-muted);
        font-style: italic;
    }

    .teaching-tip {
        display: flex;
        align-items: flex-start;
        gap: var(--space-3);
        background: rgba(var(--color-warning-rgb), 0.1);
        border: 1px solid rgba(var(--color-warning-rgb), 0.3);
        border-radius: var(--radius-lg);
        padding: var(--space-4);
        margin-bottom: var(--space-6);
    }

    .tip-icon {
        font-size: var(--font-size-xl);
    }

    .vocab-section {
        margin-bottom: var(--space-6);
    }

    .vocab-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: var(--space-3);
    }

    .vocab-card {
        background: var(--color-bg-tertiary);
        border-radius: var(--radius-md);
        padding: var(--space-3);
        text-align: center;
    }

    .vocab-word {
        display: block;
        font-size: var(--font-size-lg);
        font-weight: 600;
        color: var(--color-primary-light);
        margin-bottom: var(--space-1);
    }

    .vocab-translation {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
    }

    .teaching-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* Exercise Styles */
    .exercise-container {
        flex: 1;
        padding: var(--space-8) var(--space-4);
        padding-bottom: 120px;
        max-width: 600px;
        margin: 0 auto;
        width: 100%;
    }

    .options-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
    }

    .options-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .selected-words {
        min-height: 60px;
        margin-bottom: var(--space-4);
    }

    .available-words {
        background: transparent;
        border: none;
        justify-content: center;
    }

    .placeholder-text {
        color: var(--color-text-muted);
        font-size: var(--font-size-sm);
    }

    .lesson-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: var(--space-4);
        background: var(--color-bg-secondary);
        border-top: 1px solid var(--color-border);
        display: flex;
        justify-content: center;
    }

    .celebration-stats {
        display: flex;
        gap: var(--space-4);
        margin-bottom: var(--space-6);
    }

    .celebration-stats .stat-card {
        flex: 1;
    }

    @media (max-width: 768px) {
        .options-grid {
            grid-template-columns: 1fr;
        }
    }

    .matching-columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-6);
        max-width: 800px;
        margin: 0 auto;
    }

    .match-col {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
    }

    .match-card {
        background: var(--color-bg-secondary);
        border: 2px solid var(--color-border);
        border-radius: var(--radius-xl);
        padding: var(--space-4);
        font-size: var(--font-size-lg);
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        min-height: 80px; /* Slightly shorter for lists */
        color: var(--color-text);
        box-shadow: 0 4px 0 var(--color-border);
        position: relative;
        top: 0;
    }

    .match-card:hover:not(:disabled) {
        transform: translateY(-2px);
        background: var(--color-bg-tertiary);
        top: -2px;
        box-shadow: 0 6px 0 var(--color-border);
    }

    .match-card:active:not(:disabled) {
        transform: translateY(2px);
        box-shadow: 0 2px 0 var(--color-border);
        top: 2px;
    }

    .match-card.selected {
        background: var(--color-primary-light-alpha);
        border-color: var(--color-primary);
        color: var(--color-primary);
        box-shadow: 0 4px 0 var(--color-primary);
    }

    .match-card.incorrect {
        background: var(--color-error-light-alpha);
        border-color: var(--color-error);
        color: var(--color-error);
        box-shadow: 0 4px 0 var(--color-error);
        animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    }

    .match-card.connected {
        background: var(--color-bg-tertiary);
        border-color: var(--color-primary);
    }

    .match-card.correct {
        background: var(--color-success-light-alpha);
        border-color: var(--color-success);
        color: var(--color-success);
    }

    .match-card.incorrect {
        background: var(--color-error-light-alpha);
        border-color: var(--color-error);
        color: var(--color-error);
    }

    .match-card.matched {
        background: var(--color-success-light-alpha);
        border-color: var(--color-success);
        color: var(--color-success);
        opacity: 0.6;
        cursor: default;
        box-shadow: none;
        top: 4px;
        transform: none;
    }

    @keyframes shake {
        10%,
        90% {
            transform: translate3d(-1px, 0, 0);
        }
        20%,
        80% {
            transform: translate3d(2px, 0, 0);
        }
        30%,
        50%,
        70% {
            transform: translate3d(-4px, 0, 0);
        }
        40%,
        60% {
            transform: translate3d(4px, 0, 0);
        }
    }
</style>
