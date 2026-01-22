// Unit 6: Communication - Lesson 4: Movement & Direction
// New words: idi (go), ata (come), cel (to/toward, goal)

export default {
    id: 'u6-04-movement-direction',
    name: 'Movement & Direction',
    unit: 6,
    unitName: 'Communication',
    lessonNumber: 4,
    description: 'Learn verbs of motion and the goal preposition',
    icon: '🚶',
    xpReward: 15,

    teaching: [
        {
            title: 'Go',
            content: '**Idi** means "to go":',
            vocabulary: [
                { word: 'idi', translation: 'go' }
            ],
            examples: [
                { globasa: 'Mi xa idi cel parke', english: 'I will go to the park' },
                { globasa: 'Ete le idi cel eskol', english: 'They went to school' }
            ]
        },
        {
            title: 'Come',
            content: '**Ata** means "to come":',
            vocabulary: [
                { word: 'ata', translation: 'come' }
            ],
            examples: [
                { globasa: 'Ata hinloka!', english: 'Come here!' },
                { globasa: 'Te xa ata cel ogar', english: 'He/She will come to the house' }
            ]
        },
        {
            title: 'To / Toward (Goal)',
            content: '**Cel** indicates direction or goal:',
            vocabulary: [
                { word: 'cel', translation: 'to, toward (goal)' }
            ],
            examples: [
                { globasa: 'Mi idi cel banko', english: 'I go to the bank' },
                { globasa: 'Imi xa ata cel yu', english: 'We will come to you' }
            ],
            tip: 'Use "cel" for destinations. Compare: "in" = inside, "cel" = toward/to.'
        }
    ],

    vocabulary: [
        { word: 'idi', translation: 'go' },
        { word: 'ata', translation: 'come' },
        { word: 'cel', translation: 'to, toward (goal)' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'loga', 'cudu', 'kete', 'keto',
        // Earlier
        'in', 'parke', 'eskol', 'banko', 'ogar', 'le', 'xa'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match movement words',
            pairs: [
                { word: 'idi', translation: 'go' },
                { word: 'ata', translation: 'come' },
                { word: 'cel', translation: 'to/toward' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I will go to the park"?',
            options: ['Mi xa idi cel parke', 'Mi xa ata cel parke', 'Mi xa idi in parke'],
            correctAnswer: 'Mi xa idi cel parke',
            hint: 'idi = go, cel = to (goal)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Come here!"',
            words: ['ata', 'idi', 'hinloka', 'denloka', 'cel'],
            correctAnswer: ['ata', 'hinloka'],
            hint: 'Come + here'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Ete le idi cel eskol"',
            correctAnswers: ['They went to school'],
            hint: 'They + past + go + to + school'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "She will come to the house"',
            correctAnswers: ['Te xa ata cel ogar'],
            hint: 'She + will + come + to + house'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between "in" and "cel"?',
            options: [
                'in = inside, cel = toward/to (destination)',
                'in = to, cel = inside',
                'They are the same'
            ],
            correctAnswer: 'in = inside, cel = toward/to (destination)',
            hint: 'Location vs direction'
        }
    ]
};
