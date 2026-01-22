// Unit 10: Countries & Languages - Lesson 6: Speaking & Living
// New words: pala (speak), yon (by means of)

export default {
    id: 'u10-06-speaking-living',
    name: 'Speaking & Living',
    unit: 10,
    unitName: 'Countries & Languages',
    lessonNumber: 6,
    description: 'Learn more about speaking languages and living in places',
    icon: '💬',
    xpReward: 15,

    teaching: [
        {
            title: 'Speak (pala)',
            content: '**Pala** means "to speak" or "to talk":',
            vocabulary: [
                { word: 'pala', translation: 'speak, talk' }
            ],
            examples: [
                { globasa: 'Mi pala Englisa', english: 'I speak English' },
                { globasa: 'Te pala ton mi', english: 'He/She is talking with me' }
            ],
            tip: 'Pala and loga both mean "speak" - pala is more conversational.'
        },
        {
            title: 'By Means Of',
            content: '**Yon** means "by means of" or "using":',
            vocabulary: [
                { word: 'yon', translation: 'by means of, using' }
            ],
            examples: [
                { globasa: 'Mi pala yon Globasa', english: 'I speak using Globasa' },
                { globasa: 'Te ergo yon komputer', english: 'He works using a computer' }
            ]
        },
        {
            title: 'Combining with ogar',
            content: 'Remember "ogar" means to live/dwell:',
            examples: [
                { globasa: 'Mi ogar in Usa', english: 'I live in USA' },
                { globasa: 'Te ogar in Nipon', english: 'He/She lives in Japan' }
            ]
        }
    ],

    vocabulary: [
        { word: 'pala', translation: 'speak, talk' },
        { word: 'yon', translation: 'by means of, using' }
    ],

    reviewVocabulary: [
        // Recent lessons
        '-li', '-sa', 'Englisa', 'Niponsa',
        // Earlier
        'loga', 'ogar', 'in', 'ton', 'ergo'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match vocabulary',
            pairs: [
                { word: 'pala', translation: 'speak/talk' },
                { word: 'yon', translation: 'by means of' },
                { word: 'loga', translation: 'say/speak' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I speak English"?',
            options: ['Mi pala Englisa', 'Mi pala Englili', 'Mi pala Engli'],
            correctAnswer: 'Mi pala Englisa',
            hint: 'Use the language name (-sa)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "He lives in Japan"',
            words: ['te', 'ogar', 'in', 'Nipon', 'Niponsa'],
            correctAnswer: ['te', 'ogar', 'in', 'Nipon'],
            hint: 'He + live + in + Japan'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te pala ton mi"',
            correctAnswers: ['He is talking with me', 'She is talking with me'],
            hint: 'He/She + speak + with + me'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I live in USA"',
            correctAnswers: ['Mi ogar in Usa'],
            hint: 'I + live + in + USA'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "yon" mean?',
            options: ['with (accompaniment)', 'by means of', 'in (location)'],
            correctAnswer: 'by means of',
            hint: 'Using something'
        }
    ]
};
