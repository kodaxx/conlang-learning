// Unit 16: Weather & Degree Adverbs - Lesson 3: Hot & Cold
// New words: garme (hot), bardi (cold)

export default {
    id: 'u16-03-hot-cold',
    name: 'Hot & Cold',
    unit: 16,
    unitName: 'Weather & Degree Adverbs',
    lessonNumber: 3,
    description: 'Learn temperature words',
    icon: '🌡️',
    xpReward: 15,

    teaching: [
        {
            title: 'Hot',
            content: '**Garme** means "hot" or "warm":',
            vocabulary: [
                { word: 'garme', translation: 'hot, warm' }
            ],
            examples: [
                { globasa: 'Nundin sen garme', english: 'Today is hot' },
                { globasa: 'Kafe sen garme', english: 'The coffee is hot' }
            ]
        },
        {
            title: 'Cold',
            content: '**Bardi** means "cold":',
            vocabulary: [
                { word: 'bardi', translation: 'cold' }
            ],
            examples: [
                { globasa: 'Hay bardi fon', english: 'There is a cold wind' },
                { globasa: 'Sui sen bardi', english: 'The water is cold' }
            ],
            tip: 'garme and bardi are opposites!'
        }
    ],

    vocabulary: [
        { word: 'garme', translation: 'hot, warm' },
        { word: 'bardi', translation: 'cold' }
    ],

    reviewVocabulary: [
        // Recent
        'taluji', 'fon', 'hay', 'barix',
        // Earlier
        'nundin', 'kafe', 'sui'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match temperature words',
            pairs: [
                { word: 'garme', translation: 'hot' },
                { word: 'bardi', translation: 'cold' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of "garme"?',
            options: ['fon', 'bardi', 'taluji'],
            correctAnswer: 'bardi',
            hint: 'hot vs cold'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Today is hot"',
            words: ['nundin', 'sen', 'garme', 'bardi', 'hay'],
            correctAnswer: ['nundin', 'sen', 'garme'],
            hint: 'Today + is + hot'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Sui sen bardi"',
            correctAnswers: ['The water is cold'],
            hint: 'Water + is + cold'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The coffee is hot"',
            correctAnswers: ['Kafe sen garme'],
            hint: 'Coffee + is + hot'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "garme" mean?',
            options: ['cold', 'hot', 'windy'],
            correctAnswer: 'hot'
        }
    ]
};
