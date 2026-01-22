// Unit 13: Modals & Superlatives - Lesson 3: Most & Superlatives
// New words: maxim (most)

export default {
    id: 'u13-03-most-superlative',
    name: 'Most (Superlative)',
    unit: 13,
    unitName: 'Modals & Superlatives',
    lessonNumber: 3,
    description: 'Learn to form superlatives with "maxim"',
    icon: '🥇',
    xpReward: 15,

    teaching: [
        {
            title: 'Most (Superlative)',
            content: '**Maxim** means "most" (forms superlatives):',
            vocabulary: [
                { word: 'maxim', translation: 'most (superlative)' }
            ],
            examples: [
                { globasa: 'Te sen maxim bala', english: 'He is the strongest' },
                { globasa: 'Hin sen maxim bon kitabu', english: 'This is the best book' },
                { globasa: 'Te sen maxim velosi', english: 'She is the fastest' }
            ],
            tip: 'maxim + adjective = superlative (most + adj)'
        },
        {
            title: 'Compare with Comparative',
            content: 'Review comparative vs superlative:',
            examples: [
                { globasa: 'Te sen maxmo bala kom mi', english: 'He is stronger than me (comparative)' },
                { globasa: 'Te sen maxim bala', english: 'He is the strongest (superlative)' }
            ]
        }
    ],

    vocabulary: [
        { word: 'maxim', translation: 'most (superlative)' }
    ],

    reviewVocabulary: [
        // Recent
        'musi', 'abil',
        // Comparative
        'maxmo', 'kom',
        // Adjectives
        'bala', 'bon', 'velosi', 'day', 'meli'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match comparison words',
            pairs: [
                { word: 'maxim', translation: 'most (superlative)' },
                { word: 'maxmo', translation: 'more (comparative)' },
                { word: 'max', translation: 'more (quantity)' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "the strongest"?',
            options: ['maxmo bala', 'maxim bala', 'max bala'],
            correctAnswer: 'maxim bala',
            hint: 'maxim = most'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "This is the best book"',
            words: ['hin', 'sen', 'maxim', 'bon', 'kitabu'],
            correctAnswer: ['hin', 'sen', 'maxim', 'bon', 'kitabu'],
            hint: 'This + is + most + good + book'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te sen maxim velosi"',
            correctAnswers: ['He is the fastest', 'She is the fastest'],
            hint: 'He/She + is + most + fast'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "the biggest"',
            correctAnswers: ['maxim day'],
            hint: 'most + big'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between maxmo and maxim?',
            options: [
                'maxmo = comparative, maxim = superlative',
                'maxmo = superlative, maxim = comparative',
                'They are the same'
            ],
            correctAnswer: 'maxmo = comparative, maxim = superlative'
        }
    ]
};
