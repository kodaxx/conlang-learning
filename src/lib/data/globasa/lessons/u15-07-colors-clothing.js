// Unit 15: Conditionals & Colors - Lesson 7: Colors with Clothing
// Integration lesson combining colors with clothing and conditionals

export default {
    id: 'u15-07-colors-clothing',
    name: 'Colors with Clothing',
    unit: 15,
    unitName: 'Conditionals & Colors',
    lessonNumber: 7,
    description: 'Practice using colors with clothing vocabulary',
    icon: '👗',
    xpReward: 15,

    teaching: [
        {
            title: 'Describing Clothing',
            content: 'Use colors as adjectives with clothing:',
            examples: [
                { globasa: 'Mi kari ruho kamisa', english: 'I buy a red shirt' },
                { globasa: 'Te kamisapul biru kamisa', english: 'He wears a blue shirt' },
                { globasa: 'Blanko sapatu sen meli', english: 'White shoes are beautiful' }
            ]
        },
        {
            title: 'Combining with Conditionals',
            content: 'Combine colors and conditionals:',
            examples: [
                { globasa: 'Eger yu suki biru, mi xa kari biru kamisa', english: 'If you like blue, I will buy a blue shirt' }
            ]
        },
        {
            title: 'All Colors Review',
            content: 'All nine colors you\'ve learned:',
            examples: [
                { globasa: 'blanko, negro, ruho', english: 'white, black, red' },
                { globasa: 'biru, leso, jalo', english: 'blue, green, yellow' },
                { globasa: 'oranje, kahwi, roza', english: 'orange, brown, pink' }
            ]
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        // All colors
        'blanko', 'negro', 'ruho', 'biru', 'leso', 'jalo', 'oranje', 'kahwi', 'roza',
        // Clothing
        'kamisa', 'sapatu', 'pantalon', 'topi', 'jama',
        // Conditionals
        'eger', 'ger'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match all colors',
            pairs: [
                { word: 'ruho', translation: 'red' },
                { word: 'biru', translation: 'blue' },
                { word: 'leso', translation: 'green' },
                { word: 'jalo', translation: 'yellow' }
            ]
        },
        {
            type: 'matching',
            prompt: 'Match more colors',
            pairs: [
                { word: 'blanko', translation: 'white' },
                { word: 'negro', translation: 'black' },
                { word: 'oranje', translation: 'orange' },
                { word: 'kahwi', translation: 'brown' }
            ]
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I buy a red shirt"',
            words: ['mi', 'kari', 'ruho', 'biru', 'kamisa'],
            correctAnswer: ['mi', 'kari', 'ruho', 'kamisa'],
            hint: 'I + buy + red + shirt'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te kamisapul biru kamisa"',
            correctAnswers: ['He wears a blue shirt', 'She wears a blue shirt'],
            hint: 'He/She + wear-shirt + blue + shirt'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "White shoes are beautiful"',
            correctAnswers: ['Blanko sapatu sen meli'],
            hint: 'White + shoes + is + beautiful'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "If you like blue, I will buy a blue shirt"',
            correctAnswers: ['Eger yu suki biru, mi xa kari biru kamisa'],
            hint: 'If + you + like + blue + I + will + buy + blue + shirt'
        }
    ]
};
