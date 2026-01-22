import { redirect } from '@sveltejs/kit';
import { validateSession, getSessionCookieName, getUserById } from '$lib/server/auth.js';

// Routes that require authentication
const PROTECTED_PATTERNS = [
    /^\/[^/]+\/[^/]+$/, // /lang/lesson (e.g., /globasa/greetings)
    /^\/[^/]+\/games\//, // /lang/games/* (e.g., /globasa/games/flashcards)
    /^\/[^/]+\/challenge$/, // /lang/challenge
];

// Routes that are always public
const PUBLIC_ROUTES = [
    '/',
    '/login',
    '/profile',
];

function isProtectedRoute(pathname) {
    // Check if it's explicitly public
    if (PUBLIC_ROUTES.includes(pathname)) {
        return false;
    }

    // Check if it's a language page root (e.g., /globasa, /tokipona) - these are public
    if (/^\/[^/]+$/.test(pathname) && !pathname.includes('.')) {
        return false;
    }

    // Check if it's a dictionary page - these are public
    if (/^\/[^/]+\/dictionary$/.test(pathname)) {
        return false;
    }

    // Check against protected patterns
    return PROTECTED_PATTERNS.some(pattern => pattern.test(pathname));
}

export async function handle({ event, resolve }) {
    // Get session cookie
    const sessionId = event.cookies.get(getSessionCookieName());

    // Validate session
    const userId = validateSession(sessionId);

    if (userId) {
        // Authenticated user
        const user = getUserById(userId);
        event.locals.user = user;
        event.locals.userId = userId;
    } else {
        // No user - set to null (no guest mode)
        event.locals.user = null;
        event.locals.userId = null;
    }

    // Check if route requires authentication
    if (isProtectedRoute(event.url.pathname) && !event.locals.userId) {
        // Redirect to login with return URL
        const returnUrl = encodeURIComponent(event.url.pathname);
        throw redirect(303, `/login?returnUrl=${returnUrl}`);
    }

    return resolve(event);
}
