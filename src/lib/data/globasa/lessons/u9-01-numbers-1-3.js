// Unit 9: Numbers & Quantifiers - Lesson 1: Numbers 1-3
// New words: numer (number), un (one), dua (two), tiga (three)

export default {
    id: 'u9-01-numbers-1-3',
    name: 'Numbers 1-3',
    unit: 9,
    unitName: 'Numbers & Quantifiers',
    lessonNumber: 1,
    description: 'Learn the numbers one through three',
    icon: '1️⃣',
    xpReward: 15,

    teaching: [
        {
            title: 'Number (noun)',
            content: '**Numer** means "number":',
            vocabulary: [
                { word: 'numer', translation: 'number' }
            ],
            examples: [
                { globasa: 'Keto sen numer?', english: 'What is the number?' }
            ]
        },
        {
            title: 'One, Two, Three',
            content: 'Learn the first three cardinal numbers:',
            vocabulary: [
                { word: 'un', translation: 'one' },
                { word: 'dua', translation: 'two' },
                { word: 'tiga', translation: 'three' }
            ],
            examples: [
                { globasa: 'Mi hare un kitabu', english: 'I have one book' },
                { globasa: 'Te hare dua myaw', english: 'He has two cats' },
                { globasa: 'Imi hare tiga bwaw', english: 'We have three dogs' }
            ],
            tip: 'Numbers go before nouns, like adjectives!'
        }
    ],

    vocabulary: [
        { word: 'numer', translation: 'number' },
        { word: 'un', translation: 'one' },
        { word: 'dua', translation: 'two' },
        { word: 'tiga', translation: 'three' }
    ],

    reviewVocabulary: [
        // Unit 8 recent
        'gami', 'maxmo', 'minmo',
        // Earlier
        'hare', 'kitabu', 'myaw', 'bwaw', 'sen'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match numbers',
            pairs: [
                { word: 'un', translation: 'one' },
                { word: 'dua', translation: 'two' },
                { word: 'tiga', translation: 'three' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "two"?',
            options: ['un', 'dua', 'tiga'],
            correctAnswer: 'dua'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I have one book"',
            words: ['mi', 'hare', 'un', 'dua', 'kitabu'],
            correctAnswer: ['mi', 'hare', 'un', 'kitabu'],
            hint: 'I + have + one + book'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te hare dua myaw"',
            correctAnswers: ['He has two cats', 'She has two cats'],
            hint: 'He/She + have + two + cats'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "three dogs"',
            correctAnswers: ['tiga bwaw'],
            hint: 'three + dogs'
        },
        {
            type: 'multiple-choice',
            prompt: 'Where do numbers go in relation to nouns?',
            options: ['After the noun', 'Before the noun', 'Either position'],
            correctAnswer: 'Before the noun',
            hint: 'Like adjectives'
        }
    ]
};
