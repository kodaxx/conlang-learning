// Unit 18: Time Expressions - Lesson 2: Today & Now
// Review/deepen: nundin (today), nun (now)

export default {
    id: 'u18-02-today-now',
    name: 'Today & Now',
    unit: 18,
    unitName: 'Time Expressions',
    lessonNumber: 2,
    description: 'Learn today and now',
    icon: '📅',
    xpReward: 15,

    teaching: [
        {
            title: 'Now',
            content: '**Nun** means "now":',
            vocabulary: [
                { word: 'nun', translation: 'now' }
            ],
            examples: [
                { globasa: 'Mi ergo nun', english: 'I\'m working now' },
                { globasa: 'Am ata nun!', english: 'Come now!' }
            ]
        },
        {
            title: 'Today',
            content: '**Nundin** means "today" (nun + din = now + day):',
            vocabulary: [
                { word: 'nundin', translation: 'today' }
            ],
            examples: [
                { globasa: 'Nundin sen Lunadin', english: 'Today is Monday' },
                { globasa: 'Mi musi ergo nundin', english: 'I must work today' }
            ]
        }
    ],

    vocabulary: [
        { word: 'nun', translation: 'now' },
        { word: 'nundin', translation: 'today' }
    ],

    reviewVocabulary: [
        // Lesson 18.1 recent
        'watu', 'kewatu',
        // Earlier
        'ergo', 'ata', 'musi'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match time words',
            pairs: [
                { word: 'nun', translation: 'now' },
                { word: 'nundin', translation: 'today' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How is "nundin" formed?',
            options: ['nun + din', 'nun + watu', 'nun + loka'],
            correctAnswer: 'nun + din',
            hint: 'now + day = today'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I\'m working now"',
            words: ['mi', 'ergo', 'nun', 'nundin', 'le'],
            correctAnswer: ['mi', 'ergo', 'nun'],
            hint: 'I + work + now'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi musi ergo nundin"',
            correctAnswers: ['I must work today'],
            hint: 'I + must + work + today'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Come now!"',
            correctAnswers: ['Am ata nun!', 'Ata nun!'],
            hint: 'Come + now'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between nun and nundin?',
            options: ['nun = now, nundin = today', 'nun = today, nundin = now', 'They are the same'],
            correctAnswer: 'nun = now, nundin = today'
        }
    ]
};
