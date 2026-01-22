// Unit 13: Modals & Superlatives - Lesson 1: Can / Able
// New words: abil (can/able)

export default {
    id: 'u13-01-can-able',
    name: 'Can / Able',
    unit: 13,
    unitName: 'Modals & Superlatives',
    lessonNumber: 1,
    description: 'Learn to express ability with "abil"',
    icon: '💪',
    xpReward: 15,

    teaching: [
        {
            title: 'Can / Able',
            content: '**Abil** means "can" or "be able to":',
            vocabulary: [
                { word: 'abil', translation: 'can, able to' }
            ],
            examples: [
                { globasa: 'Mi abil loga Globasa', english: 'I can speak Globasa' },
                { globasa: 'Yu abil idi?', english: 'Can you go?' },
                { globasa: 'Te no abil suyon', english: 'He/She cannot swim' }
            ],
            tip: 'abil goes before the main verb, like other modals.'
        },
        {
            title: 'Using abil',
            content: 'More examples with abil:',
            examples: [
                { globasa: 'Mi abil oko te', english: 'I can see him/her' },
                { globasa: 'Imi abil yam hinloka', english: 'We can eat here' }
            ]
        }
    ],

    vocabulary: [
        { word: 'abil', translation: 'can, able to' }
    ],

    reviewVocabulary: [
        // Unit 12 recent
        'kamisapul', 'renki',
        // Earlier verbs
        'loga', 'idi', 'suyon', 'oko', 'yam', 'no'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match vocabulary',
            pairs: [
                { word: 'abil', translation: 'can/able' },
                { word: 'vole', translation: 'want' },
                { word: 'suki', translation: 'like' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I can speak Globasa"?',
            options: ['Mi loga abil Globasa', 'Mi abil loga Globasa', 'Abil mi loga Globasa'],
            correctAnswer: 'Mi abil loga Globasa',
            hint: 'Subject + abil + verb'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Can you go?"',
            words: ['yu', 'abil', 'idi', 'vole', 'xa'],
            correctAnswer: ['yu', 'abil', 'idi'],
            hint: 'You + can + go'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te no abil suyon"',
            correctAnswers: ['He cannot swim', 'She cannot swim', 'He can\'t swim', 'She can\'t swim'],
            hint: 'He/She + not + can + swim'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "We can eat here"',
            correctAnswers: ['Imi abil yam hinloka'],
            hint: 'We + can + eat + here'
        },
        {
            type: 'multiple-choice',
            prompt: 'Where does "abil" go in a sentence?',
            options: ['After the verb', 'Before the verb', 'At the end'],
            correctAnswer: 'Before the verb',
            hint: 'abil + verb'
        }
    ]
};
