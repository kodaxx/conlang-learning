// Unit 17: Recipients & Clauses - Lesson 6: The -kal Suffix
// New concept: -kal suffix (possible)

export default {
    id: 'u17-06-kal-suffix',
    name: 'Possible (-kal)',
    unit: 17,
    unitName: 'Recipients & Clauses',
    lessonNumber: 6,
    description: 'Learn the -kal suffix for possibility',
    icon: '✨',
    xpReward: 15,

    teaching: [
        {
            title: 'The -kal Suffix',
            content: '**-kal** means "possible" or "-able":',
            vocabulary: [
                { word: '-kal', translation: 'possible, -able (suffix)' }
            ],
            examples: [
                { globasa: 'oko + kal = okokal', english: 'visible (able to be seen)' },
                { globasa: 'aham + kal = ahamkal', english: 'understandable' },
                { globasa: 'yam + kal = yamkal', english: 'edible' }
            ],
            tip: 'verb + kal = adjective meaning "able to be [verb]ed"'
        },
        {
            title: 'Using -kal Words',
            content: 'Examples in sentences:',
            examples: [
                { globasa: 'To sen okokal', english: 'It is visible' },
                { globasa: 'Hin sen ahamkal', english: 'This is understandable' }
            ]
        }
    ],

    vocabulary: [
        { word: '-kal', translation: 'possible, -able (suffix)' }
    ],

    reviewVocabulary: [
        // Recent
        'ban-', 'bante', 'banto',
        // Verbs
        'oko', 'aham', 'yam'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match -kal words',
            pairs: [
                { word: 'okokal', translation: 'visible' },
                { word: 'ahamkal', translation: 'understandable' },
                { word: 'yamkal', translation: 'edible' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "yamkal" mean?',
            options: ['tasty', 'edible', 'hungry'],
            correctAnswer: 'edible',
            hint: 'yam + kal = able to be eaten'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "It is visible"',
            words: ['to', 'sen', 'okokal', 'oko', 'ahamkal'],
            correctAnswer: ['to', 'sen', 'okokal'],
            hint: 'It + is + visible'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Hin sen ahamkal"',
            correctAnswers: ['This is understandable'],
            hint: 'This + is + understandable'
        },
        {
            type: 'translation',
            prompt: 'How do you say "readable" (from doxo)?',
            correctAnswers: ['doxokal'],
            hint: 'read + kal'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does the -kal suffix create?',
            options: ['Nouns', 'Adjectives meaning "able to be..."', 'Verbs'],
            correctAnswer: 'Adjectives meaning "able to be..."'
        }
    ]
};
