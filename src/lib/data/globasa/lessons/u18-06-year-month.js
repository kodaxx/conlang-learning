// Unit 18: Time Expressions - Lesson 6: Year & Month
// New words: nyan (year), mes (month)

export default {
    id: 'u18-06-year-month',
    name: 'Year & Month',
    unit: 18,
    unitName: 'Time Expressions',
    lessonNumber: 6,
    description: 'Learn year and month vocabulary',
    icon: '🗓️',
    xpReward: 15,

    teaching: [
        {
            title: 'Year',
            content: '**Nyan** means "year":',
            vocabulary: [
                { word: 'nyan', translation: 'year' }
            ],
            examples: [
                { globasa: 'Mi le ogar hinloka un nyan', english: 'I lived here for one year' },
                { globasa: 'Hin nyan sen bon', english: 'This year is good' }
            ]
        },
        {
            title: 'Month',
            content: '**Mes** means "month":',
            vocabulary: [
                { word: 'mes', translation: 'month' }
            ],
            examples: [
                { globasa: 'Un nyan hare des dua mes', english: 'One year has twelve months' },
                { globasa: 'Hin mes sen bardi', english: 'This month is cold' }
            ]
        }
    ],

    vocabulary: [
        { word: 'nyan', translation: 'year' },
        { word: 'mes', translation: 'month' }
    ],

    reviewVocabulary: [
        // Recent
        'predin', 'posdin', 'din',
        // Numbers
        'un', 'des', 'dua'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match time periods',
            pairs: [
                { word: 'nyan', translation: 'year' },
                { word: 'mes', translation: 'month' },
                { word: 'din', translation: 'day' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How many months in a year?',
            options: ['des', 'des dua', 'des un'],
            correctAnswer: 'des dua',
            hint: '12'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "This year is good"',
            words: ['hin', 'nyan', 'mes', 'sen', 'bon'],
            correctAnswer: ['hin', 'nyan', 'sen', 'bon'],
            hint: 'This + year + is + good'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Hin mes sen bardi"',
            correctAnswers: ['This month is cold'],
            hint: 'This + month + is + cold'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "one year"',
            correctAnswers: ['un nyan'],
            hint: 'One + year'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is "mes"?',
            options: ['year', 'month', 'week'],
            correctAnswer: 'month'
        }
    ]
};
