// Unit 18: Time Expressions - Lesson 4: Days of the Week
// New words: days of week

export default {
    id: 'u18-04-days-of-week',
    name: 'Days of the Week',
    unit: 18,
    unitName: 'Time Expressions',
    lessonNumber: 4,
    description: 'Learn the days of the week',
    icon: '📆',
    xpReward: 15,

    teaching: [
        {
            title: 'Days of the Week',
            content: 'Days are formed with planet names + **din** (day):',
            vocabulary: [
                { word: 'Lunadin', translation: 'Monday (Moon-day)' },
                { word: 'Mirodin', translation: 'Tuesday (Mars-day)' },
                { word: 'Bododin', translation: 'Wednesday (Mercury-day)' },
                { word: 'Muxtaridin', translation: 'Thursday (Jupiter-day)' }
            ],
            examples: [
                { globasa: 'Nundin sen Lunadin', english: 'Today is Monday' }
            ]
        },
        {
            title: 'More Days',
            content: 'The rest of the week:',
            vocabulary: [
                { word: 'Jinadin', translation: 'Friday (Venus-day)' },
                { word: 'Saturdin', translation: 'Saturday (Saturn-day)' },
                { word: 'Soladin', translation: 'Sunday (Sun-day)' }
            ],
            tip: 'All days end in -din (day)!'
        }
    ],

    vocabulary: [
        { word: 'Lunadin', translation: 'Monday' },
        { word: 'Mirodin', translation: 'Tuesday' },
        { word: 'Bododin', translation: 'Wednesday' },
        { word: 'Muxtaridin', translation: 'Thursday' },
        { word: 'Jinadin', translation: 'Friday' },
        { word: 'Saturdin', translation: 'Saturday' },
        { word: 'Soladin', translation: 'Sunday' }
    ],

    reviewVocabulary: [
        // Recent
        'lefe', 'xafe', 'nundin',
        // Earlier
        'din', 'sol'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match weekdays',
            pairs: [
                { word: 'Lunadin', translation: 'Monday' },
                { word: 'Jinadin', translation: 'Friday' },
                { word: 'Saturdin', translation: 'Saturday' },
                { word: 'Soladin', translation: 'Sunday' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What day is "Soladin"?',
            options: ['Saturday', 'Sunday', 'Monday'],
            correctAnswer: 'Sunday',
            hint: 'Sol = sun'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Today is Monday"',
            words: ['nundin', 'sen', 'Lunadin', 'Soladin', 'din'],
            correctAnswer: ['nundin', 'sen', 'Lunadin'],
            hint: 'Today + is + Monday'
        },
        {
            type: 'translation',
            prompt: 'What is "Saturday" in Globasa?',
            correctAnswers: ['Saturdin'],
            hint: 'Saturn + din'
        },
        {
            type: 'translation',
            prompt: 'What is "Friday" in Globasa?',
            correctAnswers: ['Jinadin'],
            hint: 'Venus (Jina) + din'
        },
        {
            type: 'multiple-choice',
            prompt: 'What suffix do all days share?',
            options: ['-watu', '-din', '-sol'],
            correctAnswer: '-din'
        }
    ]
};
