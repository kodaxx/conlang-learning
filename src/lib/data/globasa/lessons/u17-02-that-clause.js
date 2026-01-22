// Unit 17: Recipients & Clauses - Lesson 2: That (Clause Marker)
// New words: ki (that - clause marker)

export default {
    id: 'u17-02-that-clause',
    name: 'That (Clause Marker)',
    unit: 17,
    unitName: 'Recipients & Clauses',
    lessonNumber: 2,
    description: 'Learn to create subordinate clauses with "ki"',
    icon: '💬',
    xpReward: 15,

    teaching: [
        {
            title: 'That (Clause Marker)',
            content: '**Ki** means "that" (introduces a subordinate clause):',
            vocabulary: [
                { word: 'ki', translation: 'that (clause marker)' }
            ],
            examples: [
                { globasa: 'Mi xana ki te xa ata', english: 'I know that he will come' },
                { globasa: 'Te loga ki te suki to', english: 'He says that he likes it' }
            ],
            tip: 'ki introduces what someone knows, says, thinks, etc.'
        },
        {
            title: 'Common Pattern',
            content: 'VERB + ki + CLAUSE:',
            examples: [
                { globasa: 'Mi fikir ki ...', english: 'I think that ...' },
                { globasa: 'Mi aham ki ...', english: 'I understand that ...' }
            ]
        }
    ],

    vocabulary: [
        { word: 'ki', translation: 'that (clause marker)' }
    ],

    reviewVocabulary: [
        // Lesson 17.1 recent
        'tas',
        // Earlier
        'xana', 'loga', 'fikir', 'aham', 'suki', 'ata'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match vocabulary',
            pairs: [
                { word: 'ki', translation: 'that (clause)' },
                { word: 'hin', translation: 'this' },
                { word: 'den', translation: 'that (demonstrative)' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I know that he will come"?',
            options: ['Mi xana te xa ata', 'Mi xana ki te xa ata', 'Mi ki xana te xa ata'],
            correctAnswer: 'Mi xana ki te xa ata',
            hint: 'Verb + ki + clause'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "He says that he likes it"',
            words: ['te', 'loga', 'ki', 'suki', 'to'],
            correctAnswer: ['te', 'loga', 'ki', 'te', 'suki', 'to'],
            hint: 'He + say + that + he + like + it'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi fikir ki to sen bon"',
            correctAnswers: ['I think that it is good'],
            hint: 'I + think + that + it + is + good'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I know that"',
            correctAnswers: ['Mi xana ki'],
            hint: 'I + know + that'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "ki" introduce?',
            options: ['A question', 'A subordinate clause', 'A command'],
            correctAnswer: 'A subordinate clause'
        }
    ]
};
