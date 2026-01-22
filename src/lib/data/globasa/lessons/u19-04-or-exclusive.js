// Unit 19: Reasons & Equality - Lesson 4: Or (Exclusive)
// New words: alo (or - exclusive), diferan (different)

export default {
    id: 'u19-04-or-exclusive',
    name: 'Either/Or & Different',
    unit: 19,
    unitName: 'Reasons & Equality',
    lessonNumber: 4,
    description: 'Learn exclusive "or" and "different"',
    icon: '🔀',
    xpReward: 15,

    teaching: [
        {
            title: 'Either/Or',
            content: '**Alo** means "or" (exclusive - one or the other):',
            vocabulary: [
                { word: 'alo', translation: 'or (exclusive)' }
            ],
            examples: [
                { globasa: 'Alo yu ata, alo mi xa idi', english: 'Either you come, or I will go' },
                { globasa: 'Yu vole kafe alo cay?', english: 'Do you want coffee or tea?' }
            ],
            tip: 'or = general or, alo = either...or (exclusive choice)'
        },
        {
            title: 'Different',
            content: '**Diferan** means "different":',
            vocabulary: [
                { word: 'diferan', translation: 'different' }
            ],
            examples: [
                { globasa: 'Hin ji den sen diferan', english: 'This and that are different' },
                { globasa: 'Imi hare diferan kitabu', english: 'We have different books' }
            ]
        }
    ],

    vocabulary: [
        { word: 'alo', translation: 'or (exclusive)' },
        { word: 'diferan', translation: 'different' }
    ],

    reviewVocabulary: [
        // Recent
        'sama', 'denmo',
        // Earlier
        'or', 'ji', 'kafe', 'cay'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match vocabulary',
            pairs: [
                { word: 'alo', translation: 'either/or' },
                { word: 'or', translation: 'or (general)' },
                { word: 'diferan', translation: 'different' },
                { word: 'sama', translation: 'same' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of "sama"?',
            options: ['alo', 'diferan', 'denmo'],
            correctAnswer: 'diferan',
            hint: 'same vs different'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "This and that are different"',
            words: ['hin', 'ji', 'den', 'sen', 'diferan', 'sama'],
            correctAnswer: ['hin', 'ji', 'den', 'sen', 'diferan'],
            hint: 'This + and + that + is + different'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Alo yu ata, alo mi xa idi"',
            correctAnswers: ['Either you come, or I will go'],
            hint: 'Either + you + come + or + I + will + go'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "We have different books"',
            correctAnswers: ['Imi hare diferan kitabu'],
            hint: 'We + have + different + books'
        },
        {
            type: 'multiple-choice',
            prompt: 'When do you use "alo" instead of "or"?',
            options: [
                'For exclusive choice (one or the other)',
                'For inclusive choice (both possible)',
                'They are the same'
            ],
            correctAnswer: 'For exclusive choice (one or the other)'
        }
    ]
};
