import { getUserStats, getAchievements, getAllProgress } from '$lib/server/queries.js';

export function load({ locals }) {
    const userId = locals.userId;

    // If not logged in, return empty data
    if (!userId) {
        return {
            stats: { current_streak: 0, longest_streak: 0, total_xp: 0, current_level: 1 },
            achievements: [],
            completedLessons: 0,
            unlockedAchievements: 0
        };
    }

    const stats = getUserStats(userId);
    const achievements = getAchievements(userId);

    // Count completed lessons across all languages
    const globasaProgress = getAllProgress('globasa', userId);
    const esperantoProgress = getAllProgress('esperanto', userId);
    const tokiponaProgress = getAllProgress('tokipona', userId);
    const unaProgress = getAllProgress('una', userId);
    const kokanuProgress = getAllProgress('kokanu', userId);

    const completedLessons =
        globasaProgress.filter(l => l.completed).length +
        esperantoProgress.filter(l => l.completed).length +
        tokiponaProgress.filter(l => l.completed).length +
        unaProgress.filter(l => l.completed).length +
        kokanuProgress.filter(l => l.completed).length;

    const unlockedAchievements = achievements.filter(a => a.unlocked).length;

    return {
        stats,
        achievements,
        completedLessons,
        unlockedAchievements
    };
}

