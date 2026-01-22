<script>
    let { data } = $props();

    const xpForNextLevel = getXPForLevel(data.stats.current_level + 1);
    const xpForCurrentLevel = getXPForLevel(data.stats.current_level);
    const levelProgress =
        ((data.stats.total_xp - xpForCurrentLevel) /
            (xpForNextLevel - xpForCurrentLevel)) *
        100;

    function getXPForLevel(level) {
        return Math.pow(level - 1, 2) * 100;
    }
</script>

<svelte:head>
    <title>Profile | LinguaQuest</title>
</svelte:head>

<div class="profile-container">
    <header class="profile-header">
        <a href="/" class="back-link">← Back</a>
        <div class="header-row">
            <h1>Your Profile</h1>
            <a href="/api/auth/logout" class="btn btn-ghost logout-btn"
                >Logout</a
            >
        </div>
    </header>

    <section class="level-section card">
        <div class="level-display">
            <div class="level-badge">
                <span class="level-number">{data.stats.current_level}</span>
                <span class="level-label">Level</span>
            </div>
            <div class="level-info">
                <div class="xp-text">
                    <span class="xp-current">{data.stats.total_xp} XP</span>
                    <span class="xp-next">/ {xpForNextLevel} XP</span>
                </div>
                <div class="progress-bar">
                    <div
                        class="progress-bar-fill"
                        style="width: {levelProgress}%"
                    ></div>
                </div>
            </div>
        </div>
    </section>

    <section class="stats-grid">
        <div class="stat-card">
            <span class="stat-icon">🔥</span>
            <span class="stat-value">{data.stats.current_streak}</span>
            <span class="stat-label">Day Streak</span>
        </div>
        <div class="stat-card">
            <span class="stat-icon">🏆</span>
            <span class="stat-value">{data.stats.longest_streak}</span>
            <span class="stat-label">Best Streak</span>
        </div>
        <div class="stat-card">
            <span class="stat-icon">📚</span>
            <span class="stat-value">{data.completedLessons}</span>
            <span class="stat-label">Lessons Done</span>
        </div>
        <div class="stat-card">
            <span class="stat-icon">🎖️</span>
            <span class="stat-value">{data.unlockedAchievements}</span>
            <span class="stat-label">Achievements</span>
        </div>
    </section>

    <section class="achievements-section">
        <h2 class="section-title">Achievements</h2>
        <div class="achievements-grid">
            {#each data.achievements as achievement}
                <div
                    class="achievement-badge"
                    class:locked={!achievement.unlocked}
                >
                    <div
                        class="achievement-icon"
                        class:locked={!achievement.unlocked}
                    >
                        {achievement.icon}
                    </div>
                    <span class="achievement-name">{achievement.name}</span>
                    <span class="achievement-desc"
                        >{achievement.description}</span
                    >
                </div>
            {/each}
        </div>
    </section>
</div>

<style>
    .profile-container {
        max-width: 800px;
        margin: 0 auto;
        padding: var(--space-6);
    }

    .profile-header {
        margin-bottom: var(--space-8);
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

    .profile-header h1 {
        font-size: var(--font-size-3xl);
        font-weight: 800;
    }

    .header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logout-btn {
        color: var(--color-error);
    }

    .logout-btn:hover {
        background: rgba(239, 68, 68, 0.1);
    }

    .level-section {
        margin-bottom: var(--space-8);
    }

    .level-display {
        display: flex;
        align-items: center;
        gap: var(--space-6);
    }

    .level-badge {
        width: 80px;
        height: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(
            135deg,
            var(--color-primary-500),
            var(--color-primary-600)
        );
        border-radius: var(--radius-xl);
        box-shadow: var(--shadow-lg), var(--shadow-glow-primary);
    }

    .level-number {
        font-size: var(--font-size-2xl);
        font-weight: 800;
        line-height: 1;
    }

    .level-label {
        font-size: var(--font-size-xs);
        opacity: 0.8;
    }

    .level-info {
        flex: 1;
    }

    .xp-text {
        display: flex;
        gap: var(--space-2);
        margin-bottom: var(--space-2);
    }

    .xp-current {
        font-size: var(--font-size-lg);
        font-weight: 700;
    }

    .xp-next {
        font-size: var(--font-size-lg);
        color: var(--color-text-muted);
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-4);
        margin-bottom: var(--space-10);
    }

    .stat-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-2);
    }

    .stat-icon {
        font-size: 2rem;
    }

    .section-title {
        font-size: var(--font-size-xl);
        font-weight: 700;
        margin-bottom: var(--space-6);
    }

    .achievements-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: var(--space-4);
    }

    .achievement-badge {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-4);
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
        text-align: center;
        transition: all var(--transition-base);
    }

    .achievement-badge:not(.locked):hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
    }

    .achievement-badge.locked {
        opacity: 0.5;
    }

    .achievement-icon {
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.75rem;
        background: linear-gradient(
            135deg,
            var(--color-primary-500),
            var(--color-primary-600)
        );
        border-radius: var(--radius-lg);
    }

    .achievement-icon.locked {
        background: var(--color-gray-700);
        filter: grayscale(100%);
    }

    .achievement-name {
        font-weight: 600;
        font-size: var(--font-size-sm);
    }

    .achievement-desc {
        font-size: var(--font-size-xs);
        color: var(--color-text-muted);
        line-height: 1.4;
    }

    @media (max-width: 768px) {
        .stats-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .level-display {
            flex-direction: column;
            text-align: center;
        }
    }
</style>
