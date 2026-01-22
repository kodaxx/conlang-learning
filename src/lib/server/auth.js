import bcrypt from 'bcryptjs';
import db from './db.js';

// ============================================
// Password Hashing
// ============================================

const SALT_ROUNDS = 10;

export async function hashPassword(password) {
    return bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(password, hash) {
    return bcrypt.compare(password, hash);
}

// ============================================
// User Authentication
// ============================================

export async function createUser(username, email, password) {
    // Validate input
    if (!username || username.length < 3) {
        return { error: 'Username must be at least 3 characters' };
    }
    if (!password || password.length < 6) {
        return { error: 'Password must be at least 6 characters' };
    }

    // Check if username exists
    const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(username);
    if (existing) {
        return { error: 'Username already taken' };
    }

    // Check if email exists (if provided)
    if (email) {
        const existingEmail = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
        if (existingEmail) {
            return { error: 'Email already registered' };
        }
    }

    // Hash password and create user
    const passwordHash = await hashPassword(password);

    try {
        const result = db.prepare(`
            INSERT INTO users (username, email, password_hash)
            VALUES (?, ?, ?)
        `).run(username, email || null, passwordHash);

        const userId = result.lastInsertRowid;

        // Create user_stats for the new user
        db.prepare('INSERT INTO user_stats (user_id) VALUES (?)').run(userId);

        return { userId, username };
    } catch (e) {
        return { error: 'Failed to create user' };
    }
}

export async function authenticateUser(username, password) {
    const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);

    if (!user) {
        return { error: 'Invalid username or password' };
    }

    const valid = await verifyPassword(password, user.password_hash);

    if (!valid) {
        return { error: 'Invalid username or password' };
    }

    // Update last login
    const now = new Date().toISOString();
    db.prepare('UPDATE users SET last_login = ? WHERE id = ?').run(now, user.id);

    return {
        userId: user.id,
        username: user.username,
        email: user.email
    };
}

export function getUserById(userId) {
    return db.prepare('SELECT id, username, email, created_at, last_login FROM users WHERE id = ?').get(userId);
}

// ============================================
// Session Management (database-backed)
// ============================================

const SESSION_COOKIE_NAME = 'linguaquest_session';
const SESSION_MAX_AGE = 30 * 24 * 60 * 60; // 30 days in seconds

export function createSession(userId) {
    const sessionId = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + SESSION_MAX_AGE * 1000).toISOString();

    db.prepare(`
        INSERT INTO sessions (id, user_id, expires_at)
        VALUES (?, ?, ?)
    `).run(sessionId, userId, expiresAt);

    return { sessionId, expires: new Date(expiresAt) };
}

export function validateSession(sessionId) {
    if (!sessionId) return null;

    const session = db.prepare(`
        SELECT user_id, expires_at FROM sessions WHERE id = ?
    `).get(sessionId);

    if (!session) return null;

    // Check if expired
    if (new Date() > new Date(session.expires_at)) {
        db.prepare('DELETE FROM sessions WHERE id = ?').run(sessionId);
        return null;
    }

    return session.user_id;
}

export function destroySession(sessionId) {
    db.prepare('DELETE FROM sessions WHERE id = ?').run(sessionId);
}

export function getSessionCookieName() {
    return SESSION_COOKIE_NAME;
}

export function getSessionMaxAge() {
    return SESSION_MAX_AGE;
}

// Clean up expired sessions periodically
export function cleanupExpiredSessions() {
    const now = new Date().toISOString();
    db.prepare('DELETE FROM sessions WHERE expires_at < ?').run(now);
}

