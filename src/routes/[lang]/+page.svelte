<script>
    import { browser } from "$app/environment";
    import globasaFlag from "$lib/assets/globasa_flag.svg";
    import { onMount, tick } from "svelte";

    let { data } = $props();

    const langInfo = {
        esperanto: { name: "Esperanto", icon: "🌍", color: "success" },
        tokipona: { name: "Toki Pona", icon: "🗿", color: "xp" },
        una: { name: "Una", icon: "🌐", color: "primary" },
        kokanu: { name: "Kokanu", icon: "🌏", color: "success" },
        globasa: { name: "Globasa", icon: "🌐", color: "primary" },
    };

    const info = langInfo[data.language] || langInfo.esperanto;

    // Tab state - check URL hash for initial tab
    let activeTab = $state("lessons");

    const tabs = [
        { id: "lessons", label: "Lessons", icon: "📚" },
        { id: "games", label: "Games", icon: "🎮" },
        ...(data.language === "tokipona" ||
        data.language === "una" ||
        data.language === "kokanu" ||
        data.language === "esperanto" ||
        data.language === "globasa"
            ? [{ id: "dictionary", label: "Dictionary", icon: "📖" }]
            : []),
    ];

    // Calculate current unit index (first unit with at least one incomplete lesson that's unlocked)
    function getCurrentUnitIndex() {
        if (!data.curriculum.units || data.curriculum.units.length === 0)
            return 0;

        for (
            let unitIndex = 0;
            unitIndex < data.curriculum.units.length;
            unitIndex++
        ) {
            const unit = data.curriculum.units[unitIndex];
            const unitLessons = unit.lessons || [];

            // Check if this unit has any incomplete lessons
            const completedInUnit = unitLessons.filter(
                (l) =>
                    data.lessonProgress.find((p) => p.lesson_id === l.id)
                        ?.completed,
            ).length;

            // If unit is not complete, this is our current unit
            if (completedInUnit < unitLessons.length) {
                return unitIndex;
            }
        }

        // All units complete - return last unit
        return data.curriculum.units.length - 1;
    }

    const currentUnitIndex = getCurrentUnitIndex();

    // Check URL hash on mount to set initial tab, then scroll to current unit
    onMount(async () => {
        if (browser && window.location.hash) {
            const hash = window.location.hash.slice(1); // Remove #
            const validTab = tabs.find((t) => t.id === hash);
            if (validTab) {
                activeTab = validTab.id;
            }
        }

        // Scroll to current unit after DOM updates
        await tick();
        if (browser && activeTab === "lessons") {
            const currentUnitEl = document.getElementById(
                `unit-${currentUnitIndex}`,
            );
            if (currentUnitEl) {
                currentUnitEl.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    });
</script>

<svelte:head>
    <title>Learn {info.name} | LinguaQuest</title>
</svelte:head>

<div class="track-container">
    <header class="track-header">
        <!-- <a href="/" class="back-link">← Back</a> -->
        <div class="track-title">
            {#if data.language === "globasa"}
                <img src={globasaFlag} alt="Globasa Flag" class="track-flag" />
            {:else}
                <span class="track-icon">{info.icon}</span>
            {/if}
            <h1>{info.name}</h1>
        </div>
        <p class="track-description">{data.curriculum.description}</p>
    </header>

    <!-- Tab Navigation -->
    <nav class="tabs">
        {#each tabs as tab}
            <button
                class="tab"
                class:active={activeTab === tab.id}
                onclick={() => (activeTab = tab.id)}
            >
                <span class="tab-icon">{tab.icon}</span>
                <span class="tab-label">{tab.label}</span>
            </button>
        {/each}
    </nav>

    <!-- Tab Content -->
    <div class="tab-content">
        {#if activeTab === "lessons"}
            <!-- Lessons Tab -->
            {#if data.lessonProgress.filter((p) => p.completed).length > 0}
                <section class="challenge-section">
                    <a href="/{data.language}/challenge" class="challenge-card">
                        <div class="challenge-icon">⚔️</div>
                        <div class="challenge-info">
                            <h3 class="challenge-title">Challenge Mode</h3>
                            <p class="challenge-description">
                                Test yourself on everything you've learned!
                                Random questions from {data.lessonProgress.filter(
                                    (p) => p.completed,
                                ).length} completed lesson{data.lessonProgress.filter(
                                    (p) => p.completed,
                                ).length === 1
                                    ? ""
                                    : "s"}.
                            </p>
                        </div>
                        <div class="challenge-arrow">→</div>
                    </a>
                </section>
            {/if}

            <!-- Units grouped lessons -->
            {#if data.curriculum.units && data.curriculum.units.length > 0}
                <div class="units-list">
                    {#each data.curriculum.units as unit, unitIndex}
                        {@const unitLessons = unit.lessons || []}
                        {@const completedInUnit = unitLessons.filter(
                            (l) =>
                                data.lessonProgress.find(
                                    (p) => p.lesson_id === l.id,
                                )?.completed,
                        ).length}
                        {@const unitProgress =
                            unitLessons.length > 0
                                ? Math.round(
                                      (completedInUnit / unitLessons.length) *
                                          100,
                                  )
                                : 0}
                        {@const isUnitComplete =
                            completedInUnit === unitLessons.length &&
                            unitLessons.length > 0}

                        <details
                            id="unit-{unitIndex}"
                            class="unit-section"
                            open={unitIndex === currentUnitIndex}
                        >
                            <summary
                                class="unit-header"
                                class:unit-complete={isUnitComplete}
                            >
                                <div class="unit-info">
                                    <span class="unit-number"
                                        >Unit {unit.id}</span
                                    >
                                    <h3 class="unit-name">{unit.name}</h3>
                                    <p class="unit-description">
                                        {unit.description}
                                    </p>
                                </div>
                                <div class="unit-progress">
                                    <div
                                        class="progress-ring"
                                        style="--progress: {unitProgress}"
                                    >
                                        <span class="progress-text"
                                            >{completedInUnit}/{unitLessons.length}</span
                                        >
                                    </div>
                                    <span class="expand-icon">▼</span>
                                </div>
                            </summary>

                            <div class="unit-lessons">
                                {#each unitLessons as lesson, lessonIndex}
                                    {@const progress = data.lessonProgress.find(
                                        (p) => p.lesson_id === lesson.id,
                                    )}
                                    {@const isCompleted = progress?.completed}
                                    {@const globalIndex =
                                        data.curriculum.lessons.findIndex(
                                            (l) => l.id === lesson.id,
                                        )}
                                    {@const isLocked =
                                        globalIndex > 0 &&
                                        !data.lessonProgress.find(
                                            (p) =>
                                                p.lesson_id ===
                                                data.curriculum.lessons[
                                                    globalIndex - 1
                                                ].id,
                                        )?.completed}

                                    {#if isLocked}
                                        <div
                                            class="lesson-card lesson-card-locked"
                                        >
                                            <div class="lesson-number">
                                                {lessonIndex + 1}
                                            </div>
                                            <div class="lesson-icon">🔒</div>
                                            <div class="lesson-info">
                                                <h3 class="lesson-name">
                                                    {lesson.name}
                                                </h3>
                                                <p class="lesson-description">
                                                    {lesson.description}
                                                </p>
                                            </div>
                                        </div>
                                    {:else}
                                        <a
                                            href="/{data.language}/{lesson.id}"
                                            class="lesson-card"
                                            class:lesson-card-completed={isCompleted}
                                        >
                                            <div class="lesson-number">
                                                {lessonIndex + 1}
                                            </div>
                                            <div class="lesson-icon">
                                                {isCompleted
                                                    ? "✓"
                                                    : lesson.icon}
                                            </div>
                                            <div class="lesson-info">
                                                <h3 class="lesson-name">
                                                    {lesson.name}
                                                </h3>
                                                <p class="lesson-description">
                                                    {lesson.description}
                                                </p>
                                                {#if progress?.best_score}
                                                    <span class="lesson-score"
                                                        >Best: {progress.best_score}%</span
                                                    >
                                                {/if}
                                            </div>
                                            <div class="lesson-xp">
                                                +{lesson.xpReward} XP
                                            </div>
                                        </a>
                                    {/if}
                                {/each}
                            </div>
                        </details>
                    {/each}
                </div>
            {:else}
                <!-- Fallback: flat list for curricula without units -->
                <div class="lessons-list">
                    {#each data.curriculum.lessons as lesson, index}
                        {@const progress = data.lessonProgress.find(
                            (p) => p.lesson_id === lesson.id,
                        )}
                        {@const isCompleted = progress?.completed}
                        {@const isLocked =
                            index > 0 &&
                            !data.lessonProgress.find(
                                (p) =>
                                    p.lesson_id ===
                                    data.curriculum.lessons[index - 1].id,
                            )?.completed}

                        {#if isLocked}
                            <div class="lesson-card lesson-card-locked">
                                <div class="lesson-icon">🔒</div>
                                <div class="lesson-info">
                                    <h3 class="lesson-name">{lesson.name}</h3>
                                    <p class="lesson-description">
                                        {lesson.description}
                                    </p>
                                </div>
                            </div>
                        {:else}
                            <a
                                href="/{data.language}/{lesson.id}"
                                class="lesson-card"
                                class:lesson-card-completed={isCompleted}
                            >
                                <div class="lesson-icon">
                                    {isCompleted ? "✓" : lesson.icon}
                                </div>
                                <div class="lesson-info">
                                    <h3 class="lesson-name">{lesson.name}</h3>
                                    <p class="lesson-description">
                                        {lesson.description}
                                    </p>
                                    {#if progress?.best_score}
                                        <span class="lesson-score"
                                            >Best: {progress.best_score}%</span
                                        >
                                    {/if}
                                </div>
                                <div class="lesson-xp">
                                    +{lesson.xpReward} XP
                                </div>
                            </a>
                        {/if}
                    {/each}
                </div>
            {/if}
        {:else if activeTab === "games"}
            <!-- Games Tab -->
            <div class="games-list">
                <a
                    href="/{data.language}/games/falling-words"
                    class="game-card game-card-red"
                >
                    <div class="game-icon">⬇️</div>
                    <div class="game-info">
                        <h3 class="game-name">Falling Words</h3>
                        <p class="game-description">
                            Type translations before words hit the bottom!
                        </p>
                    </div>
                    <div class="game-arrow">→</div>
                </a>

                <a
                    href="/{data.language}/games/flashcards"
                    class="game-card game-card-purple"
                >
                    <div class="game-icon">🃏</div>
                    <div class="game-info">
                        <h3 class="game-name">Flashcards</h3>
                        <p class="game-description">
                            Flip cards to test your vocabulary knowledge!
                        </p>
                    </div>
                    <div class="game-arrow">→</div>
                </a>

                {#if ["tokipona", "kokanu", "globasa"].includes(data.language)}
                    <a
                        href="/{data.language}/games/dialogue"
                        class="game-card game-card-green"
                    >
                        <div class="game-icon">💬</div>
                        <div class="game-info">
                            <h3 class="game-name">Dialogue Practice</h3>
                            <p class="game-description">
                                Complete conversations in {info.name}!
                            </p>
                        </div>
                        <div class="game-arrow">→</div>
                    </a>
                {/if}
            </div>
        {:else if activeTab === "dictionary"}
            <!-- Dictionary Tab -->
            <div class="dictionary-content">
                <div class="dictionary-summary">
                    <div class="dict-stat">
                        <span class="dict-number"
                            >{data.dictionaryStats?.core || "100+"}+</span
                        >
                        <span class="dict-label">Core Words</span>
                    </div>
                    <div class="dict-stat">
                        <span class="dict-number"
                            >{data.dictionaryStats?.compounds || "0"}+</span
                        >
                        <span class="dict-label">Compound Phrases</span>
                    </div>
                </div>

                <a
                    href="/{data.language}/dictionary"
                    class="dictionary-link-card"
                >
                    <span class="dict-link-icon">📖</span>
                    <span class="dict-link-text">Open Full Dictionary</span>
                    <span class="dict-link-arrow">→</span>
                </a>

                <p class="dictionary-hint">
                    Search and browse all {info.name} vocabulary with meanings, categories,
                    and compound phrases.
                </p>
            </div>
        {/if}
    </div>
</div>

<style>
    .track-container {
        max-width: 700px;
        margin: 0 auto;
        padding: var(--space-6);
    }

    .track-header {
        text-align: center;
        margin-bottom: var(--space-6);
    }

    .back-link {
        display: inline-block;
        color: var(--color-text-secondary);
        text-decoration: none;
        margin-bottom: var(--space-4);
        transition: color var(--transition-fast);
    }

    .back-link:hover {
        color: var(--color-text);
    }

    .track-title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--space-3);
        margin-bottom: var(--space-2);
    }

    .track-icon {
        font-size: 3rem;
    }

    .track-flag {
        height: 60px;
        width: auto;
        border-radius: var(--radius-md);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .track-title h1 {
        font-size: var(--font-size-4xl);
        font-weight: 800;
    }

    .track-description {
        color: var(--color-text-secondary);
        font-size: var(--font-size-lg);
    }

    /* Tabs */
    .tabs {
        display: flex;
        gap: var(--space-2);
        margin-bottom: var(--space-6);
        background: var(--color-surface);
        padding: var(--space-2);
        border-radius: var(--radius-xl);
    }

    .tab {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--space-2);
        padding: var(--space-3) var(--space-4);
        background: transparent;
        border: none;
        border-radius: var(--radius-lg);
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
        font-weight: 600;
        cursor: pointer;
        transition: all var(--transition-fast);
    }

    .tab:hover {
        color: var(--color-text);
        background: rgba(255, 255, 255, 0.05);
    }

    .tab.active {
        background: var(--color-primary-500);
        color: white;
    }

    .tab-icon {
        font-size: 1.2rem;
    }

    .tab-content {
        min-height: 300px;
    }

    /* Lessons */
    .lessons-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
    }

    .lesson-card {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        padding: var(--space-4);
        background: var(--color-surface);
        border: 2px solid var(--color-border);
        border-radius: var(--radius-xl);
        text-decoration: none;
        transition: all var(--transition-normal);
    }

    .lesson-card:hover {
        transform: translateY(-2px);
        border-color: var(--color-primary-400);
        box-shadow: 0 4px 20px rgba(99, 102, 241, 0.2);
    }

    .lesson-card-completed {
        border-color: var(--color-success-500);
        background: rgba(34, 197, 94, 0.05);
    }

    .lesson-card-completed .lesson-icon {
        background: var(--color-success-500);
        color: white;
    }

    .lesson-card-locked {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .lesson-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-border);
        border-radius: var(--radius-lg);
        font-size: 1.5rem;
    }

    .lesson-info {
        flex: 1;
    }

    .lesson-name {
        font-size: var(--font-size-lg);
        font-weight: 600;
        margin-bottom: var(--space-1);
    }

    .lesson-description {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
    }

    .lesson-score {
        font-size: var(--font-size-xs);
        color: var(--color-success-400);
        margin-top: var(--space-1);
        display: block;
    }

    .lesson-xp {
        padding: var(--space-2) var(--space-3);
        background: rgba(245, 158, 11, 0.2);
        color: var(--color-xp-400);
        border-radius: var(--radius-lg);
        font-size: var(--font-size-sm);
        font-weight: 600;
    }

    /* Unit Grouping */
    .units-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-6);
    }

    .unit-section {
        border: 2px solid var(--color-border);
        border-radius: var(--radius-xl);
        background: var(--color-surface);
        overflow: hidden;
    }

    .unit-section[open] {
        border-color: var(--color-primary-400);
    }

    .unit-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-4) var(--space-5);
        cursor: pointer;
        background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.1),
            rgba(139, 92, 246, 0.1)
        );
        list-style: none;
        transition: all var(--transition-fast);
    }

    .unit-header::-webkit-details-marker {
        display: none;
    }

    .unit-header:hover {
        background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.15),
            rgba(139, 92, 246, 0.15)
        );
    }

    .unit-header.unit-complete {
        background: linear-gradient(
            135deg,
            rgba(34, 197, 94, 0.1),
            rgba(16, 185, 129, 0.1)
        );
    }

    .unit-info {
        flex: 1;
    }

    .unit-number {
        display: inline-block;
        font-size: var(--font-size-xs);
        font-weight: 700;
        color: var(--color-primary-400);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: var(--space-1);
    }

    .unit-complete .unit-number {
        color: var(--color-success-400);
    }

    .unit-name {
        font-size: var(--font-size-xl);
        font-weight: 700;
        color: var(--color-text);
        margin-bottom: var(--space-1);
    }

    .unit-description {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
        margin: 0;
    }

    .unit-progress {
        display: flex;
        align-items: center;
        gap: var(--space-3);
    }

    .progress-ring {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: conic-gradient(
            var(--color-success-500) calc(var(--progress) * 1%),
            var(--color-border) calc(var(--progress) * 1%)
        );
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .progress-ring::before {
        content: "";
        position: absolute;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: var(--color-surface);
    }

    .progress-text {
        position: relative;
        z-index: 1;
        font-size: var(--font-size-xs);
        font-weight: 700;
        color: var(--color-text);
    }

    .expand-icon {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
        transition: transform var(--transition-fast);
    }

    .unit-section[open] .expand-icon {
        transform: rotate(180deg);
    }

    .unit-lessons {
        padding: var(--space-3);
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
        background: rgba(0, 0, 0, 0.1);
    }

    .unit-lessons .lesson-card {
        padding: var(--space-3);
        border-radius: var(--radius-lg);
    }

    .lesson-number {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(99, 102, 241, 0.2);
        color: var(--color-primary-400);
        border-radius: var(--radius-md);
        font-size: var(--font-size-sm);
        font-weight: 700;
        flex-shrink: 0;
    }

    .lesson-card-completed .lesson-number {
        background: rgba(34, 197, 94, 0.2);
        color: var(--color-success-400);
    }

    .lesson-card-locked .lesson-number {
        background: rgba(100, 100, 100, 0.2);
        color: var(--color-text-secondary);
    }

    .unit-lessons .lesson-icon {
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
    }

    .unit-lessons .lesson-name {
        font-size: var(--font-size-base);
    }

    /* Challenge Mode */
    .challenge-section {
        margin-bottom: var(--space-6);
    }

    .challenge-card {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        padding: var(--space-5);
        background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.2),
            rgba(236, 72, 153, 0.2)
        );
        border: 2px solid rgba(139, 92, 246, 0.4);
        border-radius: var(--radius-xl);
        text-decoration: none;
        transition: all var(--transition-normal);
    }

    .challenge-card:hover {
        transform: translateY(-2px);
        border-color: rgba(139, 92, 246, 0.6);
        box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
    }

    .challenge-icon {
        font-size: 2.5rem;
    }

    .challenge-info {
        flex: 1;
    }

    .challenge-title {
        font-size: var(--font-size-xl);
        font-weight: 700;
        color: var(--color-text);
        margin-bottom: var(--space-1);
    }

    .challenge-description {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
    }

    .challenge-arrow {
        font-size: var(--font-size-2xl);
        color: rgba(139, 92, 246, 0.8);
        font-weight: bold;
    }

    /* Games Tab */
    .games-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
    }

    .game-card {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        padding: var(--space-5);
        border: 2px solid;
        border-radius: var(--radius-xl);
        text-decoration: none;
        transition: all var(--transition-normal);
    }

    .game-card:hover {
        transform: translateY(-2px);
    }

    .game-card-red {
        background: linear-gradient(
            135deg,
            rgba(239, 68, 68, 0.15),
            rgba(249, 115, 22, 0.15)
        );
        border-color: rgba(239, 68, 68, 0.4);
    }

    .game-card-red:hover {
        border-color: rgba(239, 68, 68, 0.6);
        box-shadow: 0 8px 25px rgba(239, 68, 68, 0.3);
    }

    .game-card-red .game-arrow {
        color: rgba(239, 68, 68, 0.8);
    }

    .game-card-purple {
        background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.15),
            rgba(139, 92, 246, 0.15)
        );
        border-color: rgba(99, 102, 241, 0.4);
    }

    .game-card-purple:hover {
        border-color: rgba(99, 102, 241, 0.6);
        box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
    }

    .game-card-purple .game-arrow {
        color: rgba(99, 102, 241, 0.8);
    }

    .game-card-green {
        background: linear-gradient(
            135deg,
            rgba(34, 197, 94, 0.15),
            rgba(16, 185, 129, 0.15)
        );
        border-color: rgba(34, 197, 94, 0.4);
    }

    .game-card-green:hover {
        border-color: rgba(34, 197, 94, 0.6);
        box-shadow: 0 8px 25px rgba(34, 197, 94, 0.3);
    }

    .game-card-green .game-arrow {
        color: rgba(34, 197, 94, 0.8);
    }

    .game-icon {
        font-size: 2.5rem;
    }

    .game-info {
        flex: 1;
    }

    .game-name {
        font-size: var(--font-size-xl);
        font-weight: 700;
        color: var(--color-text);
        margin-bottom: var(--space-1);
    }

    .game-description {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
    }

    .game-arrow {
        font-size: var(--font-size-2xl);
        font-weight: bold;
    }

    /* Dictionary Tab */
    .dictionary-content {
        text-align: center;
    }

    .dictionary-summary {
        display: flex;
        justify-content: center;
        gap: var(--space-8);
        margin-bottom: var(--space-8);
    }

    .dict-stat {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dict-number {
        font-size: var(--font-size-4xl);
        font-weight: 800;
        color: var(--color-success-400);
    }

    .dict-label {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
    }

    .dictionary-link-card {
        display: inline-flex;
        align-items: center;
        gap: var(--space-3);
        padding: var(--space-4) var(--space-6);
        background: linear-gradient(
            135deg,
            rgba(34, 197, 94, 0.2),
            rgba(16, 185, 129, 0.2)
        );
        border: 2px solid rgba(34, 197, 94, 0.4);
        border-radius: var(--radius-xl);
        text-decoration: none;
        transition: all var(--transition-normal);
    }

    .dictionary-link-card:hover {
        transform: translateY(-2px);
        border-color: rgba(34, 197, 94, 0.6);
        box-shadow: 0 8px 25px rgba(34, 197, 94, 0.3);
    }

    .dict-link-icon {
        font-size: 1.5rem;
    }

    .dict-link-text {
        font-size: var(--font-size-lg);
        font-weight: 600;
        color: var(--color-text);
    }

    .dict-link-arrow {
        font-size: var(--font-size-xl);
        color: rgba(34, 197, 94, 0.8);
    }

    .dictionary-hint {
        margin-top: var(--space-6);
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
