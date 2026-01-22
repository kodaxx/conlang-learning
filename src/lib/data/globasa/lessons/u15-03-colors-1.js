// Unit 15: Conditionals & Colors - Lesson 3: Basic Colors 1
// New words: blanko (white), negro (black), ruho (red)

export default {
    id: 'u15-03-colors-1',
    name: 'Basic Colors 1',
    unit: 15,
    unitName: 'Conditionals & Colors',
    lessonNumber: 3,
    description: 'Learn basic colors: white, black, red',
    icon: '🎨',
    xpReward: 15,

    teaching: [
        {
            title: 'White',
            content: '**Blanko** means "white":',
            vocabulary: [
                { word: 'blanko', translation: 'white' }
            ],
            examples: [
                { globasa: 'Kamisa sen blanko', english: 'The shirt is white' }
            ]
        },
        {
            title: 'Black',
            content: '**Negro** means "black":',
            vocabulary: [
                { word: 'negro', translation: 'black' }
            ],
            examples: [
                { globasa: 'Myaw sen negro', english: 'The cat is black' }
            ]
        },
        {
            title: 'Red',
            content: '**Ruho** means "red":',
            vocabulary: [
                { word: 'ruho', translation: 'red' }
            ],
            examples: [
                { globasa: 'Pingo sen ruho', english: 'The apple is red' }
            ]
        }
    ],

    vocabulary: [
        { word: 'blanko', translation: 'white' },
        { word: 'negro', translation: 'black' },
        { word: 'ruho', translation: 'red' }
    ],

    reviewVocabulary: [
        // Recent
        'eger', 'ger', 'renki',
        // Clothing
        'kamisa', 'sapatu', 'pantalon'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match colors',
            pairs: [
                { word: 'blanko', translation: 'white' },
                { word: 'negro', translation: 'black' },
                { word: 'ruho', translation: 'red' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What color is "ruho"?',
            options: ['white', 'black', 'red'],
            correctAnswer: 'red'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The shirt is white"',
            words: ['kamisa', 'sen', 'blanko', 'negro', 'ruho'],
            correctAnswer: ['kamisa', 'sen', 'blanko'],
            hint: 'Shirt + is + white'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Myaw sen negro"',
            correctAnswers: ['The cat is black'],
            hint: 'Cat + is + black'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The apple is red"',
            correctAnswers: ['Pingo sen ruho'],
            hint: 'Apple + is + red'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is "blanko"?',
            options: ['black', 'white', 'blue'],
            correctAnswer: 'white'
        }
    ]
};
