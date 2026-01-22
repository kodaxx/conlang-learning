<script>
    let { data } = $props();

    let searchQuery = $state("");
    let activeCategory = $state("all");
    let showCore = $state(true);
    let showCompounds = $state(true);

    const langInfo = {
        esperanto: { name: "Esperanto", icon: "🌍" },
        tokipona: { name: "Toki Pona", icon: "🗿" },
        una: { name: "Una", icon: "🌐" },
        kokanu: { name: "Kokanu", icon: "🌏" },
        globasa: { name: "Globasa", icon: "🌐" },
    };

    const info = langInfo[data.language] || langInfo.tokipona;

    // Filter function
    const filteredEntries = $derived(() => {
        let core = showCore ? data.dictionary.core : [];
        let compounds = showCompounds ? data.dictionary.compounds : [];

        // Apply category filter
        if (activeCategory !== "all") {
            core = core.filter((w) => w.category === activeCategory);
            compounds = compounds.filter((w) => w.category === activeCategory);
        }

        // Apply search filter
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase().trim();
            core = core.filter(
                (w) =>
                    w.word.includes(q) ||
                    w.translation.toLowerCase().includes(q),
            );
            compounds = compounds.filter(
                (w) =>
                    w.compound.includes(q) ||
                    w.meaning.toLowerCase().includes(q) ||
                    w.literal.toLowerCase().includes(q),
            );
        }

        return { core, compounds };
    });

    const totalResults = $derived(() => {
        const entries = filteredEntries();
        return entries.core.length + entries.compounds.length;
    });
</script>

<svelte:head>
    <title>Dictionary | {info.name} | LinguaQuest</title>
</svelte:head>

