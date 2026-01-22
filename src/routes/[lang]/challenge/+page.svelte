<script>
    import { goto } from "$app/navigation";

    let { data } = $props();

    let currentExerciseIndex = $state(0);
    let selectedAnswer = $state(null);
    let wordBankSelection = $state([]);
    let usedIndices = $state(new Set());
    let translationInput = $state("");
    let showFeedback = $state(false);
    let isCorrect = $state(false);
    let correctCount = $state(0);
    let challengeComplete = $state(false);

    // Matching exercise state (same as lesson page)
    let leftCards = $state([]);
    let rightCards = $state([]);
    let selection = $state(null);
    let userPairs = $state(new Map());

    const exercise = $derived(data.exercises[currentExerciseIndex]);
    const progress = $derived(
        ((currentExerciseIndex + 1) / data.exercises.length) * 100,
    );

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
            // Validate all pairs (same as lesson page)
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
            correctCount++;
        }
    }

    function nextExercise() {
        showFeedback = false;
        selectedAnswer = null;
        wordBankSelection = [];
        usedIndices = new Set();
        translationInput = "";
        // Reset matching state
        leftCards = [];
        rightCards = [];
        selection = null;
        userPairs = new Map();

        if (currentExerciseIndex < data.exercises.length - 1) {
            currentExerciseIndex++;
        } else {
            challengeComplete = true;
        }
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

    function finishChallenge() {
        goto(`/${data.language}`);
    }

    function restartChallenge() {
        window.location.reload();
    }

    // Initialize matching pairs when exercise changes (same as lesson page)
    $effect(() => {
        if (
            exercise?.type === "matching" &&
            exercise.pairs &&
            leftCards.length === 0
        ) {
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
    });

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
            return;
        }

        if (selection.id === card.id) {
            selection = null;
            return;
        }

        if (selection.col === card.col) {
            selection = card;
        } else {
            // Form pair
            const left = selection.col === "left" ? selection : card;
            const right = selection.col === "right" ? selection : card;

            const newPairs = new Map(userPairs);

            // Remove any existing pairings for to-be-paired cards
            for (const [l, r] of newPairs) {
                if (r === right.id) newPairs.delete(l);
            }

            newPairs.set(left.id, right.id);
            userPairs = newPairs;
            selection = null;
        }
    }
</script>

I<svelte:head>
    <title>Challenge Mode | LinguaQuest</title>
</svelte:head>

{#if data.exercises.length === 0}
    <div class="challenge-container">
        <div class="empty-state">
            <div class="empty-icon">📚</div>
            <h2>No exercises available</h2>
            <p>Complete at least one lesson to unlock Challenge Mode!</p>
            <a href="/{data.language}" class="btn btn-primary"
                >Back to Lessons</a
            >
        </div>
    </div>
{:else if challengeComplete}
    <div class="celebration-overlay">
        <div class="celebration-modal">
            <div class="celebration-icon">⚔️</div>
            <h2 class="celebration-title">Challenge Complete!</h2>
            <p class="text-muted">You conquered the challenge!</p>

            <div class="celebration-stats">
                <div class="stat-card">
                    <span class="stat-value">{correctCount}</span>
                    <span class="stat-label">Correct</span>
                </div>
                <div class="stat-card">
                    <span class="stat-value">
                        {Math.round(
                            (correctCount / data.exercises.length) * 100,
                        )}%
                    </span>
                    <span class="stat-label">Accuracy</span>
                </div>
            </div>

            <div class="celebration-actions">
                <button class="btn btn-secondary" onclick={restartChallenge}>
                    Try Again
                </button>
                <button
                    class="btn btn-primary btn-lg"
                    onclick={finishChallenge}
                >
                    Back to Lessons
                </button>
            </div>
        </div>
    </div>
{:else}
    <div class="lesson-container">
        <header class="lesson-header">
            <a href="/{data.language}" class="close-btn">✕</a>
            <div class="progress-bar">
                <div
                    class="progress-bar-fill challenge-fill"
                    style="width: {progress}%"
                ></div>
            </div>
            <span class="exercise-count"
                >{currentExerciseIndex + 1}/{data.exercises.length}</span
            >
        </header>

        <div class="exercise-container">
            <div class="exercise-badge challenge-badge">⚔️ Challenge</div>
            <div class="lesson-tag">From: {exercise.lessonName}</div>

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
                                        (r) => r.id === userPairs.get(card.id),
                                    )?.pairId === card.pairId}
                                class:incorrect={showFeedback &&
                                    userPairs.has(card.id) &&
                                    rightCards.find(
                                        (r) => r.id === userPairs.get(card.id),
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
                                        const leftId = Array.from(
                                            userPairs.entries(),
                                        ).find(([k, v]) => v === card.id)?.[0];
                                        const left = leftCards.find(
                                            (c) => c.id === leftId,
                                        );
                                        return (
                                            left && left.pairId === card.pairId
                                        );
                                    })()}
                                class:incorrect={showFeedback &&
                                    (() => {
                                        const leftId = Array.from(
                                            userPairs.entries(),
                                        ).find(([k, v]) => v === card.id)?.[0];
                                        const left = leftCards.find(
                                            (c) => c.id === leftId,
                                        );
                                        return (
                                            left && left.pairId !== card.pairId
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
                    {#each exercise.words as word, index}
                        <button
                            class="word-chip"
                            class:used={usedIndices.has(index)}
                            onclick={() =>
                                !showFeedback && addWordFromBank(word, index)}
                            disabled={showFeedback || usedIndices.has(index)}
                        >
                            {word}
                        </button>
                    {/each}
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
                            {:else if exercise.type === "matching"}
                                Match the words with their translations.
                            {/if}
                        </span>
                    {/if}
                </div>
            {/if}
        </div>

        <footer class="lesson-footer">
            {#if showFeedback}
                <button class="btn btn-primary btn-lg" onclick={nextExercise}>
                    {currentExerciseIndex < data.exercises.length - 1
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
    </div>
{/if}

<style>
    .challenge-container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .empty-state {
        text-align: center;
        padding: var(--space-8);
    }

    .empty-icon {
        font-size: 4rem;
        margin-bottom: var(--space-4);
    }

    .empty-state h2 {
        font-size: var(--font-size-2xl);
        margin-bottom: var(--space-2);
    }

    .empty-state p {
        color: var(--color-text-secondary);
        margin-bottom: var(--space-6);
    }

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

    .challenge-fill {
        background: linear-gradient(
            90deg,
            var(--color-primary),
            #ec4899
        ) !important;
    }

    .exercise-count {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
        min-width: 40px;
        text-align: right;
    }

    .exercise-container {
        flex: 1;
        padding: var(--space-8) var(--space-4);
        padding-bottom: 120px;
        max-width: 600px;
        margin: 0 auto;
        width: 100%;
    }

    .challenge-badge {
        background: linear-gradient(
            135deg,
            var(--color-primary),
            #ec4899
        ) !important;
    }

    .lesson-tag {
        font-size: var(--font-size-xs);
        color: var(--color-text-muted);
        margin-bottom: var(--space-4);
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

    .celebration-actions {
        display: flex;
        gap: var(--space-3);
        justify-content: center;
    }

    @media (max-width: 768px) {
        .options-grid {
            grid-template-columns: 1fr;
        }
    }

    /* Matching exercise styles (same as lesson page) */
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
        min-height: 80px;
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
        box-shadow: 0 4px 0 var(--color-error);
        animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
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

    @media (max-width: 480px) {
        .matching-columns {
            grid-template-columns: 1fr;
        }
    }
</style>
