// Unit 19: Reasons & Equality - Lesson 5: Still & Already
// New words: haya (still), ija (already)

export default {
    id: 'u19-05-still-already',
    name: 'Still & Already',
    unit: 19,
    unitName: 'Reasons & Equality',
    lessonNumber: 5,
    description: 'Learn "still" and "already"',
    icon: '⏳',
    xpReward: 15,

    teaching: [
        {
            title: 'Still',
            content: '**Haya** means "still":',
            vocabulary: [
                { word: 'haya', translation: 'still' }
            ],
            examples: [
                { globasa: 'Mi haya ergo', english: 'I\'m still working' },
                { globasa: 'Te haya somno', english: 'He\'s still sleeping' }
            ]
        },
        {
            title: 'Already',
            content: '**Ija** means "already":',
            vocabulary: [
                { word: 'ija', translation: 'already' }
            ],
            examples: [
                { globasa: 'Mi ija le yam', english: 'I already ate' },
                { globasa: 'Te ija le ata', english: 'He already came' }
            ],
            tip: 'haya = continuing, ija = completed before expected'
        }
    ],

    vocabulary: [
        { word: 'haya', translation: 'still' },
        { word: 'ija', translation: 'already' }
    ],

    reviewVocabulary: [
        // Recent
        'alo', 'diferan', 'sama',
        // Earlier
        'ergo', 'somno', 'yam', 'ata', 'le'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match time adverbs',
            pairs: [
                { word: 'haya', translation: 'still' },
                { word: 'ija', translation: 'already' },
                { word: 'nun', translation: 'now' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I\'m still working"?',
            options: ['Mi ija ergo', 'Mi haya ergo', 'Mi nun ergo'],
            correctAnswer: 'Mi haya ergo',
            hint: 'haya = still'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I already ate"',
            words: ['mi', 'ija', 'haya', 'le', 'yam'],
            correctAnswer: ['mi', 'ija', 'le', 'yam'],
            hint: 'I + already + past + eat'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te haya somno"',
            correctAnswers: ['He\'s still sleeping', 'She\'s still sleeping'],
            hint: 'He/She + still + sleep'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "He already came"',
            correctAnswers: ['Te ija le ata'],
            hint: 'He + already + past + come'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between haya and ija?',
            options: [
                'haya = still continuing, ija = already completed',
                'haya = already, ija = still',
                'They are the same'
            ],
            correctAnswer: 'haya = still continuing, ija = already completed'
        }
    ]
};
