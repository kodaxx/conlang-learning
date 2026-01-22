// Unit 9: Numbers & Quantifiers - Lesson 8: Unit Test
// Comprehensive review of all Unit 9 vocabulary and concepts

export default {
    id: 'u9-08-unit-test',
    name: 'Unit 9 Test',
    unit: 9,
    unitName: 'Numbers & Quantifiers',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 9: Numbers & Quantifiers!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 9 Review',
            content: 'You\'ve learned **22 new words** in Unit 9! Key vocabulary:',
            vocabulary: [
                { word: 'un-des', translation: 'Numbers 1-10' },
                { word: 'nil, plu', translation: 'Zero, Plural marker' },
                { word: 'moy, moyte, moyto, moyloka', translation: 'Every, Everybody, Everything, Everywhere' },
                { word: 'nilte, nilto, nilloka', translation: 'Nobody, Nothing, Nowhere' },
                { word: 'kenumer', translation: 'How many' }
            ]
        },
        {
            title: 'Key Concepts',
            content: '• Numbers go before nouns\\n• **plu** is optional plural marker\\n• **moy-** = every, **nil-** = none, **ke-** = question',
            tip: 'You can now count, quantify, and use correlatives!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        // All numbers
        'numer', 'un', 'dua', 'tiga', 'care', 'lima', 'sisa', 'sabe', 'oco', 'nue', 'des',
        'nil', 'plu',
        'moy', 'moyte', 'moyto', 'moyloka',
        'nilte', 'nilto', 'nilloka',
        'kenumer'
    ],

    exercises: [
        // Numbers 1-5
        {
            type: 'matching',
            prompt: 'Match numbers 1-5',
            pairs: [
                { word: 'un', translation: '1' },
                { word: 'dua', translation: '2' },
                { word: 'tiga', translation: '3' },
                { word: 'care', translation: '4' },
                { word: 'lima', translation: '5' }
            ]
        },
        // Numbers 6-10
        {
            type: 'matching',
            prompt: 'Match numbers 6-10',
            pairs: [
                { word: 'sisa', translation: '6' },
                { word: 'sabe', translation: '7' },
                { word: 'oco', translation: '8' },
                { word: 'nue', translation: '9' },
                { word: 'des', translation: '10' }
            ]
        },
        // Every words
        {
            type: 'matching',
            prompt: 'Match "every" correlatives',
            pairs: [
                { word: 'moyte', translation: 'everybody' },
                { word: 'moyto', translation: 'everything' },
                { word: 'moyloka', translation: 'everywhere' }
            ]
        },
        // None words
        {
            type: 'matching',
            prompt: 'Match "none" correlatives',
            pairs: [
                { word: 'nilte', translation: 'nobody' },
                { word: 'nilto', translation: 'nothing' },
                { word: 'nilloka', translation: 'nowhere' }
            ]
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "I have three books"',
            words: ['mi', 'hare', 'tiga', 'dua', 'kitabu'],
            correctAnswer: ['mi', 'hare', 'tiga', 'kitabu'],
            hint: 'I + have + three + books'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "How many people came?"',
            words: ['kenumer', 'keto', 'yen', 'le', 'ata'],
            correctAnswer: ['kenumer', 'yen', 'le', 'ata'],
            hint: 'How many + people + past + come'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Moyte suki hin filme"',
            correctAnswers: ['Everybody likes this movie', 'Everyone likes this movie'],
            hint: 'Everybody + like + this + movie'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi oko nilto"',
            correctAnswers: ['I see nothing'],
            hint: 'I + see + nothing'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Five cats"',
            correctAnswers: ['lima myaw'],
            hint: 'five + cats'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Nobody came"',
            correctAnswers: ['Nilte le ata'],
            hint: 'Nobody + past + come'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'What number is "oco"?',
            options: ['6', '7', '8'],
            correctAnswer: '8'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does the prefix "nil-" mean?',
            options: ['every', 'none/no', 'question'],
            correctAnswer: 'none/no',
            hint: 'nilte = nobody'
        }
    ]
};
