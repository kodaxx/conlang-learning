// Unit 12: Clothing & Numbers - Lesson 4: Numbers 11-19
// New concept: des + digit = teens

export default {
    id: 'u12-04-numbers-11-19',
    name: 'Numbers 11-19',
    unit: 12,
    unitName: 'Clothing & Numbers',
    lessonNumber: 4,
    description: 'Learn numbers eleven through nineteen',
    icon: '1️⃣1️⃣',
    xpReward: 15,

    teaching: [
        {
            title: 'Teens Pattern',
            content: 'Numbers 11-19 are formed with **des** (ten) + digit:',
            examples: [
                { globasa: 'des un', english: 'eleven (10+1)' },
                { globasa: 'des dua', english: 'twelve (10+2)' },
                { globasa: 'des tiga', english: 'thirteen (10+3)' }
            ]
        },
        {
            title: 'More Teens',
            content: 'The pattern continues:',
            examples: [
                { globasa: 'des care', english: 'fourteen' },
                { globasa: 'des lima', english: 'fifteen' },
                { globasa: 'des sisa', english: 'sixteen' },
                { globasa: 'des sabe', english: 'seventeen' },
                { globasa: 'des oco', english: 'eighteen' },
                { globasa: 'des nue', english: 'nineteen' }
            ],
            tip: 'Simple pattern: ten + digit = teen!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        // Numbers 1-10
        'un', 'dua', 'tiga', 'care', 'lima', 'sisa', 'sabe', 'oco', 'nue', 'des'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match teen numbers',
            pairs: [
                { word: 'des un', translation: '11' },
                { word: 'des dua', translation: '12' },
                { word: 'des lima', translation: '15' },
                { word: 'des nue', translation: '19' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "thirteen"?',
            options: ['des un', 'des tiga', 'tiga des'],
            correctAnswer: 'des tiga',
            hint: 'ten + three'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "seventeen"',
            words: ['des', 'sabe', 'sisa', 'oco'],
            correctAnswer: ['des', 'sabe'],
            hint: 'ten + seven'
        },
        {
            type: 'translation',
            prompt: 'What number is "des oco"?',
            correctAnswers: ['18', 'eighteen'],
            hint: 'ten + eight'
        },
        {
            type: 'translation',
            prompt: 'How do you say "14"?',
            correctAnswers: ['des care'],
            hint: 'ten + four'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the pattern for teens?',
            options: ['digit + des', 'des + digit', 'des * digit'],
            correctAnswer: 'des + digit',
            hint: 'des un = 11'
        }
    ]
};
