// Unit 7: Possession & Location - Lesson 7: Nature
// New words: drevo (tree), jabal (mountain), bahari (sea), nahir (river)

export default {
    id: 'u7-07-nature',
    name: 'Nature',
    unit: 7,
    unitName: 'Possession & Location',
    lessonNumber: 7,
    description: 'Learn vocabulary for natural features',
    icon: '🌳',
    xpReward: 15,

    teaching: [
        {
            title: 'Tree',
            content: '**Drevo** means "tree":',
            vocabulary: [
                { word: 'drevo', translation: 'tree' }
            ],
            examples: [
                { globasa: 'Piu sen in drevo', english: 'The bird is in the tree' },
                { globasa: 'Multi drevo sen in parke', english: 'Many trees are in the park' }
            ]
        },
        {
            title: 'Mountain',
            content: '**Jabal** means "mountain":',
            vocabulary: [
                { word: 'jabal', translation: 'mountain' }
            ],
            examples: [
                { globasa: 'Den jabal sen day', english: 'That mountain is big' },
                { globasa: 'Imi xa idi cel jabal', english: 'We will go to the mountain' }
            ]
        },
        {
            title: 'Sea & River',
            content: 'Learn these words for water features:',
            vocabulary: [
                { word: 'bahari', translation: 'sea, ocean' },
                { word: 'nahir', translation: 'river' }
            ],
            examples: [
                { globasa: 'Mahi ogar in bahari', english: 'Fish live in the sea' },
                { globasa: 'Nahir sen lungo', english: 'The river is long' }
            ]
        }
    ],

    vocabulary: [
        { word: 'drevo', translation: 'tree' },
        { word: 'jabal', translation: 'mountain' },
        { word: 'bahari', translation: 'sea, ocean' },
        { word: 'nahir', translation: 'river' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'mesa', 'kursi', 'bistar', 'fe', 'in',
        // Earlier
        'piu', 'mahi', 'parke', 'multi', 'day', 'lungo', 'ogar', 'idi', 'cel'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match nature words',
            pairs: [
                { word: 'drevo', translation: 'tree' },
                { word: 'jabal', translation: 'mountain' },
                { word: 'bahari', translation: 'sea' },
                { word: 'nahir', translation: 'river' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'Where do fish live?',
            options: ['drevo', 'jabal', 'bahari', 'nahir'],
            correctAnswer: 'bahari',
            hint: 'Mahi ogar in ___'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The bird is in the tree"',
            words: ['piu', 'sen', 'in', 'drevo', 'per'],
            correctAnswer: ['piu', 'sen', 'in', 'drevo'],
            hint: 'Bird + is + in + tree'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Den jabal sen day"',
            correctAnswers: ['That mountain is big'],
            hint: 'That + mountain + is + big'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The river is long"',
            correctAnswers: ['Nahir sen lungo'],
            hint: 'River + is + long'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which word means "river"?',
            options: ['bahari', 'nahir', 'drevo', 'jabal'],
            correctAnswer: 'nahir',
            hint: 'Not the sea (bahari)'
        }
    ]
};
