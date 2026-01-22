// Unit 16: Weather & Degree Adverbs - Lesson 7: Weather Integration
// Integration lesson combining weather vocabulary

export default {
    id: 'u16-07-weather-review',
    name: 'Describing Weather',
    unit: 16,
    unitName: 'Weather & Degree Adverbs',
    lessonNumber: 7,
    description: 'Practice describing weather conditions',
    icon: '🌤️',
    xpReward: 15,

    teaching: [
        {
            title: 'Weather Patterns',
            content: 'Use hay for weather conditions:',
            examples: [
                { globasa: 'Hay sol', english: 'It\'s sunny' },
                { globasa: 'Hay barix', english: 'It\'s raining' },
                { globasa: 'Hay taluji', english: 'It\'s snowing' },
                { globasa: 'Hay bala fon', english: 'It\'s very windy' }
            ]
        },
        {
            title: 'Temperature',
            content: 'Describe temperature with adjectives:',
            examples: [
                { globasa: 'Nundin sen garme', english: 'Today is hot' },
                { globasa: 'To sen lilmo bardi', english: 'It\'s a little cold' },
                { globasa: 'Eger hay barix, ger mi xa ergo in ogar', english: 'If it rains, I will work at home' }
            ]
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        // All weather words
        'hay', 'barix', 'taluji', 'fon', 'sol', 'sameni', 'maye', 'mewsim',
        'garme', 'bardi', 'lilmo', 'daymo',
        // Conditionals
        'eger', 'ger'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match weather vocabulary',
            pairs: [
                { word: 'barix', translation: 'rain' },
                { word: 'taluji', translation: 'snow' },
                { word: 'fon', translation: 'wind' },
                { word: 'sol', translation: 'sun' }
            ]
        },
        {
            type: 'matching',
            prompt: 'Match temperature words',
            pairs: [
                { word: 'garme', translation: 'hot' },
                { word: 'bardi', translation: 'cold' }
            ]
        },
        {
            type: 'word-bank',
            prompt: 'Build: "It\'s sunny"',
            words: ['hay', 'sol', 'sen', 'barix', 'to'],
            correctAnswer: ['hay', 'sol'],
            hint: 'There is + sun'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Nundin sen garme"',
            correctAnswers: ['Today is hot'],
            hint: 'Today + is + hot'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "It\'s a little cold"',
            correctAnswers: ['To sen lilmo bardi'],
            hint: 'It + is + a little + cold'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "If it rains, I will work at home"',
            correctAnswers: ['Eger hay barix, mi xa ergo in ogar', 'Eger hay barix, ger mi xa ergo in ogar'],
            hint: 'If + rain + I + will + work + at + home'
        }
    ]
};
