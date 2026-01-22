// Unit 17: Recipients & Clauses - Lesson 5: The ban- Prefix
// New concept: ban- prefix (some, a certain)

export default {
    id: 'u17-05-ban-prefix',
    name: 'Some/A Certain (ban-)',
    unit: 17,
    unitName: 'Recipients & Clauses',
    lessonNumber: 5,
    description: 'Learn the ban- prefix for "some" or "a certain"',
    icon: '❓',
    xpReward: 15,

    teaching: [
        {
            title: 'The ban- Prefix',
            content: '**Ban-** means "some" or "a certain":',
            vocabulary: [
                { word: 'ban-', translation: 'some, a certain' }
            ],
            examples: [
                { globasa: 'bante', english: 'someone, somebody' },
                { globasa: 'banto', english: 'something' },
                { globasa: 'banloka', english: 'somewhere' }
            ],
            tip: 'Pattern: ban- + te = someone, ban- + to = something, ban- + loka = somewhere'
        },
        {
            title: 'Using ban- Words',
            content: 'Examples in sentences:',
            examples: [
                { globasa: 'Bante le ata', english: 'Someone came' },
                { globasa: 'Mi oko banto', english: 'I see something' },
                { globasa: 'Te ogar banloka', english: 'He lives somewhere' }
            ]
        }
    ],

    vocabulary: [
        { word: 'ban-', translation: 'some, a certain (prefix)' }
    ],

    reviewVocabulary: [
        // Correlative patterns
        'ke', 'moy', 'nil',
        // Related words
        'kete', 'moyte', 'nilte', 'loka', 'ata', 'oko', 'ogar'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match ban- words',
            pairs: [
                { word: 'bante', translation: 'someone' },
                { word: 'banto', translation: 'something' },
                { word: 'banloka', translation: 'somewhere' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "someone"?',
            options: ['kete', 'bante', 'moyte'],
            correctAnswer: 'bante',
            hint: 'ban- + te'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Someone came"',
            words: ['bante', 'nilte', 'le', 'ata', 'moyte'],
            correctAnswer: ['bante', 'le', 'ata'],
            hint: 'Someone + past + come'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi oko banto"',
            correctAnswers: ['I see something'],
            hint: 'I + see + something'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "He lives somewhere"',
            correctAnswers: ['Te ogar banloka'],
            hint: 'He + live + somewhere'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the correlative pattern for ban-?',
            options: [
                'ban- = some/a certain',
                'ban- = every',
                'ban- = none'
            ],
            correctAnswer: 'ban- = some/a certain'
        }
    ]
};
