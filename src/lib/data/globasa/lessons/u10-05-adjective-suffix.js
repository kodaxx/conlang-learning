// Unit 10: Countries & Languages - Lesson 5: The -li Suffix (Adjective)
// New concept: -li suffix for "of/relating to"

export default {
    id: 'u10-05-adjective-suffix',
    name: 'National Adjectives (-li)',
    unit: 10,
    unitName: 'Countries & Languages',
    lessonNumber: 5,
    description: 'Learn to form adjectives with the -li suffix',
    icon: '🏷️',
    xpReward: 15,

    teaching: [
        {
            title: 'The -li Suffix',
            content: 'Add **-li** to create adjectives meaning "of" or "relating to":',
            vocabulary: [
                { word: '-li', translation: 'adjective suffix (of/relating to)' }
            ],
            examples: [
                { globasa: 'Engli + -li = Englili', english: 'English (adj.), British' },
                { globasa: 'Espani + -li = Espanili', english: 'Spanish (adj.)' },
                { globasa: 'Nipon + -li = Niponli', english: 'Japanese (adj.)' }
            ],
            tip: '-sa = the language, -li = the adjective/relating to'
        },
        {
            title: 'Using National Adjectives',
            content: 'Use -li adjectives to describe things:',
            examples: [
                { globasa: 'Englili kafe', english: 'English coffee' },
                { globasa: 'Niponli filme', english: 'Japanese movie' },
                { globasa: 'Espanili musika', english: 'Spanish music' }
            ]
        },
        {
            title: 'Compare -sa and -li',
            content: 'The difference between the two suffixes:',
            examples: [
                { globasa: 'Englisa', english: 'English (the language)' },
                { globasa: 'Englili', english: 'English (adjective, British)' }
            ]
        }
    ],

    vocabulary: [
        { word: '-li', translation: 'adjective suffix (of/relating to)' }
    ],

    reviewVocabulary: [
        // Recent lessons
        '-sa', 'Englisa', 'Espanisa', 'Niponsa',
        // Countries
        'Engli', 'Espani', 'Nipon', 'Franse', 'Turki'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match adjectives',
            pairs: [
                { word: 'Englili', translation: 'English/British (adj.)' },
                { word: 'Espanili', translation: 'Spanish (adj.)' },
                { word: 'Niponli', translation: 'Japanese (adj.)' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between Englisa and Englili?',
            options: [
                'Englisa = language, Englili = adjective',
                'Englisa = adjective, Englili = language',
                'They mean the same'
            ],
            correctAnswer: 'Englisa = language, Englili = adjective',
            hint: '-sa = language, -li = adjective'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Japanese movie"',
            words: ['Niponli', 'Niponsa', 'filme', 'basa'],
            correctAnswer: ['Niponli', 'filme'],
            hint: 'Japanese(adj) + movie'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Espanili musika"',
            correctAnswers: ['Spanish music'],
            hint: 'Spanish(adj) + music'
        },
        {
            type: 'translation',
            prompt: 'How do you say "French (adjective)"?',
            correctAnswers: ['Franseli'],
            hint: 'Franse + li'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does the -li suffix create?',
            options: ['Language names', 'Person names', 'Adjectives'],
            correctAnswer: 'Adjectives'
        }
    ]
};
