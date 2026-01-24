<script>
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";
    import "../app.css";
    import { sound } from "$lib/utils/sound";

    let { children, data } = $props();

    onMount(() => {
        // Initialize sound on first interaction
        const initSound = () => {
            sound.init();
            window.removeEventListener("click", initSound);
            window.removeEventListener("keydown", initSound);
        };
        window.addEventListener("click", initSound);
        window.addEventListener("keydown", initSound);
    });

    let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function getXPForLevel(level) {
        return Math.pow(level - 1, 2) * 100;
    }

    // Derived stats for mobile dropdown
    let level = $derived(data.stats?.current_level || 1);
    let currentXP = $derived(data.stats?.total_xp || 0);
    let xpCurrentLevel = $derived(getXPForLevel(level));
    let xpNextLevel = $derived(getXPForLevel(level + 1));
    let progress = $derived(
        ((currentXP - xpCurrentLevel) / (xpNextLevel - xpCurrentLevel)) * 100,
    );
</script>

<svelte:head>
    <title>LinguaQuest - Learn Languages</title>
</svelte:head>

<header class="header">
    <a href="/" class="header-logo">🌐 LinguaQuest</a>

    <!-- Mobile Menu Toggle -->
    <div class="header-stats-mobile-hint">
        {#if data.user}
            <button
                class="hamburger-icon"
                onclick={toggleMenu}
                aria-label="Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        {/if}
    </div>

    <!-- Desktop Stats -->
    <div class="header-stats desktop-only">
        {#if data.user}
            <div class="streak-counter">
                <span class="streak-icon">🔥</span>
                <span>{data.stats?.current_streak || 0}</span>
            </div>

            <div class="xp-badge">
                <span class="xp-badge-icon">⭐</span>
                <span>{data.stats?.total_xp || 0} XP</span>
            </div>

            <a href="/profile" class="btn btn-ghost btn-sm"> 👤 </a>
        {:else}
            <a href="/login" class="btn btn-primary btn-sm">Login</a>
        {/if}
    </div>

    <!-- Mobile Dropdown -->
    {#if isMenuOpen && data.user}
        <div class="mobile-stats-dropdown" transition:slide>
            <div class="dropdown-content">
                <div class="stats-row">
                    <div class="streak-display">
                        <span class="streak-fire">🔥</span>
                        <div class="streak-info">
                            <span class="streak-value"
                                >{data.stats?.current_streak || 0}</span
                            >
                            <span class="streak-label">Day Streak</span>
                        </div>
                    </div>
                </div>

                <div class="dropdown-level">
                    <div class="level-header">
                        <span class="level-badge-sm">Lvl {level}</span>
                        <span class="xp-progress-text"
                            >{Math.floor(currentXP - xpCurrentLevel)} / {xpNextLevel -
                                xpCurrentLevel} XP</span
                        >
                    </div>
                    <div class="level-progress-bar">
                        <div
                            class="level-progress-fill"
                            style="width: {Math.max(
                                0,
                                Math.min(100, progress),
                            )}%"
                        ></div>
                    </div>
                </div>

                <a
                    href="/profile"
                    class="btn btn-primary btn-full"
                    onclick={() => (isMenuOpen = false)}
                >
                    View Profile
                </a>
            </div>
        </div>
    {/if}

    {#if !data.user && isMenuOpen}
        <div class="mobile-stats-dropdown">
            <a href="/login" class="btn btn-primary btn-full">Login</a>
        </div>
    {/if}
</header>

<main>
    {@render children()}
</main>

<style>
    main {
        min-height: calc(100vh - 72px);
        padding-bottom: var(--space-8);
    }

    .header-stats-mobile-hint {
        display: none;
    }

    .mobile-stats-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--color-bg-secondary);
        border-bottom: 2px solid var(--color-border);
        padding: var(--space-6);
        box-shadow: var(--shadow-xl);
        z-index: 100;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .dropdown-content {
        max-width: 400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: var(--space-6);
    }

    .stats-row {
        display: flex;
        justify-content: center;
        gap: var(--space-8);
    }

    .streak-display {
        display: flex;
        align-items: center;
        gap: var(--space-3);
    }

    .streak-fire {
        font-size: 2.5rem;
        filter: drop-shadow(0 0 10px rgba(249, 115, 22, 0.5));
    }

    .streak-info {
        display: flex;
        align-items: baseline;
        gap: var(--space-2);
    }

    .streak-value {
        font-size: var(--font-size-2xl);
        font-weight: 800;
        line-height: 1;
    }

    .streak-label {
        font-size: var(--font-size-xs);
        color: var(--color-text-secondary);
        text-transform: uppercase;
    }

    .dropdown-level {
        background: var(--color-bg-card);
        padding: var(--space-4);
        border-radius: var(--radius-lg);
        border: 1px solid var(--color-border);
    }

    .level-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--space-2);
    }

    .level-badge-sm {
        background: var(--color-primary-500);
        color: white;
        padding: 2px 8px;
        border-radius: var(--radius-full);
        font-size: var(--font-size-xs);
        font-weight: 700;
    }

    .xp-progress-text {
        font-size: var(--font-size-xs);
        color: var(--color-text-secondary);
    }

    .level-progress-bar {
        height: 8px;
        background: var(--color-bg);
        border-radius: var(--radius-full);
        overflow: hidden;
    }

    .level-progress-fill {
        height: 100%;
        background: linear-gradient(
            90deg,
            var(--color-primary-400),
            var(--color-primary-600)
        );
        border-radius: var(--radius-full);
    }

    .btn-full {
        width: 100%;
    }

    /* Mobile Logic */
    @media (max-width: 768px) {
        .header {
            -webkit-tap-highlight-color: transparent;
        }

        .header:active {
            background: transparent;
        }

        .desktop-only {
            display: none;
        }

        .header-stats-mobile-hint {
            display: block;
            margin-right: var(--space-2);
        }

        .hamburger-icon {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 24px;
            height: 18px;
            background: transparent;
            border: none;
            padding: 0;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            outline: none;
        }

        .hamburger-icon span {
            display: block;
            width: 100%;
            height: 2px;
            background-color: var(--color-text);
            border-radius: 2px;
            transition: all 0.3s ease;
        }
    }
</style>
