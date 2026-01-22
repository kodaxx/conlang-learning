// Unit 10: Countries & Languages - Lesson 2: Countries 1
// New words: Engli (England), Espani (Spain), Nipon (Japan)

export default {
    id: 'u10-02-countries-1',
    name: 'Countries 1',
    unit: 10,
    unitName: 'Countries & Languages',
    lessonNumber: 2,
    description: 'Learn country names: England, Spain, Japan',
    icon: '🇬🇧',
    xpReward: 15,

    teaching: [
        {
            title: 'England',
            content: '**Engli** is the country name for England/UK:',
            vocabulary: [
                { word: 'Engli', translation: 'England, UK' }
            ],
            examples: [
                { globasa: 'Engli sen in Ewropa', english: 'England is in Europe' }
            ]
        },
        {
            title: 'Spain',
            content: '**Espani** is the country name for Spain:',
            vocabulary: [
                { word: 'Espani', translation: 'Spain' }
            ],
            examples: [
                { globasa: 'Espani sen meli dexa', english: 'Spain is a beautiful country' }
            ]
        },
        {
            title: 'Japan',
            content: '**Nipon** is the country name for Japan:',
            vocabulary: [
                { word: 'Nipon', translation: 'Japan' }
            ],
            examples: [
                { globasa: 'Mi xa idi cel Nipon', english: 'I will go to Japan' }
            ],
            tip: 'Country names are capitalized in Globasa!'
        }
    ],

    vocabulary: [
        { word: 'Engli', translation: 'England, UK' },
        { word: 'Espani', translation: 'Spain' },
        { word: 'Nipon', translation: 'Japan' }
    ],

    reviewVocabulary: [
        // Lesson 10.1 recent
        'or', 'dexa', 'basa',
        // Earlier
        'meli', 'idi', 'cel', 'xa', 'in', 'sen'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match country names',
            pairs: [
                { word: 'Engli', translation: 'England/UK' },
                { word: 'Espani', translation: 'Spain' },
                { word: 'Nipon', translation: 'Japan' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What is "Nipon"?',
            options: ['Spain', 'England', 'Japan'],
            correctAnswer: 'Japan'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I will go to Japan"',
            words: ['mi', 'xa', 'idi', 'cel', 'Nipon', 'Espani'],
            correctAnswer: ['mi', 'xa', 'idi', 'cel', 'Nipon'],
            hint: 'I + will + go + to + Japan'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Espani sen meli dexa"',
            correctAnswers: ['Spain is a beautiful country'],
            hint: 'Spain + is + beautiful + country'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "England"',
            correctAnswers: ['Engli'],
            hint: 'English country name'
        },
        {
            type: 'multiple-choice',
            prompt: 'Are country names capitalized in Globasa?',
            options: ['Yes', 'No', 'Only for large countries'],
            correctAnswer: 'Yes',
            hint: 'Engli, Espani, Nipon...'
        }
    ]
};
