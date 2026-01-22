// Unit 15: Conditionals & Colors - Lesson 4: Basic Colors 2
// New words: biru (blue), leso (green), jalo (yellow)

export default {
    id: 'u15-04-colors-2',
    name: 'Basic Colors 2',
    unit: 15,
    unitName: 'Conditionals & Colors',
    lessonNumber: 4,
    description: 'Learn more colors: blue, green, yellow',
    icon: '🌈',
    xpReward: 15,

    teaching: [
        {
            title: 'Blue',
            content: '**Biru** means "blue":',
            vocabulary: [
                { word: 'biru', translation: 'blue' }
            ],
            examples: [
                { globasa: 'Bahari sen biru', english: 'The sea is blue' }
            ]
        },
        {
            title: 'Green',
            content: '**Leso** means "green":',
            vocabulary: [
                { word: 'leso', translation: 'green' }
            ],
            examples: [
                { globasa: 'Drevo sen leso', english: 'The tree is green' }
            ]
        },
        {
            title: 'Yellow',
            content: '**Jalo** means "yellow":',
            vocabulary: [
                { word: 'jalo', translation: 'yellow' }
            ],
            examples: [
                { globasa: 'Banana sen jalo', english: 'The banana is yellow' }
            ]
        }
    ],

    vocabulary: [
        { word: 'biru', translation: 'blue' },
        { word: 'leso', translation: 'green' },
        { word: 'jalo', translation: 'yellow' }
    ],

    reviewVocabulary: [
        // Lesson 15.3 recent
        'blanko', 'negro', 'ruho',
        // Earlier
        'bahari', 'drevo', 'banana'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match colors',
            pairs: [
                { word: 'biru', translation: 'blue' },
                { word: 'leso', translation: 'green' },
                { word: 'jalo', translation: 'yellow' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What color is "leso"?',
            options: ['blue', 'green', 'yellow'],
            correctAnswer: 'green'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The sea is blue"',
            words: ['bahari', 'sen', 'biru', 'leso', 'jalo'],
            correctAnswer: ['bahari', 'sen', 'biru'],
            hint: 'Sea + is + blue'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Drevo sen leso"',
            correctAnswers: ['The tree is green'],
            hint: 'Tree + is + green'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The banana is yellow"',
            correctAnswers: ['Banana sen jalo'],
            hint: 'Banana + is + yellow'
        },
        {
            type: 'multiple-choice',
            prompt: 'How many colors have you learned?',
            options: ['3', '6', '9'],
            correctAnswer: '6',
            hint: 'blanko, negro, ruho, biru, leso, jalo'
        }
    ]
};
