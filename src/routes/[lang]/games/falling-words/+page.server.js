import { error } from '@sveltejs/kit';
import { getAllProgress } from '$lib/server/queries.js';
import { tokiponaCurriculum } from '$lib/data/tokipona/index.js';
import { esperantoCurriculum } from '$lib/data/esperanto/index.js';
import { unaCurriculum } from '$lib/data/una/index.js';
import { kokanuCurriculum } from '$lib/data/kokanu/index.js';
import { globasaCurriculum } from '$lib/data/globasa/index.js';
import { coreWords, compoundWords } from '$lib/data/tokipona/dictionary.js';
import { coreWords as unaCoreWords } from '$lib/data/una/dictionary.js';
import { playableWords as kokanuPlayableWords } from '$lib/data/kokanu/dictionary.js';
import { coreWords as globasaCoreWords } from '$lib/data/globasa/dictionary.js';

const curricula = {
    tokipona: tokiponaCurriculum,
    esperanto: esperantoCurriculum,
    una: unaCurriculum,
    kokanu: kokanuCurriculum,
    globasa: globasaCurriculum
};

export function load({ params, locals }) {
    const curriculum = curricula[params.lang];

    if (!curriculum) {
        throw error(404, 'Language not found');
    }

    const userId = locals.userId;

    // Get completed lessons for this user
    const lessonProgress = userId ? getAllProgress(params.lang, userId) : [];
    const completedLessonIds = lessonProgress
        .filter(p => p.completed)
        .map(p => p.lesson_id);

    // Build learned vocabulary from completed lessons
    const learnedWords = [];
    for (const lessonId of completedLessonIds) {
        const lesson = curriculum.lessons.find(l => l.id === lessonId);
        if (lesson?.vocabulary) {
            for (const word of lesson.vocabulary) {
                learnedWords.push({
                    word: word.word,
                    translations: parseTranslations(word.translation),
                    source: 'lesson'
                });
            }
        }
    }

    // Build full dictionary word pool
    let allWords = [];
    if (params.lang === 'tokipona') {
        // Core words
        for (const word of coreWords) {
            allWords.push({
                word: word.word,
                translations: parseTranslations(word.translation),
                source: 'core'
            });
        }
        // Compound words
        for (const word of compoundWords) {
            allWords.push({
                word: word.compound,
                translations: parseCompoundTranslations(word),
                source: 'compound'
            });
        }
    } else if (params.lang === 'una') {
        // Una core words
        for (const word of unaCoreWords) {
            allWords.push({
                word: word.word,
                translations: parseTranslations(word.translation),
                source: 'core'
            });
        }
    } else if (params.lang === 'kokanu') {
        // Kokanu playable words only (filters out grammar particles)
        for (const word of kokanuPlayableWords) {
            allWords.push({
                word: word.word,
                translations: parseTranslations(word.translation),
                source: 'core'
            });
        }
    } else if (params.lang === 'globasa') {
        // Globasa core words
        for (const word of globasaCoreWords) {
            allWords.push({
                word: word.word,
                translations: parseTranslations(word.translation),
                source: 'core'
            });
        }
    }

    return {
        language: params.lang,
        learnedWords,
        allWords,
        hasLearnedWords: learnedWords.length > 0
    };
}

// Parse comma-separated translations into array of acceptable answers
function parseTranslations(translation) {
    // Split on commas and clean up
    return translation
        .toLowerCase()
        .split(',')
        .map(t => t.trim())
        .filter(t => t.length > 0);
}

// Parse compound word translations (include literal + meaning)
function parseCompoundTranslations(word) {
    const translations = [];

    // Add the meaning
    translations.push(word.meaning.toLowerCase().trim());

    // Add literal translation (without quotes)
    translations.push(word.literal.toLowerCase().trim());

    // Add variations of the meaning (split by comma if present)
    const meaningParts = word.meaning.toLowerCase().split(',').map(m => m.trim());
    translations.push(...meaningParts);

    // Remove duplicates
    return [...new Set(translations)];
}
