<script>
    import { fade, fly, scale } from "svelte/transition";
    import { sound } from "$lib/utils/sound";

    let { data } = $props();

    // Game state
    let currentIndex = $state(0);
    let userInput = $state("");
    let feedback = $state(null); // null, 'correct', 'incorrect'
    let score = $state(0);
    let showHint = $state(false);
    let gameComplete = $state(false);
    let revealedTranslations = $state(new Set());

    const langNames = {
        tokipona: "Toki Pona",
        kokanu: "Kokanu",
        una: "Una",
        esperanto: "Esperanto",
        globasa: "Globasa",
    };

    // Language-specific labels for speakers
    const speakerLabels = {
        tokipona: { other: "jan", you: "sina" },
        kokanu: { other: "person", you: "you" },
        una: { other: "person", you: "you" },
        esperanto: { other: "persono", you: "vi" },
        globasa: { other: "yen", you: "yu" },
    };

    // Language-specific success messages
    const successMessages = {
        tokipona: "pona!",
        kokanu: "bona!",
        esperanto: "bone!",
        globasa: "bon!",
        una: "good!",
    };

    const speakers = $derived(
        () => speakerLabels[data.language] || { other: "person", you: "you" },
    );
    const successMsg = $derived(
        () => successMessages[data.language] || "Great!",
    );

    const langName = $derived(() => langNames[data.language] || data.language);

    const currentDialogue = $derived(() => {
        if (currentIndex >= data.dialogues.length) return null;
        return data.dialogues[currentIndex];
    });

    const progress = $derived(() => {
        return (currentIndex / data.dialogues.length) * 100;
    });

    function normalizeAnswer(input) {
        return input
            .toLowerCase()
            .trim()
            .replace(/[.,!?'"]/g, "")
            .replace(/\s+/g, " ");
    }

    function checkAnswer() {
        const dialogue = currentDialogue();
        if (!dialogue) return;

        const normalizedInput = normalizeAnswer(userInput);

        // Check if answer starts with any accepted answer
        const isCorrect = dialogue.acceptedAnswers.some((answer) => {
            const normalizedAccepted = normalizeAnswer(answer);
            return (
                normalizedInput.includes(normalizedAccepted) ||
                normalizedAccepted.includes(normalizedInput) ||
                normalizedInput === normalizedAccepted
            );
        });

        if (isCorrect) {
            feedback = "correct";
            score++;
            sound.play("success"); // Play success sound
        } else {
            feedback = "incorrect";
            sound.play("error"); // Play error sound
        }
    }

    function nextDialogue() {
        if (currentIndex < data.dialogues.length - 1) {
            currentIndex++;
            userInput = "";
            feedback = null;
            showHint = false;
            revealedTranslations = new Set();
        } else {
            gameComplete = true;
        }
    }

    function restartGame() {
        currentIndex = 0;
        userInput = "";
        feedback = null;
        score = 0;
        showHint = false;
        gameComplete = false;
        revealedTranslations = new Set();
    }

    function toggleTranslation(index) {
        const newSet = new Set(revealedTranslations);
        if (newSet.has(index)) {
            newSet.delete(index);
        } else {
            newSet.add(index);
        }
        revealedTranslations = newSet;
    }

    function handleKeydown(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            if (feedback) {
                nextDialogue();
            } else {
                checkAnswer();
            }
        }
    }
</script>

<svelte:head>
    <title>Dialogue | {langName()} | LinguaQuest</title>
</svelte:head>

<div class="game-container">
    <header class="game-header">
        <a href="/{data.language}#games" class="back-link">← Back to Games</a>
        <div class="progress-bar">
            <div class="progress-fill" style="width: {progress()}%"></div>
        </div>
        <div class="score-display">
            <span class="score-value"
                >{currentIndex}/{data.dialogues.length}</span
            >
        </div>
    </header>

    {#if data.lockedCount > 0 && data.hasUnits}
        <div class="locked-info">
            🔒 {data.lockedCount} more dialogue{data.lockedCount === 1
                ? ""
                : "s"} will unlock as you complete units
        </div>
    {/if}

    {#if data.dialogues.length === 0}
        <div class="no-dialogues">
            <div class="no-dialogues-icon">🔒</div>
            <h2>No Dialogues Available Yet</h2>
            <p>Complete unit lessons to unlock dialogue practice!</p>
            <p class="hint">
                Each completed unit unlocks a new dialogue matching what you've
                learned.
            </p>
            <a href="/{data.language}" class="back-to-lessons"
                >← Back to Lessons</a
            >
        </div>
    {:else if !gameComplete && currentDialogue()}
        <div class="dialogue-area">
            <div class="dialogue-header">
                <h2 class="dialogue-title">{currentDialogue().title}</h2>
                <span
                    class="difficulty difficulty-{currentDialogue().difficulty}"
                >
                    {currentDialogue().difficulty}
                </span>
            </div>

            <p class="context">{currentDialogue().context}</p>

            <div class="conversation">
                {#each currentDialogue().conversation as line, i}
                    {#if line.speaker === "jan"}
                        <div class="message message-other">
                            <div class="speaker">👤 {speakers().other}</div>
                            <button
                                class="bubble bubble-clickable"
                                onclick={() => toggleTranslation(i)}
                            >
                                <div class="target-text">{line.text}</div>
                                {#if revealedTranslations.has(i)}
                                    <div class="translation">
                                        {line.translation}
                                    </div>
                                {:else}
                                    <div class="translation-hint">
                                        tap to reveal
                                    </div>
                                {/if}
                            </button>
                        </div>
                    {:else if line.text}
                        <div class="message message-you">
                            <div class="speaker">🙋 {speakers().you}</div>
                            <button
                                class="bubble bubble-clickable"
                                onclick={() => toggleTranslation(i)}
                            >
                                <div class="target-text">{line.text}</div>
                                {#if revealedTranslations.has(i)}
                                    <div class="translation">
                                        {line.translation}
                                    </div>
                                {:else}
                                    <div class="translation-hint">
                                        tap to reveal
                                    </div>
                                {/if}
                            </button>
                        </div>
                    {:else}
                        <!-- This is the input prompt -->
                        <div class="message message-you message-input">
                            <div class="speaker">🙋 {speakers().you}</div>
                            <div class="input-bubble">
                                <div class="prompt">{line.translation}</div>

                                {#if feedback === "correct"}
                                    <div class="feedback correct">
                                        <span class="icon">✓</span>
                                        <span class="text"
                                            >{successMsg()} Great answer!</span
                                        >
                                    </div>
                                {:else if feedback === "incorrect"}
                                    <div class="feedback incorrect">
                                        <span class="icon">✗</span>
                                        <div class="text">
                                            <p>
                                                Not quite. A good answer would
                                                be:
                                            </p>
                                            <p class="correct-answer">
                                                {currentDialogue()
                                                    .acceptedAnswers[0]}
                                            </p>
                                        </div>
                                    </div>
                                {:else}
                                    <input
                                        type="text"
                                        bind:value={userInput}
                                        onkeydown={handleKeydown}
                                        placeholder="Type in {langName()}..."
                                        class="answer-input"
                                        autofocus
                                    />
                                {/if}
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>

            <div class="actions">
                {#if !feedback}
                    <button
                        class="hint-btn"
                        onclick={() => (showHint = !showHint)}
                    >
                        {showHint ? "Hide Hint" : "Show Hint"}
                    </button>
                    <button
                        class="check-btn"
                        onclick={checkAnswer}
                        disabled={!userInput.trim()}
                    >
                        Check Answer
                    </button>
                {:else}
                    <button class="next-btn" onclick={nextDialogue}>
                        {currentIndex < data.dialogues.length - 1
                            ? "Next Dialogue →"
                            : "See Results"}
                    </button>
                {/if}
            </div>

            {#if showHint && !feedback}
                <div class="hint-box">
                    💡 {currentDialogue().hint}
                </div>
            {/if}
        </div>
    {:else if gameComplete}
        <div class="results-screen">
            <h1 class="results-title">Dialogue Complete! 🎉</h1>

            <div class="final-score">
                <span class="score-number">{score}</span>
                <span class="score-total">/ {data.dialogues.length}</span>
            </div>

            <p class="score-message">
                {#if score === data.dialogues.length}
                    Perfect! You're a {langName()} master! 🌟
                {:else if score >= data.dialogues.length * 0.7}
                    Great job! Keep practicing! 💪
                {:else}
                    Good effort! Review the lessons and try again! 📚
                {/if}
            </p>

            <div class="results-actions">
                <button class="start-btn" onclick={restartGame}>
                    Play Again
                </button>
                <a href="/{data.language}#games" class="back-to-games">
                    Back to Games
                </a>
            </div>
        </div>
    {/if}
</div>

<style>
    .game-container {
        max-width: 600px;
        margin: 0 auto;
        padding: var(--space-4);
        min-height: 100vh;
    }

    .game-header {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        margin-bottom: var(--space-6);
    }

    .back-link {
        color: var(--color-text-secondary);
        text-decoration: none;
    }

    .progress-bar {
        flex: 1;
        height: 8px;
        background: var(--color-surface);
        border-radius: var(--radius-full);
        overflow: hidden;
    }

    .progress-fill {
        height: 100%;
        background: var(--color-primary-500);
        transition: width var(--transition-normal);
    }

    .score-display {
        font-weight: 600;
        color: var(--color-xp-400);
    }

    /* Dialogue Area */
    .dialogue-area {
        background: var(--color-surface);
        border-radius: var(--radius-xl);
        padding: var(--space-6);
    }

    .dialogue-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--space-2);
    }

    .dialogue-title {
        font-size: var(--font-size-xl);
        font-weight: 700;
    }

    .difficulty {
        font-size: var(--font-size-xs);
        padding: var(--space-1) var(--space-2);
        border-radius: var(--radius-md);
        text-transform: uppercase;
        font-weight: 600;
    }

    .difficulty-easy {
        background: rgba(34, 197, 94, 0.2);
        color: var(--color-success-400);
    }
    .difficulty-medium {
        background: rgba(245, 158, 11, 0.2);
        color: var(--color-xp-400);
    }
    .difficulty-hard {
        background: rgba(239, 68, 68, 0.2);
        color: var(--color-error-400);
    }

    .context {
        color: var(--color-text-secondary);
        font-style: italic;
        margin-bottom: var(--space-6);
    }

    .conversation {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
        margin-bottom: var(--space-6);
    }

    .message {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
    }

    .message-other {
        align-items: flex-start;
    }

    .message-you {
        align-items: flex-end;
    }

    .speaker {
        font-size: var(--font-size-xs);
        color: var(--color-text-secondary);
    }

    .bubble {
        max-width: 80%;
        padding: var(--space-3) var(--space-4);
        border-radius: var(--radius-lg);
        border: none;
        text-align: left;
        font: inherit;
        color: inherit;
    }

    .bubble-clickable {
        cursor: pointer;
        transition:
            transform var(--transition-fast),
            box-shadow var(--transition-fast);
    }

    .bubble-clickable:hover {
        transform: scale(1.02);
    }

    .bubble-clickable:active {
        transform: scale(0.98);
    }

    .message-other .bubble {
        background: var(--color-border);
        border-bottom-left-radius: 4px;
    }

    .message-you .bubble {
        background: var(--color-primary-500);
        border-bottom-right-radius: 4px;
    }

    .target-text {
        font-weight: 600;
        margin-bottom: var(--space-1);
    }

    .translation {
        font-size: var(--font-size-sm);
        opacity: 0.8;
    }

    .translation-hint {
        font-size: var(--font-size-xs);
        opacity: 0.6;
        font-style: italic;
    }

    .input-bubble {
        max-width: 85%;
        padding: var(--space-4);
        background: rgba(99, 102, 241, 0.1);
        border: 2px dashed var(--color-primary-400);
        border-radius: var(--radius-lg);
    }

    .prompt {
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
        margin-bottom: var(--space-3);
    }

    .answer-input {
        width: 100%;
        padding: var(--space-3);
        background: var(--color-background);
        border: 2px solid var(--color-border);
        border-radius: var(--radius-lg);
        color: var(--color-text);
        font-size: var(--font-size-md);
    }

    .answer-input:focus {
        outline: none;
        border-color: var(--color-primary-500);
    }

    .feedback {
        display: flex;
        align-items: flex-start;
        gap: var(--space-2);
        padding: var(--space-3);
        border-radius: var(--radius-lg);
    }

    .feedback.correct {
        background: rgba(34, 197, 94, 0.2);
        color: var(--color-success-400);
    }

    .feedback.incorrect {
        background: rgba(239, 68, 68, 0.2);
        color: var(--color-error-400);
    }

    .feedback .icon {
        font-size: var(--font-size-xl);
    }

    .correct-answer {
        font-weight: 600;
        color: var(--color-text);
        margin-top: var(--space-1);
    }

    .actions {
        display: flex;
        gap: var(--space-3);
        justify-content: center;
    }

    .hint-btn {
        padding: var(--space-2) var(--space-4);
        background: var(--color-border);
        border: none;
        border-radius: var(--radius-lg);
        color: var(--color-text-secondary);
        cursor: pointer;
    }

    .check-btn,
    .next-btn {
        padding: var(--space-3) var(--space-6);
        background: var(--color-success-500);
        border: none;
        border-radius: var(--radius-lg);
        color: white;
        font-weight: 600;
        cursor: pointer;
    }

    .check-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .hint-box {
        margin-top: var(--space-4);
        padding: var(--space-3);
        background: rgba(245, 158, 11, 0.1);
        border-radius: var(--radius-lg);
        color: var(--color-xp-400);
        font-size: var(--font-size-sm);
    }

    /* Results */
    .results-screen {
        text-align: center;
        padding: var(--space-12) var(--space-4);
    }

    .results-title {
        font-size: var(--font-size-3xl);
        font-weight: 800;
        margin-bottom: var(--space-6);
    }

    .final-score {
        margin-bottom: var(--space-4);
    }

    .score-number {
        font-size: 4rem;
        font-weight: 800;
        color: var(--color-success-400);
    }

    .score-total {
        font-size: var(--font-size-2xl);
        color: var(--color-text-secondary);
    }

    .score-message {
        color: var(--color-text-secondary);
        margin-bottom: var(--space-8);
    }

    .results-actions {
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
        align-items: center;
    }

    .start-btn {
        padding: var(--space-4) var(--space-8);
        background: var(--color-success-500);
        border: none;
        border-radius: var(--radius-xl);
        color: white;
        font-size: var(--font-size-lg);
        font-weight: 700;
        cursor: pointer;
    }

    .back-to-games {
        color: var(--color-text-secondary);
        text-decoration: none;
    }

    /* Locked Info */
    .locked-info {
        padding: var(--space-3) var(--space-4);
        background: rgba(245, 158, 11, 0.1);
        border: 1px solid rgba(245, 158, 11, 0.3);
        border-radius: var(--radius-lg);
        color: var(--color-xp-400);
        font-size: var(--font-size-sm);
        text-align: center;
        margin-bottom: var(--space-4);
    }

    /* No Dialogues State */
    .no-dialogues {
        text-align: center;
        padding: var(--space-12) var(--space-4);
        background: var(--color-surface);
        border-radius: var(--radius-xl);
    }

    .no-dialogues-icon {
        font-size: 4rem;
        margin-bottom: var(--space-4);
    }

    .no-dialogues h2 {
        font-size: var(--font-size-2xl);
        font-weight: 700;
        margin-bottom: var(--space-2);
    }

    .no-dialogues p {
        color: var(--color-text-secondary);
        margin-bottom: var(--space-2);
    }

    .no-dialogues .hint {
        font-size: var(--font-size-sm);
        font-style: italic;
        margin-bottom: var(--space-6);
    }

    .back-to-lessons {
        display: inline-block;
        padding: var(--space-3) var(--space-6);
        background: var(--color-primary-500);
        color: white;
        text-decoration: none;
        border-radius: var(--radius-lg);
        font-weight: 600;
    }
</style>
