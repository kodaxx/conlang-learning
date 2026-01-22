<script>
    let { data } = $props();

    const langInfo = {
        esperanto: { name: "Esperanto", icon: "🌍" },
        tokipona: { name: "Toki Pona", icon: "🗿" },
        globasa: { name: "Globasa", icon: "🌐" },
    };

    const info = langInfo[data.language] || langInfo.tokipona;

    const games = [
        {
            id: "falling-words",
            name: "Falling Words",
            icon: "⬇️",
            description: "Type translations before words hit the bottom!",
            gradient:
                "linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(249, 115, 22, 0.2))",
            borderColor: "rgba(239, 68, 68, 0.4)",
            hoverBorder: "rgba(239, 68, 68, 0.6)",
            shadowColor: "rgba(239, 68, 68, 0.3)",
            arrowColor: "rgba(239, 68, 68, 0.8)",
        },
        {
            id: "flashcards",
            name: "Flashcards",
            icon: "🃏",
            description: "Flip cards to test your vocabulary knowledge!",
            gradient:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))",
            borderColor: "rgba(99, 102, 241, 0.4)",
            hoverBorder: "rgba(99, 102, 241, 0.6)",
            shadowColor: "rgba(99, 102, 241, 0.3)",
            arrowColor: "rgba(99, 102, 241, 0.8)",
        },
        {
            id: "dialogue",
            name: "Dialogue Practice",
            icon: "💬",
            description: "Complete conversations in the target language!",
            gradient:
                "linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2))",
            borderColor: "rgba(34, 197, 94, 0.4)",
            hoverBorder: "rgba(34, 197, 94, 0.6)",
            shadowColor: "rgba(34, 197, 94, 0.3)",
            arrowColor: "rgba(34, 197, 94, 0.8)",
            supportedLanguages: ["tokipona", "kokanu"],
        },
    ];
</script>

<svelte:head>
    <title>Games | {info.name} | LinguaQuest</title>
</svelte:head>

<div class="games-container">
    <header class="games-header">
        <a href="/{data.language}" class="back-link">← Back to {info.name}</a>
        <div class="title-row">
            <span class="title-icon">🎮</span>
            <h1>{info.name} Games</h1>
        </div>
        <p class="subtitle">Practice your vocabulary with fun mini-games!</p>
    </header>

    <div class="games-grid">
        {#each games as game}
            {#if !game.supportedLanguages || game.supportedLanguages.includes(data.language)}
                <a
                    href="/{data.language}/games/{game.id}"
                    class="game-card"
                    style="
                    background: {game.gradient};
                    border-color: {game.borderColor};
                    --hover-border: {game.hoverBorder};
                    --shadow-color: {game.shadowColor};
                    --arrow-color: {game.arrowColor};
                "
                >
                    <div class="game-icon">{game.icon}</div>
                    <div class="game-info">
                        <h3 class="game-name">{game.name}</h3>
                        <p class="game-description">{game.description}</p>
                    </div>
                    <div class="game-arrow">→</div>
                </a>
            {/if}
        {/each}
    </div>
</div>

<style>
    .games-container {
        max-width: 700px;
        margin: 0 auto;
        padding: var(--space-6);
    }

    .games-header {
        text-align: center;
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

    .title-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--space-3);
        margin-bottom: var(--space-2);
    }

    .title-icon {
        font-size: 2.5rem;
    }

    .title-row h1 {
        font-size: var(--font-size-3xl);
        font-weight: 800;
    }

    .subtitle {
        color: var(--color-text-secondary);
        font-size: var(--font-size-md);
    }

    .games-grid {
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
        border-color: var(--hover-border);
        box-shadow: 0 8px 25px var(--shadow-color);
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
        color: var(--arrow-color);
        font-weight: bold;
    }
</style>
