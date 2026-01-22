import Database from 'better-sqlite3';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

// Use environment variable or default to ./data in the current working directory
const dataDir = process.env.DATA_DIR || join(process.cwd(), 'data');
const dbPath = join(dataDir, 'linguaquest.db');

// Ensure data directory exists
if (!existsSync(dataDir)) {
	mkdirSync(dataDir, { recursive: true });
}

console.log('Database path:', dbPath);

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

// Check if migration is needed (old schema didn't have user_id in user_stats)
try {
	const tableInfo = db.prepare("PRAGMA table_info(user_stats)").all();
	const hasUserId = tableInfo.some(col => col.name === 'user_id');

	if (tableInfo.length > 0 && !hasUserId) {
		// Old schema detected - need to drop and recreate tables
		console.log('Migrating database to new multi-user schema...');
		db.exec(`
            DROP TABLE IF EXISTS srs_review_log;
            DROP TABLE IF EXISTS srs_cards;
            DROP TABLE IF EXISTS user_achievements;
            DROP TABLE IF EXISTS lesson_progress;
            DROP TABLE IF EXISTS user_stats;
            DROP TABLE IF EXISTS achievements;
            DROP TABLE IF EXISTS users;
        `);
		console.log('Old tables dropped. Creating new schema...');
	}
} catch (e) {
	// Table doesn't exist yet, that's fine
}

// Initialize tables
db.exec(`
	-- Users table
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		username TEXT UNIQUE NOT NULL,
		email TEXT UNIQUE,
		password_hash TEXT NOT NULL,
		created_at TEXT DEFAULT CURRENT_TIMESTAMP,
		last_login TEXT
	);

	-- User stats (linked to user)
	CREATE TABLE IF NOT EXISTS user_stats (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		user_id INTEGER NOT NULL UNIQUE,
		total_xp INTEGER DEFAULT 0,
		current_level INTEGER DEFAULT 1,
		current_streak INTEGER DEFAULT 0,
		longest_streak INTEGER DEFAULT 0,
		last_practice_date TEXT,
		created_at TEXT DEFAULT CURRENT_TIMESTAMP,
		FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
	);

	-- Lesson progress (linked to user)
	CREATE TABLE IF NOT EXISTS lesson_progress (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		user_id INTEGER NOT NULL,
		language TEXT NOT NULL,
		lesson_id TEXT NOT NULL,
		completed INTEGER DEFAULT 0,
		best_score INTEGER DEFAULT 0,
		times_completed INTEGER DEFAULT 0,
		last_completed_at TEXT,
		FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
		UNIQUE(user_id, language, lesson_id)
	);

	-- Achievement definitions
	CREATE TABLE IF NOT EXISTS achievements (
		id TEXT PRIMARY KEY,
		name TEXT NOT NULL,
		description TEXT,
		icon TEXT
	);

	-- User achievements (per user)
	CREATE TABLE IF NOT EXISTS user_achievements (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		user_id INTEGER NOT NULL,
		achievement_id TEXT NOT NULL,
		unlocked_at TEXT DEFAULT CURRENT_TIMESTAMP,
		FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
		FOREIGN KEY (achievement_id) REFERENCES achievements(id),
		UNIQUE(user_id, achievement_id)
	);

	-- SRS Card Reviews (Anki-style spaced repetition)
	CREATE TABLE IF NOT EXISTS srs_cards (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		user_id INTEGER NOT NULL,
		language TEXT NOT NULL,
		word TEXT NOT NULL,
		translation TEXT NOT NULL,
		phonetic TEXT,
		literal TEXT,
		
		-- SM-2 Algorithm Fields
		ease_factor REAL DEFAULT 2.5,
		interval_days INTEGER DEFAULT 0,
		repetitions INTEGER DEFAULT 0,
		due_date TEXT,
		last_review_date TEXT,
		
		-- Learning state: 'new', 'learning', 'review', 'relearning'
		status TEXT DEFAULT 'new',
		learning_step INTEGER DEFAULT 0,
		
		created_at TEXT DEFAULT CURRENT_TIMESTAMP,
		FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
		UNIQUE(user_id, language, word)
	);

	-- Review history for analytics
	CREATE TABLE IF NOT EXISTS srs_review_log (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		user_id INTEGER NOT NULL,
		card_id INTEGER NOT NULL,
		rating INTEGER NOT NULL,
		interval_before INTEGER,
		interval_after INTEGER,
		ease_before REAL,
		ease_after REAL,
		review_time_ms INTEGER,
		reviewed_at TEXT DEFAULT CURRENT_TIMESTAMP,
		FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
		FOREIGN KEY (card_id) REFERENCES srs_cards(id) ON DELETE CASCADE
	);

	-- Sessions table for persistent login
	CREATE TABLE IF NOT EXISTS sessions (
		id TEXT PRIMARY KEY,
		user_id INTEGER NOT NULL,
		expires_at TEXT NOT NULL,
		created_at TEXT DEFAULT CURRENT_TIMESTAMP,
		FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
	);

	-- Create default guest user for backwards compatibility
	INSERT OR IGNORE INTO users (id, username, password_hash) VALUES (1, 'guest', 'guest');
	INSERT OR IGNORE INTO user_stats (user_id) VALUES (1);
`);

// Pre-populate achievements
const defaultAchievements = [
	{ id: 'first_lesson', name: 'First Steps', description: 'Complete your first lesson', icon: '🎯' },
	{ id: 'polyglot_start', name: 'Polyglot Beginner', description: 'Start learning both languages', icon: '🌍' },
	{ id: 'streak_3', name: 'Getting Warm', description: 'Maintain a 3-day streak', icon: '🔥' },
	{ id: 'streak_7', name: 'On Fire', description: 'Maintain a 7-day streak', icon: '🔥' },
	{ id: 'streak_30', name: 'Unstoppable', description: 'Maintain a 30-day streak', icon: '💎' },
	{ id: 'xp_100', name: 'Century', description: 'Earn 100 XP', icon: '⭐' },
	{ id: 'xp_500', name: 'Rising Star', description: 'Earn 500 XP', icon: '🌟' },
	{ id: 'xp_1000', name: 'Shining Bright', description: 'Earn 1000 XP', icon: '✨' },
	{ id: 'perfect_lesson', name: 'Perfectionist', description: 'Complete a lesson with no mistakes', icon: '💯' },
	{ id: 'esperanto_basics', name: 'Esperanto Explorer', description: 'Complete Esperanto Basics', icon: '🌱' },
	{ id: 'tokipona_basics', name: 'Toki Pona Pioneer', description: 'Complete Toki Pona Basics', icon: '🗿' },
];

const insertAchievement = db.prepare(`
	INSERT OR IGNORE INTO achievements (id, name, description, icon)
	VALUES (?, ?, ?, ?)
`);

for (const a of defaultAchievements) {
	insertAchievement.run(a.id, a.name, a.description, a.icon);
}

export default db;
