// Unit 14: Commands & Positions - Lesson 8: Unit Test
// Comprehensive review of all Unit 14 vocabulary and concepts

export default {
    id: 'u14-08-unit-test',
    name: 'Unit 14 Test',
    unit: 14,
    unitName: 'Commands & Positions',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 14: Commands & Positions!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 14 Review',
            content: 'You\'ve learned **11 new words** in Unit 14!',
            vocabulary: [
                { word: 'am', translation: 'Imperative marker' },
                { word: 'fronta, ruke', translation: 'Front, Back' },
                { word: 'cejo, bulu', translation: 'Left, Right' },
                { word: 'supra, pu', translation: 'Above, Below' },
                { word: 'proksimo, teli', translation: 'Near, Far' },
                { word: 'miden, mey', translation: 'Between, Next to' }
            ]
        },
        {
            title: 'Key Concepts',
            content: '• Commands use bare verb or **am** for emphasis\\n• **fe [position] de** = at [position] of\\n• Opposites: cejo/bulu, supra/pu, proksimo/teli',
            tip: 'You can now give directions!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        'am', 'fronta', 'ruke', 'cejo', 'bulu', 'supra', 'pu', 'proksimo', 'teli', 'miden', 'mey'
    ],

    exercises: [
        // Position words
        {
            type: 'matching',
            prompt: 'Match horizontal positions',
            pairs: [
                { word: 'fronta', translation: 'front' },
                { word: 'ruke', translation: 'back' },
                { word: 'cejo', translation: 'left' },
                { word: 'bulu', translation: 'right' }
            ]
        },
        {
            type: 'matching',
            prompt: 'Match vertical positions',
            pairs: [
                { word: 'supra', translation: 'above' },
                { word: 'pu', translation: 'below' }
            ]
        },
        {
            type: 'matching',
            prompt: 'Match distance/relation',
            pairs: [
                { word: 'proksimo', translation: 'near' },
                { word: 'teli', translation: 'far' },
                { word: 'miden', translation: 'between' },
                { word: 'mey', translation: 'next to' }
            ]
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "Go right!"',
            words: ['idi', 'cel', 'bulu', 'cejo', 'am'],
            correctAnswer: ['idi', 'cel', 'bulu'],
            hint: 'Go + to + right'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Let\'s eat!"',
            words: ['am', 'yam', 'idi', 'imi'],
            correctAnswer: ['am', 'yam'],
            hint: 'Let\'s + eat'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Myaw sen fe fronta de ogar"',
            correctAnswers: ['The cat is in front of the house'],
            hint: 'Cat + is + in front of + house'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Hotel sen mey restoran"',
            correctAnswers: ['The hotel is next to the restaurant'],
            hint: 'Hotel + is + next to + restaurant'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The store is near"',
            correctAnswers: ['Dukan sen proksimo'],
            hint: 'Store + is + near'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'What does "am" do in commands?',
            options: [
                'Makes past tense',
                'Adds emphasis or means "let\'s"',
                'Makes questions'
            ],
            correctAnswer: 'Adds emphasis or means "let\'s"'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of "cejo"?',
            options: ['fronta', 'bulu', 'ruke'],
            correctAnswer: 'bulu'
        }
    ]
};
