// Unit 11: Shopping & Quantities - Lesson 7: Give & Pay
// New words: don (give), feypay (pay)

export default {
    id: 'u11-07-give-pay',
    name: 'Give & Pay',
    unit: 11,
    unitName: 'Shopping & Quantities',
    lessonNumber: 7,
    description: 'Learn transaction verbs: give and pay',
    icon: '💳',
    xpReward: 15,

    teaching: [
        {
            title: 'Give',
            content: '**Don** means "to give":',
            vocabulary: [
                { word: 'don', translation: 'give' }
            ],
            examples: [
                { globasa: 'Mi don kitabu cel yu', english: 'I give a book to you' },
                { globasa: 'Te le don pesa cel mi', english: 'He gave money to me' }
            ]
        },
        {
            title: 'Pay',
            content: '**Feypay** means "to pay":',
            vocabulary: [
                { word: 'feypay', translation: 'pay' }
            ],
            examples: [
                { globasa: 'Mi xa feypay', english: 'I will pay' },
                { globasa: 'Yu le feypay kekwanti?', english: 'How much did you pay?' }
            ],
            tip: 'don = give (general), feypay = pay (for something)'
        }
    ],

    vocabulary: [
        { word: 'don', translation: 'give' },
        { word: 'feypay', translation: 'pay' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'kokokimaso', 'mahimaso', 'kari', 'maydo', 'pesa',
        // Earlier
        'kitabu', 'cel', 'xa', 'le', 'kekwanti'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match transaction verbs',
            pairs: [
                { word: 'don', translation: 'give' },
                { word: 'feypay', translation: 'pay' },
                { word: 'kari', translation: 'buy' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I will pay"?',
            options: ['Mi xa don', 'Mi xa feypay', 'Mi xa kari'],
            correctAnswer: 'Mi xa feypay',
            hint: 'feypay = pay'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I give a book to you"',
            words: ['mi', 'don', 'kitabu', 'cel', 'yu', 'feypay'],
            correctAnswer: ['mi', 'don', 'kitabu', 'cel', 'yu'],
            hint: 'I + give + book + to + you'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te le don pesa cel mi"',
            correctAnswers: ['He gave money to me', 'She gave money to me'],
            hint: 'He/She + past + give + money + to + me'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "How much did you pay?"',
            correctAnswers: ['Yu le feypay kekwanti?'],
            hint: 'You + past + pay + how much'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between don and feypay?',
            options: [
                'don = give (general), feypay = pay (for purchase)',
                'don = pay, feypay = give',
                'They are the same'
            ],
            correctAnswer: 'don = give (general), feypay = pay (for purchase)'
        }
    ]
};
