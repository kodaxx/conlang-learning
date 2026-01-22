// Unit 17: Recipients & Clauses - Lesson 1: For / To (Recipient)
// New words: tas (for, to - recipient)

export default {
    id: 'u17-01-for-recipient',
    name: 'For / To (Recipient)',
    unit: 17,
    unitName: 'Recipients & Clauses',
    lessonNumber: 1,
    description: 'Learn to express recipients with "tas"',
    icon: '🎁',
    xpReward: 15,

    teaching: [
        {
            title: 'For (Recipient)',
            content: '**Tas** means "for" or "to" (recipient/beneficiary):',
            vocabulary: [
                { word: 'tas', translation: 'for, to (recipient)' }
            ],
            examples: [
                { globasa: 'Hin sen tas yu', english: 'This is for you' },
                { globasa: 'Mi kari kitabu tas te', english: 'I buy a book for him' },
                { globasa: 'Mi doxo tas nini', english: 'I read for the child' }
            ],
            tip: 'tas = for/to (recipient), cel = to (destination)'
        },
        {
            title: 'Compare tas and cel',
            content: 'The difference between tas and cel:',
            examples: [
                { globasa: 'Mi idi cel dukan', english: 'I go TO the store (destination)' },
                { globasa: 'Hin sen tas yu', english: 'This is FOR you (recipient)' }
            ]
        }
    ],

    vocabulary: [
        { word: 'tas', translation: 'for, to (recipient)' }
    ],

    reviewVocabulary: [
        // Unit 16 recent
        'hay', 'garme', 'bardi',
        // Earlier
        'cel', 'kari', 'don', 'kitabu', 'nini', 'doxo'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match prepositions',
            pairs: [
                { word: 'tas', translation: 'for (recipient)' },
                { word: 'cel', translation: 'to (destination)' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "This is for you"?',
            options: ['Hin sen cel yu', 'Hin sen tas yu', 'Hin tas yu sen'],
            correctAnswer: 'Hin sen tas yu',
            hint: 'tas = for (recipient)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I buy a book for him"',
            words: ['mi', 'kari', 'kitabu', 'tas', 'cel', 'te'],
            correctAnswer: ['mi', 'kari', 'kitabu', 'tas', 'te'],
            hint: 'I + buy + book + for + him'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi doxo tas nini"',
            correctAnswers: ['I read for the child'],
            hint: 'I + read + for + child'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "This is for you"',
            correctAnswers: ['Hin sen tas yu'],
            hint: 'This + is + for + you'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between tas and cel?',
            options: [
                'tas = recipient, cel = destination',
                'tas = destination, cel = recipient',
                'They are the same'
            ],
            correctAnswer: 'tas = recipient, cel = destination'
        }
    ]
};
