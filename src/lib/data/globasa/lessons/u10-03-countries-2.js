// Unit 10: Countries & Languages - Lesson 3: Countries 2
// New words: Franse (France), Turki (Turkey), Usa (USA)

export default {
    id: 'u10-03-countries-2',
    name: 'Countries 2',
    unit: 10,
    unitName: 'Countries & Languages',
    lessonNumber: 3,
    description: 'Learn more country names: France, Turkey, USA',
    icon: '🇫🇷',
    xpReward: 15,

    teaching: [
        {
            title: 'France',
            content: '**Franse** is the country name for France:',
            vocabulary: [
                { word: 'Franse', translation: 'France' }
            ],
            examples: [
                { globasa: 'Franse sen in Ewropa', english: 'France is in Europe' }
            ]
        },
        {
            title: 'Turkey',
            content: '**Turki** is the country name for Turkey:',
            vocabulary: [
                { word: 'Turki', translation: 'Turkey' }
            ],
            examples: [
                { globasa: 'Mi le idi cel Turki', english: 'I went to Turkey' }
            ]
        },
        {
            title: 'USA',
            content: '**Usa** is the country name for the United States:',
            vocabulary: [
                { word: 'Usa', translation: 'USA, United States' }
            ],
            examples: [
                { globasa: 'Usa sen day dexa', english: 'USA is a big country' }
            ]
        }
    ],

    vocabulary: [
        { word: 'Franse', translation: 'France' },
        { word: 'Turki', translation: 'Turkey' },
        { word: 'Usa', translation: 'USA' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'Engli', 'Espani', 'Nipon', 'dexa', 'basa',
        // Earlier
        'day', 'meli', 'idi', 'cel', 'le', 'in'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match country names',
            pairs: [
                { word: 'Franse', translation: 'France' },
                { word: 'Turki', translation: 'Turkey' },
                { word: 'Usa', translation: 'USA' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What is "Franse"?',
            options: ['Germany', 'France', 'Italy'],
            correctAnswer: 'France'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I went to Turkey"',
            words: ['mi', 'le', 'idi', 'cel', 'Turki', 'Franse'],
            correctAnswer: ['mi', 'le', 'idi', 'cel', 'Turki'],
            hint: 'I + past + go + to + Turkey'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Usa sen day dexa"',
            correctAnswers: ['USA is a big country'],
            hint: 'USA + is + big + country'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "France"',
            correctAnswers: ['Franse']
        },
        {
            type: 'multiple-choice',
            prompt: 'How many countries have you learned?',
            options: ['3', '6', '9'],
            correctAnswer: '6',
            hint: 'Engli, Espani, Nipon, Franse, Turki, Usa'
        }
    ]
};
