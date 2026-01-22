// Unit 15: Conditionals & Colors - Lesson 1: If
// New words: eger (if)

export default {
    id: 'u15-01-if',
    name: 'If (Conditional)',
    unit: 15,
    unitName: 'Conditionals & Colors',
    lessonNumber: 1,
    description: 'Learn to express conditions with "eger"',
    icon: '❓',
    xpReward: 15,

    teaching: [
        {
            title: 'If',
            content: '**Eger** means "if":',
            vocabulary: [
                { word: 'eger', translation: 'if' }
            ],
            examples: [
                { globasa: 'Eger yu vole, mi xa idi', english: 'If you want, I will go' },
                { globasa: 'Eger to sen bon, mi xa kari to', english: 'If it is good, I will buy it' },
                { globasa: 'Eger te ata, am loga cel mi', english: 'If he comes, tell me' }
            ],
            tip: 'Eger clause can come at the start or end of the sentence.'
        },
        {
            title: 'If at End',
            content: 'You can also put the condition at the end:',
            examples: [
                { globasa: 'Mi xa yam, eger mi sen hox', english: 'I will eat, if I am hungry' }
            ]
        }
    ],

    vocabulary: [
        { word: 'eger', translation: 'if' }
    ],

    reviewVocabulary: [
        // Unit 14 recent
        'am', 'proksimo', 'mey',
        // Earlier
        'vole', 'xa', 'idi', 'kari', 'ata', 'loga', 'bon', 'hox'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match vocabulary',
            pairs: [
                { word: 'eger', translation: 'if' },
                { word: 'ji', translation: 'and' },
                { word: 'or', translation: 'or' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "If you want"?',
            options: ['Yu vole eger', 'Eger yu vole', 'Kam yu vole'],
            correctAnswer: 'Eger yu vole',
            hint: 'eger + clause'
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
            prompt: 'Translate: "Eger to sen bon, mi xa kari to"',
            correctAnswers: ['If it is good, I will buy it'],
            hint: 'If + it + is + good + I + will + buy + it'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "If he comes, tell me"',
            correctAnswers: ['Eger te ata, am loga cel mi'],
            hint: 'If + he + come + tell + to + me'
        },
        {
            type: 'multiple-choice',
            prompt: 'Where can the "eger" clause go?',
            options: ['Only at the start', 'Only at the end', 'At start or end'],
            correctAnswer: 'At start or end'
        }
    ]
};
