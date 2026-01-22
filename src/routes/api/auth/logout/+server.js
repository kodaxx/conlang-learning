import { redirect } from '@sveltejs/kit';
import { destroySession, getSessionCookieName } from '$lib/server/auth.js';

async function handleLogout(cookies) {
    const sessionId = cookies.get(getSessionCookieName());

    if (sessionId) {
        destroySession(sessionId);
    }

    cookies.delete(getSessionCookieName(), { path: '/' });

    throw redirect(303, '/');
}

export async function POST({ cookies }) {
    return handleLogout(cookies);
}

export async function GET({ cookies }) {
    return handleLogout(cookies);
}
