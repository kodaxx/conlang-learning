// Unit 9: Numbers & Quantifiers - Lesson 4: Zero & Plural
// New words: nil (zero), plu (plural marker)

export default {
    id: 'u9-04-zero-plural',
    name: 'Zero & Plural',
    unit: 9,
    unitName: 'Numbers & Quantifiers',
    lessonNumber: 4,
    description: 'Learn zero and the optional plural marker',
    icon: '0️⃣',
    xpReward: 15,

    teaching: [
        {
            title: 'Zero',
            content: '**Nil** means "zero" or "no/none":',
            vocabulary: [
                { word: 'nil', translation: 'zero, none' }
            ],
            examples: [
                { globasa: 'Mi hare nil kitabu', english: 'I have zero books / I have no books' },
                { globasa: 'Nil yen le ata', english: 'No one came' }
            ]
        },
        {
            title: 'Plural Marker',
            content: '**Plu** is an optional plural marker:',
            vocabulary: [
                { word: 'plu', translation: 'plural marker' }
            ],
            examples: [
                { globasa: 'plu kitabu', english: 'books (explicitly plural)' },
                { globasa: 'plu myaw yuxi', english: 'The cats are playing' }
            ],
            tip: 'In Globasa, nouns don\'t require plural marking. Plu is optional for clarity!'
        },
        {
            title: 'With Numbers',
            content: 'When you use numbers, plu is redundant:',
            examples: [
                { globasa: 'tiga kitabu', english: 'three books (plu not needed)' },
                { globasa: 'multi kitabu', english: 'many books (plu not needed)' }
            ]
        }
    ],

    vocabulary: [
        { word: 'nil', translation: 'zero, none' },
        { word: 'plu', translation: 'plural marker' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'un', 'dua', 'tiga', 'des', 'multi',
        // Earlier
        'kitabu', 'myaw', 'yen', 'ata', 'hare', 'yuxi'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match new vocabulary',
            pairs: [
                { word: 'nil', translation: 'zero/none' },
                { word: 'plu', translation: 'plural marker' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I have no books"?',
            options: ['Mi hare un kitabu', 'Mi hare nil kitabu', 'Mi hare plu kitabu'],
            correctAnswer: 'Mi hare nil kitabu',
            hint: 'nil = zero/none'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The cats are playing"',
            words: ['plu', 'myaw', 'yuxi', 'un', 'nil'],
            correctAnswer: ['plu', 'myaw', 'yuxi'],
            hint: 'plural + cats + play'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Nil yen le ata"',
            correctAnswers: ['No one came', 'Nobody came'],
            hint: 'Zero + person + past + come'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I have zero books"',
            correctAnswers: ['Mi hare nil kitabu'],
            hint: 'I + have + zero + books'
        },
        {
            type: 'multiple-choice',
            prompt: 'Is "plu" required for plurals in Globasa?',
            options: [
                'Yes, always required',
                'No, it\'s optional',
                'Only with numbers'
            ],
            correctAnswer: 'No, it\'s optional',
            hint: 'Globasa doesn\'t require plural marking'
        }
    ]
};
