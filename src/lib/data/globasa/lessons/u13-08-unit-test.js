// Unit 13: Modals & Superlatives - Lesson 8: Unit Test
// Comprehensive review of all Unit 13 vocabulary and concepts

export default {
    id: 'u13-08-unit-test',
    name: 'Unit 13 Test',
    unit: 13,
    unitName: 'Modals & Superlatives',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 13: Modals & Superlatives!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 13 Review',
            content: 'You\'ve learned **7 new words** in Unit 13!',
            vocabulary: [
                { word: 'abil, musi, ingay', translation: 'Can, Must, Should' },
                { word: 'maxim, minim', translation: 'Most, Least (superlatives)' },
                { word: 'kepul, daymo', translation: 'How much (degree), Very much' }
            ]
        },
        {
            title: 'Key Concepts',
            content: '• Modals go before verbs\\n• maxim/minim form superlatives\\n• daymo intensifies verbs and adjectives',
            tip: 'You now have a complete modal system!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        'abil', 'musi', 'ingay', 'maxim', 'minim', 'kepul', 'daymo',
        'vole', 'maxmo', 'minmo'
    ],

    exercises: [
        // Modals
        {
            type: 'matching',
            prompt: 'Match modals',
            pairs: [
                { word: 'abil', translation: 'can' },
                { word: 'musi', translation: 'must' },
                { word: 'ingay', translation: 'should' },
                { word: 'vole', translation: 'want' }
            ]
        },
        // Superlatives
        {
            type: 'matching',
            prompt: 'Match superlatives',
            pairs: [
                { word: 'maxim', translation: 'most' },
                { word: 'minim', translation: 'least' }
            ]
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "I can speak Globasa"',
            words: ['mi', 'abil', 'musi', 'loga', 'Globasa'],
            correctAnswer: ['mi', 'abil', 'loga', 'Globasa'],
            hint: 'I + can + speak + Globasa'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "He is the strongest"',
            words: ['te', 'sen', 'maxim', 'maxmo', 'bala'],
            correctAnswer: ['te', 'sen', 'maxim', 'bala'],
            hint: 'He + is + most + strong'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Yu ingay xwexi"',
            correctAnswers: ['You should study'],
            hint: 'You + should + study'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi daymo suki to"',
            correctAnswers: ['I like it very much'],
            hint: 'I + very + like + it'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I must work"',
            correctAnswers: ['Mi musi ergo'],
            hint: 'I + must + work'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "the fastest"',
            correctAnswers: ['maxim velosi'],
            hint: 'most + fast'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'Which modal expresses ability?',
            options: ['musi', 'abil', 'ingay'],
            correctAnswer: 'abil'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between maxmo and maxim?',
            options: [
                'maxmo = comparative, maxim = superlative',
                'maxmo = superlative, maxim = comparative',
                'They are the same'
            ],
            correctAnswer: 'maxmo = comparative, maxim = superlative'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does daymo intensify?',
            options: ['Only nouns', 'Only verbs', 'Verbs and adjectives'],
            correctAnswer: 'Verbs and adjectives'
        }
    ]
};
