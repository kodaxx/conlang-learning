import db from './db.js';

// ============================================
// SM-2 Algorithm Constants
// ============================================

// Learning phase steps (in minutes)
const LEARNING_STEPS = [1, 10];

// Intervals (in days)
const GRADUATING_INTERVAL = 1;  // Days after graduating from learning
const EASY_INTERVAL = 4;        // Days when pressing Easy on new card

// Ease factor bounds
const EASE_MINIMUM = 1.3;
const EASE_DEFAULT = 2.5;
const EASE_BONUS_EASY = 0.15;
const EASE_PENALTY_HARD = 0.15;
const EASE_PENALTY_AGAIN = 0.2;

// Rating enum
export const Rating = {
    AGAIN: 1,
    HARD: 2,
    GOOD: 3,
    EASY: 4
};

// Card status enum
export const CardStatus = {
    NEW: 'new',
    LEARNING: 'learning',
    REVIEW: 'review',
    RELEARNING: 'relearning'
};

// Default user ID for backwards compatibility
const DEFAULT_USER_ID = 1;

// ============================================
// Core SRS Functions
// ============================================

/**
 * Calculate next review based on current card state and rating
 */
export function calculateNextReview(card, rating) {
    const now = new Date();
    let { ease_factor, interval_days, repetitions, status, learning_step } = card;

    let newEase = ease_factor;
    let newInterval = interval_days;
    let newRepetitions = repetitions;
    let newStatus = status;
    let newLearningStep = learning_step;
    let dueDate;

    if (status === CardStatus.NEW || status === CardStatus.LEARNING) {
        // Card is in learning phase
        switch (rating) {
            case Rating.AGAIN:
                // Reset to first step
                newLearningStep = 0;
                newStatus = CardStatus.LEARNING;
                dueDate = addMinutes(now, LEARNING_STEPS[0]);
                break;

            case Rating.HARD:
                // Repeat current step (or halfway to next)
                newStatus = CardStatus.LEARNING;
                const hardDelay = learning_step < LEARNING_STEPS.length
                    ? LEARNING_STEPS[learning_step] * 1.5
                    : LEARNING_STEPS[LEARNING_STEPS.length - 1];
                dueDate = addMinutes(now, hardDelay);
                break;

            case Rating.GOOD:
                // Move to next step or graduate
                if (learning_step >= LEARNING_STEPS.length - 1) {
                    // Graduate to review
                    newStatus = CardStatus.REVIEW;
                    newInterval = GRADUATING_INTERVAL;
                    newRepetitions = 1;
                    dueDate = addDays(now, GRADUATING_INTERVAL);
                } else {
                    // Move to next step
                    newLearningStep = learning_step + 1;
                    newStatus = CardStatus.LEARNING;
                    dueDate = addMinutes(now, LEARNING_STEPS[newLearningStep]);
                }
                break;

            case Rating.EASY:
                // Graduate immediately with easy bonus
                newStatus = CardStatus.REVIEW;
                newInterval = EASY_INTERVAL;
                newRepetitions = 1;
                newEase = Math.max(EASE_MINIMUM, ease_factor + EASE_BONUS_EASY);
                dueDate = addDays(now, EASY_INTERVAL);
                break;
        }
    } else {
        // Card is in review or relearning phase
        switch (rating) {
            case Rating.AGAIN:
                // Card lapsed - go to relearning
                newStatus = CardStatus.RELEARNING;
                newLearningStep = 0;
                newRepetitions = 0;
                newEase = Math.max(EASE_MINIMUM, ease_factor - EASE_PENALTY_AGAIN);
                // New interval is a fraction of old interval (lapse penalty)
                newInterval = Math.max(1, Math.round(interval_days * 0.1));
                dueDate = addMinutes(now, LEARNING_STEPS[0]);
                break;

            case Rating.HARD:
                // Slightly increase interval, decrease ease
                newEase = Math.max(EASE_MINIMUM, ease_factor - EASE_PENALTY_HARD);
                newInterval = Math.max(interval_days + 1, Math.round(interval_days * 1.2));
                newRepetitions = repetitions + 1;
                newStatus = CardStatus.REVIEW;
                dueDate = addDays(now, newInterval);
                break;

            case Rating.GOOD:
                // Normal increase based on ease factor
                newInterval = Math.max(interval_days + 1, Math.round(interval_days * ease_factor));
                newRepetitions = repetitions + 1;
                newStatus = CardStatus.REVIEW;
                dueDate = addDays(now, newInterval);
                break;

            case Rating.EASY:
                // Larger increase, boost ease factor
                newEase = ease_factor + EASE_BONUS_EASY;
                newInterval = Math.max(interval_days + 1, Math.round(interval_days * ease_factor * 1.3));
                newRepetitions = repetitions + 1;
                newStatus = CardStatus.REVIEW;
                dueDate = addDays(now, newInterval);
                break;
        }
    }

    return {
        ease_factor: newEase,
        interval_days: newInterval,
        repetitions: newRepetitions,
        status: newStatus,
        learning_step: newLearningStep,
        due_date: dueDate.toISOString(),
        last_review_date: now.toISOString()
    };
}

/**
 * Get interval preview text for UI buttons
 */
