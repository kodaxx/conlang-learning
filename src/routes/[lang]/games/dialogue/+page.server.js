import { error } from '@sveltejs/kit';
import { getAllProgress } from '$lib/server/queries.js';
import { globasaCurriculum } from '$lib/data/globasa/index.js';
import { tokiponaCurriculum } from '$lib/data/tokipona/index.js';
import { kokanuCurriculum } from '$lib/data/kokanu/index.js';
import tokiponaDialogues from '$lib/data/tokipona/dialogues.js';
import kokanuDialogues from '$lib/data/kokanu/dialogues.js';
import globasaDialogues from '$lib/data/globasa/dialogues.js';

const dialogueSets = {
    tokipona: tokiponaDialogues,
    kokanu: kokanuDialogues,
    globasa: globasaDialogues
};

const curricula = {
    tokipona: tokiponaCurriculum,
    kokanu: kokanuCurriculum,
    globasa: globasaCurriculum
};

/**
 * Gets the highest completed unit for a language
 * @param {string} lang - The language code
 * @param {number|null} userId - The user ID
 * @returns {number} - The highest unit number with all lessons completed (0 if none)
 */
function getCompletedUnits(lang, userId) {
    const lessonProgress = userId ? getAllProgress(lang, userId) : [];
    const completedLessonIds = new Set(
        lessonProgress.filter(p => p.completed).map(p => p.lesson_id)
    );

    const curriculum = curricula[lang];
    if (!curriculum?.units) {
        // No units defined - return all dialogues unlocked
        return 999;
    }

    const completedUnits = [];
    for (const unit of curriculum.units) {
        // Check if all lessons in the unit are completed
        const unitLessons = unit.lessons || [];
        if (unitLessons.length === 0) continue;

        const allCompleted = unitLessons.every(lesson => completedLessonIds.has(lesson.id));
        if (allCompleted) {
            completedUnits.push(unit.id);
        }
    }

    return completedUnits;
}

export function load({ params, locals }) {
    const allDialogues = dialogueSets[params.lang];

    if (!allDialogues) {
        throw error(404, `Dialogue game not available for ${params.lang}`);
    }

    // Get completed units for this user
    const completedUnits = getCompletedUnits(params.lang, locals.userId);

    // Filter dialogues to only include those from completed units
    // If dialogues don't have unit property, include them all (legacy support)
    const availableDialogues = allDialogues.filter(dialogue => {
        if (dialogue.unit === undefined) return true; // Legacy dialogues
        return completedUnits.includes(dialogue.unit);
    });

    // Calculate locked dialogues for display
    const lockedDialogues = allDialogues.filter(dialogue => {
        if (dialogue.unit === undefined) return false;
        return !completedUnits.includes(dialogue.unit);
    });

    // Shuffle available dialogues
    const shuffled = [...availableDialogues].sort(() => Math.random() - 0.5);

    return {
        language: params.lang,
        dialogues: shuffled,
        totalDialogues: allDialogues.length,
        lockedCount: lockedDialogues.length,
        completedUnits: completedUnits,
        hasUnits: curricula[params.lang]?.units?.length > 0
    };
}

