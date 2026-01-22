// Unit 18: Time Expressions - Lesson 5: Yesterday & Tomorrow
// New words: predin (yesterday), posdin (tomorrow)

export default {
    id: 'u18-05-yesterday-tomorrow',
    name: 'Yesterday & Tomorrow',
    unit: 18,
    unitName: 'Time Expressions',
    lessonNumber: 5,
    description: 'Learn yesterday and tomorrow',
    icon: '📆',
    xpReward: 15,

    teaching: [
        {
            title: 'Yesterday',
            content: '**Predin** means "yesterday":',
            vocabulary: [
                { word: 'predin', translation: 'yesterday' }
            ],
            examples: [
                { globasa: 'Mi le ergo predin', english: 'I worked yesterday' },
                { globasa: 'Predin le garme', english: 'Yesterday was hot' }
            ]
        },
        {
            title: 'Tomorrow',
            content: '**Posdin** means "tomorrow":',
            vocabulary: [
                { word: 'posdin', translation: 'tomorrow' }
            ],
            examples: [
                { globasa: 'Mi xa idi posdin', english: 'I will go tomorrow' },
                { globasa: 'Posdin sen Lunadin', english: 'Tomorrow is Monday' }
            ],
            tip: 'predin = previous day, posdin = post/next day'
        }
    ],

    vocabulary: [
        { word: 'predin', translation: 'yesterday' },
        { word: 'posdin', translation: 'tomorrow' }
    ],

    reviewVocabulary: [
        // Recent
        'Lunadin', 'nundin', 'lefe', 'xafe',
        // Earlier
        'le', 'xa', 'ergo', 'idi', 'garme'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match time words',
            pairs: [
                { word: 'predin', translation: 'yesterday' },
                { word: 'nundin', translation: 'today' },
                { word: 'posdin', translation: 'tomorrow' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of "predin"?',
            options: ['nundin', 'posdin', 'lefe'],
            correctAnswer: 'posdin',
            hint: 'yesterday vs tomorrow'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I will go tomorrow"',
            words: ['mi', 'xa', 'le', 'idi', 'posdin', 'predin'],
            correctAnswer: ['mi', 'xa', 'idi', 'posdin'],
            hint: 'I + will + go + tomorrow'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi le ergo predin"',
            correctAnswers: ['I worked yesterday'],
            hint: 'I + past + work + yesterday'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Tomorrow is Monday"',
            correctAnswers: ['Posdin sen Lunadin'],
            hint: 'Tomorrow + is + Monday'
        },
        {
            type: 'multiple-choice',
            prompt: 'How is "predin" formed?',
            options: ['pre + din', 'lefe + din', 'pas + din'],
            correctAnswer: 'pre + din',
            hint: 'pre = previous'
        }
    ]
};
