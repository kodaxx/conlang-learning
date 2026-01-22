// Unit 9: Numbers & Quantifiers - Lesson 6: Nobody, Nothing, Nowhere
// New words: nilte (nobody), nilto (nothing), nilloka (nowhere)

export default {
    id: 'u9-06-nothing',
    name: 'Nobody, Nothing, Nowhere',
    unit: 9,
    unitName: 'Numbers & Quantifiers',
    lessonNumber: 6,
    description: 'Learn negative quantifiers',
    icon: '🚫',
    xpReward: 15,

    teaching: [
        {
            title: 'Nobody',
            content: '**Nilte** means "nobody" (nil + te = zero person):',
            vocabulary: [
                { word: 'nilte', translation: 'nobody, no one' }
            ],
            examples: [
                { globasa: 'Nilte le ata', english: 'Nobody came' },
                { globasa: 'Nilte aham', english: 'Nobody understands' }
            ]
        },
        {
            title: 'Nothing',
            content: '**Nilto** means "nothing" (nil + to = zero thing):',
            vocabulary: [
                { word: 'nilto', translation: 'nothing' }
            ],
            examples: [
                { globasa: 'Mi oko nilto', english: 'I see nothing' },
                { globasa: 'Nilto sen fe mesa', english: 'Nothing is on the table' }
            ]
        },
        {
            title: 'Nowhere',
            content: '**Nilloka** means "nowhere" (nil + loka = zero place):',
            vocabulary: [
                { word: 'nilloka', translation: 'nowhere' }
            ],
            examples: [
                { globasa: 'Te idi nilloka', english: 'He goes nowhere' },
                { globasa: 'Mi xa idi nilloka', english: 'I will go nowhere' }
            ],
            tip: 'Pattern: nil + te = nobody, nil + to = nothing, nil + loka = nowhere'
        }
    ],

    vocabulary: [
        { word: 'nilte', translation: 'nobody, no one' },
        { word: 'nilto', translation: 'nothing' },
        { word: 'nilloka', translation: 'nowhere' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'moy', 'moyte', 'moyto', 'nil',
        // Earlier
        'ata', 'aham', 'oko', 'mesa', 'idi', 'loka'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match negative quantifiers',
            pairs: [
                { word: 'nilte', translation: 'nobody' },
                { word: 'nilto', translation: 'nothing' },
                { word: 'nilloka', translation: 'nowhere' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "nilto" mean?',
            options: ['nobody', 'nothing', 'nowhere'],
            correctAnswer: 'nothing',
            hint: 'nil + to (thing)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I see nothing"',
            words: ['mi', 'oko', 'nilto', 'nilte', 'nilloka'],
            correctAnswer: ['mi', 'oko', 'nilto'],
            hint: 'I + see + nothing'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Nilte le ata"',
            correctAnswers: ['Nobody came', 'No one came'],
            hint: 'Nobody + past + come'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I will go nowhere"',
            correctAnswers: ['Mi xa idi nilloka'],
            hint: 'I + will + go + nowhere'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the pattern for nil- words?',
            options: [
                'nil + pronoun/noun = negative',
                'nil + verb = passive',
                'nil + adjective = opposite'
            ],
            correctAnswer: 'nil + pronoun/noun = negative',
            hint: 'nilte, nilto, nilloka...'
        }
    ]
};
