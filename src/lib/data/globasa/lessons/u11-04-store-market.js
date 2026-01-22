// Unit 11: Shopping & Quantities - Lesson 4: Store & Market
// New words: dukan (store/shop), bazar (market)

export default {
    id: 'u11-04-store-market',
    name: 'Store & Market',
    unit: 11,
    unitName: 'Shopping & Quantities',
    lessonNumber: 4,
    description: 'Learn vocabulary for shopping locations',
    icon: '🏪',
    xpReward: 15,

    teaching: [
        {
            title: 'Store / Shop',
            content: '**Dukan** means "store" or "shop":',
            vocabulary: [
                { word: 'dukan', translation: 'store, shop' }
            ],
            examples: [
                { globasa: 'Mi xa idi cel dukan', english: 'I will go to the store' },
                { globasa: 'Dukan sen day', english: 'The store is big' }
            ]
        },
        {
            title: 'Market',
            content: '**Bazar** means "market":',
            vocabulary: [
                { word: 'bazar', translation: 'market' }
            ],
            examples: [
                { globasa: 'Mi kari pingo in bazar', english: 'I buy apples at the market' },
                { globasa: 'Bazar hare multi yen', english: 'The market has many people' }
            ],
            tip: 'Dukan = store/shop (enclosed), Bazar = market (often open-air)'
        }
    ],

    vocabulary: [
        { word: 'dukan', translation: 'store, shop' },
        { word: 'bazar', translation: 'market' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'kufi', 'jiaja', 'maydo', 'pesa', 'kari',
        // Earlier
        'idi', 'cel', 'day', 'pingo', 'multi', 'yen'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match shopping locations',
            pairs: [
                { word: 'dukan', translation: 'store/shop' },
                { word: 'bazar', translation: 'market' },
                { word: 'restoran', translation: 'restaurant' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I will go to the store"?',
            options: ['Mi xa idi cel bazar', 'Mi xa idi cel dukan', 'Mi xa idi in dukan'],
            correctAnswer: 'Mi xa idi cel dukan',
            hint: 'cel = to (destination)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I buy apples at the market"',
            words: ['mi', 'kari', 'pingo', 'in', 'bazar', 'dukan'],
            correctAnswer: ['mi', 'kari', 'pingo', 'in', 'bazar'],
            hint: 'I + buy + apples + in + market'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Dukan sen day"',
            correctAnswers: ['The store is big', 'The shop is big'],
            hint: 'Store + is + big'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The market has many people"',
            correctAnswers: ['Bazar hare multi yen'],
            hint: 'Market + have + many + people'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between dukan and bazar?',
            options: [
                'dukan = store (enclosed), bazar = market (open-air)',
                'dukan = market, bazar = store',
                'They are the same'
            ],
            correctAnswer: 'dukan = store (enclosed), bazar = market (open-air)'
        }
    ]
};
