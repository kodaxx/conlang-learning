// Unit 9: Numbers & Quantifiers - Lesson 7: How Many & Everywhere
// New words: kenumer (how many), moyloka (everywhere)

export default {
    id: 'u9-07-how-many',
    name: 'How Many & Everywhere',
    unit: 9,
    unitName: 'Numbers & Quantifiers',
    lessonNumber: 7,
    description: 'Learn to ask "how many" and say "everywhere"',
    icon: '❓',
    xpReward: 15,

    teaching: [
        {
            title: 'How Many',
            content: '**Kenumer** means "how many" (ke + numer = which number):',
            vocabulary: [
                { word: 'kenumer', translation: 'how many' }
            ],
            examples: [
                { globasa: 'Yu hare kenumer kitabu?', english: 'How many books do you have?' },
                { globasa: 'Kenumer yen le ata?', english: 'How many people came?' }
            ]
        },
        {
            title: 'Everywhere',
            content: '**Moyloka** means "everywhere" (moy + loka = every place):',
            vocabulary: [
                { word: 'moyloka', translation: 'everywhere' }
            ],
            examples: [
                { globasa: 'Sui sen moyloka', english: 'Water is everywhere' },
                { globasa: 'Mi xa idi moyloka', english: 'I will go everywhere' }
            ]
        },
        {
            title: 'Correlative Pattern Summary',
            content: 'Notice the pattern with ke-, moy-, nil-:',
            examples: [
                { globasa: 'kete / moyte / nilte', english: 'who / everybody / nobody' },
                { globasa: 'keto / moyto / nilto', english: 'what / everything / nothing' },
                { globasa: 'keloka / moyloka / nilloka', english: 'where / everywhere / nowhere' },
                { globasa: 'kenumer', english: 'how many' }
            ],
            tip: 'ke- = question, moy- = every, nil- = none!'
        }
    ],

    vocabulary: [
        { word: 'kenumer', translation: 'how many' },
        { word: 'moyloka', translation: 'everywhere' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'nilte', 'nilto', 'nilloka', 'moyte', 'moyto',
        // Earlier questions
        'kete', 'keto', 'keloka', 'numer'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match vocabulary',
            pairs: [
                { word: 'kenumer', translation: 'how many' },
                { word: 'moyloka', translation: 'everywhere' },
                { word: 'nilloka', translation: 'nowhere' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you ask "How many books?"',
            options: ['Keto kitabu?', 'Kenumer kitabu?', 'Keloka kitabu?'],
            correctAnswer: 'Kenumer kitabu?',
            hint: 'kenumer = how many'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Water is everywhere"',
            words: ['sui', 'sen', 'moyloka', 'nilloka', 'keloka'],
            correctAnswer: ['sui', 'sen', 'moyloka'],
            hint: 'Water + is + everywhere'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Yu hare kenumer kitabu?"',
            correctAnswers: ['How many books do you have?'],
            hint: 'You + have + how many + books'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I will go everywhere"',
            correctAnswers: ['Mi xa idi moyloka'],
            hint: 'I + will + go + everywhere'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the prefix for "every" words?',
            options: ['ke-', 'moy-', 'nil-'],
            correctAnswer: 'moy-',
            hint: 'moyte, moyto, moyloka...'
        }
    ]
};
