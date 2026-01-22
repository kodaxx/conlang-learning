// Unit 11: Shopping & Quantities - Lesson 1: How Much & Buying
// New words: kekwanti (how much), kari (buy)

export default {
    id: 'u11-01-how-much-buy',
    name: 'How Much & Buying',
    unit: 11,
    unitName: 'Shopping & Quantities',
    lessonNumber: 1,
    description: 'Learn to ask "how much" and the verb "to buy"',
    icon: '🛒',
    xpReward: 15,

    teaching: [
        {
            title: 'How Much',
            content: '**Kekwanti** means "how much" or "how many" (for quantity):',
            vocabulary: [
                { word: 'kekwanti', translation: 'how much, how many (quantity)' }
            ],
            examples: [
                { globasa: 'Kekwanti sen to?', english: 'How much is it?' },
                { globasa: 'Yu vole kekwanti?', english: 'How much do you want?' }
            ],
            tip: 'Kekwanti asks about amount/price, kenumer asks about counting.'
        },
        {
            title: 'Buy',
            content: '**Kari** means "to buy":',
            vocabulary: [
                { word: 'kari', translation: 'buy' }
            ],
            examples: [
                { globasa: 'Mi xa kari kitabu', english: 'I will buy a book' },
                { globasa: 'Yu le kari keto?', english: 'What did you buy?' }
            ]
        }
    ],

    vocabulary: [
        { word: 'kekwanti', translation: 'how much, how many' },
        { word: 'kari', translation: 'buy' }
    ],

    reviewVocabulary: [
        // Unit 10 recent
        'or', 'dexa', 'pala',
        // Earlier
        'vole', 'kitabu', 'xa', 'le', 'keto'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match new vocabulary',
            pairs: [
                { word: 'kekwanti', translation: 'how much' },
                { word: 'kari', translation: 'buy' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you ask "How much is it?"',
            options: ['Kenumer sen to?', 'Kekwanti sen to?', 'Keto sen to?'],
            correctAnswer: 'Kekwanti sen to?',
            hint: 'kekwanti = how much'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I will buy a book"',
            words: ['mi', 'xa', 'kari', 'kitabu', 'hare'],
            correctAnswer: ['mi', 'xa', 'kari', 'kitabu'],
            hint: 'I + will + buy + book'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Yu le kari keto?"',
            correctAnswers: ['What did you buy?'],
            hint: 'You + past + buy + what'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "How much do you want?"',
            correctAnswers: ['Yu vole kekwanti?'],
            hint: 'You + want + how much'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between kenumer and kekwanti?',
            options: [
                'kenumer = counting, kekwanti = amount/price',
                'kenumer = price, kekwanti = counting',
                'They are the same'
            ],
            correctAnswer: 'kenumer = counting, kekwanti = amount/price'
        }
    ]
};
