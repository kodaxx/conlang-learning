// Unit 13: Modals & Superlatives - Lesson 6: How Much (degree)
// New words: kepul (how much - degree)

export default {
    id: 'u13-06-how-much-degree',
    name: 'How Much (Degree)',
    unit: 13,
    unitName: 'Modals & Superlatives',
    lessonNumber: 6,
    description: 'Learn to ask about degree with "kepul"',
    icon: '📏',
    xpReward: 15,

    teaching: [
        {
            title: 'How Much (Degree)',
            content: '**Kepul** means "how much" (to what degree):',
            vocabulary: [
                { word: 'kepul', translation: 'how much, to what degree' }
            ],
            examples: [
                { globasa: 'Kepul gao sen te?', english: 'How tall is he?' },
                { globasa: 'Yu suki to kepul?', english: 'How much do you like it?' }
            ],
            tip: 'kepul asks about degree/extent, kekwanti asks about quantity/price.'
        },
        {
            title: 'Compare with kekwanti',
            content: 'The difference between kepul and kekwanti:',
            examples: [
                { globasa: 'Kekwanti pesa?', english: 'How much (money)?' },
                { globasa: 'Kepul bala?', english: 'How strong?' }
            ]
        }
    ],

    vocabulary: [
        { word: 'kepul', translation: 'how much (degree)' }
    ],

    reviewVocabulary: [
        // Recent
        'ingay', 'kekwanti',
        // Adjectives
        'gao', 'bala', 'day', 'suki'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match question words',
            pairs: [
                { word: 'kepul', translation: 'how much (degree)' },
                { word: 'kekwanti', translation: 'how much (quantity)' },
                { word: 'kenumer', translation: 'how many (count)' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you ask "How tall is he?"',
            options: ['Kekwanti gao sen te?', 'Kepul gao sen te?', 'Kenumer gao sen te?'],
            correctAnswer: 'Kepul gao sen te?',
            hint: 'kepul = degree'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "How much do you like it?"',
            words: ['yu', 'suki', 'to', 'kepul', 'kekwanti'],
            correctAnswer: ['yu', 'suki', 'to', 'kepul'],
            hint: 'You + like + it + how much'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Kepul bala?"',
            correctAnswers: ['How strong?'],
            hint: 'How much + strong'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "How big?"',
            correctAnswers: ['Kepul day?'],
            hint: 'How much + big'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between kepul and kekwanti?',
            options: [
                'kepul = degree, kekwanti = quantity',
                'kepul = quantity, kekwanti = degree',
                'They are the same'
            ],
            correctAnswer: 'kepul = degree, kekwanti = quantity'
        }
    ]
};