<div class="dictionary-container">
    <header class="dictionary-header">
        <a href="/{data.language}" class="back-link">← Back to {info.name}</a>
        <div class="title-row">
            <span class="title-icon">📖</span>
            <h1>{info.name} Dictionary</h1>
        </div>
        <p class="subtitle">
            {data.dictionary.core.length} core words + {data.dictionary
                .compounds.length} compound phrases
        </p>
    </header>

    <div class="search-section">
        <div class="search-box">
            <span class="search-icon">🔍</span>
            <input
                type="text"
                bind:value={searchQuery}
                placeholder="Search words or meanings..."
                class="search-input"
            />
            {#if searchQuery}
                <button class="clear-btn" onclick={() => (searchQuery = "")}
                    >✕</button
                >
            {/if}
        </div>

        <div class="filters">
            <div class="toggle-group">
                <button
                    class="toggle-btn"
                    class:active={showCore}
                    onclick={() => (showCore = !showCore)}
                >
                    Core Words
                </button>
                <button
                    class="toggle-btn"
                    class:active={showCompounds}
                    onclick={() => (showCompounds = !showCompounds)}
                >
                    Compounds
                </button>
            </div>

            <select bind:value={activeCategory} class="category-select">
                <option value="all">All Categories</option>
                {#each data.dictionary.categories as category}
                    <option value={category}>{category}</option>
                {/each}
            </select>
        </div>
    </div>

    <div class="results-info">
        Showing {totalResults()} entries
    </div>

    <div class="dictionary-content">
        {#if filteredEntries().core.length > 0}
            <section class="word-section">
                <h2 class="section-title">
                    <span class="section-icon">📚</span>
                    Core Words
                </h2>
                <div class="word-grid">
                    {#each filteredEntries().core as word}
                        <div class="word-card">
                            <div class="word-main">{word.word}</div>
                            <div class="word-translation">
                                {word.translation}
                            </div>
                            <span class="word-category">{word.category}</span>
                        </div>
                    {/each}
                </div>
            </section>
        {/if}

        {#if filteredEntries().compounds.length > 0}
            <section class="word-section">
                <h2 class="section-title">
                    <span class="section-icon">🔗</span>
                    Compound Words
                </h2>
                <div class="compound-grid">
                    {#each filteredEntries().compounds as word}
                        <div class="compound-card">
                            <div class="compound-main">{word.compound}</div>
                            <div class="compound-literal">"{word.literal}"</div>
                            <div class="compound-meaning">{word.meaning}</div>
                            <span class="compound-category"
                                >{word.category}</span
                            >
                        </div>
                    {/each}
                </div>
            </section>
        {/if}

        {#if filteredEntries().core.length === 0 && filteredEntries().compounds.length === 0}
            <div class="no-results">
                <span class="no-results-icon">🔍</span>
                <p>No entries found for "{searchQuery}"</p>
                <button
                    class="clear-search-btn"
                    onclick={() => {
                        searchQuery = "";
                        activeCategory = "all";
                    }}
                >
                    Clear filters
                </button>
            </div>
        {/if}
    </div>
</div>

<style>
    .dictionary-container {
        max-width: 900px;
        margin: 0 auto;
        padding: var(--space-6);
    }

    .dictionary-header {
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

    /* Search Section */
    .search-section {
        margin-bottom: var(--space-6);
    }

    .search-box {
        position: relative;
        margin-bottom: var(--space-4);
    }

    .search-icon {
        position: absolute;
        left: var(--space-4);
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.2rem;
        opacity: 0.6;
    }

    .search-input {
        width: 100%;
        padding: var(--space-4) var(--space-4) var(--space-4) var(--space-12);
        font-size: var(--font-size-lg);
        background: var(--color-surface);
        border: 2px solid var(--color-border);
        border-radius: var(--radius-xl);
        color: var(--color-text);
        transition: border-color var(--transition-fast);
    }

    .search-input:focus {
        outline: none;
        border-color: var(--color-primary-500);
    }

    .search-input::placeholder {
        color: var(--color-text-secondary);
    }

    .clear-btn {
        position: absolute;
        right: var(--space-4);
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: var(--color-text-secondary);
        cursor: pointer;
        font-size: 1.2rem;
        padding: var(--space-2);
    }

    .clear-btn:hover {
        color: var(--color-text);
    }

    .filters {
        display: flex;
        gap: var(--space-4);
        flex-wrap: wrap;
        align-items: center;
    }

    .toggle-group {
        display: flex;
        gap: var(--space-2);
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

    .toggle-btn:hover:not(.active) {
        border-color: var(--color-primary-400);
    }

    .category-select {
        padding: var(--space-2) var(--space-4);
        background: var(--color-surface);
        border: 2px solid var(--color-border);
        border-radius: var(--radius-lg);
        color: var(--color-text);
        font-size: var(--font-size-sm);
        cursor: pointer;
        min-width: 160px;
    }

    .results-info {
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
        margin-bottom: var(--space-4);
    }

    /* Sections */
    .word-section {
        margin-bottom: var(--space-8);
    }

    .section-title {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        font-size: var(--font-size-xl);
        font-weight: 600;
        margin-bottom: var(--space-4);
        color: var(--color-text);
    }

    .section-icon {
        font-size: 1.5rem;
    }

    /* Core Word Cards */
    .word-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: var(--space-4);
    }

    .word-card {
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        padding: var(--space-4);
        transition: all var(--transition-fast);
    }

    .word-card:hover {
        border-color: var(--color-primary-400);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .word-main {
        font-size: var(--font-size-xl);
        font-weight: 700;
        color: var(--color-primary-400);
        margin-bottom: var(--space-1);
    }

    .word-translation {
        font-size: var(--font-size-sm);
        color: var(--color-text);
        margin-bottom: var(--space-2);
    }

    .word-category {
        display: inline-block;
        font-size: var(--font-size-xs);
        color: var(--color-text-secondary);
        background: rgba(255, 255, 255, 0.1);
        padding: var(--space-1) var(--space-2);
        border-radius: var(--radius-md);
        text-transform: capitalize;
    }

    /* Compound Cards */
    .compound-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: var(--space-4);
    }

    .compound-card {
        background: linear-gradient(
            135deg,
            var(--color-surface),
            rgba(139, 92, 246, 0.05)
        );
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        padding: var(--space-4);
        transition: all var(--transition-fast);
    }

    .compound-card:hover {
        border-color: rgba(139, 92, 246, 0.5);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);
    }

    .compound-main {
        font-size: var(--font-size-lg);
        font-weight: 700;
        color: var(--color-xp-400);
        margin-bottom: var(--space-1);
    }

    .compound-literal {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
        font-style: italic;
        margin-bottom: var(--space-2);
    }

    .compound-meaning {
        font-size: var(--font-size-md);
        color: var(--color-text);
        margin-bottom: var(--space-2);
    }

    .compound-category {
        display: inline-block;
        font-size: var(--font-size-xs);
        color: rgba(139, 92, 246, 0.8);
        background: rgba(139, 92, 246, 0.1);
        padding: var(--space-1) var(--space-2);
        border-radius: var(--radius-md);
        text-transform: capitalize;
    }

    /* No Results */
    .no-results {
        text-align: center;
        padding: var(--space-12);
        color: var(--color-text-secondary);
    }

    .no-results-icon {
        font-size: 3rem;
        display: block;
        margin-bottom: var(--space-4);
        opacity: 0.5;
    }

    .clear-search-btn {
        margin-top: var(--space-4);
        padding: var(--space-2) var(--space-4);
        background: var(--color-primary-500);
        border: none;
        border-radius: var(--radius-lg);
        color: white;
        cursor: pointer;
        font-size: var(--font-size-sm);
    }

    .clear-search-btn:hover {
        background: var(--color-primary-600);
    }

    @media (max-width: 640px) {
        .filters {
            flex-direction: column;
            align-items: stretch;
        }

        .toggle-group {
            justify-content: center;
        }

        .category-select {
            width: 100%;
        }
    }
</style>