export function getIntervalPreview(card, rating) {
    const result = calculateNextReview(card, rating);
    const now = new Date();
    const due = new Date(result.due_date);
    const diffMs = due - now;
    const diffMins = Math.round(diffMs / (1000 * 60));
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) {
        return `${diffMins}m`;
    } else if (diffMins < 1440) {
        return `${Math.round(diffMins / 60)}h`;
    } else if (diffDays < 30) {
        return `${diffDays}d`;
    } else if (diffDays < 365) {
        return `${Math.round(diffDays / 30)}mo`;
    } else {
        return `${Math.round(diffDays / 365)}y`;
    }
}

// ============================================
// Database Operations
// ============================================

/**
 * Get cards due for review (past their due date)
 */
export function getDueCards(userId = DEFAULT_USER_ID, language, limit = 20) {
    const now = new Date().toISOString();
    return db.prepare(`
        SELECT * FROM srs_cards 
        WHERE user_id = ? 
          AND language = ? 
          AND status IN ('review', 'relearning')
          AND due_date <= ?
        ORDER BY due_date ASC
        LIMIT ?
    `).all(userId, language, now, limit);
}

/**
 * Get cards currently in learning phase
 */
export function getLearningCards(userId = DEFAULT_USER_ID, language, limit = 20) {
    const now = new Date().toISOString();
    return db.prepare(`
        SELECT * FROM srs_cards 
        WHERE user_id = ? 
          AND language = ? 
          AND status = 'learning'
          AND due_date <= ?
        ORDER BY due_date ASC
        LIMIT ?
    `).all(userId, language, now, limit);
}

/**
 * Get new cards that haven't been studied
 */
export function getNewCards(userId = DEFAULT_USER_ID, language, limit = 10) {
    return db.prepare(`
        SELECT * FROM srs_cards 
        WHERE user_id = ? 
          AND language = ? 
          AND status = 'new'
        ORDER BY id ASC
        LIMIT ?
    `).all(userId, language, limit);
}

/**
 * Get deck statistics for a user/language
 */
export function getDeckStats(userId = DEFAULT_USER_ID, language) {
    const now = new Date().toISOString();

    const newCount = db.prepare(`
        SELECT COUNT(*) as count FROM srs_cards 
        WHERE user_id = ? AND language = ? AND status = 'new'
    `).get(userId, language).count;

    const learningCount = db.prepare(`
        SELECT COUNT(*) as count FROM srs_cards 
        WHERE user_id = ? AND language = ? AND status = 'learning'
    `).get(userId, language).count;

    const dueCount = db.prepare(`
        SELECT COUNT(*) as count FROM srs_cards 
        WHERE user_id = ? AND language = ? 
          AND status IN ('review', 'relearning')
          AND due_date <= ?
    `).get(userId, language, now).count;

    const totalCount = db.prepare(`
        SELECT COUNT(*) as count FROM srs_cards 
        WHERE user_id = ? AND language = ?
    `).get(userId, language).count;

    return { new: newCount, learning: learningCount, due: dueCount, total: totalCount };
}

/**
 * Record a review and update card
 */
export function recordReview(userId = DEFAULT_USER_ID, cardId, rating, reviewTimeMs = 0) {
    const card = db.prepare('SELECT * FROM srs_cards WHERE id = ? AND user_id = ?').get(cardId, userId);
    if (!card) return null;

    const newState = calculateNextReview(card, rating);

    // Update card
    db.prepare(`
        UPDATE srs_cards 
        SET ease_factor = ?,
            interval_days = ?,
            repetitions = ?,
            status = ?,
            learning_step = ?,
            due_date = ?,
            last_review_date = ?
        WHERE id = ?
    `).run(
        newState.ease_factor,
        newState.interval_days,
        newState.repetitions,
        newState.status,
        newState.learning_step,
        newState.due_date,
        newState.last_review_date,
        cardId
    );

    // Log review
    db.prepare(`
        INSERT INTO srs_review_log (user_id, card_id, rating, interval_before, interval_after, ease_before, ease_after, review_time_ms)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
        userId,
        cardId,
        rating,
        card.interval_days,
        newState.interval_days,
        card.ease_factor,
        newState.ease_factor,
        reviewTimeMs
    );

    return newState;
}

/**
 * Initialize cards from a word list for a user
 */
export function initializeCards(userId = DEFAULT_USER_ID, language, words) {
    const insertCard = db.prepare(`
        INSERT OR IGNORE INTO srs_cards (user_id, language, word, translation, phonetic, literal)
        VALUES (?, ?, ?, ?, ?, ?)
    `);

    let count = 0;
    for (const w of words) {
        const result = insertCard.run(
            userId,
            language,
            w.word,
            w.translation,
            w.phonetic || null,
            w.literal || null
        );
        if (result.changes > 0) count++;
    }

    return { added: count };
}

/**
 * Get a card by ID
 */
export function getCard(userId = DEFAULT_USER_ID, cardId) {
    return db.prepare('SELECT * FROM srs_cards WHERE id = ? AND user_id = ?').get(cardId, userId);
}

// ============================================
// Helper Functions
// ============================================

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60 * 1000);
}

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
