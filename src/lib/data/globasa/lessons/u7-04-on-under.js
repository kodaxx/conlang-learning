// Unit 7: Possession & Location - Lesson 4: On & Under
// New words: per (on), bax (under)

export default {
    id: 'u7-04-on-under',
    name: 'On & Under',
    unit: 7,
    unitName: 'Possession & Location',
    lessonNumber: 4,
    description: 'Learn prepositions of position: on and under',
    icon: '⬆️',
    xpReward: 15,

    teaching: [
        {
            title: 'On',
            content: '**Per** means "on" or "on top of":',
            vocabulary: [
                { word: 'per', translation: 'on, on top of' }
            ],
            examples: [
                { globasa: 'Kitabu sen per mesa', english: 'The book is on the table' },
                { globasa: 'Myaw sen per kursi', english: 'The cat is on the chair' }
            ]
        },
        {
            title: 'Under',
            content: '**Bax** means "under" or "below":',
            vocabulary: [
                { word: 'bax', translation: 'under, below' }
            ],
            examples: [
                { globasa: 'Bwaw sen bax mesa', english: 'The dog is under the table' },
                { globasa: 'Keto sen bax bistar?', english: 'What is under the bed?' }
            ]
        },
        {
            title: 'Preview: Furniture Words',
            content: 'You\'ll learn these furniture words in the next lessons:',
            examples: [
                { globasa: 'mesa', english: 'table' },
                { globasa: 'kursi', english: 'chair' },
                { globasa: 'bistar', english: 'bed' }
            ],
            tip: 'For now, focus on per (on) and bax (under)!'
        }
    ],

    vocabulary: [
        { word: 'per', translation: 'on, on top of' },
        { word: 'bax', translation: 'under, below' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'hinloka', 'denloka', 'loka', 'keloka',
        // Earlier
        'in', 'sen', 'kitabu', 'myaw', 'bwaw', 'keto'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match prepositions',
            pairs: [
                { word: 'per', translation: 'on' },
                { word: 'bax', translation: 'under' },
                { word: 'in', translation: 'in' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "The book is on the table"?',
            options: ['Kitabu sen in mesa', 'Kitabu sen per mesa', 'Kitabu sen bax mesa'],
            correctAnswer: 'Kitabu sen per mesa',
            hint: 'per = on'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The dog is under the table"',
            words: ['bwaw', 'sen', 'bax', 'per', 'mesa'],
            correctAnswer: ['bwaw', 'sen', 'bax', 'mesa'],
            hint: 'Dog + is + under + table'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Myaw sen per kursi"',
            correctAnswers: ['The cat is on the chair'],
            hint: 'Cat + is + on + chair'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "What is under the bed?"',
            correctAnswers: ['Keto sen bax bistar?'],
            hint: 'What + is + under + bed'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which preposition means "under"?',
            options: ['per', 'in', 'bax'],
            correctAnswer: 'bax',
            hint: 'Opposite of "per" (on)'
        }
    ]
};
