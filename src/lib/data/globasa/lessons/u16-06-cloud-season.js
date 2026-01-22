// Unit 16: Weather & Degree Adverbs - Lesson 6: Cloud & Season
// New words: maye (cloud), mewsim (season)

export default {
    id: 'u16-06-cloud-season',
    name: 'Cloud & Season',
    unit: 16,
    unitName: 'Weather & Degree Adverbs',
    lessonNumber: 6,
    description: 'Learn cloud and season vocabulary',
    icon: '☁️',
    xpReward: 15,

    teaching: [
        {
            title: 'Cloud',
            content: '**Maye** means "cloud":',
            vocabulary: [
                { word: 'maye', translation: 'cloud' }
            ],
            examples: [
                { globasa: 'Hay maye in sameni', english: 'There are clouds in the sky' },
                { globasa: 'Maye sen blanko', english: 'The clouds are white' }
            ]
        },
        {
            title: 'Season',
            content: '**Mewsim** means "season":',
            vocabulary: [
                { word: 'mewsim', translation: 'season' }
            ],
            examples: [
                { globasa: 'Hin mewsim sen garme', english: 'This season is hot' },
                { globasa: 'Hay care mewsim', english: 'There are four seasons' }
            ]
        }
    ],

    vocabulary: [
        { word: 'maye', translation: 'cloud' },
        { word: 'mewsim', translation: 'season' }
    ],

    reviewVocabulary: [
        // Recent
        'lilmo', 'sameni', 'hay', 'blanko', 'garme',
        // Numbers
        'care'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match vocabulary',
            pairs: [
                { word: 'maye', translation: 'cloud' },
                { word: 'mewsim', translation: 'season' },
                { word: 'sameni', translation: 'sky' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "There are clouds"?',
            options: ['Hay maye', 'Maye sen', 'To maye'],
            correctAnswer: 'Hay maye',
            hint: 'There are + clouds'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "There are four seasons"',
            words: ['hay', 'care', 'mewsim', 'tiga', 'maye'],
            correctAnswer: ['hay', 'care', 'mewsim'],
            hint: 'There are + four + seasons'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Maye sen blanko"',
            correctAnswers: ['The clouds are white', 'Clouds are white'],
            hint: 'Clouds + is + white'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "This season is hot"',
            correctAnswers: ['Hin mewsim sen garme'],
            hint: 'This + season + is + hot'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is "mewsim"?',
            options: ['cloud', 'weather', 'season'],
            correctAnswer: 'season'
        }
    ]
};
