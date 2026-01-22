import { error } from '@sveltejs/kit';
import { getAllProgress } from '$lib/server/queries.js';
import { getDueCards, getLearningCards, getNewCards, getDeckStats, initializeCards } from '$lib/server/srs.js';
import { tokiponaCurriculum } from '$lib/data/tokipona/index.js';
import { esperantoCurriculum } from '$lib/data/esperanto/index.js';
import { unaCurriculum } from '$lib/data/una/index.js';
import { kokanuCurriculum } from '$lib/data/kokanu/index.js';
import { globasaCurriculum } from '$lib/data/globasa/index.js';

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

    const userId = locals.userId || 1;
    const language = params.lang;

    // Get completed lessons for this user
    const lessonProgress = getAllProgress(language, userId);
    const completedLessonIds = lessonProgress
        .filter(p => p.completed)
        .map(p => p.lesson_id);

    // Build learned vocabulary from completed lessons only
    const learnedWords = [];
    for (const lessonId of completedLessonIds) {
        const lesson = curriculum.lessons.find(l => l.id === lessonId);
        if (lesson?.vocabulary) {
            for (const word of lesson.vocabulary) {
                // Avoid duplicates
                if (!learnedWords.some(w => w.word === word.word)) {
                    learnedWords.push({
                        word: word.word,
                        translation: word.translation,
                        phonetic: word.phonetic || null,
                        literal: word.literal || null
                    });
                }
            }
        }
    }

    // Initialize cards from learned words (adds any new words from newly completed lessons)
    if (learnedWords.length > 0) {
        initializeCards(userId, language, learnedWords);
    }

    // Get SRS deck statistics
    const stats = getDeckStats(userId, language);

    // Get cards for this session
    // Priority: learning cards first, then due cards, then new cards
    const learningCards = getLearningCards(userId, language, 10);
    const dueCards = getDueCards(userId, language, 20);
    const newCards = getNewCards(userId, language, Math.max(0, 10 - learningCards.length));

    // Combine into study deck
    const studyDeck = [...learningCards, ...dueCards, ...newCards];

    // Shuffle the deck slightly (keep some order but add variety)
    const shuffledDeck = studyDeck.sort(() => Math.random() - 0.3);

    return {
        language,
        deck: shuffledDeck,
        stats,
        userId,
        user: locals.user,
        completedLessons: completedLessonIds.length,
        learnedWordCount: learnedWords.length
    };
}
