// Unit 10: Countries & Languages - Lesson 7: Street & Nationality
// New words: dolo (street/road), nationality with -yen

export default {
    id: 'u10-07-street-nationality',
    name: 'Street & Nationality',
    unit: 10,
    unitName: 'Countries & Languages',
    lessonNumber: 7,
    description: 'Learn "street" and how to express nationality',
    icon: '🛤️',
    xpReward: 15,

    teaching: [
        {
            title: 'Street / Road',
            content: '**Dolo** means "street" or "road":',
            vocabulary: [
                { word: 'dolo', translation: 'street, road' }
            ],
            examples: [
                { globasa: 'Mi ogar in hin dolo', english: 'I live on this street' },
                { globasa: 'Dolo sen lungo', english: 'The street is long' }
            ]
        },
        {
            title: 'Nationality with -yen',
            content: 'Use Country + **-yen** to express nationality (person of that country):',
            examples: [
                { globasa: 'Engliyen', english: 'English person, British person' },
                { globasa: 'Niponiyen', english: 'Japanese person' },
                { globasa: 'Usayen', english: 'American person' }
            ],
            tip: 'Remember: -yen creates "person" words!'
        },
        {
            title: 'Using Nationalities',
            content: 'Use nationality words in sentences:',
            examples: [
                { globasa: 'Mi sen Usayen', english: 'I am American' },
                { globasa: 'Te sen Niponiyen', english: 'He/She is Japanese' }
            ]
        }
    ],

    vocabulary: [
        { word: 'dolo', translation: 'street, road' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'pala', 'yon', '-li', '-sa',
        // Earlier
        '-yen', 'yen', 'ogar', 'lungo', 'sen'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match vocabulary',
            pairs: [
                { word: 'dolo', translation: 'street/road' },
                { word: 'Engliyen', translation: 'English person' },
                { word: 'Usayen', translation: 'American person' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I am American"?',
            options: ['Mi sen Usa', 'Mi sen Usayen', 'Mi sen Usali'],
            correctAnswer: 'Mi sen Usayen',
            hint: 'Country + yen = person of country'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I live on this street"',
            words: ['mi', 'ogar', 'in', 'hin', 'dolo', 'den'],
            correctAnswer: ['mi', 'ogar', 'in', 'hin', 'dolo'],
            hint: 'I + live + on + this + street'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te sen Niponiyen"',
            correctAnswers: ['He is Japanese', 'She is Japanese'],
            hint: 'He/She + is + Japanese(person)'
        },
        {
            type: 'translation',
            prompt: 'How do you say "French person"?',
            correctAnswers: ['Franseyen'],
            hint: 'Franse + yen'
        },
        {
            type: 'multiple-choice',
            prompt: 'What pattern creates nationality words?',
            options: [
                'Country + -sa',
                'Country + -li',
                'Country + -yen'
            ],
            correctAnswer: 'Country + -yen',
            hint: 'Person of a country'
        }
    ]
};
