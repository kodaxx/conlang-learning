// Unit 11: Shopping & Quantities - Lesson 2: Selling & Money
// New words: maydo (sell), pesa (money)

export default {
    id: 'u11-02-sell-money',
    name: 'Selling & Money',
    unit: 11,
    unitName: 'Shopping & Quantities',
    lessonNumber: 2,
    description: 'Learn to sell and talk about money',
    icon: '💰',
    xpReward: 15,

    teaching: [
        {
            title: 'Sell',
            content: '**Maydo** means "to sell":',
            vocabulary: [
                { word: 'maydo', translation: 'sell' }
            ],
            examples: [
                { globasa: 'Te maydo pingo', english: 'He/She sells apples' },
                { globasa: 'Imi maydo ogar', english: 'We are selling the house' }
            ]
        },
        {
            title: 'Money',
            content: '**Pesa** means "money":',
            vocabulary: [
                { word: 'pesa', translation: 'money' }
            ],
            examples: [
                { globasa: 'Mi hare pesa', english: 'I have money' },
                { globasa: 'Kekwanti pesa?', english: 'How much money?' }
            ],
            tip: 'kari = buy, maydo = sell. Opposites!'
        }
    ],

    vocabulary: [
        { word: 'maydo', translation: 'sell' },
        { word: 'pesa', translation: 'money' }
    ],

    reviewVocabulary: [
        // Lesson 11.1 recent
        'kekwanti', 'kari',
        // Earlier
        'hare', 'pingo', 'ogar', 'te'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match new vocabulary',
            pairs: [
                { word: 'maydo', translation: 'sell' },
                { word: 'pesa', translation: 'money' },
                { word: 'kari', translation: 'buy' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of "kari" (buy)?',
            options: ['pesa', 'maydo', 'kekwanti'],
            correctAnswer: 'maydo',
            hint: 'sell'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "He sells apples"',
            words: ['te', 'maydo', 'kari', 'pingo', 'pesa'],
            correctAnswer: ['te', 'maydo', 'pingo'],
            hint: 'He + sell + apples'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi hare pesa"',
            correctAnswers: ['I have money'],
            hint: 'I + have + money'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "How much money?"',
            correctAnswers: ['Kekwanti pesa?'],
            hint: 'How much + money'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "pesa" mean?',
            options: ['price', 'money', 'sell'],
            correctAnswer: 'money'
        }
    ]
};
