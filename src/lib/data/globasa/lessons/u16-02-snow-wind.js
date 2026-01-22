// Unit 16: Weather & Degree Adverbs - Lesson 2: Snow & Wind
// New words: taluji (snow), fon (wind)

export default {
    id: 'u16-02-snow-wind',
    name: 'Snow & Wind',
    unit: 16,
    unitName: 'Weather & Degree Adverbs',
    lessonNumber: 2,
    description: 'Learn more weather vocabulary',
    icon: '❄️',
    xpReward: 15,

    teaching: [
        {
            title: 'Snow',
            content: '**Taluji** means "snow":',
            vocabulary: [
                { word: 'taluji', translation: 'snow' }
            ],
            examples: [
                { globasa: 'Hay taluji', english: 'It\'s snowing' },
                { globasa: 'Taluji sen blanko', english: 'Snow is white' }
            ]
        },
        {
            title: 'Wind',
            content: '**Fon** means "wind":',
            vocabulary: [
                { word: 'fon', translation: 'wind' }
            ],
            examples: [
                { globasa: 'Hay bala fon', english: 'There is strong wind' },
                { globasa: 'Fon sen velosi', english: 'The wind is fast' }
            ]
        }
    ],

    vocabulary: [
        { word: 'taluji', translation: 'snow' },
        { word: 'fon', translation: 'wind' }
    ],

    reviewVocabulary: [
        // Lesson 16.1 recent
        'hay', 'barix',
        // Colors/adjectives
        'blanko', 'bala', 'velosi'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match weather vocabulary',
            pairs: [
                { word: 'taluji', translation: 'snow' },
                { word: 'fon', translation: 'wind' },
                { word: 'barix', translation: 'rain' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "It\'s snowing"?',
            options: ['Taluji sen', 'Hay taluji', 'To taluji'],
            correctAnswer: 'Hay taluji',
            hint: 'There is + snow'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "There is strong wind"',
            words: ['hay', 'bala', 'fon', 'taluji', 'velosi'],
            correctAnswer: ['hay', 'bala', 'fon'],
            hint: 'There is + strong + wind'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Taluji sen blanko"',
            correctAnswers: ['Snow is white'],
            hint: 'Snow + is + white'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The wind is fast"',
            correctAnswers: ['Fon sen velosi'],
            hint: 'Wind + is + fast'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is "taluji"?',
            options: ['rain', 'snow', 'wind'],
            correctAnswer: 'snow'
        }
    ]
};
