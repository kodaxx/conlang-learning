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
    let currentIndex = $state(0);
    let isFlipped = $state(false);
    let isTransitioning = $state(false);
    let showFront = $state(true); // true = show word, false = show translation
    let reviewStartTime = $state(Date.now());
    let sessionComplete = $state(false);
    let sessionStats = $state({ again: 0, hard: 0, good: 0, easy: 0 });

    // Rating enum matching server
    const Rating = { AGAIN: 1, HARD: 2, GOOD: 3, EASY: 4 };

    // Interval previews (calculated client-side for current card)
    let intervalPreviews = $state({
        again: "<1m",
        hard: "6m",
        good: "10m",
        easy: "4d",
    });

    const currentCard = $derived(() => {
        if (data.deck.length === 0 || currentIndex >= data.deck.length)
            return null;
        return data.deck[currentIndex];
    });

    const progress = $derived(() => {
        if (data.deck.length === 0) return 0;
        return (currentIndex / data.deck.length) * 100;
    });

    // Display text
    const displayWord = $derived(() => {
        if (!currentCard()) return "";
        if (isTransitioning) return "...";
        return showFront ? currentCard().word : currentCard().translation;
    });

    const displayTranslation = $derived(() => {
        if (!currentCard()) return "";
        if (isTransitioning) return "...";
        return showFront ? currentCard().translation : currentCard().word;
    });

    // Fetch interval previews for current card
    async function fetchIntervalPreviews() {
        const card = currentCard();
        if (!card) return;

        try {
            const res = await fetch(`/api/srs/review?cardId=${card.id}`);
            if (res.ok) {
                intervalPreviews = await res.json();
            }
        } catch (e) {
            console.error("Failed to fetch previews:", e);
        }
    }

    // Update previews when card changes
    $effect(() => {
        if (currentCard()) {
            fetchIntervalPreviews();
            reviewStartTime = Date.now();
        }
    });

    function flipCard() {
        if (!isTransitioning) {
            isFlipped = !isFlipped;
        }
    }

    async function rateCard(rating) {
        if (isTransitioning) return;
        const card = currentCard();
        if (!card) return;

        const reviewTime = Date.now() - reviewStartTime;

        // Update session stats
        switch (rating) {
            case Rating.AGAIN:
                sessionStats.again++;
                break;
            case Rating.HARD:
                sessionStats.hard++;
                break;
            case Rating.GOOD:
                sessionStats.good++;
                break;
            case Rating.EASY:
                sessionStats.easy++;
                break;
        }

        // Send review to server
        try {
            await fetch("/api/srs/review", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    cardId: card.id,
                    rating,
                    reviewTimeMs: reviewTime,
                }),
            });
        } catch (e) {
            console.error("Failed to record review:", e);
        }

        nextCard();
    }

    function nextCard() {
        if (currentIndex < data.deck.length - 1) {
            isTransitioning = true;
            isFlipped = false;

            setTimeout(() => {
                currentIndex++;
                isTransitioning = false;
            }, 400);
        } else {
            sessionComplete = true;
        }
    }

    function restartSession() {
        window.location.reload();
    }

    function handleKeydown(event) {
        if (sessionComplete || isTransitioning) return;

        if (event.key === " " || event.key === "Enter") {
            event.preventDefault();
            flipCard();
        } else if (isFlipped) {
            if (event.key === "1") rateCard(Rating.AGAIN);
            else if (event.key === "2") rateCard(Rating.HARD);
            else if (event.key === "3") rateCard(Rating.GOOD);
            else if (event.key === "4") rateCard(Rating.EASY);
        }
    }
</script>

