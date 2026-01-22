<script>
    let { data } = $props();

    const langInfo = {
        esperanto: { name: "Esperanto", icon: "🌍" },
        tokipona: { name: "Toki Pona", icon: "🗿" },
        una: { name: "Una", icon: "🌐" },
        kokanu: { name: "Kokanu", icon: "🌏" },
        globasa: { name: "Globasa", icon: "🌐" },
    };

    const info = langInfo[data.language] || langInfo.tokipona;

    // Game state
    let gameState = $state("start"); // 'start', 'playing', 'gameOver'
    let score = $state(0);
    let level = $state(1);
    let useAllWords = $state(false);
    let userInput = $state("");
    let fallingWords = $state([]);
    let gameAreaHeight = $state(500);
    let animationFrame = $state(null);
    let lastTime = $state(0);

    // Get current word pool
    const wordPool = $derived(() => {
        if (useAllWords) {
            return data.allWords;
        }
        return data.learnedWords.length > 0 ? data.learnedWords : data.allWords;
    });

    // Game settings (increase difficulty with level)
    const baseSpeed = 30; // pixels per second
    const speedIncrement = 5;
    const spawnInterval = 3000; // ms between spawns
    let lastSpawnTime = 0;

    function startGame() {
        score = 0;
        level = 1;
        fallingWords = [];
        gameState = "playing";
        lastTime = performance.now();
        lastSpawnTime = 0;
        spawnWord();
        requestAnimationFrame(gameLoop);
    }

    function spawnWord() {
        const pool = wordPool();
        if (pool.length === 0) return;

        const randomWord = pool[Math.floor(Math.random() * pool.length)];
        const newWord = {
            id: Date.now() + Math.random(),
            word: randomWord.word,
            translations: randomWord.translations,
            x: Math.random() * 70 + 15, // 15-85% to avoid edges
            y: 0,
            speed: baseSpeed + (level - 1) * speedIncrement,
        };
        fallingWords = [...fallingWords, newWord];
    }

    function gameLoop(currentTime) {
        if (gameState !== "playing") return;

        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        // Update word positions
        fallingWords = fallingWords.map((word) => ({
            ...word,
            y: word.y + word.speed * deltaTime,
        }));

        // Check for words hitting bottom
        const hitBottom = fallingWords.find(
            (word) => word.y >= gameAreaHeight - 60,
        );
        if (hitBottom) {
            gameState = "gameOver";
            return;
        }

        // Spawn new words
        if (currentTime - lastSpawnTime > spawnInterval - level * 200) {
            spawnWord();
            lastSpawnTime = currentTime;
        }

        // Level up every 5 words
        const newLevel = Math.floor(score / 5) + 1;
        if (newLevel > level) {
            level = newLevel;
        }

        animationFrame = requestAnimationFrame(gameLoop);
    }

    function checkAnswer() {
        const normalizedInput = normalizeAnswer(userInput);
        if (!normalizedInput) return;

        // Find a matching word
        const matchIndex = fallingWords.findIndex((word) =>
            isCorrectAnswer(normalizedInput, word.translations),
        );

        if (matchIndex !== -1) {
            // Remove matched word and increase score
            fallingWords = fallingWords.filter((_, i) => i !== matchIndex);
            score += 1;
            userInput = "";

            // Spawn a new word if we cleared one
            if (fallingWords.length < 2) {
                spawnWord();
            }
        }
    }

    function normalizeAnswer(input) {
        return input
            .toLowerCase()
            .trim()
            .replace(/[.,!?'"]/g, "")
            .replace(/\s+/g, " ");
    }

    function isCorrectAnswer(input, translations) {
        const normalizedTranslations = translations.map((t) =>
            normalizeAnswer(t),
        );

        // Exact match
        if (normalizedTranslations.includes(input)) {
            return true;
        }

        // Partial match - input contains or is contained by a translation
        for (const translation of normalizedTranslations) {
            // Split on commas/spaces for multi-part translations
            const parts = translation.split(/[,/]/).map((p) => p.trim());
            if (parts.includes(input)) {
                return true;
            }
            // Check if input is a reasonable match (contains main keyword)
            if (input.length >= 3 && translation.includes(input)) {
                return true;
            }
            if (translation.length >= 3 && input.includes(translation)) {
                return true;
            }
        }

        return false;
    }

    function handleKeydown(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkAnswer();
        }
    }

    function getWordStyle(word) {
        return `left: ${word.x}%; top: ${word.y}px;`;
    }

    // Cleanup on destroy
    $effect(() => {
        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    });
</script>

<svelte:head>
    <title>Falling Words | {info.name} | LinguaQuest</title>
</svelte:head>

<div class="game-container">
    <header class="game-header">
        <a href="/{data.language}#games" class="back-link">← Back to Games</a>
        <div class="game-info-bar">
            <div class="score-display">
                <span class="score-label">Score</span>
                <span class="score-value">{score}</span>
            </div>
            <div class="level-display">
                <span class="level-label">Level</span>
                <span class="level-value">{level}</span>
            </div>
        </div>
    </header>

    {#if gameState === "start"}
        <div class="start-screen">
            <div class="start-content">
                <h1 class="game-title">⬇️ Falling Words</h1>
                <p class="game-subtitle">
                    Type the translation before words hit the bottom!
                </p>

                <div class="word-pool-toggle">
                    <span class="toggle-label">Word Pool:</span>
                    <div class="toggle-buttons">
                        <button
                            class="toggle-btn"
                            class:active={!useAllWords}
                            onclick={() => (useAllWords = false)}
                            disabled={!data.hasLearnedWords}
                        >
                            Learned ({data.learnedWords.length})
                        </button>
                        <button
                            class="toggle-btn"
                            class:active={useAllWords}
                            onclick={() => (useAllWords = true)}
                        >
                            All Words ({data.allWords.length})
                        </button>
                    </div>
                    {#if !data.hasLearnedWords}
                        <p class="toggle-hint">
                            Complete lessons to unlock learned words!
                        </p>
                    {/if}
                </div>

                <button class="start-btn" onclick={startGame}>
                    Start Game
                </button>

                <div class="instructions">
                    <h3>How to Play</h3>
                    <ul>
                        <li>Words fall from the top</li>
                        <li>Type any valid English translation</li>
                        <li>Press Enter to submit</li>
                        <li>Don't let words hit the bottom!</li>
                    </ul>
                </div>
            </div>
        </div>
    {:else if gameState === "playing"}
        <div class="game-area" bind:clientHeight={gameAreaHeight}>
            {#each fallingWords as word (word.id)}
                <div class="falling-word" style={getWordStyle(word)}>
                    {word.word}
                </div>
            {/each}
            <div class="bottom-line"></div>
        </div>

        <div class="input-area">
            <input
                type="text"
                bind:value={userInput}
                onkeydown={handleKeydown}
                placeholder="Type translation..."
                class="answer-input"
                autofocus
            />
            <button class="submit-btn" onclick={checkAnswer}> ✓ </button>
        </div>
    {:else if gameState === "gameOver"}
        <div class="game-over-screen">
            <div class="game-over-content">
                <h1 class="game-over-title">Game Over!</h1>
                <div class="final-score">
                    <span class="final-score-label">Final Score</span>
                    <span class="final-score-value">{score}</span>
                </div>
                <p class="level-reached">You reached Level {level}</p>

                <div class="game-over-actions">
                    <button class="play-again-btn" onclick={startGame}>
                        Play Again
                    </button>
                    <a href="/{data.language}#games" class="back-to-games">
                        Back to Games
                    </a>
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
    .game-container {
        max-width: 800px;
        margin: 0 auto;
        padding: var(--space-4);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .game-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--space-4);
    }

    .back-link {
        color: var(--color-text-secondary);
        text-decoration: none;
        transition: color var(--transition-fast);
    }

    .back-link:hover {
        color: var(--color-text);
    }

    .game-info-bar {
        display: flex;
        gap: var(--space-6);
    }

    .score-display,
    .level-display {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .score-label,
    .level-label {
        font-size: var(--font-size-xs);
        color: var(--color-text-secondary);
        text-transform: uppercase;
    }

    .score-value {
        font-size: var(--font-size-2xl);
        font-weight: 800;
        color: var(--color-xp-400);
    }

    .level-value {
        font-size: var(--font-size-2xl);
        font-weight: 800;
        color: var(--color-primary-400);
    }

    /* Start Screen */
    .start-screen {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .start-content {
        text-align: center;
        max-width: 400px;
    }

    .game-title {
        font-size: var(--font-size-4xl);
        font-weight: 800;
        margin-bottom: var(--space-2);
    }

    .game-subtitle {
        color: var(--color-text-secondary);
        font-size: var(--font-size-lg);
        margin-bottom: var(--space-8);
    }

    .word-pool-toggle {
        margin-bottom: var(--space-8);
    }

    .toggle-label {
        display: block;
        margin-bottom: var(--space-2);
        color: var(--color-text-secondary);
    }

    .toggle-buttons {
        display: flex;
        gap: var(--space-2);
        justify-content: center;
    }

    .toggle-btn {
        padding: var(--space-2) var(--space-4);
        background: var(--color-surface);
        border: 2px solid var(--color-border);
        border-radius: var(--radius-lg);
        color: var(--color-text-secondary);
        cursor: pointer;
        font-size: var(--font-size-sm);
        transition: all var(--transition-fast);
    }

    .toggle-btn.active {
        background: var(--color-primary-500);
        border-color: var(--color-primary-500);
        color: white;
    }

    .toggle-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .toggle-hint {
        font-size: var(--font-size-xs);
        color: var(--color-text-secondary);
        margin-top: var(--space-2);
        font-style: italic;
    }

    .start-btn {
        padding: var(--space-4) var(--space-8);
        background: linear-gradient(
            135deg,
            var(--color-success-500),
            var(--color-success-600)
        );
        border: none;
        border-radius: var(--radius-xl);
        color: white;
        font-size: var(--font-size-xl);
        font-weight: 700;
        cursor: pointer;
        transition: all var(--transition-normal);
        box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
    }

    .start-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);
    }

    .instructions {
        margin-top: var(--space-8);
        text-align: left;
        padding: var(--space-4);
        background: var(--color-surface);
        border-radius: var(--radius-lg);
    }

    .instructions h3 {
        font-size: var(--font-size-md);
        margin-bottom: var(--space-2);
    }

    .instructions ul {
        list-style: none;
        padding: 0;
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
    }

    .instructions li {
        margin-bottom: var(--space-1);
    }

    .instructions li::before {
        content: "→ ";
        color: var(--color-primary-400);
    }

    /* Game Area */
    .game-area {
        flex: 1;
        min-height: 400px;
        background: linear-gradient(
            180deg,
            rgba(15, 23, 42, 0.8),
            rgba(30, 41, 59, 0.9)
        );
        border-radius: var(--radius-xl);
        position: relative;
        overflow: hidden;
        border: 2px solid var(--color-border);
    }

    .falling-word {
        position: absolute;
        padding: var(--space-3) var(--space-4);
        background: linear-gradient(
            135deg,
            var(--color-primary-500),
            var(--color-primary-600)
        );
        border-radius: var(--radius-lg);
        font-size: var(--font-size-lg);
        font-weight: 600;
        color: white;
        white-space: nowrap;
        transform: translateX(-50%);
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        animation: pulse 1s ease-in-out infinite;
    }

    @keyframes pulse {
        0%,
        100% {
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }
        50% {
            box-shadow: 0 4px 20px rgba(99, 102, 241, 0.6);
        }
    }

    .bottom-line {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(
            90deg,
            transparent,
            var(--color-error-500),
            transparent
        );
        box-shadow: 0 0 20px var(--color-error-500);
    }

    /* Input Area */
    .input-area {
        display: flex;
        gap: var(--space-2);
        margin-top: var(--space-4);
    }

    .answer-input {
        flex: 1;
        padding: var(--space-4);
        font-size: var(--font-size-xl);
        background: var(--color-surface);
        border: 2px solid var(--color-border);
        border-radius: var(--radius-xl);
        color: var(--color-text);
        transition: border-color var(--transition-fast);
    }

    .answer-input:focus {
        outline: none;
        border-color: var(--color-primary-500);
    }

    .answer-input::placeholder {
        color: var(--color-text-secondary);
    }

    .submit-btn {
        padding: var(--space-4) var(--space-6);
        background: var(--color-success-500);
        border: none;
        border-radius: var(--radius-xl);
        color: white;
        font-size: var(--font-size-xl);
        font-weight: 700;
        cursor: pointer;
        transition: all var(--transition-fast);
    }

    .submit-btn:hover {
        background: var(--color-success-600);
    }

    /* Game Over Screen */
    .game-over-screen {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .game-over-content {
        text-align: center;
    }

    .game-over-title {
        font-size: var(--font-size-4xl);
        font-weight: 800;
        color: var(--color-error-400);
        margin-bottom: var(--space-6);
    }

    .final-score {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: var(--space-4);
    }

    .final-score-label {
        font-size: var(--font-size-lg);
        color: var(--color-text-secondary);
    }

    .final-score-value {
        font-size: 4rem;
        font-weight: 800;
        color: var(--color-xp-400);
    }

    .level-reached {
        color: var(--color-text-secondary);
        margin-bottom: var(--space-8);
    }

    .game-over-actions {
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
        align-items: center;
    }

    .play-again-btn {
        padding: var(--space-4) var(--space-8);
        background: linear-gradient(
            135deg,
            var(--color-success-500),
            var(--color-success-600)
        );
        border: none;
        border-radius: var(--radius-xl);
        color: white;
        font-size: var(--font-size-lg);
        font-weight: 700;
        cursor: pointer;
        transition: all var(--transition-normal);
    }

    .play-again-btn:hover {
        transform: translateY(-2px);
    }

    .back-to-games {
        color: var(--color-text-secondary);
        text-decoration: none;
        font-size: var(--font-size-sm);
    }

    .back-to-games:hover {
        color: var(--color-text);
    }
</style>
