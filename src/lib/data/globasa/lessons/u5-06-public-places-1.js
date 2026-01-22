// Unit 5: Tenses & Places - Lesson 6: Public Places 1
// New words: parke (park), hotel (hotel), banko (bank)

export default {
    id: 'u5-06-public-places-1',
    name: 'Public Places 1',
    unit: 5,
    unitName: 'Tenses & Places',
    lessonNumber: 6,
    description: 'Learn vocabulary for common public places',
    icon: '🏦',
    xpReward: 15,

    teaching: [
        {
            title: 'Park',
            content: '**Parke** means "park":',
            vocabulary: [
                { word: 'parke', translation: 'park' }
            ],
            examples: [
                { globasa: 'Mi xa idi cel parke', english: 'I will go to the park' },
                { globasa: 'Nini le yuxi in parke', english: 'The children played in the park' }
            ]
        },
        {
            title: 'Hotel',
            content: '**Hotel** means "hotel":',
            vocabulary: [
                { word: 'hotel', translation: 'hotel' }
            ],
            examples: [
                { globasa: 'Imi xa ogar in hotel', english: 'We will stay in a hotel' },
                { globasa: 'Den hotel sen day ji meli', english: 'That hotel is big and beautiful' }
            ]
        },
        {
            title: 'Bank',
            content: '**Banko** means "bank":',
            vocabulary: [
                { word: 'banko', translation: 'bank' }
            ],
            examples: [
                { globasa: 'Mi le idi cel banko', english: 'I went to the bank' },
                { globasa: 'Banko sen in dom', english: 'The bank is in the building' }
            ]
        }
    ],

    vocabulary: [
        { word: 'parke', translation: 'park' },
        { word: 'hotel', translation: 'hotel' },
        { word: 'banko', translation: 'bank' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'kokikamer', 'banyokamer', 'dom', 'kamer', 'in',
        // Earlier
        'idi', 'cel', 'le', 'xa', 'ogar', 'day', 'meli', 'nini', 'yuxi'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match public places',
            pairs: [
                { word: 'parke', translation: 'park' },
                { word: 'hotel', translation: 'hotel' },
                { word: 'banko', translation: 'bank' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I will go to the park"?',
            options: ['Mi xa idi cel parke', 'Mi le idi cel parke', 'Mi idi cel parke'],
            correctAnswer: 'Mi xa idi cel parke',
            hint: 'Use xa for future'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "We will stay in a hotel"',
            words: ['imi', 'xa', 'ogar', 'in', 'hotel', 'banko'],
            correctAnswer: ['imi', 'xa', 'ogar', 'in', 'hotel'],
            hint: 'We + will + stay/dwell + in + hotel'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Nini le yuxi in parke"',
            correctAnswers: ['The children played in the park', 'Children played in the park'],
            hint: 'Children + past + play + in + park'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I went to the bank"',
            correctAnswers: ['Mi le idi cel banko'],
            hint: 'I + past + go + to + bank'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which sentence is correct?',
            options: [
                'Den hotel sen day ji meli',
                'Den hotel dai ji meli sen',
                'Hotel den sen day ji meli'
            ],
            correctAnswer: 'Den hotel sen day ji meli',
            hint: 'Demonstrative + noun + is + adjective + and + adjective'
        }
    ]
};
