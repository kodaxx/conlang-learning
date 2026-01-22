// Unit 16: Weather & Degree Adverbs - Lesson 4: Sun & Sky
// New words: sol (sun), sameni (sky)

export default {
    id: 'u16-04-sun-sky',
    name: 'Sun & Sky',
    unit: 16,
    unitName: 'Weather & Degree Adverbs',
    lessonNumber: 4,
    description: 'Learn sun and sky vocabulary',
    icon: '☀️',
    xpReward: 15,

    teaching: [
        {
            title: 'Sun',
            content: '**Sol** means "sun":',
            vocabulary: [
                { word: 'sol', translation: 'sun' }
            ],
            examples: [
                { globasa: 'Sol sen garme', english: 'The sun is hot' },
                { globasa: 'Hay sol', english: 'It\'s sunny / There is sun' }
            ]
        },
        {
            title: 'Sky',
            content: '**Sameni** means "sky":',
            vocabulary: [
                { word: 'sameni', translation: 'sky' }
            ],
            examples: [
                { globasa: 'Sameni sen biru', english: 'The sky is blue' },
                { globasa: 'Piu fley in sameni', english: 'Birds fly in the sky' }
            ]
        }
    ],

    vocabulary: [
        { word: 'sol', translation: 'sun' },
        { word: 'sameni', translation: 'sky' }
    ],

    reviewVocabulary: [
        // Recent
        'garme', 'bardi', 'hay', 'biru',
        // Earlier
        'piu', 'fley', 'in'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match vocabulary',
            pairs: [
                { word: 'sol', translation: 'sun' },
                { word: 'sameni', translation: 'sky' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "It\'s sunny"?',
            options: ['Sol sen', 'Hay sol', 'To sol'],
            correctAnswer: 'Hay sol',
            hint: 'There is + sun'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The sky is blue"',
            words: ['sameni', 'sen', 'biru', 'leso', 'blanko'],
            correctAnswer: ['sameni', 'sen', 'biru'],
            hint: 'Sky + is + blue'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Sol sen garme"',
            correctAnswers: ['The sun is hot'],
            hint: 'Sun + is + hot'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Birds fly in the sky"',
            correctAnswers: ['Piu fley in sameni'],
            hint: 'Birds + fly + in + sky'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is "sameni"?',
            options: ['sun', 'sky', 'cloud'],
            correctAnswer: 'sky'
        }
    ]
};
