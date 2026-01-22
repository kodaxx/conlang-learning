// Unit 7: Possession & Location - Lesson 5: At, Inside & Outside
// New words: fe (at), fe inya (inside), fe exya (outside)

export default {
    id: 'u7-05-at-inside-outside',
    name: 'At, Inside & Outside',
    unit: 7,
    unitName: 'Possession & Location',
    lessonNumber: 5,
    description: 'Learn more location prepositions with "fe"',
    icon: '🏡',
    xpReward: 15,

    teaching: [
        {
            title: 'At',
            content: '**Fe** means "at" (location):',
            vocabulary: [
                { word: 'fe', translation: 'at' }
            ],
            examples: [
                { globasa: 'Mi sen fe eskol', english: 'I am at school' },
                { globasa: 'Te ergo fe banko', english: 'He/She works at the bank' }
            ],
            tip: 'Compare: "in" = inside, "fe" = at (general location)'
        },
        {
            title: 'Inside',
            content: '**Fe inya** means "inside" (fe + inya = at the interior):',
            vocabulary: [
                { word: 'fe inya', translation: 'inside' }
            ],
            examples: [
                { globasa: 'Myaw sen fe inya ogar', english: 'The cat is inside the house' },
                { globasa: 'Keto sen fe inya?', english: 'What is inside?' }
            ]
        },
        {
            title: 'Outside',
            content: '**Fe exya** means "outside" (fe + exya = at the exterior):',
            vocabulary: [
                { word: 'fe exya', translation: 'outside' }
            ],
            examples: [
                { globasa: 'Bwaw sen fe exya ogar', english: 'The dog is outside the house' },
                { globasa: 'Nini yuxi fe exya', english: 'The children play outside' }
            ]
        }
    ],

    vocabulary: [
        { word: 'fe', translation: 'at' },
        { word: 'fe inya', translation: 'inside' },
        { word: 'fe exya', translation: 'outside' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'per', 'bax', 'in', 'ex',
        // Earlier
        'ogar', 'eskol', 'banko', 'myaw', 'bwaw', 'nini', 'yuxi', 'ergo'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match prepositions',
            pairs: [
                { word: 'fe', translation: 'at' },
                { word: 'fe inya', translation: 'inside' },
                { word: 'fe exya', translation: 'outside' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I am at school"?',
            options: ['Mi sen in eskol', 'Mi sen fe eskol', 'Mi sen per eskol'],
            correctAnswer: 'Mi sen fe eskol',
            hint: 'fe = at'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The dog is outside the house"',
            words: ['bwaw', 'sen', 'fe', 'exya', 'inya', 'ogar'],
            correctAnswer: ['bwaw', 'sen', 'fe', 'exya', 'ogar'],
            hint: 'Dog + is + at + outside + house'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Myaw sen fe inya ogar"',
            correctAnswers: ['The cat is inside the house'],
            hint: 'Cat + is + inside + house'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The children play outside"',
            correctAnswers: ['Nini yuxi fe exya'],
            hint: 'Children + play + outside'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between "in" and "fe"?',
            options: [
                'They mean the same thing',
                'in = inside, fe = at (general location)',
                'fe = inside, in = at'
            ],
            correctAnswer: 'in = inside, fe = at (general location)',
            hint: 'Fe is more general'
        }
    ]
};
