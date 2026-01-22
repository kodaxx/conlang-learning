import { json, error } from '@sveltejs/kit';
import { completeLesson, addXP } from '$lib/server/queries.js';

export async function POST({ request, locals }) {
    // Require authentication
    if (!locals.userId) {
        throw error(401, 'Authentication required');
    }

    const { language, lessonId, score, xp } = await request.json();

    completeLesson(language, lessonId, score, locals.userId);
    const xpResult = addXP(xp, locals.userId);

    return json({
        success: true,
        xp: xpResult
    });
}

