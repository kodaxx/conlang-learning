// Lesson 04: Pronouns
// Learn the 5 Kokanu pronouns

export default {
    id: '04-pronouns',
    name: 'Pronouns',
    description: 'Learn the 5 personal pronouns in Kokanu',
    icon: '👤',
    xpReward: 20,

    teaching: [
        {
            title: "Simple Pronouns",
            content: `Kokanu has only **5 pronouns** — beautifully simple!

| Pronoun | Meaning |
|---------|---------|
| **mi** | I, me, we, us |
| **na** | you |
| **ja** | he, she, it, they |
| **tun** | one (impersonal) |
| **sa** | self (reflexive) |

**No gender distinction!** "ja" covers he/she/it/they.
**No singular/plural!** "mi" is both I and we.`,
            vocabulary: [
                { word: 'mi', translation: 'I, me, we, us' },
                { word: 'na', translation: 'you' },
                { word: 'ja', translation: 'he, she, it, they' }
            ]
        },
        {
            title: "mi and na",
            content: `**mi** = I, me, we, us
The speaker(s). Context tells you singular vs. plural.

**na** = you
The listener(s). Works for both "you" and "you all".

Examples:
• **peko, mi** = Hello, it's me / Hello from us
• **peko, na** = Hello to you`,
            examples: [
                { kokanu: 'peko, mi', english: 'Hello, it\'s me / Hello from us' },
                { kokanu: 'peko, na', english: 'Hello to you' }
            ],
            tip: "mi sounds like 'me' in English — easy to remember!"
        },
        {
            title: "ja, tun, and sa",
            content: `**ja** = he, she, it, they
The third person — anyone/anything not speaking or being spoken to.

**tun** = one (impersonal)
Like "one does..." in English. General statements.

**sa** = self (reflexive)
Refers back to the subject (myself, yourself, itself...).`,
            vocabulary: [
                { word: 'tun', translation: 'one (impersonal)' },
                { word: 'sa', translation: 'self (reflexive)' }
            ],
            tip: "sa comes from 'self' — use it when the object is the same as the subject"
        }
    ],

    vocabulary: [
        { word: 'mi', translation: 'I, me, we, us', phonetic: 'mee' },
        { word: 'na', translation: 'you', phonetic: 'nah' },
        { word: 'ja', translation: 'he, she, it, they', phonetic: 'jah' },
        { word: 'tun', translation: 'one (impersonal)', phonetic: 'toon' },
        { word: 'sa', translation: 'self (reflexive)', phonetic: 'sah' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'Which pronoun means "I" or "we"?',
            options: ['na', 'ja', 'mi', 'tun'],
            correctAnswer: 'mi',
            hint: 'Sounds like "me" in English!'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which pronoun means "he, she, it, or they"?',
            options: ['mi', 'na', 'ja', 'sa'],
            correctAnswer: 'ja',
            hint: 'The third person pronoun — one word for all!'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "tun" mean?',
            options: ['you', 'they', 'one (impersonal)', 'self'],
            correctAnswer: 'one (impersonal)',
            hint: 'Like "one does..." in formal English'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which pronoun is reflexive (refers back to subject)?',
            options: ['mi', 'na', 'ja', 'sa'],
            correctAnswer: 'sa',
            hint: 'Used for "myself", "yourself", "himself", etc.'
        },
        {
            prompt: 'Translate to Kokanu: "you"',
            correctAnswers: ['na'],
            hint: 'The pronoun for the listener'
        },
        {
            type: 'matching',
            prompt: 'Match the pronouns',
            pairs: [
                { word: 'mi', translation: 'I / we' },
                { word: 'na', translation: 'you' },
                { word: 'ja', translation: 'he / she / they' },
                { word: 'tun', translation: 'one' },
                { word: 'sa', translation: 'self' }
            ]
        }
    ]
};
