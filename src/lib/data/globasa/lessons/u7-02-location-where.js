// Unit 7: Possession & Location - Lesson 2: Location & Where
// New words: loka (location/place), keloka (where)

export default {
    id: 'u7-02-location-where',
    name: 'Location & Where',
    unit: 7,
    unitName: 'Possession & Location',
    lessonNumber: 2,
    description: 'Learn to talk about locations and ask "where"',
    icon: '📍',
    xpReward: 15,

    teaching: [
        {
            title: 'Location / Place',
            content: '**Loka** means "location" or "place":',
            vocabulary: [
                { word: 'loka', translation: 'location, place' }
            ],
            examples: [
                { globasa: 'Hin sen bon loka', english: 'This is a good place' },
                { globasa: 'Mi no aham loka de te', english: 'I don\'t understand his/her location' }
            ]
        },
        {
            title: 'Where?',
            content: '**Keloka** means "where" (ke + loka = which place):',
            vocabulary: [
                { word: 'keloka', translation: 'where' }
            ],
            examples: [
                { globasa: 'Keloka yu ogar?', english: 'Where do you live?' },
                { globasa: 'Keloka sen banko?', english: 'Where is the bank?' },
                { globasa: 'Te le idi keloka?', english: 'Where did he/she go?' }
            ],
            tip: 'Remember: ke + loka = keloka (which place = where)'
        }
    ],

    vocabulary: [
        { word: 'loka', translation: 'location, place' },
        { word: 'keloka', translation: 'where' }
    ],

    reviewVocabulary: [
        // Lesson 7.1 recent
        'de', 'ton',
        // Earlier
        'ke', 'kete', 'keto', 'ogar', 'banko', 'sen', 'idi', 'le', 'bon'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match new vocabulary',
            pairs: [
                { word: 'loka', translation: 'location/place' },
                { word: 'keloka', translation: 'where' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you ask "Where do you live?"',
            options: ['Keto yu ogar?', 'Keloka yu ogar?', 'Kete yu ogar?'],
            correctAnswer: 'Keloka yu ogar?',
            hint: 'keloka = where'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Where is the bank?"',
            words: ['keloka', 'keto', 'sen', 'banko', 'loka'],
            correctAnswer: ['keloka', 'sen', 'banko'],
            hint: 'Where + is + bank'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Hin sen bon loka"',
            correctAnswers: ['This is a good place'],
            hint: 'This + is + good + place'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Where did she go?"',
            correctAnswers: ['Te le idi keloka?'],
            hint: 'She + past + go + where'
        },
        {
            type: 'multiple-choice',
            prompt: 'How is "keloka" formed?',
            options: [
                'ke + loka (which + place)',
                'ke + loga (which + speak)',
                'ke + oto (which + one)'
            ],
            correctAnswer: 'ke + loka (which + place)',
            hint: 'Same pattern as kete (who) and keto (what)'
        }
    ]
};
