<script>
    import { onMount } from "svelte";
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
</script>

<svelte:head>
    <title>LinguaQuest - Learn Languages</title>
</svelte:head>

<header class="header">
    <a href="/" class="header-logo">🌐 LinguaQuest</a>

    <!-- <div class="nav-controls">
        <button
            class="menu-toggle"
            class:active={isMenuOpen}
            onclick={toggleMenu}
            aria-label="Toggle menu"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div> -->
    <div class="header-stats">
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
</header>

<main>
    {@render children()}
</main>

<style>
    main {
        min-height: calc(100vh - 72px);
        padding-bottom: var(--space-8);
    }
</style>
