import db from './db.js';

// ============================================
// Constants
// ============================================

// Default user ID for backwards compatibility (guest user)
const DEFAULT_USER_ID = 1;

// ============================================
// User Management
// ============================================

export function getUser(userId) {
    return db.prepare('SELECT id, username, email, created_at, last_login FROM users WHERE id = ?').get(userId);
}

export function getUserByUsername(username) {
    return db.prepare('SELECT * FROM users WHERE username = ?').get(username);
}

export function createUser(username, email, passwordHash) {
    const result = db.prepare(`
        INSERT INTO users (username, email, password_hash)
        VALUES (?, ?, ?)
    `).run(username, email || null, passwordHash);

    // Create user_stats for the new user
    db.prepare('INSERT INTO user_stats (user_id) VALUES (?)').run(result.lastInsertRowid);

    return { userId: result.lastInsertRowid };
}

export function updateLastLogin(userId) {
    const now = new Date().toISOString();
    db.prepare('UPDATE users SET last_login = ? WHERE id = ?').run(now, userId);
}

// ============================================
// User Stats
// ============================================

export function getUserStats(userId = DEFAULT_USER_ID) {
    return db.prepare('SELECT * FROM user_stats WHERE user_id = ?').get(userId);
}

export function addXP(amount, userId = DEFAULT_USER_ID) {
    const stats = getUserStats(userId);
    if (!stats) return null;

    const newXP = stats.total_xp + amount;
    const newLevel = calculateLevel(newXP);

    db.prepare(`
        UPDATE user_stats 
        SET total_xp = ?, current_level = ?
        WHERE user_id = ?
    `).run(newXP, newLevel, userId);

    // Check XP achievements
    checkXPAchievements(newXP, userId);

    return { totalXP: newXP, level: newLevel, xpGained: amount };
}

export function calculateLevel(xp) {
    // Level formula: Level = floor(sqrt(XP / 100)) + 1
    return Math.floor(Math.sqrt(xp / 100)) + 1;
}

export function getXPForLevel(level) {
    // Inverse of level formula
    return Math.pow(level - 1, 2) * 100;
}

export function updateStreak(userId = DEFAULT_USER_ID) {
    const stats = getUserStats(userId);
    if (!stats) return null;

    const today = new Date().toISOString().split('T')[0];
    const lastPractice = stats.last_practice_date;

    let newStreak = stats.current_streak;

    if (!lastPractice) {
        newStreak = 1;
    } else if (lastPractice === today) {
        // Already practiced today, no change
        return { streak: newStreak, isNew: false };
    } else {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        if (lastPractice === yesterdayStr) {
            newStreak += 1;
        } else {
            // Streak broken
            newStreak = 1;
        }
    }

    const longestStreak = Math.max(stats.longest_streak, newStreak);

    db.prepare(`
        UPDATE user_stats 
        SET current_streak = ?, longest_streak = ?, last_practice_date = ?
        WHERE user_id = ?
    `).run(newStreak, longestStreak, today, userId);

    // Check streak achievements
    checkStreakAchievements(newStreak, userId);

    return { streak: newStreak, isNew: true };
}

// ============================================
// Lesson Progress
// ============================================

export function getLessonProgress(language, lessonId, userId = DEFAULT_USER_ID) {
    return db.prepare(`
        SELECT * FROM lesson_progress 
        WHERE user_id = ? AND language = ? AND lesson_id = ?
    `).get(userId, language, lessonId);
}

export function getAllProgress(language, userId = DEFAULT_USER_ID) {
    return db.prepare(`
        SELECT * FROM lesson_progress 
        WHERE user_id = ? AND language = ?
    `).all(userId, language);
}

export function completeLesson(language, lessonId, score, userId = DEFAULT_USER_ID) {
    const existing = getLessonProgress(language, lessonId, userId);
    const now = new Date().toISOString();

    if (existing) {
        db.prepare(`
            UPDATE lesson_progress 
            SET completed = 1, 
                best_score = MAX(best_score, ?),
                times_completed = times_completed + 1,
                last_completed_at = ?
            WHERE user_id = ? AND language = ? AND lesson_id = ?
        `).run(score, now, userId, language, lessonId);
    } else {
        db.prepare(`
            INSERT INTO lesson_progress (user_id, language, lesson_id, completed, best_score, times_completed, last_completed_at)
            VALUES (?, ?, ?, 1, ?, 1, ?)
        `).run(userId, language, lessonId, score, now);

        // First lesson achievement
        const allProgress = db.prepare('SELECT COUNT(*) as count FROM lesson_progress WHERE user_id = ? AND completed = 1').get(userId);
        if (allProgress.count === 1) {
            unlockAchievement('first_lesson', userId);
        }
    }

    // Check if perfect score
    if (score === 100) {
        unlockAchievement('perfect_lesson', userId);
    }

    // Check polyglot achievement (both languages started)
    const espProgress = db.prepare("SELECT COUNT(*) as count FROM lesson_progress WHERE user_id = ? AND language = 'esperanto' AND completed = 1").get(userId);
    const tpProgress = db.prepare("SELECT COUNT(*) as count FROM lesson_progress WHERE user_id = ? AND language = 'tokipona' AND completed = 1").get(userId);
    if (espProgress.count > 0 && tpProgress.count > 0) {
        unlockAchievement('polyglot_start', userId);
    }

    // Update streak
    updateStreak(userId);

    return { success: true };
}

// ============================================
// Achievements
// ============================================

export function getAchievements(userId = DEFAULT_USER_ID) {
    // Get all achievements with user unlock status
    return db.prepare(`
        SELECT a.id, a.name, a.description, a.icon, 
               ua.unlocked_at IS NOT NULL as unlocked, 
               ua.unlocked_at
        FROM achievements a
        LEFT JOIN user_achievements ua ON ua.achievement_id = a.id AND ua.user_id = ?
        ORDER BY unlocked DESC, a.id
    `).all(userId);
}

export function unlockAchievement(achievementId, userId = DEFAULT_USER_ID) {
    try {
        const result = db.prepare(`
            INSERT OR IGNORE INTO user_achievements (user_id, achievement_id)
            VALUES (?, ?)
        `).run(userId, achievementId);

        return result.changes > 0;
    } catch (e) {
        return false;
    }
}

function checkXPAchievements(xp, userId) {
    if (xp >= 100) unlockAchievement('xp_100', userId);
    if (xp >= 500) unlockAchievement('xp_500', userId);
    if (xp >= 1000) unlockAchievement('xp_1000', userId);
}

function checkStreakAchievements(streak, userId) {
    if (streak >= 3) unlockAchievement('streak_3', userId);
    if (streak >= 7) unlockAchievement('streak_7', userId);
    if (streak >= 30) unlockAchievement('streak_30', userId);
}