<svelte:head>
    <title>Flashcards | {info.name} | LinguaQuest</title>
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<div class="game-container">
    <header class="game-header">
        <a href="/{data.language}#games" class="back-link">← Back to Games</a>
        {#if !sessionComplete && data.deck.length > 0}
            <div class="deck-stats">
                <span class="stat-badge new">{data.stats.new} new</span>
                <span class="stat-badge learning"
                    >{data.stats.learning} learning</span
                >
                <span class="stat-badge due">{data.stats.due} due</span>
            </div>
        {/if}
    </header>

    {#if data.stats.total === 0}
        <!-- No completed lessons yet -->
        <div class="empty-state">
            <div class="empty-content">
                <h1 class="empty-title">📚 Complete some lessons first!</h1>
                <p class="empty-subtitle">
                    Flashcards are unlocked as you complete lessons. The
                    vocabulary you learn will be added to your SRS deck.
                </p>
                <div class="deck-summary">
                    <p>
                        Complete lessons to start building your vocabulary deck!
                    </p>
                </div>
                <a href="/{data.language}" class="back-btn"> Go to Lessons </a>
            </div>
        </div>
    {:else if data.deck.length === 0}
        <!-- All cards reviewed for now -->
        <div class="empty-state">
            <div class="empty-content">
                <h1 class="empty-title">🎉 All caught up!</h1>
                <p class="empty-subtitle">
                    No cards due for review right now. Check back later!
                </p>
                <div class="deck-summary">
                    <p>
                        Deck: <strong>{data.stats.total}</strong> total cards
                        from <strong>{data.completedLessons}</strong> completed lessons
                    </p>
                </div>
                <a href="/{data.language}#games" class="back-btn">
                    Back to Games
                </a>
            </div>
        </div>
    {:else if !sessionComplete && currentCard()}
        <!-- Flashcard View -->
        <div class="flashcard-area">
            <div class="progress-info">
                <div class="progress-bar">
                    <div
                        class="progress-fill"
                        style="width: {progress()}%"
                    ></div>
                </div>
                <span class="card-count"
                    >{currentIndex + 1} / {data.deck.length}</span
                >
            </div>

            <button
                class="flashcard"
                class:flipped={isFlipped}
                class:transitioning={isTransitioning}
                onclick={flipCard}
            >
                <div class="card-inner">
                    <div class="card-front">
                        <span class="card-text">{displayWord()}</span>
                        {#if currentCard().phonetic && showFront && !isTransitioning}
                            <span class="card-phonetic"
                                >{currentCard().phonetic}</span
                            >
                        {/if}
                        {#if currentCard().literal && !showFront && !isTransitioning}
                            <span class="card-literal"
                                >"{currentCard().literal}"</span
                            >
                        {/if}
                        <span
                            class="card-status-badge"
                            class:new={currentCard().status === "new"}
                            class:learning={currentCard().status === "learning"}
                            class:review={currentCard().status === "review"}
                        >
                            {currentCard().status}
                        </span>
                    </div>
                    <div class="card-back">
                        <span class="card-text">{displayTranslation()}</span>
                        {#if currentCard().literal && showFront && !isTransitioning}
                            <span class="card-literal"
                                >"{currentCard().literal}"</span
                            >
                        {/if}
                    </div>
                </div>
            </button>

            <p class="flip-hint">
                {isFlipped
                    ? "How well did you know it?"
                    : "Tap to reveal answer"}
            </p>

            <!-- Anki-style rating buttons -->
            <div class="rating-buttons" class:visible={isFlipped}>
                <button
                    class="rating-btn again"
                    onclick={() => rateCard(Rating.AGAIN)}
                    disabled={!isFlipped}
                >
                    <span class="rating-interval">{intervalPreviews.again}</span
                    >
                    <span class="rating-label">Again</span>
                    <kbd>1</kbd>
                </button>
                <button
                    class="rating-btn hard"
                    onclick={() => rateCard(Rating.HARD)}
                    disabled={!isFlipped}
                >
                    <span class="rating-interval">{intervalPreviews.hard}</span>
                    <span class="rating-label">Hard</span>
                    <kbd>2</kbd>
                </button>
                <button
                    class="rating-btn good"
                    onclick={() => rateCard(Rating.GOOD)}
                    disabled={!isFlipped}
                >
                    <span class="rating-interval">{intervalPreviews.good}</span>
                    <span class="rating-label">Good</span>
                    <kbd>3</kbd>
                </button>
                <button
                    class="rating-btn easy"
                    onclick={() => rateCard(Rating.EASY)}
                    disabled={!isFlipped}
                >
                    <span class="rating-interval">{intervalPreviews.easy}</span>
                    <span class="rating-label">Easy</span>
                    <kbd>4</kbd>
                </button>
            </div>
        </div>
    {:else}
        <!-- Session Complete -->
        <div class="results-screen">
            <div class="results-content">
                <h1 class="results-title">Session Complete! 🎉</h1>

                <div class="results-stats">
                    <div class="result-stat again">
                        <span class="result-number">{sessionStats.again}</span>
                        <span class="result-label">Again</span>
                    </div>
                    <div class="result-stat hard">
                        <span class="result-number">{sessionStats.hard}</span>
                        <span class="result-label">Hard</span>
                    </div>
                    <div class="result-stat good">
                        <span class="result-number">{sessionStats.good}</span>
                        <span class="result-label">Good</span>
                    </div>
                    <div class="result-stat easy">
                        <span class="result-number">{sessionStats.easy}</span>
                        <span class="result-label">Easy</span>
                    </div>
                </div>

                <div class="session-summary">
                    <p>Reviewed <strong>{data.deck.length}</strong> cards</p>
                </div>

                <div class="results-actions">
                    <button class="start-btn" onclick={restartSession}>
                        Study More
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
        max-width: 600px;
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
        flex-wrap: wrap;
        gap: var(--space-2);
    }

    .back-link {
        color: var(--color-text-secondary);
        text-decoration: none;
    }

    .back-link:hover {
        color: var(--color-text);
    }

    .deck-stats {
        display: flex;
        gap: var(--space-2);
    }

    .stat-badge {
        padding: var(--space-1) var(--space-2);
        border-radius: var(--radius-md);
        font-size: var(--font-size-xs);
        font-weight: 600;
    }

    .stat-badge.new {
        background: rgba(99, 102, 241, 0.2);
        color: var(--color-primary-400);
    }

    .stat-badge.learning {
        background: rgba(239, 68, 68, 0.2);
        color: var(--color-error-400);
    }

    .stat-badge.due {
        background: rgba(34, 197, 94, 0.2);
        color: var(--color-success-400);
    }

    /* Empty State */
    .empty-state {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .empty-content {
        text-align: center;
        max-width: 400px;
    }

    .empty-title {
        font-size: var(--font-size-3xl);
        font-weight: 800;
        margin-bottom: var(--space-4);
    }

    .empty-subtitle {
        color: var(--color-text-secondary);
        margin-bottom: var(--space-6);
    }

    .deck-summary {
        color: var(--color-text-secondary);
        margin-bottom: var(--space-6);
    }

    .back-btn {
        display: inline-block;
        padding: var(--space-3) var(--space-6);
        background: var(--color-primary-500);
        color: white;
        border-radius: var(--radius-lg);
        text-decoration: none;
        font-weight: 600;
    }

    /* Flashcard Area */
    .flashcard-area {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-4);
    }

    .progress-info {
        width: 100%;
        max-width: 400px;
        display: flex;
        align-items: center;
        gap: var(--space-3);
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

    .card-count {
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
        white-space: nowrap;
    }

    .flashcard {
        width: 100%;
        max-width: 400px;
        height: 250px;
        perspective: 1000px;
        cursor: pointer;
        background: none;
        border: none;
        padding: 0;
    }

    .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }

    .flashcard.flipped .card-inner {
        transform: rotateY(180deg);
    }

    .flashcard.transitioning {
        pointer-events: none;
    }

    .card-front,
    .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius-xl);
        padding: var(--space-6);
    }

    .card-front {
        background: linear-gradient(
            135deg,
            var(--color-primary-500),
            var(--color-primary-600)
        );
        box-shadow: 0 8px 30px rgba(99, 102, 241, 0.3);
    }

    .card-back {
        background: linear-gradient(
            135deg,
            var(--color-success-500),
            var(--color-success-600)
        );
        box-shadow: 0 8px 30px rgba(34, 197, 94, 0.3);
        transform: rotateY(180deg);
    }

    .card-text {
        font-size: var(--font-size-3xl);
        font-weight: 700;
        color: white;
        text-align: center;
    }

    .card-phonetic,
    .card-literal {
        font-size: var(--font-size-md);
        color: rgba(255, 255, 255, 0.8);
        margin-top: var(--space-2);
    }

    .card-status-badge {
        position: absolute;
        top: var(--space-3);
        right: var(--space-3);
        padding: var(--space-1) var(--space-2);
        border-radius: var(--radius-md);
        font-size: var(--font-size-xs);
        font-weight: 600;
        text-transform: uppercase;
        background: rgba(0, 0, 0, 0.2);
        color: rgba(255, 255, 255, 0.8);
    }

    .flip-hint {
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
    }

    /* Anki-style rating buttons */
    .rating-buttons {
        display: flex;
        gap: var(--space-2);
        margin-top: var(--space-4);
        opacity: 0;
        transform: translateY(10px);
        transition: all 0.3s ease;
        pointer-events: none;
    }

    .rating-buttons.visible {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
    }

    .rating-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-1);
        padding: var(--space-3) var(--space-4);
        border: 2px solid;
        border-radius: var(--radius-xl);
        cursor: pointer;
        transition: all var(--transition-fast);
        min-width: 70px;
    }

    .rating-btn.again {
        background: rgba(239, 68, 68, 0.1);
        border-color: var(--color-error);
        color: var(--color-error);
    }

    .rating-btn.hard {
        background: rgba(249, 115, 22, 0.1);
        border-color: #f97316;
        color: #f97316;
    }

    .rating-btn.good {
        background: rgba(34, 197, 94, 0.1);
        border-color: var(--color-success);
        color: var(--color-success);
    }

    .rating-btn.easy {
        background: rgba(99, 102, 241, 0.1);
        border-color: var(--color-primary);
        color: var(--color-primary);
    }

    .rating-btn:hover:not(:disabled) {
        transform: translateY(-2px);
    }

    .rating-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    .rating-interval {
        font-size: var(--font-size-xs);
        font-weight: 700;
    }

    .rating-label {
        font-size: var(--font-size-sm);
        font-weight: 600;
    }

    .rating-btn kbd {
        background: rgba(0, 0, 0, 0.1);
        padding: 2px 6px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 10px;
    }

    /* Results Screen */
    .results-screen {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .results-content {
        text-align: center;
    }

    .results-title {
        font-size: var(--font-size-3xl);
        font-weight: 800;
        margin-bottom: var(--space-8);
    }

    .results-stats {
        display: flex;
        justify-content: center;
        gap: var(--space-4);
        margin-bottom: var(--space-6);
    }

    .result-stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: var(--space-3);
        border-radius: var(--radius-lg);
    }

    .result-stat.again {
        background: rgba(239, 68, 68, 0.1);
    }
    .result-stat.hard {
        background: rgba(249, 115, 22, 0.1);
    }
    .result-stat.good {
        background: rgba(34, 197, 94, 0.1);
    }
    .result-stat.easy {
        background: rgba(99, 102, 241, 0.1);
    }

    .result-number {
        font-size: var(--font-size-2xl);
        font-weight: 800;
    }

    .result-stat.again .result-number {
        color: var(--color-error);
    }
    .result-stat.hard .result-number {
        color: #f97316;
    }
    .result-stat.good .result-number {
        color: var(--color-success);
    }
    .result-stat.easy .result-number {
        color: var(--color-primary);
    }

    .result-label {
        font-size: var(--font-size-xs);
        color: var(--color-text-secondary);
    }

    .session-summary {
        color: var(--color-text-secondary);
        margin-bottom: var(--space-6);
    }

    .results-actions {
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
        align-items: center;
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
    }

    .start-btn:hover {
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

    @media (max-width: 480px) {
        .rating-buttons {
            flex-wrap: wrap;
            justify-content: center;
        }

        .rating-btn {
            min-width: 60px;
            padding: var(--space-2) var(--space-3);
        }
    }
</style>
