import { getAllProgress, getAchievements } from '$lib/server/queries.js';
import { esperantoCurriculum } from '$lib/data/esperanto/index.js';
import { tokiponaCurriculum } from '$lib/data/tokipona/index.js';
import { unaCurriculum } from '$lib/data/una/index.js';
import { kokanuCurriculum } from '$lib/data/kokanu/index.js';
import { globasaCurriculum } from '$lib/data/globasa/index.js';

export function load({ locals }) {
    const userId = locals.userId;

    // Progress is shown for all users (0 if not logged in)
    const esperantoLessons = userId ? getAllProgress('esperanto', userId) : [];
    const tokiponaLessons = userId ? getAllProgress('tokipona', userId) : [];
    const unaLessons = userId ? getAllProgress('una', userId) : [];
    const kokanuLessons = userId ? getAllProgress('kokanu', userId) : [];
    const globasaLessons = userId ? getAllProgress('globasa', userId) : [];
    const achievements = userId ? getAchievements(userId) : [];

    const esperantoCompleted = esperantoLessons.filter(l => l.completed).length;
    const tokiponaCompleted = tokiponaLessons.filter(l => l.completed).length;
    const unaCompleted = unaLessons.filter(l => l.completed).length;
    const kokanuCompleted = kokanuLessons.filter(l => l.completed).length;
    const globasaCompleted = globasaLessons.filter(l => l.completed).length;

    return {
        user: locals.user || null,
        esperantoProgress: {
            completed: esperantoCompleted,
            total: esperantoCurriculum.lessons.length
        },
        tokiponaProgress: {
            completed: tokiponaCompleted,
            total: tokiponaCurriculum.lessons.length
        },
        unaProgress: {
            completed: unaCompleted,
            total: unaCurriculum.lessons.length
        },
        kokanuProgress: {
            completed: kokanuCompleted,
            total: kokanuCurriculum.lessons.length
        },
        globasaProgress: {
            completed: globasaCompleted,
            total: globasaCurriculum.lessons.length
        },
        recentAchievements: achievements.filter(a => a.unlocked).slice(0, 4)
    };
}
