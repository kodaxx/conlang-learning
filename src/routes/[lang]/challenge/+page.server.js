import { error } from '@sveltejs/kit';
import { esperantoCurriculum } from '$lib/data/esperanto/index.js';
import { tokiponaCurriculum } from '$lib/data/tokipona/index.js';
import { unaCurriculum } from '$lib/data/una/index.js';
import { kokanuCurriculum } from '$lib/data/kokanu/index.js';
import { globasaCurriculum } from '$lib/data/globasa/index.js';
import { getAllProgress } from '$lib/server/queries.js';

const curricula = {
    esperanto: esperantoCurriculum,
    tokipona: tokiponaCurriculum,
    una: unaCurriculum,
    kokanu: kokanuCurriculum,
    globasa: globasaCurriculum
};

export function load({ params }) {
    const curriculum = curricula[params.lang];

    if (!curriculum) {
        throw error(404, 'Language not found');
    }

    // Get lesson progress from database
    const lessonProgress = getAllProgress(params.lang);

    // Get completed lesson IDs from progress
    const completedLessonIds = lessonProgress
        .filter(p => p.completed)
        .map(p => p.lesson_id);

    // Collect exercises from completed lessons
    const allExercises = [];
    for (const lessonId of completedLessonIds) {
        const lesson = curriculum.lessons.find(l => l.id === lessonId);
        if (lesson && lesson.exercises) {
            // Add lesson info to each exercise for context
            for (const exercise of lesson.exercises) {
                allExercises.push({
                    ...exercise,
                    lessonId: lesson.id,
                    lessonName: lesson.name
                });
            }
        }
    }

    // Shuffle exercises using Fisher-Yates
    for (let i = allExercises.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allExercises[i], allExercises[j]] = [allExercises[j], allExercises[i]];
    }

    // Limit to a reasonable number (e.g., 15 exercises)
    const challengeExercises = allExercises.slice(0, 15);

    return {
        language: params.lang,
        curriculum,
        exercises: challengeExercises,
        totalCompleted: completedLessonIds.length
    };
}
