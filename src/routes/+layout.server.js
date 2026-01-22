import { getUserStats } from '$lib/server/queries.js';

export function load({ locals }) {
    const stats = locals.userId ? getUserStats(locals.userId) : null;
    return {
        stats,
        user: locals.user || null
    };
}
