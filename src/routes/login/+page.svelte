<script>
    import { enhance } from "$app/forms";
    import { page } from "$app/stores";

    let { form } = $props();

    let isLogin = $state(true);
    let loading = $state(false);

    // Preserve returnUrl in form action
    let formAction = $derived(() => {
        const base = isLogin ? "?/login" : "?/register";
        const returnUrl = $page.url.searchParams.get("returnUrl");
        return returnUrl
            ? `${base}&returnUrl=${encodeURIComponent(returnUrl)}`
            : base;
    });
</script>

<svelte:head>
    <title>{isLogin ? "Login" : "Register"} | LinguaQuest</title>
</svelte:head>

<div class="auth-container">
    <div class="auth-card">
        <div class="auth-header">
            <a href="/" class="logo">🌍 LinguaQuest</a>
            <h1>{isLogin ? "Welcome Back!" : "Create Account"}</h1>
            <p>
                {isLogin
                    ? "Sign in to continue learning"
                    : "Start your language journey"}
            </p>
        </div>

        {#if form?.error}
            <div class="error-message">
                {form.error}
            </div>
        {/if}

        <form
            method="POST"
            action={formAction()}
            use:enhance={() => {
                loading = true;
                return async ({ update }) => {
                    loading = false;
                    await update();
                };
            }}
        >
            <div class="form-group">
                <label for="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    minlength="3"
                    placeholder="Enter username"
                    autocomplete="username"
                />
            </div>

            {#if !isLogin}
                <div class="form-group">
                    <label for="email">Email (optional)</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        autocomplete="email"
                    />
                </div>
            {/if}

            <div class="form-group">
                <label for="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    minlength="6"
                    placeholder="Enter password"
                    autocomplete={isLogin ? "current-password" : "new-password"}
                />
            </div>

            <button type="submit" class="submit-btn" disabled={loading}>
                {#if loading}
                    Loading...
                {:else}
                    {isLogin ? "Sign In" : "Create Account"}
                {/if}
            </button>
        </form>

        <div class="auth-switch">
            {#if isLogin}
                <p>
                    Don't have an account?
                    <button type="button" onclick={() => (isLogin = false)}
                        >Register</button
                    >
                </p>
            {:else}
                <p>
                    Already have an account?
                    <button type="button" onclick={() => (isLogin = true)}
                        >Sign In</button
                    >
                </p>
            {/if}
        </div>
    </div>
</div>

<style>
    .auth-container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--space-4);
    }

    .auth-card {
        width: 100%;
        max-width: 400px;
        background: var(--color-surface);
        border: 2px solid var(--color-border);
        border-radius: var(--radius-2xl);
        padding: var(--space-8);
    }

    .auth-header {
        text-align: center;
        margin-bottom: var(--space-6);
    }

    .logo {
        font-size: var(--font-size-xl);
        font-weight: 800;
        text-decoration: none;
        color: var(--color-text);
    }

    .auth-header h1 {
        font-size: var(--font-size-2xl);
        font-weight: 700;
        margin-top: var(--space-4);
        margin-bottom: var(--space-2);
    }

    .auth-header p {
        color: var(--color-text-secondary);
    }

    .error-message {
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid var(--color-error);
        color: var(--color-error);
        padding: var(--space-3);
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-4);
        font-size: var(--font-size-sm);
    }

    .form-group {
        margin-bottom: var(--space-4);
    }

    .form-group label {
        display: block;
        font-size: var(--font-size-sm);
        font-weight: 600;
        color: var(--color-text-secondary);
        margin-bottom: var(--space-2);
    }

    .form-group input {
        width: 100%;
        padding: var(--space-3) var(--space-4);
        background: var(--color-bg-secondary);
        border: 2px solid var(--color-border);
        border-radius: var(--radius-lg);
        color: var(--color-text);
        font-size: var(--font-size-base);
        transition: border-color var(--transition-fast);
    }

    .form-group input:focus {
        outline: none;
        border-color: var(--color-primary);
    }

    .submit-btn {
        width: 100%;
        padding: var(--space-3) var(--space-4);
        background: linear-gradient(
            135deg,
            var(--color-primary-500),
            var(--color-primary-600)
        );
        border: none;
        border-radius: var(--radius-lg);
        color: white;
        font-size: var(--font-size-lg);
        font-weight: 600;
        cursor: pointer;
        transition: all var(--transition-fast);
    }

    .submit-btn:hover:not(:disabled) {
        transform: translateY(-2px);
    }

    .submit-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    .auth-switch {
        text-align: center;
        margin-top: var(--space-4);
        color: var(--color-text-secondary);
    }

    .auth-switch button {
        background: none;
        border: none;
        color: var(--color-primary);
        font-weight: 600;
        cursor: pointer;
        text-decoration: underline;
    }
</style>
