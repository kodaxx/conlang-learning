// Unit 9: Numbers & Quantifiers - Lesson 5: Every, Everybody, Everything
// New words: moy (every), moyte (everybody), moyto (everything)

export default {
    id: 'u9-05-every',
    name: 'Every, Everybody, Everything',
    unit: 9,
    unitName: 'Numbers & Quantifiers',
    lessonNumber: 5,
    description: 'Learn quantifiers for "every"',
    icon: '🌍',
    xpReward: 15,

    teaching: [
        {
            title: 'Every',
            content: '**Moy** means "every" or "each":',
            vocabulary: [
                { word: 'moy', translation: 'every, each' }
            ],
            examples: [
                { globasa: 'Moy yen lubi musika', english: 'Every person loves music' },
                { globasa: 'Moy din mi xwexi', english: 'Every day I study' }
            ]
        },
        {
            title: 'Everybody',
            content: '**Moyte** means "everybody" (moy + te = every person):',
            vocabulary: [
                { word: 'moyte', translation: 'everybody, everyone' }
            ],
            examples: [
                { globasa: 'Moyte le ata', english: 'Everybody came' },
                { globasa: 'Moyte suki hin filme', english: 'Everyone likes this movie' }
            ]
        },
        {
            title: 'Everything',
            content: '**Moyto** means "everything" (moy + to = every thing):',
            vocabulary: [
                { word: 'moyto', translation: 'everything' }
            ],
            examples: [
                { globasa: 'Moyto sen bon', english: 'Everything is good' },
                { globasa: 'Mi aham moyto', english: 'I understand everything' }
            ],
            tip: 'Pattern: moy + te = everybody, moy + to = everything'
        }
    ],

    vocabulary: [
        { word: 'moy', translation: 'every, each' },
        { word: 'moyte', translation: 'everybody, everyone' },
        { word: 'moyto', translation: 'everything' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'nil', 'plu', 'multi',
        // Earlier
        'yen', 'lubi', 'suki', 'aham', 'bon', 'le', 'ata'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match quantifiers',
            pairs: [
                { word: 'moy', translation: 'every' },
                { word: 'moyte', translation: 'everybody' },
                { word: 'moyto', translation: 'everything' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "moyte" mean?',
            options: ['everything', 'everybody', 'everywhere'],
            correctAnswer: 'everybody',
            hint: 'moy + te (person)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Everybody came"',
            words: ['moyte', 'moyto', 'le', 'ata', 'idi'],
            correctAnswer: ['moyte', 'le', 'ata'],
            hint: 'Everybody + past + come'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Moyto sen bon"',
            correctAnswers: ['Everything is good'],
            hint: 'Everything + is + good'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Every person loves music"',
            correctAnswers: ['Moy yen lubi musika'],
            hint: 'Every + person + love + music'
        },
        {
            type: 'multiple-choice',
            prompt: 'How is "moyte" formed?',
            options: [
                'moy + te (every + he/she)',
                'moy + to (every + it)',
                'moy + loka (every + place)'
            ],
            correctAnswer: 'moy + te (every + he/she)',
            hint: 'te = person'
        }
    ]
};
