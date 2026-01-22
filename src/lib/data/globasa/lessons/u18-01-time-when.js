// Unit 18: Time Expressions - Lesson 1: Time & When
// New words: watu (time), kewatu (when)

export default {
    id: 'u18-01-time-when',
    name: 'Time & When',
    unit: 18,
    unitName: 'Time Expressions',
    lessonNumber: 1,
    description: 'Learn basic time vocabulary',
    icon: '⏰',
    xpReward: 15,

    teaching: [
        {
            title: 'Time',
            content: '**Watu** means "time":',
            vocabulary: [
                { word: 'watu', translation: 'time' }
            ],
            examples: [
                { globasa: 'Mi no hare watu', english: 'I don\'t have time' },
                { globasa: 'Watu sen pesa', english: 'Time is money' }
            ]
        },
        {
            title: 'When',
            content: '**Kewatu** means "when":',
            vocabulary: [
                { word: 'kewatu', translation: 'when' }
            ],
            examples: [
                { globasa: 'Kewatu yu xa ata?', english: 'When will you come?' },
                { globasa: 'Mi no xana kewatu', english: 'I don\'t know when' }
            ],
            tip: 'ke + watu = which time = when'
        }
    ],

    vocabulary: [
        { word: 'watu', translation: 'time' },
        { word: 'kewatu', translation: 'when' }
    ],

    reviewVocabulary: [
        // Unit 17 recent
        'kredi', 'asha', 'ki',
        // Earlier
        'hare', 'pesa', 'ata', 'xana'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match time vocabulary',
            pairs: [
                { word: 'watu', translation: 'time' },
                { word: 'kewatu', translation: 'when' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you ask "When will you come?"',
            options: ['Keto yu xa ata?', 'Kewatu yu xa ata?', 'Keloka yu xa ata?'],
            correctAnswer: 'Kewatu yu xa ata?',
            hint: 'When + you + will + come'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I don\'t have time"',
            words: ['mi', 'no', 'hare', 'watu', 'kewatu'],
            correctAnswer: ['mi', 'no', 'hare', 'watu'],
            hint: 'I + not + have + time'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Watu sen pesa"',
            correctAnswers: ['Time is money'],
            hint: 'Time + is + money'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "When will you come?"',
            correctAnswers: ['Kewatu yu xa ata?'],
            hint: 'When + you + will + come'
        },
        {
            type: 'multiple-choice',
            prompt: 'How is "kewatu" formed?',
            options: ['ke + watu', 'watu + ke', 'ke + te'],
            correctAnswer: 'ke + watu',
            hint: 'Question word pattern'
        }
    ]
};
