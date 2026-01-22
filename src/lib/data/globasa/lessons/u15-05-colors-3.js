// Unit 15: Conditionals & Colors - Lesson 5: More Colors
// New words: oranje (orange), kahwi (brown), roza (pink)

export default {
    id: 'u15-05-colors-3',
    name: 'More Colors',
    unit: 15,
    unitName: 'Conditionals & Colors',
    lessonNumber: 5,
    description: 'Learn more colors: orange, brown, pink',
    icon: '🧡',
    xpReward: 15,

    teaching: [
        {
            title: 'Orange',
            content: '**Oranje** means "orange":',
            vocabulary: [
                { word: 'oranje', translation: 'orange (color)' }
            ],
            examples: [
                { globasa: 'Oranje sen mi su suki renki', english: 'Orange is my favorite color' }
            ]
        },
        {
            title: 'Brown',
            content: '**Kahwi** means "brown":',
            vocabulary: [
                { word: 'kahwi', translation: 'brown' }
            ],
            examples: [
                { globasa: 'Sapatu sen kahwi', english: 'The shoes are brown' }
            ]
        },
        {
            title: 'Pink',
            content: '**Roza** means "pink":',
            vocabulary: [
                { word: 'roza', translation: 'pink' }
            ],
            examples: [
                { globasa: 'Topi sen roza', english: 'The hat is pink' }
            ]
        }
    ],

    vocabulary: [
        { word: 'oranje', translation: 'orange (color)' },
        { word: 'kahwi', translation: 'brown' },
        { word: 'roza', translation: 'pink' }
    ],

    reviewVocabulary: [
        // Recent colors
        'blanko', 'negro', 'ruho', 'biru', 'leso', 'jalo',
        // Clothing
        'sapatu', 'topi', 'kamisa'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match colors',
            pairs: [
                { word: 'oranje', translation: 'orange' },
                { word: 'kahwi', translation: 'brown' },
                { word: 'roza', translation: 'pink' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What color is "kahwi"?',
            options: ['orange', 'brown', 'pink'],
            correctAnswer: 'brown'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The shoes are brown"',
            words: ['sapatu', 'sen', 'kahwi', 'negro', 'roza'],
            correctAnswer: ['sapatu', 'sen', 'kahwi'],
            hint: 'Shoes + is + brown'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Topi sen roza"',
            correctAnswers: ['The hat is pink'],
            hint: 'Hat + is + pink'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Orange is my favorite color"',
            correctAnswers: ['Oranje sen mi su suki renki'],
            hint: 'Orange + is + my + like + color'
        },
        {
            type: 'multiple-choice',
            prompt: 'How many colors have you learned now?',
            options: ['6', '9', '12'],
            correctAnswer: '9'
        }
    ]
};
