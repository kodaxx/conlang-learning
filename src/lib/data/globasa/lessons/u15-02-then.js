// Unit 15: Conditionals & Colors - Lesson 2: Then
// New words: ger (then - result clause)

export default {
    id: 'u15-02-then',
    name: 'Then (Result)',
    unit: 15,
    unitName: 'Conditionals & Colors',
    lessonNumber: 2,
    description: 'Learn the optional result marker "ger"',
    icon: '➡️',
    xpReward: 15,

    teaching: [
        {
            title: 'Then (Result)',
            content: '**Ger** means "then" (marks the result clause):',
            vocabulary: [
                { word: 'ger', translation: 'then (result)' }
            ],
            examples: [
                { globasa: 'Eger yu vole, ger mi xa idi', english: 'If you want, then I will go' },
                { globasa: 'Eger to barix, ger mi xa ergo in ogar', english: 'If it rains, then I will work at home' }
            ],
            tip: 'Ger is optional but adds clarity, especially in longer sentences.'
        },
        {
            title: 'Eger...ger Pattern',
            content: 'The full conditional pattern:',
            examples: [
                { globasa: 'Eger A, (ger) B', english: 'If A, (then) B' }
            ]
        }
    ],

    vocabulary: [
        { word: 'ger', translation: 'then (result)' }
    ],

    reviewVocabulary: [
        // Lesson 15.1 recent
        'eger',
        // Earlier
        'vole', 'xa', 'idi', 'ergo', 'ogar'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match vocabulary',
            pairs: [
                { word: 'eger', translation: 'if' },
                { word: 'ger', translation: 'then' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'Is "ger" required in conditionals?',
            options: ['Yes, always', 'No, it\'s optional', 'Only in the past'],
            correctAnswer: 'No, it\'s optional',
            hint: 'It adds clarity'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "If you want, then I will go"',
            words: ['eger', 'yu', 'vole', 'ger', 'mi', 'xa', 'idi'],
            correctAnswer: ['eger', 'yu', 'vole', 'ger', 'mi', 'xa', 'idi'],
            hint: 'If + you + want + then + I + will + go'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Eger to barix, ger mi xa ergo in ogar"',
            correctAnswers: ['If it rains, then I will work at home'],
            hint: 'If + it + rain + then + I + will + work + at + home'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "then I will go"',
            correctAnswers: ['ger mi xa idi'],
            hint: 'then + I + will + go'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "ger" mark?',
            options: ['The condition clause', 'The result clause', 'A question'],
            correctAnswer: 'The result clause'
        }
    ]
};
