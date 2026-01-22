// Unit 7: Possession & Location - Lesson 6: Furniture
// New words: mesa (table), kursi (chair), bistar (bed)

export default {
    id: 'u7-06-furniture',
    name: 'Furniture',
    unit: 7,
    unitName: 'Possession & Location',
    lessonNumber: 6,
    description: 'Learn vocabulary for common furniture',
    icon: '🪑',
    xpReward: 15,

    teaching: [
        {
            title: 'Table',
            content: '**Mesa** means "table":',
            vocabulary: [
                { word: 'mesa', translation: 'table' }
            ],
            examples: [
                { globasa: 'Kitabu sen per mesa', english: 'The book is on the table' },
                { globasa: 'Imi yam fe mesa', english: 'We eat at the table' }
            ]
        },
        {
            title: 'Chair',
            content: '**Kursi** means "chair":',
            vocabulary: [
                { word: 'kursi', translation: 'chair' }
            ],
            examples: [
                { globasa: 'Myaw sen per kursi', english: 'The cat is on the chair' },
                { globasa: 'Mi hare multi kursi', english: 'I have many chairs' }
            ]
        },
        {
            title: 'Bed',
            content: '**Bistar** means "bed":',
            vocabulary: [
                { word: 'bistar', translation: 'bed' }
            ],
            examples: [
                { globasa: 'Mi somno in bistar', english: 'I sleep in bed' },
                { globasa: 'Bistar sen in kamer', english: 'The bed is in the room' }
            ]
        }
    ],

    vocabulary: [
        { word: 'mesa', translation: 'table' },
        { word: 'kursi', translation: 'chair' },
        { word: 'bistar', translation: 'bed' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'fe', 'fe inya', 'fe exya', 'per', 'bax', 'in',
        // Earlier
        'kitabu', 'myaw', 'somno', 'kamer', 'hare', 'yam', 'multi'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match furniture words',
            pairs: [
                { word: 'mesa', translation: 'table' },
                { word: 'kursi', translation: 'chair' },
                { word: 'bistar', translation: 'bed' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'Where do you sleep?',
            options: ['mesa', 'kursi', 'bistar'],
            correctAnswer: 'bistar',
            hint: 'Mi somno in ___'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The book is on the table"',
            words: ['kitabu', 'sen', 'per', 'bax', 'mesa'],
            correctAnswer: ['kitabu', 'sen', 'per', 'mesa'],
            hint: 'Book + is + on + table'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Myaw sen per kursi"',
            correctAnswers: ['The cat is on the chair'],
            hint: 'Cat + is + on + chair'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I sleep in bed"',
            correctAnswers: ['Mi somno in bistar'],
            hint: 'I + sleep + in + bed'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which is NOT a piece of furniture?',
            options: ['mesa', 'kursi', 'parke', 'bistar'],
            correctAnswer: 'parke',
            hint: 'Parke means park'
        }
    ]
};
