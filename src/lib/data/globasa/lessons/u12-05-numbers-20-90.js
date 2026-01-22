// Unit 12: Clothing & Numbers - Lesson 5: Numbers 20-90
// New concept: digit + des = tens

export default {
    id: 'u12-05-numbers-20-90',
    name: 'Numbers 20-90',
    unit: 12,
    unitName: 'Clothing & Numbers',
    lessonNumber: 5,
    description: 'Learn multiples of ten: twenty through ninety',
    icon: '2️⃣0️⃣',
    xpReward: 15,

    teaching: [
        {
            title: 'Tens Pattern',
            content: 'For multiples of 10, put the digit BEFORE **des**:',
            examples: [
                { globasa: 'duades', english: 'twenty (2×10)' },
                { globasa: 'tigades', english: 'thirty (3×10)' },
                { globasa: 'carades', english: 'forty (4×10)' }
            ],
            tip: 'Pattern: digit + des = tens (as one word)'
        },
        {
            title: 'More Tens',
            content: 'The pattern continues:',
            examples: [
                { globasa: 'limades', english: 'fifty' },
                { globasa: 'sisades', english: 'sixty' },
                { globasa: 'sabedes', english: 'seventy' },
                { globasa: 'ocodes', english: 'eighty' },
                { globasa: 'nuedes', english: 'ninety' }
            ]
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        // Numbers
        'des', 'dua', 'tiga', 'care', 'lima', 'sisa', 'sabe', 'oco', 'nue',
        // Teens
        'des un', 'des dua'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match tens',
            pairs: [
                { word: 'duades', translation: '20' },
                { word: 'tigades', translation: '30' },
                { word: 'limades', translation: '50' },
                { word: 'ocodes', translation: '80' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "forty"?',
            options: ['des care', 'carades', 'care des'],
            correctAnswer: 'carades',
            hint: 'four + ten (as one word)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "sixty"',
            words: ['sisa', 'des', 'sisades', 'lima'],
            correctAnswer: ['sisades'],
            hint: 'six + ten as one word'
        },
        {
            type: 'translation',
            prompt: 'What number is "nuedes"?',
            correctAnswers: ['90', 'ninety'],
            hint: 'nine + ten'
        },
        {
            type: 'translation',
            prompt: 'How do you say "70"?',
            correctAnswers: ['sabedes'],
            hint: 'seven + ten'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which is correct for 30?',
            options: ['des tiga', 'tigades', 'tiga-des'],
            correctAnswer: 'tigades',
            hint: 'digit + des as one word'
        }
    ]
};
