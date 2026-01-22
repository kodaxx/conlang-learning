// Unit 17: Recipients & Clauses - Lesson 3: Know & Think
// New words: xana (know fact), fikir (think)

export default {
    id: 'u17-03-know-think',
    name: 'Know & Think',
    unit: 17,
    unitName: 'Recipients & Clauses',
    lessonNumber: 3,
    description: 'Learn verbs that take ki clauses',
    icon: '🧠',
    xpReward: 15,

    teaching: [
        {
            title: 'Know (Facts)',
            content: '**Xana** means "to know" (facts/information):',
            vocabulary: [
                { word: 'xana', translation: 'know (facts)' }
            ],
            examples: [
                { globasa: 'Mi xana ki te sen alimyen', english: 'I know that he is a teacher' },
                { globasa: 'Yu xana?', english: 'Do you know?' }
            ]
        },
        {
            title: 'Think',
            content: '**Fikir** means "to think":',
            vocabulary: [
                { word: 'fikir', translation: 'think' }
            ],
            examples: [
                { globasa: 'Mi fikir ki to sen bon', english: 'I think that it is good' },
                { globasa: 'Te fikir daymo', english: 'He thinks a lot' }
            ],
            tip: 'xana = know (facts), fikir = think (opinion)'
        }
    ],

    vocabulary: [
        { word: 'xana', translation: 'know (facts)' },
        { word: 'fikir', translation: 'think' }
    ],

    reviewVocabulary: [
        // Recent
        'ki', 'tas',
        // Earlier
        'aham', 'loga', 'alimyen', 'bon'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match mental verbs',
            pairs: [
                { word: 'xana', translation: 'know' },
                { word: 'fikir', translation: 'think' },
                { word: 'aham', translation: 'understand' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "xana" mean?',
            options: ['think', 'know', 'understand'],
            correctAnswer: 'know'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I think that it is good"',
            words: ['mi', 'fikir', 'xana', 'ki', 'to', 'sen', 'bon'],
            correctAnswer: ['mi', 'fikir', 'ki', 'to', 'sen', 'bon'],
            hint: 'I + think + that + it + is + good'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi xana ki te sen alimyen"',
            correctAnswers: ['I know that he is a teacher', 'I know that she is a teacher'],
            hint: 'I + know + that + he/she + is + teacher'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Do you know?"',
            correctAnswers: ['Yu xana?', 'Kam yu xana?'],
            hint: 'You + know'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between xana and fikir?',
            options: [
                'xana = know facts, fikir = think/opinion',
                'xana = think, fikir = know',
                'They are the same'
            ],
            correctAnswer: 'xana = know facts, fikir = think/opinion'
        }
    ]
};
