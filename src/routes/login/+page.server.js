import { fail, redirect } from '@sveltejs/kit';
import { createUser, authenticateUser, createSession, getSessionCookieName, getSessionMaxAge } from '$lib/server/auth.js';

export const actions = {
    login: async ({ request, cookies, url }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        const returnUrl = url.searchParams.get('returnUrl') || '/';

        if (!username || !password) {
            return fail(400, { error: 'Username and password are required' });
        }

        const result = await authenticateUser(username, password);

        if (result.error) {
            return fail(400, { error: result.error });
        }

        // Create session
        const session = createSession(result.userId);

        // Set cookie
        cookies.set(getSessionCookieName(), session.sessionId, {
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
            secure: false,
            maxAge: getSessionMaxAge()
        });

        throw redirect(303, decodeURIComponent(returnUrl));
    },

    register: async ({ request, cookies, url }) => {
        const data = await request.formData();
        const username = data.get('username');
        const email = data.get('email');
        const password = data.get('password');
        const returnUrl = url.searchParams.get('returnUrl') || '/';

        if (!username || !password) {
            return fail(400, { error: 'Username and password are required' });
        }

        const result = await createUser(username, email || null, password);

        if (result.error) {
            return fail(400, { error: result.error });
        }

        // Create session for new user
        const session = createSession(result.userId);

        // Set cookie
        cookies.set(getSessionCookieName(), session.sessionId, {
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
            secure: false,
            maxAge: getSessionMaxAge()
        });

        throw redirect(303, decodeURIComponent(returnUrl));
    }
};

