// Unit 19: Reasons & Equality - Lesson 3: Same & Equal
// New words: sama (same), denmo (equally, as...as)

export default {
    id: 'u19-03-same-equal',
    name: 'Same & Equal',
    unit: 19,
    unitName: 'Reasons & Equality',
    lessonNumber: 3,
    description: 'Learn to express sameness and equality',
    icon: '⚖️',
    xpReward: 15,

    teaching: [
        {
            title: 'Same',
            content: '**Sama** means "same":',
            vocabulary: [
                { word: 'sama', translation: 'same' }
            ],
            examples: [
                { globasa: 'Imi hare sama kitabu', english: 'We have the same book' },
                { globasa: 'To sen sama', english: 'It\'s the same' }
            ]
        },
        {
            title: 'Equally / As...As',
            content: '**Denmo...kom** means "as...as" or "equally":',
            vocabulary: [
                { word: 'denmo', translation: 'as, equally' }
            ],
            examples: [
                { globasa: 'Te sen denmo bala kom mi', english: 'He is as strong as me' },
                { globasa: 'Hin sen denmo bon kom den', english: 'This is as good as that' }
            ],
            tip: 'denmo + adjective + kom = as + adj + as'
        }
    ],

    vocabulary: [
        { word: 'sama', translation: 'same' },
        { word: 'denmo', translation: 'as, equally' }
    ],

    reviewVocabulary: [
        // Recent
        'keseba', 'koski',
        // Comparison
        'maxmo', 'minmo', 'kom'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match comparison words',
            pairs: [
                { word: 'sama', translation: 'same' },
                { word: 'denmo', translation: 'as/equally' },
                { word: 'maxmo', translation: 'more' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "as strong as me"?',
            options: ['maxmo bala kom mi', 'denmo bala kom mi', 'sama bala kom mi'],
            correctAnswer: 'denmo bala kom mi',
            hint: 'denmo + adj + kom'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "We have the same book"',
            words: ['imi', 'hare', 'sama', 'denmo', 'kitabu'],
            correctAnswer: ['imi', 'hare', 'sama', 'kitabu'],
            hint: 'We + have + same + book'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te sen denmo bala kom mi"',
            correctAnswers: ['He is as strong as me', 'She is as strong as me'],
            hint: 'He/She + is + as + strong + as + me'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "It\'s the same"',
            correctAnswers: ['To sen sama'],
            hint: 'It + is + same'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the pattern for equality comparison?',
            options: ['maxmo...kom', 'denmo...kom', 'sama...kom'],
            correctAnswer: 'denmo...kom'
        }
    ]
};
