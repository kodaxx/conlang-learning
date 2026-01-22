// Unit 5: Tenses & Places - Lesson 4: Place & Room
// New words: dom (place/building), kamer (room)

export default {
    id: 'u5-04-place-room',
    name: 'Place & Room',
    unit: 5,
    unitName: 'Tenses & Places',
    lessonNumber: 4,
    description: 'Learn words for places and rooms',
    icon: '🏢',
    xpReward: 15,

    teaching: [
        {
            title: 'Place & Building',
            content: '**Dom** means "place" or "building":',
            vocabulary: [
                { word: 'dom', translation: 'place, building' }
            ],
            examples: [
                { globasa: 'Hin dom sen day', english: 'This building is big' },
                { globasa: 'Multi yen le idi cel dom', english: 'Many people went to the building' }
            ],
            tip: 'Dom is used as a suffix to create place words (like -dom in "kingdom").'
        },
        {
            title: 'Room',
            content: '**Kamer** means "room":',
            vocabulary: [
                { word: 'kamer', translation: 'room' }
            ],
            examples: [
                { globasa: 'Mi sen in kamer', english: 'I am in the room' },
                { globasa: 'Den kamer sen bon', english: 'That room is good' },
                { globasa: 'Ogar hare multi kamer', english: 'The house has many rooms' }
            ]
        },
        {
            title: 'Compound Words Preview',
            content: 'Globasa creates new words by combining existing ones:',
            examples: [
                { globasa: 'kokikamer', english: 'kitchen (cooking room)' },
                { globasa: 'banyokamer', english: 'bathroom (bathing room)' }
            ],
            tip: 'You\'ll learn these room compounds in the next lesson!'
        }
    ],

    vocabulary: [
        { word: 'dom', translation: 'place, building' },
        { word: 'kamer', translation: 'room' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'in', 'ex', 'ogar', 'xa', 'le', 'multi',
        // Earlier
        'sen', 'bon', 'day', 'hin', 'den', 'hare'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match new vocabulary',
            pairs: [
                { word: 'dom', translation: 'place/building' },
                { word: 'kamer', translation: 'room' },
                { word: 'ogar', translation: 'home/house' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I am in the room"?',
            options: ['Mi sen kamer in', 'Mi in kamer sen', 'Mi sen in kamer'],
            correctAnswer: 'Mi sen in kamer',
            hint: 'I + am + in + room'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "That building is big"',
            words: ['den', 'dom', 'sen', 'day', 'hin'],
            correctAnswer: ['den', 'dom', 'sen', 'day'],
            hint: 'That + building + is + big'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Ogar hare multi kamer"',
            correctAnswers: ['The house has many rooms', 'A house has many rooms'],
            hint: 'House + has + many + rooms'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I went to the building"',
            correctAnswers: ['Mi le idi cel dom'],
            hint: 'I + past + go + to + building'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is "dom" used for in compound words?',
            options: [
                'To mean "room"',
                'To mean "building" or create place words',
                'To mean "house"'
            ],
            correctAnswer: 'To mean "building" or create place words',
            hint: 'It\'s used as a suffix for places'
        }
    ]
};
