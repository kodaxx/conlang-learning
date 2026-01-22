// Unit 13: Modals & Superlatives - Lesson 5: Should
// New words: ingay (should)

export default {
    id: 'u13-05-should',
    name: 'Should',
    unit: 13,
    unitName: 'Modals & Superlatives',
    lessonNumber: 5,
    description: 'Learn to give advice with "ingay"',
    icon: '💡',
    xpReward: 15,

    teaching: [
        {
            title: 'Should',
            content: '**Ingay** means "should" or "ought to":',
            vocabulary: [
                { word: 'ingay', translation: 'should, ought to' }
            ],
            examples: [
                { globasa: 'Yu ingay xwexi', english: 'You should study' },
                { globasa: 'Te ingay somno', english: 'He/She should sleep' },
                { globasa: 'Imi ingay idi', english: 'We should go' }
            ],
            tip: 'ingay gives advice or recommendation, softer than musi.'
        },
        {
            title: 'Comparing Modals',
            content: 'All four modals you know:',
            examples: [
                { globasa: 'vole', english: 'want (desire)' },
                { globasa: 'abil', english: 'can (ability)' },
                { globasa: 'musi', english: 'must (obligation)' },
                { globasa: 'ingay', english: 'should (advice)' }
            ]
        }
    ],

    vocabulary: [
        { word: 'ingay', translation: 'should, ought to' }
    ],

    reviewVocabulary: [
        // Recent
        'minim', 'maxim', 'musi', 'abil',
        // Earlier
        'vole', 'xwexi', 'somno', 'idi'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match modals',
            pairs: [
                { word: 'ingay', translation: 'should' },
                { word: 'musi', translation: 'must' },
                { word: 'abil', translation: 'can' },
                { word: 'vole', translation: 'want' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "You should study"?',
            options: ['Yu musi xwexi', 'Yu ingay xwexi', 'Yu abil xwexi'],
            correctAnswer: 'Yu ingay xwexi',
            hint: 'ingay = should'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "We should go"',
            words: ['imi', 'ingay', 'musi', 'idi', 'abil'],
            correctAnswer: ['imi', 'ingay', 'idi'],
            hint: 'We + should + go'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te ingay somno"',
            correctAnswers: ['He should sleep', 'She should sleep'],
            hint: 'He/She + should + sleep'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "You should eat"',
            correctAnswers: ['Yu ingay yam'],
            hint: 'You + should + eat'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which is stronger: musi or ingay?',
            options: ['musi (must)', 'ingay (should)', 'They are the same'],
            correctAnswer: 'musi (must)',
            hint: 'Must vs should'
        }
    ]
};
