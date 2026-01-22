// Unit 5: Tenses & Places - Lesson 3: In, Out & Home
// New words: in (in/into), ex (out/from), ogar (home/dwell)

export default {
    id: 'u5-03-in-out-home',
    name: 'In, Out & Home',
    unit: 5,
    unitName: 'Tenses & Places',
    lessonNumber: 3,
    description: 'Learn prepositions of location and your first place word',
    icon: '🏠',
    xpReward: 15,

    teaching: [
        {
            title: 'In & Into',
            content: '**In** means "in" or "into":',
            vocabulary: [
                { word: 'in', translation: 'in, into' }
            ],
            examples: [
                { globasa: 'in ogar', english: 'in the house' },
                { globasa: 'Mi sen in ogar', english: 'I am in the house' }
            ]
        },
        {
            title: 'Out & From',
            content: '**Ex** means "out" or "from":',
            vocabulary: [
                { word: 'ex', translation: 'out, from' }
            ],
            examples: [
                { globasa: 'ex ogar', english: 'out of the house' },
                { globasa: 'Te le idi ex ogar', english: 'He went out of the house' }
            ]
        },
        {
            title: 'Home & Dwell',
            content: '**Ogar** means both "home/house" and "to dwell/live":',
            vocabulary: [
                { word: 'ogar', translation: 'home, house; to dwell, to live' }
            ],
            examples: [
                { globasa: 'Mi ogar in bon ogar', english: 'I live in a good home' },
                { globasa: 'Hin sen mi su ogar', english: 'This is my home' }
            ],
            tip: 'Many Globasa words can be both nouns and verbs!'
        }
    ],

    vocabulary: [
        { word: 'in', translation: 'in, into' },
        { word: 'ex', translation: 'out, from' },
        { word: 'ogar', translation: 'home, house; to dwell' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'xa', 'le', 'multi', 'mas',
        // Earlier
        'sen', 'bon', 'day', 'mi', 'te'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match new vocabulary',
            pairs: [
                { word: 'in', translation: 'in/into' },
                { word: 'ex', translation: 'out/from' },
                { word: 'ogar', translation: 'home/house' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "in the house"?',
            options: ['ogar in', 'in ogar', 'ex ogar'],
            correctAnswer: 'in ogar',
            hint: 'Preposition + noun'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I am in the house"',
            words: ['mi', 'sen', 'in', 'ogar', 'ex'],
            correctAnswer: ['mi', 'sen', 'in', 'ogar'],
            hint: 'I + am + in + house'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te le idi ex ogar"',
            correctAnswers: ['He went out of the house', 'She went out of the house', 'He/She left the house'],
            hint: 'He/She + past + go + out + house'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I will live in a big house"',
            correctAnswers: ['Mi xa ogar in day ogar'],
            hint: 'I + will + live + in + big + house'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is special about "ogar"?',
            options: [
                'It only means house',
                'It only means to live',
                'It can be both noun and verb'
            ],
            correctAnswer: 'It can be both noun and verb',
            hint: 'Many Globasa words have this property'
        }
    ]
};
