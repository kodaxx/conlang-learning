// Unit 11: Shopping & Quantities - Lesson 8: Unit Test
// Comprehensive review of all Unit 11 vocabulary and concepts

export default {
    id: 'u11-08-unit-test',
    name: 'Unit 11 Test',
    unit: 11,
    unitName: 'Shopping & Quantities',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 11: Shopping & Quantities!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 11 Review',
            content: 'You\'ve learned **14 new words** in Unit 11! Key vocabulary:',
            vocabulary: [
                { word: 'kekwanti, kari, maydo', translation: 'How much, Buy, Sell' },
                { word: 'pesa, kufi, jiaja', translation: 'Money, Enough, Price' },
                { word: 'dukan, bazar', translation: 'Store, Market' },
                { word: 'maso, gosomaso, swinmaso', translation: 'Meat, Beef, Pork' },
                { word: 'kokokimaso, mahimaso', translation: 'Chicken, Fish (food)' },
                { word: 'don, feypay', translation: 'Give, Pay' }
            ]
        },
        {
            title: 'Key Concepts',
            content: '• **ANIMAL + maso** = that meat type\\n• kari/maydo = buy/sell opposites\\n• don = give, feypay = pay',
            tip: 'You can now go shopping in Globasa!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        'kekwanti', 'kari', 'maydo', 'pesa', 'kufi', 'jiaja',
        'dukan', 'bazar', 'maso', 'gosomaso', 'swinmaso',
        'kokokimaso', 'mahimaso', 'don', 'feypay'
    ],

    exercises: [
        // Shopping vocabulary
        {
            type: 'matching',
            prompt: 'Match shopping words',
            pairs: [
                { word: 'kari', translation: 'buy' },
                { word: 'maydo', translation: 'sell' },
                { word: 'pesa', translation: 'money' },
                { word: 'jiaja', translation: 'price' }
            ]
        },
        // Locations
        {
            type: 'matching',
            prompt: 'Match locations',
            pairs: [
                { word: 'dukan', translation: 'store' },
                { word: 'bazar', translation: 'market' }
            ]
        },
        // Meat vocabulary
        {
            type: 'matching',
            prompt: 'Match meat types',
            pairs: [
                { word: 'maso', translation: 'meat' },
                { word: 'gosomaso', translation: 'beef' },
                { word: 'kokokimaso', translation: 'chicken' },
                { word: 'mahimaso', translation: 'fish' }
            ]
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "How much is it?"',
            words: ['kekwanti', 'kenumer', 'sen', 'to', 'keto'],
            correctAnswer: ['kekwanti', 'sen', 'to'],
            hint: 'How much + is + it'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I will pay"',
            words: ['mi', 'xa', 'feypay', 'don', 'kari'],
            correctAnswer: ['mi', 'xa', 'feypay'],
            hint: 'I + will + pay'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Mi kari pingo in bazar"',
            correctAnswers: ['I buy apples at the market'],
            hint: 'I + buy + apples + in + market'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi hare kufi pesa"',
            correctAnswers: ['I have enough money'],
            hint: 'I + have + enough + money'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "He gives money to me"',
            correctAnswers: ['Te don pesa cel mi'],
            hint: 'He + give + money + to + me'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The store is big"',
            correctAnswers: ['Dukan sen day'],
            hint: 'Store + is + big'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'What is the pattern for meat types?',
            options: ['ANIMAL + maso', 'maso + ANIMAL', '-li + ANIMAL'],
            correctAnswer: 'ANIMAL + maso'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of "kari"?',
            options: ['don', 'maydo', 'feypay'],
            correctAnswer: 'maydo',
            hint: 'buy vs sell'
        }
    ]
};
