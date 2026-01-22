// Unit 18: Time Expressions - Lesson 7: Hour & Minute
// New words: satu (hour), minuta (minute)

export default {
    id: 'u18-07-hour-minute',
    name: 'Hour & Minute',
    unit: 18,
    unitName: 'Time Expressions',
    lessonNumber: 7,
    description: 'Learn hour and minute vocabulary',
    icon: '⌚',
    xpReward: 15,

    teaching: [
        {
            title: 'Hour',
            content: '**Satu** means "hour":',
            vocabulary: [
                { word: 'satu', translation: 'hour' }
            ],
            examples: [
                { globasa: 'Mi xa ata in un satu', english: 'I will come in one hour' },
                { globasa: 'Satu oco', english: 'Eight o\'clock' }
            ]
        },
        {
            title: 'Minute',
            content: '**Minuta** means "minute":',
            vocabulary: [
                { word: 'minuta', translation: 'minute' }
            ],
            examples: [
                { globasa: 'Dua satu ji tigades minuta', english: '2:30 (two hours and 30 minutes)' },
                { globasa: 'Am dabu un minuta!', english: 'Wait one minute!' }
            ]
        }
    ],

    vocabulary: [
        { word: 'satu', translation: 'hour' },
        { word: 'minuta', translation: 'minute' }
    ],

    reviewVocabulary: [
        // Recent
        'nyan', 'mes', 'din',
        // Numbers
        'un', 'dua', 'oco', 'tigades'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match time units',
            pairs: [
                { word: 'satu', translation: 'hour' },
                { word: 'minuta', translation: 'minute' },
                { word: 'din', translation: 'day' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "Eight o\'clock"?',
            options: ['Oco din', 'Satu oco', 'Oco satu'],
            correctAnswer: 'Satu oco',
            hint: 'Hour + eight'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I will come in one hour"',
            words: ['mi', 'xa', 'ata', 'in', 'un', 'satu'],
            correctAnswer: ['mi', 'xa', 'ata', 'in', 'un', 'satu'],
            hint: 'I + will + come + in + one + hour'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Am dabu un minuta!"',
            correctAnswers: ['Wait one minute!'],
            hint: 'Wait + one + minute'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "one hour"',
            correctAnswers: ['un satu'],
            hint: 'One + hour'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is "minuta"?',
            options: ['hour', 'minute', 'second'],
            correctAnswer: 'minute'
        }
    ]
};
