// Unit 11: Shopping & Quantities - Lesson 5: Meat
// New words: maso (meat), gosomaso (beef), swinmaso (pork)

export default {
    id: 'u11-05-meat',
    name: 'Meat',
    unit: 11,
    unitName: 'Shopping & Quantities',
    lessonNumber: 5,
    description: 'Learn vocabulary for different types of meat',
    icon: '🥩',
    xpReward: 15,

    teaching: [
        {
            title: 'Meat',
            content: '**Maso** means "meat":',
            vocabulary: [
                { word: 'maso', translation: 'meat' }
            ],
            examples: [
                { globasa: 'Mi yam maso', english: 'I eat meat' },
                { globasa: 'Te no yam maso', english: 'He/She doesn\'t eat meat' }
            ]
        },
        {
            title: 'Beef',
            content: '**Gosomaso** means "beef" (goso = cow + maso = meat):',
            vocabulary: [
                { word: 'gosomaso', translation: 'beef' }
            ],
            examples: [
                { globasa: 'Mi kari gosomaso', english: 'I buy beef' }
            ]
        },
        {
            title: 'Pork',
            content: '**Swinmaso** means "pork" (swin = pig + maso = meat):',
            vocabulary: [
                { word: 'swinmaso', translation: 'pork' }
            ],
            examples: [
                { globasa: 'Swinmaso sen in supa', english: 'Pork is in the soup' }
            ],
            tip: 'Compound pattern: ANIMAL + maso = that animal\'s meat'
        }
    ],

    vocabulary: [
        { word: 'maso', translation: 'meat' },
        { word: 'gosomaso', translation: 'beef' },
        { word: 'swinmaso', translation: 'pork' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'dukan', 'bazar', 'kari', 'maydo',
        // Earlier
        'yam', 'supa', 'no', 'in'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match meat vocabulary',
            pairs: [
                { word: 'maso', translation: 'meat' },
                { word: 'gosomaso', translation: 'beef' },
                { word: 'swinmaso', translation: 'pork' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How is "gosomaso" formed?',
            options: ['goso + maso (cow + meat)', 'go + somaso (go + meat)', 'goso + masa (cow + dough)'],
            correctAnswer: 'goso + maso (cow + meat)',
            hint: 'Animal + meat'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I buy beef"',
            words: ['mi', 'kari', 'gosomaso', 'swinmaso', 'maso'],
            correctAnswer: ['mi', 'kari', 'gosomaso'],
            hint: 'I + buy + beef'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te no yam maso"',
            correctAnswers: ['He doesn\'t eat meat', 'She doesn\'t eat meat'],
            hint: 'He/She + not + eat + meat'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "meat"',
            correctAnswers: ['maso']
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the pattern for meat types?',
            options: [
                'ANIMAL + maso',
                'maso + ANIMAL',
                'maso + li + ANIMAL'
            ],
            correctAnswer: 'ANIMAL + maso'
        }
    ]
};
