// Unit 13: Modals & Superlatives - Lesson 4: Least (Superlative)
// New words: minim (least)

export default {
    id: 'u13-04-least-superlative',
    name: 'Least (Superlative)',
    unit: 13,
    unitName: 'Modals & Superlatives',
    lessonNumber: 4,
    description: 'Learn the opposite superlative with "minim"',
    icon: '🔻',
    xpReward: 15,

    teaching: [
        {
            title: 'Least (Superlative)',
            content: '**Minim** means "least" (opposite of maxim):',
            vocabulary: [
                { word: 'minim', translation: 'least (superlative)' }
            ],
            examples: [
                { globasa: 'Te sen minim bala', english: 'He is the weakest/least strong' },
                { globasa: 'Hin sen minim gao', english: 'This is the shortest/least tall' }
            ],
            tip: 'minim + adjective = least + adjective'
        },
        {
            title: 'Complete Comparison System',
            content: 'Review all comparison words:',
            examples: [
                { globasa: 'maxmo ... kom', english: 'more ... than (comparative)' },
                { globasa: 'minmo ... kom', english: 'less ... than (comparative)' },
                { globasa: 'maxim', english: 'the most (superlative)' },
                { globasa: 'minim', english: 'the least (superlative)' }
            ]
        }
    ],

    vocabulary: [
        { word: 'minim', translation: 'least (superlative)' }
    ],

    reviewVocabulary: [
        // Recent
        'maxim', 'maxmo', 'minmo', 'kom',
        // Adjectives
        'bala', 'gao', 'day', 'velosi'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match superlatives',
            pairs: [
                { word: 'maxim', translation: 'most' },
                { word: 'minim', translation: 'least' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "the weakest"?',
            options: ['minmo bala', 'minim bala', 'min bala'],
            correctAnswer: 'minim bala',
            hint: 'minim = least'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "This is the shortest"',
            words: ['hin', 'sen', 'minim', 'maxim', 'gao'],
            correctAnswer: ['hin', 'sen', 'minim', 'gao'],
            hint: 'This + is + least + tall'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te sen minim bala"',
            correctAnswers: ['He is the weakest', 'She is the weakest', 'He is the least strong', 'She is the least strong'],
            hint: 'He/She + is + least + strong'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "the slowest"',
            correctAnswers: ['minim velosi'],
            hint: 'least + fast'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of maxim?',
            options: ['maxmo', 'minim', 'minmo'],
            correctAnswer: 'minim',
            hint: 'most vs least'
        }
    ]
};
