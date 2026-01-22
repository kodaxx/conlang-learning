// Unit 14: Commands & Positions - Lesson 6: Between & Next To
// New words: miden (between), mey (next to)

export default {
    id: 'u14-06-between-next',
    name: 'Between & Next To',
    unit: 14,
    unitName: 'Commands & Positions',
    lessonNumber: 6,
    description: 'Learn more position words: between and next to',
    icon: '↔️',
    xpReward: 15,

    teaching: [
        {
            title: 'Between',
            content: '**Miden** means "between" or "middle":',
            vocabulary: [
                { word: 'miden', translation: 'between, middle' }
            ],
            examples: [
                { globasa: 'Dukan sen miden banko ji eskol', english: 'The store is between the bank and the school' },
                { globasa: 'Te sen miden imi', english: 'He is between us' }
            ]
        },
        {
            title: 'Next To / Beside',
            content: '**Mey** means "next to" or "beside":',
            vocabulary: [
                { word: 'mey', translation: 'next to, beside' }
            ],
            examples: [
                { globasa: 'Mi ogar mey parke', english: 'I live next to the park' },
                { globasa: 'Hotel sen mey restoran', english: 'The hotel is next to the restaurant' }
            ]
        }
    ],

    vocabulary: [
        { word: 'miden', translation: 'between, middle' },
        { word: 'mey', translation: 'next to, beside' }
    ],

    reviewVocabulary: [
        // Recent
        'proksimo', 'teli', 'cejo', 'bulu',
        // Earlier
        'dukan', 'banko', 'eskol', 'parke', 'hotel', 'restoran', 'ji'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match position words',
            pairs: [
                { word: 'miden', translation: 'between' },
                { word: 'mey', translation: 'next to' },
                { word: 'proksimo', translation: 'near' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "next to the park"?',
            options: ['proksimo parke', 'mey parke', 'miden parke'],
            correctAnswer: 'mey parke',
            hint: 'mey = next to'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The store is between the bank and the school"',
            words: ['dukan', 'sen', 'miden', 'banko', 'ji', 'eskol'],
            correctAnswer: ['dukan', 'sen', 'miden', 'banko', 'ji', 'eskol'],
            hint: 'Store + is + between + bank + and + school'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi ogar mey parke"',
            correctAnswers: ['I live next to the park'],
            hint: 'I + live + next to + park'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The hotel is next to the restaurant"',
            correctAnswers: ['Hotel sen mey restoran'],
            hint: 'Hotel + is + next to + restaurant'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "miden" mean?',
            options: ['next to', 'between', 'near'],
            correctAnswer: 'between'
        }
    ]
};
