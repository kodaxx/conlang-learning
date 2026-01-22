// Unit 11: Shopping & Quantities - Lesson 3: Enough & Price
// New words: kufi (enough), jiaja (price)

export default {
    id: 'u11-03-enough-price',
    name: 'Enough & Price',
    unit: 11,
    unitName: 'Shopping & Quantities',
    lessonNumber: 3,
    description: 'Learn to express "enough" and talk about prices',
    icon: '💵',
    xpReward: 15,

    teaching: [
        {
            title: 'Enough',
            content: '**Kufi** means "enough" or "sufficient":',
            vocabulary: [
                { word: 'kufi', translation: 'enough, sufficient' }
            ],
            examples: [
                { globasa: 'Mi hare kufi pesa', english: 'I have enough money' },
                { globasa: 'Kufi!', english: 'Enough!' },
                { globasa: 'To no sen kufi', english: 'It is not enough' }
            ]
        },
        {
            title: 'Price',
            content: '**Jiaja** means "price":',
            vocabulary: [
                { word: 'jiaja', translation: 'price' }
            ],
            examples: [
                { globasa: 'Keto sen jiaja?', english: 'What is the price?' },
                { globasa: 'Jiaja sen gao', english: 'The price is high' }
            ],
            tip: 'Jiaja asks about the specific price, kekwanti asks "how much" more generally.'
        }
    ],

    vocabulary: [
        { word: 'kufi', translation: 'enough, sufficient' },
        { word: 'jiaja', translation: 'price' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'maydo', 'pesa', 'kekwanti', 'kari',
        // Earlier
        'hare', 'no', 'sen', 'gao'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match new vocabulary',
            pairs: [
                { word: 'kufi', translation: 'enough' },
                { word: 'jiaja', translation: 'price' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I have enough money"?',
            options: ['Mi hare multi pesa', 'Mi hare kufi pesa', 'Mi hare jiaja pesa'],
            correctAnswer: 'Mi hare kufi pesa',
            hint: 'kufi = enough'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "What is the price?"',
            words: ['keto', 'kekwanti', 'sen', 'jiaja', 'pesa'],
            correctAnswer: ['keto', 'sen', 'jiaja'],
            hint: 'What + is + price'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Jiaja sen gao"',
            correctAnswers: ['The price is high'],
            hint: 'Price + is + high'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "It is not enough"',
            correctAnswers: ['To no sen kufi'],
            hint: 'It + not + is + enough'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "kufi" mean?',
            options: ['price', 'enough', 'expensive'],
            correctAnswer: 'enough'
        }
    ]
};
