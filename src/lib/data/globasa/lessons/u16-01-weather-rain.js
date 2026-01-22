// Unit 16: Weather & Degree Adverbs - Lesson 1: Weather & Rain
// New words: hay (there is/are), barix (rain)

export default {
    id: 'u16-01-weather-rain',
    name: 'Weather & Rain',
    unit: 16,
    unitName: 'Weather & Degree Adverbs',
    lessonNumber: 1,
    description: 'Learn to talk about weather and rain',
    icon: '🌧️',
    xpReward: 15,

    teaching: [
        {
            title: 'There Is / There Are',
            content: '**Hay** means "there is" or "there are":',
            vocabulary: [
                { word: 'hay', translation: 'there is, there are' }
            ],
            examples: [
                { globasa: 'Hay multi yen', english: 'There are many people' },
                { globasa: 'Hay problema', english: 'There is a problem' }
            ]
        },
        {
            title: 'Rain',
            content: '**Barix** means "rain" (noun/verb):',
            vocabulary: [
                { word: 'barix', translation: 'rain' }
            ],
            examples: [
                { globasa: 'Hay barix', english: 'It\'s raining / There is rain' },
                { globasa: 'Barix le padu', english: 'Rain fell' }
            ],
            tip: 'Hay + weather word is a common pattern for weather!'
        }
    ],

    vocabulary: [
        { word: 'hay', translation: 'there is, there are' },
        { word: 'barix', translation: 'rain' }
    ],

    reviewVocabulary: [
        // Unit 15 recent
        'eger', 'blanko', 'biru',
        // Earlier
        'multi', 'yen', 'padu'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match new vocabulary',
            pairs: [
                { word: 'hay', translation: 'there is/are' },
                { word: 'barix', translation: 'rain' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "It\'s raining"?',
            options: ['Barix sen', 'Hay barix', 'To barix'],
            correctAnswer: 'Hay barix',
            hint: 'There is + rain'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "There are many people"',
            words: ['hay', 'sen', 'multi', 'yen', 'plu'],
            correctAnswer: ['hay', 'multi', 'yen'],
            hint: 'There are + many + people'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Hay problema"',
            correctAnswers: ['There is a problem'],
            hint: 'There is + problem'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "It\'s raining"',
            correctAnswers: ['Hay barix'],
            hint: 'There is + rain'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the pattern for weather?',
            options: ['Sen + weather', 'Hay + weather', 'To + weather'],
            correctAnswer: 'Hay + weather'
        }
    ]
};
