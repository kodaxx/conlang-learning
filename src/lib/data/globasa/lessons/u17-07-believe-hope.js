// Unit 17: Recipients & Clauses - Lesson 7: Believe & Hope
// New words: kredi (believe), asha (hope)

export default {
    id: 'u17-07-believe-hope',
    name: 'Believe & Hope',
    unit: 17,
    unitName: 'Recipients & Clauses',
    lessonNumber: 7,
    description: 'Learn more verbs that take ki clauses',
    icon: '🙏',
    xpReward: 15,

    teaching: [
        {
            title: 'Believe',
            content: '**Kredi** means "to believe":',
            vocabulary: [
                { word: 'kredi', translation: 'believe' }
            ],
            examples: [
                { globasa: 'Mi kredi ki to sen vera', english: 'I believe that it is true' },
                { globasa: 'Yu kredi mi?', english: 'Do you believe me?' }
            ]
        },
        {
            title: 'Hope',
            content: '**Asha** means "to hope":',
            vocabulary: [
                { word: 'asha', translation: 'hope' }
            ],
            examples: [
                { globasa: 'Mi asha ki yu xa ata', english: 'I hope that you will come' },
                { globasa: 'Imi asha tas bon', english: 'We hope for the best' }
            ]
        }
    ],

    vocabulary: [
        { word: 'kredi', translation: 'believe' },
        { word: 'asha', translation: 'hope' }
    ],

    reviewVocabulary: [
        // Recent
        '-kal', 'ban-', 'ki',
        // Mental verbs
        'xana', 'fikir', 'aham'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match mental verbs',
            pairs: [
                { word: 'kredi', translation: 'believe' },
                { word: 'asha', translation: 'hope' },
                { word: 'fikir', translation: 'think' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "kredi" mean?',
            options: ['think', 'hope', 'believe'],
            correctAnswer: 'believe'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I hope that you will come"',
            words: ['mi', 'asha', 'kredi', 'ki', 'yu', 'xa', 'ata'],
            correctAnswer: ['mi', 'asha', 'ki', 'yu', 'xa', 'ata'],
            hint: 'I + hope + that + you + will + come'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi kredi ki to sen vera"',
            correctAnswers: ['I believe that it is true'],
            hint: 'I + believe + that + it + is + true'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Do you believe me?"',
            correctAnswers: ['Yu kredi mi?', 'Kam yu kredi mi?'],
            hint: 'You + believe + me'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which verbs often take ki clauses?',
            options: [
                'Action verbs like yam, idi',
                'Mental verbs like xana, fikir, kredi',
                'Motion verbs like fley, suyon'
            ],
            correctAnswer: 'Mental verbs like xana, fikir, kredi'
        }
    ]
};
