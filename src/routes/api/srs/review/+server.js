import { json, error } from '@sveltejs/kit';
import { recordReview, getCard, getIntervalPreview, Rating } from '$lib/server/srs.js';

export async function POST({ request, locals }) {
    const userId = locals.userId || 1;

    try {
        const body = await request.json();
        const { cardId, rating, reviewTimeMs } = body;

        if (!cardId || !rating) {
            throw error(400, 'cardId and rating are required');
        }

        if (![1, 2, 3, 4].includes(rating)) {
            throw error(400, 'rating must be 1 (Again), 2 (Hard), 3 (Good), or 4 (Easy)');
        }

        const result = recordReview(userId, cardId, rating, reviewTimeMs || 0);

        if (!result) {
            throw error(404, 'Card not found');
        }

        return json({
            success: true,
            newState: result
        });
    } catch (e) {
        console.error('Review error:', e);
        throw error(500, 'Failed to record review');
    }
}

// Get interval previews for a card
export async function GET({ url, locals }) {
    const userId = locals.userId || 1;
    const cardId = url.searchParams.get('cardId');

    if (!cardId) {
        throw error(400, 'cardId is required');
    }

    const card = getCard(userId, parseInt(cardId));

    if (!card) {
        throw error(404, 'Card not found');
    }

    // Calculate interval previews for each rating
    const previews = {
        again: getIntervalPreview(card, Rating.AGAIN),
        hard: getIntervalPreview(card, Rating.HARD),
        good: getIntervalPreview(card, Rating.GOOD),
        easy: getIntervalPreview(card, Rating.EASY)
    };

    return json(previews);
}
