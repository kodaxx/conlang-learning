<script>
    let { data } = $props();
</script>

<svelte:head>
    <title>Learn Globasa - International Auxiliary Language</title>
    <meta
        name="description"
        content="Learn Globasa, a truly global auxiliary language designed for international communication. Free lessons with spaced repetition, progress tracking, and achievements."
    />
</svelte:head>

<div class="home-container">
    <section class="hero">
        <div class="hero-badge">🌐 Free Language Learning</div>
        <h1 class="hero-title">Learn Globasa</h1>
        <p class="hero-subtitle">
            A truly global language for international communication
        </p>

        {#if data.user}
            <a href="/globasa" class="btn btn-primary btn-xl hero-cta">
                Continue Learning →
            </a>
        {:else}
            <a href="/login" class="btn btn-primary btn-xl hero-cta">
                Start Learning Free →
            </a>
        {/if}
    </section>

    {#if data.user}
        <section class="stats-bar">
            <div class="stat-item">
                <span class="stat-icon">🔥</span>
                <div class="stat-info">
                    <span class="stat-number"
                        >{data.stats?.current_streak || 0}</span
                    >
                    <span class="stat-label">Day Streak</span>
                </div>
            </div>
            <div class="stat-item">
                <span class="stat-icon">⭐</span>
                <div class="stat-info">
                    <span class="stat-number">{data.stats?.total_xp || 0}</span>
                    <span class="stat-label">Total XP</span>
                </div>
            </div>
            <div class="stat-item">
                <span class="stat-icon">�</span>
                <div class="stat-info">
                    <span class="stat-number"
                        >{data.globasaProgress.completed}/{data.globasaProgress
                            .total}</span
                    >
                    <span class="stat-label">Lessons</span>
                </div>
            </div>
        </section>
    {/if}

    <section class="about-section">
        <h2 class="section-title">What is Globasa?</h2>

        <div class="about-grid">
            <div class="about-card">
                <div class="about-icon">🌍</div>
                <h3>Truly Global</h3>
                <p>
                    Vocabulary drawn from languages across the world — no single
                    culture dominates. Everyone learns on equal footing.
                </p>
            </div>

            <div class="about-card">
                <div class="about-icon">�</div>
                <h3>Easy to Learn</h3>
                <p>
                    Simple, regular grammar with no conjugations, no gendered
                    nouns, and consistent pronunciation rules.
                </p>
            </div>

            <div class="about-card">
                <div class="about-icon">🗣️</div>
                <h3>Expressive</h3>
                <p>
                    Despite its simplicity, Globasa allows nuanced expression
                    through productive word-building and clear syntax.
                </p>
            </div>

            <div class="about-card">
                <div class="about-icon">🤝</div>
                <h3>Neutral Ground</h3>
                <p>
                    An international auxiliary language designed for
                    communication between people who don't share a native
                    language.
                </p>
            </div>
        </div>
    </section>

    <section class="philosophy-section">
        <h2 class="section-title">The Globasa Philosophy</h2>
        <div class="philosophy-content">
            <p>
                Globasa was created by <strong
                    >Hsjunxaji (Dr. Dana Edwards)</strong
                > with the vision of a language that represents all humanity equally.
                Unlike languages that favor European vocabulary or grammar, Globasa
                draws from:
            </p>
            <ul class="philosophy-list">
                <li>
                    🌏 <strong>Asian languages</strong> — Mandarin, Japanese, Korean,
                    Vietnamese
                </li>
                <li>
                    🌍 <strong>African languages</strong> — Swahili, Hausa, Yoruba
                </li>
                <li>
                    🌎 <strong>American languages</strong> — Spanish influence, indigenous
                    roots
                </li>
                <li>
                    🌍 <strong>European languages</strong> — English, Romance, Germanic
                </li>
                <li>
                    🌏 <strong>Middle Eastern languages</strong> — Arabic, Persian,
                    Turkish
                </li>
            </ul>
            <p>
                The grammar is designed to be learnable in weeks, not years —
                with a focus on
                <strong>minimal exceptions</strong> and
                <strong>maximum expressiveness</strong>.
            </p>
        </div>
    </section>

    <section class="cta-section">
        <div class="cta-card">
            <h2>Ready to start?</h2>
            <p>
                Learn Globasa through interactive lessons, spaced repetition
                flashcards, and fun games.
            </p>

            {#if data.user}
                <a href="/globasa" class="btn btn-primary btn-lg"
                    >Go to Course →</a
                >
            {:else}
                <div class="cta-buttons">
                    <a href="/login" class="btn btn-primary btn-lg"
                        >Create Free Account</a
                    >
                    <a href="/globasa" class="btn btn-ghost btn-lg"
                        >Preview Course</a
                    >
                </div>
            {/if}
        </div>
    </section>

    <section class="resources-section">
        <h2 class="section-title">Official Resources</h2>
        <div class="resources-grid">
            <a
                href="https://globasa.net"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-card"
            >
                <span class="resource-icon">🌐</span>
                <span class="resource-name">Official Website</span>
                <span class="resource-desc">globasa.net</span>
            </a>
            <a
                href="https://globasa.net/gramati"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-card"
            >
                <span class="resource-icon">📚</span>
                <span class="resource-name">Grammar Guide</span>
                <span class="resource-desc">Complete reference</span>
            </a>
            <a
                href="https://globasa.net/lexi"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-card"
            >
                <span class="resource-icon">�</span>
                <span class="resource-name">Dictionary</span>
                <span class="resource-desc">Word lookup</span>
            </a>
            <a
                href="https://discord.gg/globasa"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-card"
            >
                <span class="resource-icon">💬</span>
                <span class="resource-name">Community</span>
                <span class="resource-desc">Discord server</span>
            </a>
        </div>
    </section>

    {#if data.user && data.recentAchievements.length > 0}
        <section class="achievements-preview">
            <h2 class="section-title">Recent Achievements</h2>
            <div class="achievements-row">
                {#each data.recentAchievements as achievement}
                    <div class="achievement-badge">
                        <div class="achievement-icon">{achievement.icon}</div>
                        <span class="achievement-name">{achievement.name}</span>
                    </div>
                {/each}
            </div>
        </section>
    {/if}
</div>

<style>
    .home-container {
        padding: var(--space-6);
        max-width: 900px;
        margin: 0 auto;
    }

    /* Hero Section */
    .hero {
        text-align: center;
        padding: var(--space-12) 0 var(--space-8);
    }

    .hero-badge {
        display: inline-block;
        padding: var(--space-2) var(--space-4);
        background: rgba(124, 58, 237, 0.1);
        border: 1px solid var(--color-primary-500);
        border-radius: var(--radius-full);
        font-size: var(--font-size-sm);
        color: var(--color-primary-400);
        margin-bottom: var(--space-4);
    }

    .hero-title {
        font-size: var(--font-size-5xl);
        font-weight: 800;
        margin-bottom: var(--space-4);
        background: linear-gradient(
            135deg,
            var(--color-primary-400),
            var(--color-success-400)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .hero-subtitle {
        font-size: var(--font-size-xl);
        color: var(--color-text-secondary);
        margin-bottom: var(--space-8);
    }

    .hero-cta {
        font-size: var(--font-size-lg);
        padding: var(--space-4) var(--space-8);
    }

    /* Stats Bar */
    .stats-bar {
        display: flex;
        justify-content: center;
        gap: var(--space-8);
        padding: var(--space-6);
        background: var(--color-bg-card);
        border-radius: var(--radius-2xl);
        margin-bottom: var(--space-10);
    }

    .stat-item {
        display: flex;
        align-items: center;
        gap: var(--space-3);
    }

    .stat-icon {
        font-size: 2rem;
    }

    .stat-info {
        display: flex;
        flex-direction: column;
    }

    .stat-number {
        font-size: var(--font-size-2xl);
        font-weight: 700;
    }

    .stat-label {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
    }

    /* Section Titles */
    .section-title {
        font-size: var(--font-size-2xl);
        font-weight: 700;
        margin-bottom: var(--space-6);
        text-align: center;
    }

    /* About Section */
    .about-section {
        margin-bottom: var(--space-12);
    }

    .about-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-6);
    }

    .about-card {
        padding: var(--space-6);
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
        text-align: center;
    }

    .about-icon {
        font-size: 2.5rem;
        margin-bottom: var(--space-3);
    }

    .about-card h3 {
        font-size: var(--font-size-lg);
        font-weight: 700;
        margin-bottom: var(--space-2);
    }

    .about-card p {
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
        line-height: 1.6;
    }

    /* Philosophy Section */
    .philosophy-section {
        margin-bottom: var(--space-12);
    }

    .philosophy-content {
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
        padding: var(--space-8);
    }

    .philosophy-content p {
        color: var(--color-text-secondary);
        line-height: 1.7;
        margin-bottom: var(--space-4);
    }

    .philosophy-list {
        list-style: none;
        padding: 0;
        margin: var(--space-4) 0;
    }

    .philosophy-list li {
        padding: var(--space-2) 0;
        font-size: var(--font-size-base);
    }

    /* CTA Section */
    .cta-section {
        margin-bottom: var(--space-12);
    }

    .cta-card {
        text-align: center;
        padding: var(--space-10);
        background: linear-gradient(
            135deg,
            rgba(124, 58, 237, 0.1),
            rgba(16, 185, 129, 0.1)
        );
        border: 1px solid var(--color-primary-500);
        border-radius: var(--radius-2xl);
    }

    .cta-card h2 {
        font-size: var(--font-size-2xl);
        font-weight: 700;
        margin-bottom: var(--space-3);
    }

    .cta-card p {
        color: var(--color-text-secondary);
        margin-bottom: var(--space-6);
    }

    .cta-buttons {
        display: flex;
        gap: var(--space-4);
        justify-content: center;
        flex-wrap: wrap;
    }

    /* Resources Section */
    .resources-section {
        margin-bottom: var(--space-12);
    }

    .resources-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-4);
    }

    .resource-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-6);
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
        text-decoration: none;
        color: var(--color-text);
        transition: all var(--transition-base);
    }

    .resource-card:hover {
        border-color: var(--color-primary-500);
        transform: translateY(-2px);
    }

    .resource-icon {
        font-size: 1.5rem;
    }

    .resource-name {
        font-weight: 600;
        font-size: var(--font-size-sm);
    }

    .resource-desc {
        font-size: var(--font-size-xs);
        color: var(--color-text-muted);
    }

    /* Achievements */
    .achievements-preview {
        margin-top: var(--space-8);
    }

    .achievements-row {
        display: flex;
        justify-content: center;
        gap: var(--space-6);
        flex-wrap: wrap;
    }

    .achievement-badge {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-2);
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

    .achievement-name {
        font-size: var(--font-size-sm);
        font-weight: 600;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .hero-title {
            font-size: var(--font-size-4xl);
        }

        .stats-bar {
            flex-direction: column;
            gap: var(--space-4);
            align-items: center;
        }

        .about-grid {
            grid-template-columns: 1fr;
        }

        .resources-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
