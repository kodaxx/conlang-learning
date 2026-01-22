// Unit 19: Reasons & Equality - Lesson 2: Why
// New words: keseba (why)

export default {
    id: 'u19-02-why',
    name: 'Why',
    unit: 19,
    unitName: 'Reasons & Equality',
    lessonNumber: 2,
    description: 'Learn to ask "why"',
    icon: '❓',
    xpReward: 15,

    teaching: [
        {
            title: 'Why',
            content: '**Keseba** means "why":',
            vocabulary: [
                { word: 'keseba', translation: 'why' }
            ],
            examples: [
                { globasa: 'Keseba yu no xa ata?', english: 'Why won\'t you come?' },
                { globasa: 'Mi no xana keseba', english: 'I don\'t know why' }
            ],
            tip: 'keseba asks for reason, koski gives the reason!'
        },
        {
            title: 'Question & Answer',
            content: 'Keseba questions and koski answers:',
            examples: [
                { globasa: 'Keseba yu sen hazuni?', english: 'Why are you sad?' },
                { globasa: 'Koski mi sen telaki', english: 'Because I am tired' }
            ]
        }
    ],

    vocabulary: [
        { word: 'keseba', translation: 'why' }
    ],

    reviewVocabulary: [
        // Lesson 19.1 recent
        'kos', 'koski',
        // Question words
        'keto', 'kewatu', 'keloka', 'kete'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match question words',
            pairs: [
                { word: 'keseba', translation: 'why' },
                { word: 'keto', translation: 'what' },
                { word: 'kewatu', translation: 'when' },
                { word: 'keloka', translation: 'where' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you ask "Why won\'t you come?"',
            options: ['Keto yu no xa ata?', 'Keseba yu no xa ata?', 'Koski yu no xa ata?'],
            correctAnswer: 'Keseba yu no xa ata?',
            hint: 'keseba = why'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I don\'t know why"',
            words: ['mi', 'no', 'xana', 'keseba', 'koski'],
            correctAnswer: ['mi', 'no', 'xana', 'keseba'],
            hint: 'I + not + know + why'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Keseba yu sen hazuni?"',
            correctAnswers: ['Why are you sad?'],
            hint: 'Why + you + is + sad'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Why?"',
            correctAnswers: ['Keseba?'],
            hint: 'Just the question word'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the relationship between keseba and koski?',
            options: [
                'keseba asks, koski answers',
                'keseba answers, koski asks',
                'They are the same'
            ],
            correctAnswer: 'keseba asks, koski answers'
        }
    ]
};
