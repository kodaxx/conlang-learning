// Unit 13: Modals & Superlatives - Lesson 2: Must / Have To
// New words: musi (must, have to)

export default {
    id: 'u13-02-must',
    name: 'Must / Have To',
    unit: 13,
    unitName: 'Modals & Superlatives',
    lessonNumber: 2,
    description: 'Learn to express obligation with "musi"',
    icon: '❗',
    xpReward: 15,

    teaching: [
        {
            title: 'Must / Have To',
            content: '**Musi** means "must" or "have to":',
            vocabulary: [
                { word: 'musi', translation: 'must, have to' }
            ],
            examples: [
                { globasa: 'Mi musi ergo', english: 'I must work / I have to work' },
                { globasa: 'Te musi idi', english: 'He/She must go' },
                { globasa: 'Imi musi xwexi', english: 'We have to study' }
            ],
            tip: 'musi expresses necessity or obligation.'
        },
        {
            title: 'Comparing Modals',
            content: 'Compare the three modals you know:',
            examples: [
                { globasa: 'Mi vole yam', english: 'I want to eat' },
                { globasa: 'Mi abil yam', english: 'I can eat' },
                { globasa: 'Mi musi yam', english: 'I must eat' }
            ]
        }
    ],

    vocabulary: [
        { word: 'musi', translation: 'must, have to' }
    ],

    reviewVocabulary: [
        // Lesson 13.1 recent
        'abil',
        // Earlier
        'vole', 'ergo', 'idi', 'xwexi', 'yam'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match modals',
            pairs: [
                { word: 'musi', translation: 'must/have to' },
                { word: 'abil', translation: 'can/able' },
                { word: 'vole', translation: 'want' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I must work"?',
            options: ['Mi ergo musi', 'Mi musi ergo', 'Musi mi ergo'],
            correctAnswer: 'Mi musi ergo',
            hint: 'Subject + musi + verb'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "We have to study"',
            words: ['imi', 'musi', 'xwexi', 'abil', 'vole'],
            correctAnswer: ['imi', 'musi', 'xwexi'],
            hint: 'We + must + study'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te musi idi"',
            correctAnswers: ['He must go', 'She must go', 'He has to go', 'She has to go'],
            hint: 'He/She + must + go'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I have to work"',
            correctAnswers: ['Mi musi ergo'],
            hint: 'I + must + work'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "musi" express?',
            options: ['Ability', 'Desire', 'Obligation'],
            correctAnswer: 'Obligation',
            hint: 'must/have to'
        }
    ]
};
