// Unit 16: Weather & Degree Adverbs - Lesson 8: Unit Test
// Comprehensive review of all Unit 16 vocabulary and concepts

export default {
    id: 'u16-08-unit-test',
    name: 'Unit 16 Test',
    unit: 16,
    unitName: 'Weather & Degree Adverbs',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 16: Weather & Degree Adverbs!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 16 Review',
            content: 'You\'ve learned **11 new words** in Unit 16!',
            vocabulary: [
                { word: 'hay', translation: 'There is/are' },
                { word: 'barix, taluji, fon', translation: 'Rain, Snow, Wind' },
                { word: 'sol, sameni, maye', translation: 'Sun, Sky, Cloud' },
                { word: 'garme, bardi', translation: 'Hot, Cold' },
                { word: 'lilmo, mewsim', translation: 'A little, Season' }
            ]
        },
        {
            title: 'Key Concepts',
            content: '• **hay** + weather = weather condition\\n• garme/bardi = hot/cold\\n• lilmo/daymo = a little/very much',
            tip: 'You can now talk about the weather!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        'hay', 'barix', 'taluji', 'fon', 'sol', 'sameni', 'maye', 'mewsim', 'garme', 'bardi', 'lilmo'
    ],

    exercises: [
        // Weather vocabulary
        {
            type: 'matching',
            prompt: 'Match weather words',
            pairs: [
                { word: 'barix', translation: 'rain' },
                { word: 'taluji', translation: 'snow' },
                { word: 'fon', translation: 'wind' },
                { word: 'sol', translation: 'sun' }
            ]
        },
        {
            type: 'matching',
            prompt: 'Match more vocabulary',
            pairs: [
                { word: 'sameni', translation: 'sky' },
                { word: 'maye', translation: 'cloud' },
                { word: 'mewsim', translation: 'season' }
            ]
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "It\'s raining"',
            words: ['hay', 'barix', 'sen', 'to', 'taluji'],
            correctAnswer: ['hay', 'barix'],
            hint: 'There is + rain'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The sky is blue"',
            words: ['sameni', 'sen', 'biru', 'blanko', 'maye'],
            correctAnswer: ['sameni', 'sen', 'biru'],
            hint: 'Sky + is + blue'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Nundin sen garme"',
            correctAnswers: ['Today is hot'],
            hint: 'Today + is + hot'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Hay bala fon"',
            correctAnswers: ['There is strong wind', 'It\'s very windy'],
            hint: 'There is + strong + wind'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "It\'s snowing"',
            correctAnswers: ['Hay taluji'],
            hint: 'There is + snow'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I\'m a little cold"',
            correctAnswers: ['Mi lilmo bardi', 'Mi sen lilmo bardi'],
            hint: 'I + a little + cold'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'What is the pattern for weather?',
            options: ['Sen + weather', 'Hay + weather', 'To + weather'],
            correctAnswer: 'Hay + weather'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of garme?',
            options: ['fon', 'bardi', 'taluji'],
            correctAnswer: 'bardi'
        }
    ]
};
