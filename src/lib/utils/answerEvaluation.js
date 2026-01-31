
// Common variations to be more forgiving
const COMMON_VERBS = new Set([
    'eat', 'drink', 'speak', 'say', 'get', 'take', 'like', 'love', 'have', 'want',
    'go', 'come', 'read', 'write', 'see', 'hear', 'sleep', 'run', 'walk', 'work',
    'play', 'dance', 'sing', 'know', 'think', 'believe', 'hope', 'understand',
    'fly', 'swim', 'jump', 'sit', 'stand'
]);

const WORD_EXPANSIONS = {
    // People
    'child': ['kid', 'son', 'daughter', 'boy', 'girl'],
    'kid': ['child', 'son', 'daughter', 'boy', 'girl'],
    'nini': ['child', 'kid'], // globasa mapping if needed? No, input is English usually.
    'sibling': ['brother', 'sister'],
    'parent': ['mother', 'father', 'mom', 'dad', 'mum'],
    'mom': ['mother', 'mum', 'mama'],
    'dad': ['father', 'papa'],
    'friend': ['pal', 'buddy'],

    // Pronouns
    'i': ['me'],
    'we': ['us'],
    'he': ['she', 'it', 'they'],
    'she': ['he', 'it', 'they'],

    // Greetings
    'hello': ['hi', 'peace', 'greetings'],
    'bye': ['goodbye', 'see ya'],
    'peace': ['hello', 'hi'], // Xanti can be Hello or Peace

    // Verbs
    'speak': ['say', 'talk'],
    'say': ['speak', 'talk'],
    'get': ['take', 'receive'],
    'take': ['get', 'grab']
};

const IGNORED_WORDS = new Set(['a', 'an', 'the', 'to', 'of', 'in', 'on', 'at', 'is', 'are', 'am', 'will', 'do', 'does', 'did']);

function normalize(str) {
    return str.toLowerCase().replace(/[.,!?;:()]/g, "").trim();
}

function getVariations(word) {
    const clean = normalize(word);
    let variations = new Set([clean]);

    // 1. Synonyms
    if (WORD_EXPANSIONS[clean]) {
        WORD_EXPANSIONS[clean].forEach(w => variations.add(w));
    }

    // 2. Singular/Plural (Noun logic)
    // Simple heuristic: s/es
    if (clean.endsWith('s') && !clean.endsWith('ss')) {
        variations.add(clean.slice(0, -1));
    } else {
        variations.add(clean + 's');
    }

    // 3. Verb forms
    // We try stripping ing, s, ed
    if (COMMON_VERBS.has(clean)) {
        variations.add(clean + 's');
        variations.add(clean + 'ing');
    }

    // Reverse check: if word is "eating", base is "eat"
    let base = clean;
    if (clean.endsWith('ing')) base = clean.slice(0, -3);
    else if (clean.endsWith('s') && !clean.endsWith('ss')) base = clean.slice(0, -1);

    if (COMMON_VERBS.has(base)) {
        variations.add(base);
        variations.add(base + 's');
        variations.add(base + 'ing');
    }

    return Array.from(variations);
}

/**
 * Checks if the user's answer roughly matches any of the correct answers.
 * @param {string} input - User input
 * @param {string[]} validAnswers - Array of valid answer strings
 * @returns {boolean}
 */
export function isTranslationCorrect(input, validAnswers) {
    const normalizedInput = normalize(input);
    const inputTokens = normalizedInput.split(/\s+/);

    // Filter out ignored words from input for "loose" comparison?
    // Or just keep them? "I will eat" vs "I eat". 
    // Let's try to match token-by-token with ANY valid answer.

    for (const validAns of validAnswers) {
        const normalizedValid = normalize(validAns);
        const validTokens = normalizedValid.split(/\s+/);

        // Optimization: If exact match after normalization
        if (normalizedInput === normalizedValid) return true;

        // Token-based fuzzy match
        // We check if every "meaningful" token in validTokens is covered by inputTokens
        // OR if every "meaningful" token in inputTokens matches something in validTokens.
        // Let's assume inputTokens must map to validTokens 1:1 roughly.

        if (inputTokens.length !== validTokens.length) {
            // Allow length mismatch if it's just 'ignored' words?
            const meaningfulInput = inputTokens.filter(w => !IGNORED_WORDS.has(w));
            const meaningfulValid = validTokens.filter(w => !IGNORED_WORDS.has(w));

            if (meaningfulInput.length !== meaningfulValid.length) continue;

            let allMatch = true;
            for (let i = 0; i < meaningfulInput.length; i++) {
                const iWord = meaningfulInput[i];
                const vWord = meaningfulValid[i];
                const iVars = getVariations(iWord);
                const vVars = getVariations(vWord);

                // Intersection?
                const match = iVars.some(iv => vVars.includes(iv));
                if (!match) {
                    allMatch = false;
                    break;
                }
            }
            if (allMatch) return true;
        } else {
            // Same length, direct comparison
            let allMatch = true;
            for (let i = 0; i < inputTokens.length; i++) {
                const iWord = inputTokens[i];
                const vWord = validTokens[i];

                // If it's an ignored word, we can be loose?
                // But "to" vs "at" might matter.
                // Let's check variations.
                const iVars = getVariations(iWord);
                const vVars = getVariations(vWord); // Also expand target for robustness

                const match = iVars.some(iv => vVars.includes(iv));
                if (!match) {
                    allMatch = false;
                    break;
                }
            }
            if (allMatch) return true;
        }
    }

    return false;
}
