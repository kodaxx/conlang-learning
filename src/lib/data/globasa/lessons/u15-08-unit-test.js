// Unit 15: Conditionals & Colors - Lesson 8: Unit Test
// Comprehensive review of all Unit 15 vocabulary and concepts

export default {
    id: 'u15-08-unit-test',
    name: 'Unit 15 Test',
    unit: 15,
    unitName: 'Conditionals & Colors',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 15: Conditionals & Colors!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 15 Review',
            content: 'You\'ve learned **12 new words** in Unit 15!',
            vocabulary: [
                { word: 'eger, ger', translation: 'If, Then' },
                { word: 'blanko, negro, ruho', translation: 'White, Black, Red' },
                { word: 'biru, leso, jalo', translation: 'Blue, Green, Yellow' },
                { word: 'oranje, kahwi, roza', translation: 'Orange, Brown, Pink' },
                { word: '-ya', translation: 'Abstract noun suffix' }
            ]
        },
        {
            title: 'Key Concepts',
            content: '• **eger...ger** = if...then\\n• 9 colors learned\\n• **-ya** creates abstract nouns (bonya, meliya)',
            tip: 'Congratulations! You\'ve completed 15 units and 120 lessons!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        'eger', 'ger', 'blanko', 'negro', 'ruho', 'biru', 'leso', 'jalo', 'oranje', 'kahwi', 'roza', '-ya'
    ],

    exercises: [
        // Conditionals
        {
            type: 'matching',
            prompt: 'Match conditionals',
            pairs: [
                { word: 'eger', translation: 'if' },
                { word: 'ger', translation: 'then' }
            ]
        },
        // Basic colors
        {
            type: 'matching',
            prompt: 'Match basic colors',
            pairs: [
                { word: 'blanko', translation: 'white' },
                { word: 'negro', translation: 'black' },
                { word: 'ruho', translation: 'red' }
            ]
        },
        // More colors
        {
            type: 'matching',
            prompt: 'Match more colors',
            pairs: [
                { word: 'biru', translation: 'blue' },
                { word: 'leso', translation: 'green' },
                { word: 'jalo', translation: 'yellow' }
            ]
        },
        // Additional colors
        {
            type: 'matching',
            prompt: 'Match additional colors',
            pairs: [
                { word: 'oranje', translation: 'orange' },
                { word: 'kahwi', translation: 'brown' },
                { word: 'roza', translation: 'pink' }
            ]
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "If you want"',
            words: ['eger', 'ger', 'yu', 'vole', 'mi'],
            correctAnswer: ['eger', 'yu', 'vole'],
            hint: 'If + you + want'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The shirt is blue"',
            words: ['kamisa', 'sen', 'biru', 'ruho', 'leso'],
            correctAnswer: ['kamisa', 'sen', 'biru'],
            hint: 'Shirt + is + blue'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Eger yu vole, mi xa idi"',
            correctAnswers: ['If you want, I will go'],
            hint: 'If + you + want + I + will + go'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Drevo sen leso"',
            correctAnswers: ['The tree is green'],
            hint: 'Tree + is + green'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "beauty"',
            correctAnswers: ['meliya'],
            hint: 'beautiful + ya'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'What does the -ya suffix create?',
            options: ['Verbs', 'Abstract nouns', 'Adjectives'],
            correctAnswer: 'Abstract nouns'
        },
        {
            type: 'multiple-choice',
            prompt: 'Is "ger" required in conditionals?',
            options: ['Yes, always', 'No, it\'s optional', 'Only in questions'],
            correctAnswer: 'No, it\'s optional'
        }
    ]
};
