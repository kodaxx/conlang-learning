// Unit 14: Commands & Positions - Lesson 3: Left & Right
// New words: cejo (left), bulu (right)

export default {
    id: 'u14-03-left-right',
    name: 'Left & Right',
    unit: 14,
    unitName: 'Commands & Positions',
    lessonNumber: 3,
    description: 'Learn directional words: left and right',
    icon: '👈',
    xpReward: 15,

    teaching: [
        {
            title: 'Left',
            content: '**Cejo** means "left":',
            vocabulary: [
                { word: 'cejo', translation: 'left' }
            ],
            examples: [
                { globasa: 'Idi cel cejo!', english: 'Go to the left!' },
                { globasa: 'Dukan sen fe cejo', english: 'The store is on the left' }
            ]
        },
        {
            title: 'Right',
            content: '**Bulu** means "right":',
            vocabulary: [
                { word: 'bulu', translation: 'right' }
            ],
            examples: [
                { globasa: 'Banko sen fe bulu', english: 'The bank is on the right' },
                { globasa: 'Idi cel bulu!', english: 'Go to the right!' }
            ]
        },
        {
            title: 'Giving Directions',
            content: 'Combine with position phrases:',
            examples: [
                { globasa: 'fe cejo de ogar', english: 'to the left of the house' },
                { globasa: 'fe bulu de dukan', english: 'to the right of the store' }
            ]
        }
    ],

    vocabulary: [
        { word: 'cejo', translation: 'left' },
        { word: 'bulu', translation: 'right' }
    ],

    reviewVocabulary: [
        // Recent
        'fronta', 'ruke', 'fe', 'de',
        // Earlier
        'idi', 'cel', 'dukan', 'banko', 'ogar'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match directions',
            pairs: [
                { word: 'cejo', translation: 'left' },
                { word: 'bulu', translation: 'right' },
                { word: 'fronta', translation: 'front' },
                { word: 'ruke', translation: 'back' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "Go to the left"?',
            options: ['Idi cejo!', 'Idi cel cejo!', 'Cel cejo idi!'],
            correctAnswer: 'Idi cel cejo!',
            hint: 'Go + to + left'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The bank is on the right"',
            words: ['banko', 'sen', 'fe', 'bulu', 'cejo'],
            correctAnswer: ['banko', 'sen', 'fe', 'bulu'],
            hint: 'Bank + is + on + right'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Dukan sen fe cejo"',
            correctAnswers: ['The store is on the left'],
            hint: 'Store + is + on + left'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "to the right of the house"',
            correctAnswers: ['fe bulu de ogar'],
            hint: 'at + right + of + house'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of "cejo"?',
            options: ['fronta', 'bulu', 'ruke'],
            correctAnswer: 'bulu',
            hint: 'left vs right'
        }
    ]
};
