// Unit 8: Comparison - Lesson 4: Opposites 1
// New words: bur (bad), lil (small), colo (ugly)

export default {
    id: 'u8-04-opposites-1',
    name: 'Opposites 1',
    unit: 8,
    unitName: 'Comparison',
    lessonNumber: 4,
    description: 'Learn opposite adjectives: bad, small, ugly',
    icon: '↔️',
    xpReward: 15,

    teaching: [
        {
            title: 'Bad (opposite of good)',
            content: '**Bur** means "bad":',
            vocabulary: [
                { word: 'bur', translation: 'bad' }
            ],
            examples: [
                { globasa: 'Hin filme sen bur', english: 'This movie is bad' },
                { globasa: 'Te hare bur watu', english: 'He/She is having a bad time' }
            ],
            tip: 'bon = good, bur = bad'
        },
        {
            title: 'Small (opposite of big)',
            content: '**Lil** means "small" or "little":',
            vocabulary: [
                { word: 'lil', translation: 'small, little' }
            ],
            examples: [
                { globasa: 'Myaw sen lil', english: 'The cat is small' },
                { globasa: 'Lil nini yuxi in parke', english: 'Little children play in the park' }
            ],
            tip: 'day = big, lil = small'
        },
        {
            title: 'Ugly (opposite of beautiful)',
            content: '**Colo** means "ugly":',
            vocabulary: [
                { word: 'colo', translation: 'ugly' }
            ],
            examples: [
                { globasa: 'Den dom sen colo', english: 'That building is ugly' },
                { globasa: 'Kursi sen colo mas safe', english: 'The chair is ugly but clean' }
            ],
            tip: 'meli = beautiful, colo = ugly'
        }
    ],

    vocabulary: [
        { word: 'bur', translation: 'bad' },
        { word: 'lil', translation: 'small, little' },
        { word: 'colo', translation: 'ugly' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'maxmo', 'minmo', 'kom',
        // Opposite adjectives
        'bon', 'day', 'meli', 'safe', 'hox'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match opposites',
            pairs: [
                { word: 'bur', translation: 'bad (opp. of bon)' },
                { word: 'lil', translation: 'small (opp. of day)' },
                { word: 'colo', translation: 'ugly (opp. of meli)' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of "bon" (good)?',
            options: ['lil', 'bur', 'colo'],
            correctAnswer: 'bur',
            hint: 'bad'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The cat is small"',
            words: ['myaw', 'sen', 'lil', 'day', 'bur'],
            correctAnswer: ['myaw', 'sen', 'lil'],
            hint: 'Cat + is + small'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Hin filme sen bur"',
            correctAnswers: ['This movie is bad', 'This film is bad'],
            hint: 'This + movie + is + bad'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "That building is ugly"',
            correctAnswers: ['Den dom sen colo'],
            hint: 'That + building + is + ugly'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which word means "small"?',
            options: ['bur', 'lil', 'colo'],
            correctAnswer: 'lil',
            hint: 'Opposite of day (big)'
        }
    ]
};
