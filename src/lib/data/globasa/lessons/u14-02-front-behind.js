// Unit 14: Commands & Positions - Lesson 2: In Front & Behind
// New words: fe fronta de (in front of), fe ruke de (behind)

export default {
    id: 'u14-02-front-behind',
    name: 'In Front & Behind',
    unit: 14,
    unitName: 'Commands & Positions',
    lessonNumber: 2,
    description: 'Learn positional phrases: in front of and behind',
    icon: '↔️',
    xpReward: 15,

    teaching: [
        {
            title: 'In Front Of',
            content: '**Fe fronta de** means "in front of":',
            vocabulary: [
                { word: 'fronta', translation: 'front' },
                { word: 'fe fronta de', translation: 'in front of' }
            ],
            examples: [
                { globasa: 'Myaw sen fe fronta de ogar', english: 'The cat is in front of the house' },
                { globasa: 'Te ergo fe fronta de mi', english: 'He works in front of me' }
            ]
        },
        {
            title: 'Behind',
            content: '**Fe ruke de** means "behind":',
            vocabulary: [
                { word: 'ruke', translation: 'back, rear' },
                { word: 'fe ruke de', translation: 'behind' }
            ],
            examples: [
                { globasa: 'Bwaw sen fe ruke de drevo', english: 'The dog is behind the tree' },
                { globasa: 'Dukan sen fe ruke de banko', english: 'The store is behind the bank' }
            ],
            tip: 'Pattern: fe [position] de = at [position] of'
        }
    ],

    vocabulary: [
        { word: 'fronta', translation: 'front' },
        { word: 'ruke', translation: 'back, rear' }
    ],

    reviewVocabulary: [
        // Recent
        'am', 'fe', 'de',
        // Earlier
        'ogar', 'drevo', 'myaw', 'bwaw', 'dukan', 'banko'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match position phrases',
            pairs: [
                { word: 'fe fronta de', translation: 'in front of' },
                { word: 'fe ruke de', translation: 'behind' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "in front of the house"?',
            options: ['fe ogar fronta', 'fe fronta de ogar', 'fronta de ogar'],
            correctAnswer: 'fe fronta de ogar',
            hint: 'fe + fronta + de + noun'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The dog is behind the tree"',
            words: ['bwaw', 'sen', 'fe', 'ruke', 'de', 'drevo'],
            correctAnswer: ['bwaw', 'sen', 'fe', 'ruke', 'de', 'drevo'],
            hint: 'Dog + is + behind + tree'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Myaw sen fe fronta de ogar"',
            correctAnswers: ['The cat is in front of the house'],
            hint: 'Cat + is + in front of + house'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "behind the store"',
            correctAnswers: ['fe ruke de dukan'],
            hint: 'behind + store'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the pattern for position phrases?',
            options: ['de [position] fe', 'fe [position] de', '[position] de fe'],
            correctAnswer: 'fe [position] de'
        }
    ]
};
