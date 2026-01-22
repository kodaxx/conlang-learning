// Unit 9: Numbers & Quantifiers - Lesson 3: Numbers 7-10
// New words: sabe (seven), oco (eight), nue (nine), des (ten)

export default {
    id: 'u9-03-numbers-7-10',
    name: 'Numbers 7-10',
    unit: 9,
    unitName: 'Numbers & Quantifiers',
    lessonNumber: 3,
    description: 'Learn the numbers seven through ten',
    icon: '🔟',
    xpReward: 15,

    teaching: [
        {
            title: 'Seven to Ten',
            content: 'Complete numbers 1-10:',
            vocabulary: [
                { word: 'sabe', translation: 'seven' },
                { word: 'oco', translation: 'eight' },
                { word: 'nue', translation: 'nine' },
                { word: 'des', translation: 'ten' }
            ],
            examples: [
                { globasa: 'Mi hare sabe kitabu', english: 'I have seven books' },
                { globasa: 'Oco nini le yuxi', english: 'Eight children played' },
                { globasa: 'Imi xa yam nue pingo', english: 'We will eat nine apples' },
                { globasa: 'Te hare des banana', english: 'He has ten bananas' }
            ]
        },
        {
            title: 'Counting 1-10',
            content: 'All ten basic numbers:',
            examples: [
                { globasa: 'un, dua, tiga, care, lima, sisa, sabe, oco, nue, des', english: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10' }
            ],
            tip: 'Practice counting: un, dua, tiga, care, lima, sisa, sabe, oco, nue, des!'
        }
    ],

    vocabulary: [
        { word: 'sabe', translation: 'seven' },
        { word: 'oco', translation: 'eight' },
        { word: 'nue', translation: 'nine' },
        { word: 'des', translation: 'ten' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'un', 'dua', 'tiga', 'care', 'lima', 'sisa',
        // Earlier
        'kitabu', 'nini', 'yuxi', 'pingo', 'banana'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match numbers',
            pairs: [
                { word: 'sabe', translation: 'seven' },
                { word: 'oco', translation: 'eight' },
                { word: 'nue', translation: 'nine' },
                { word: 'des', translation: 'ten' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What number is "des"?',
            options: ['8', '9', '10'],
            correctAnswer: '10'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Eight children played"',
            words: ['oco', 'sabe', 'nini', 'le', 'yuxi'],
            correctAnswer: ['oco', 'nini', 'le', 'yuxi'],
            hint: 'Eight + children + past + play'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te hare des banana"',
            correctAnswers: ['He has ten bananas', 'She has ten bananas'],
            hint: 'He/She + have + ten + bananas'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "seven books"',
            correctAnswers: ['sabe kitabu'],
            hint: 'seven + books'
        },
        {
            type: 'multiple-choice',
            prompt: 'What comes after "oco"?',
            options: ['sabe', 'nue', 'des'],
            correctAnswer: 'nue',
            hint: 'oco = 8, so next is...'
        }
    ]
};
