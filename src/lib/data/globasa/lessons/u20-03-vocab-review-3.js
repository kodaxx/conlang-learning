// Unit 20: Final Review - Lesson 3: Vocabulary Review 3
// Review of vocabulary from Units 11-15

export default {
    id: 'u20-03-vocab-review-3',
    name: 'Vocabulary Review 3',
    unit: 20,
    unitName: 'Final Review',
    lessonNumber: 3,
    description: 'Review vocabulary from Units 11-15',
    icon: '🛒',
    xpReward: 20,

    teaching: [
        {
            title: 'Units 11-15 Review',
            content: 'Review advanced vocabulary:',
            vocabulary: [
                { word: 'kari, maydo, pesa', translation: 'Buy, Sell, Money' },
                { word: 'labas, kamisa, sapatu', translation: 'Clothing, Shirt, Shoes' },
                { word: 'abil, musi, ingay', translation: 'Can, Must, Should' },
                { word: 'blanko, ruho, biru, leso', translation: 'Colors' }
            ]
        },
        {
            title: 'Key Grammar',
            content: 'Advanced grammar:',
            examples: [
                { globasa: '-pul', english: 'Wear suffix' },
                { globasa: 'maxim, minim', english: 'Superlatives' },
                { globasa: 'eger...ger', english: 'If...then' }
            ]
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        'kari', 'maydo', 'pesa', 'dukan', 'bazar',
        'labas', 'kamisa', 'sapatu', 'topi', 'jama',
        'abil', 'musi', 'ingay', 'maxim', 'minim',
        'eger', 'blanko', 'ruho', 'biru', 'leso'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match shopping words',
            pairs: [
                { word: 'kari', translation: 'buy' },
                { word: 'maydo', translation: 'sell' },
                { word: 'pesa', translation: 'money' },
                { word: 'dukan', translation: 'store' }
            ]
        },
        {
            type: 'matching',
            prompt: 'Match modals',
            pairs: [
                { word: 'abil', translation: 'can' },
                { word: 'musi', translation: 'must' },
                { word: 'ingay', translation: 'should' }
            ]
        },
        {
            type: 'word-bank',
            prompt: 'Build: "If you want, I will go"',
            words: ['eger', 'yu', 'vole', 'mi', 'xa', 'idi'],
            correctAnswer: ['eger', 'yu', 'vole', 'mi', 'xa', 'idi'],
            hint: 'If + you + want + I + will + go'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te sen maxim bala"',
            correctAnswers: ['He is the strongest', 'She is the strongest'],
            hint: 'He/She + is + most + strong'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I wear a shirt"',
            correctAnswers: ['Mi kamisapul'],
            hint: 'I + wear-shirt'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the superlative of "bala"?',
            options: ['maxmo bala', 'maxim bala', 'bala maxim'],
            correctAnswer: 'maxim bala'
        }
    ]
};
