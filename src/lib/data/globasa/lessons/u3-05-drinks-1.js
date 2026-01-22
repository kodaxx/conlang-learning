// Unit 3: Questions & Preferences - Lesson 5: Drinks 1
// New words: glu, sui, kafe (3 words)
// Concept: Drink verb and beverages
// Reviews: Units 1-3

export default {
    id: 'u3-05-drinks-1',
    name: 'Drinks 1',
    unit: 3,
    unitName: 'Questions & Preferences',
    lessonNumber: 5,
    description: 'Learn to drink and your first beverages!',
    icon: '☕',
    xpReward: 20,

    teaching: [
        {
            title: 'Glu - Drink',
            content: '**Glu** means "drink". Just like yam (eat), it follows SVO order!',
            examples: [
                { globasa: 'Mi glu', english: 'I drink' },
                { globasa: 'Yu glu sui', english: 'You drink water' }
            ]
        },
        {
            title: 'Sui - Water',
            content: '**Sui** means "water". Essential vocabulary!',
            examples: [
                { globasa: 'Mi glu sui', english: 'I drink water' },
                { globasa: 'Bwaw glu sui', english: 'The dog drinks water' }
            ]
        },
        {
            title: 'Kafe - Coffee',
            content: '**Kafe** means "coffee". An international word!',
            examples: [
                { globasa: 'Mi suki kafe', english: 'I like coffee' },
                { globasa: 'Kam yu vole na glu kafe?', english: 'Do you want to drink coffee?' }
            ]
        }
    ],

    vocabulary: [
        { word: 'glu', translation: 'drink', phonetic: 'gloo' },
        { word: 'sui', translation: 'water', phonetic: 'soo-ee' },
        { word: 'kafe', translation: 'coffee', phonetic: 'KA-feh' }
    ],

    reviewVocabulary: ['yam', 'suki', 'vole', 'na', 'kam', 'mi', 'yu', 'bwaw'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "glu" mean?',
            options: ['eat', 'drink', 'have', 'want'],
            correctAnswer: 'drink',
            hint: 'What you do with beverages'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi glu sui"',
            correctAnswers: ['I drink water', 'I am drinking water'],
            hint: 'mi = I, glu = drink, sui = water'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Do you like coffee?"',
            words: ['kam', 'yu', 'suki', 'kafe', 'glu', 'sui'],
            correctAnswer: ['kam', 'yu', 'suki', 'kafe'],
            hint: 'Question + you + like + coffee'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Kam yu vole na glu kafe?"',
            correctAnswers: ['Do you want to drink coffee?'],
            hint: 'Question + you + want + to + drink + coffee'
        },
        {
            type: 'matching',
            prompt: 'Match eating and drinking verbs',
            pairs: [
                { word: 'yam', translation: 'eat' },
                { word: 'glu', translation: 'drink' }
            ]
        },
        // SRS Review
        {
            type: 'translation',
            prompt: '[Review] Translate: "Mi suki na oko filme"',
            correctAnswers: ['I like to watch movies', 'I like to watch a movie'],
            hint: 'I + like + to + watch + movie'
        }
    ]
};
