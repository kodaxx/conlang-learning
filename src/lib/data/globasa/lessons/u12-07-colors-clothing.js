// Unit 12: Clothing & Numbers - Lesson 7: Colors in Clothing
// New words: renki (color), putting it together

export default {
    id: 'u12-07-colors-clothing',
    name: 'Colors & Clothing',
    unit: 12,
    unitName: 'Clothing & Numbers',
    lessonNumber: 7,
    description: 'Combine colors with clothing vocabulary',
    icon: '🌈',
    xpReward: 15,

    teaching: [
        {
            title: 'Color',
            content: '**Renki** means "color":',
            vocabulary: [
                { word: 'renki', translation: 'color' }
            ],
            examples: [
                { globasa: 'Ke renki yu suki?', english: 'Which color do you like?' },
                { globasa: 'Renki sen meli', english: 'The color is beautiful' }
            ]
        },
        {
            title: 'Combining with Clothing',
            content: 'Use colors as adjectives with clothing:',
            examples: [
                { globasa: 'Mi kari kamisa', english: 'I buy a shirt' },
                { globasa: 'Jiaja sen duades pesa', english: 'The price is 20 [currency]' },
                { globasa: 'Mi kari dua pantalon', english: 'I buy two pants' }
            ]
        },
        {
            title: 'Shopping Review',
            content: 'Putting it all together:',
            examples: [
                { globasa: 'Mi xa kari tiga kamisa', english: 'I will buy three shirts' },
                { globasa: 'Te kamisapul neo kamisa', english: 'He wears a new shirt' }
            ]
        }
    ],

    vocabulary: [
        { word: 'renki', translation: 'color' }
    ],

    reviewVocabulary: [
        // Clothing
        'labas', 'kamisa', 'pantalon', 'sapatu', 'jama', 'topi',
        // Numbers
        'duades', 'tigades',
        // Shopping
        'kari', 'jiaja', 'pesa'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match vocabulary',
            pairs: [
                { word: 'renki', translation: 'color' },
                { word: 'labas', translation: 'clothing' },
                { word: 'jiaja', translation: 'price' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you ask "Which color do you like?"',
            options: ['Keto renki yu suki?', 'Ke renki yu suki?', 'Renki ke yu suki?'],
            correctAnswer: 'Ke renki yu suki?',
            hint: 'Which + color + you + like'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I will buy three shirts"',
            words: ['mi', 'xa', 'kari', 'tiga', 'kamisa', 'dua'],
            correctAnswer: ['mi', 'xa', 'kari', 'tiga', 'kamisa'],
            hint: 'I + will + buy + three + shirts'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Jiaja sen duades pesa"',
            correctAnswers: ['The price is 20', 'The price is twenty'],
            hint: 'Price + is + 20'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I buy two pants"',
            correctAnswers: ['Mi kari dua pantalon'],
            hint: 'I + buy + two + pants'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "renki" mean?',
            options: ['clothing', 'color', 'price'],
            correctAnswer: 'color'
        }
    ]
};
