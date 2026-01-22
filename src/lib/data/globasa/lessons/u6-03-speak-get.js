// Unit 6: Communication - Lesson 3: Speaking & Getting
// New words: loga (speak/say), cudu (get/take)

export default {
    id: 'u6-03-speak-get',
    name: 'Speaking & Getting',
    unit: 6,
    unitName: 'Communication',
    lessonNumber: 3,
    description: 'Learn to say "speak" and "get/take"',
    icon: '🗣️',
    xpReward: 15,

    teaching: [
        {
            title: 'Speak / Say',
            content: '**Loga** means "to speak" or "to say":',
            vocabulary: [
                { word: 'loga', translation: 'speak, say' }
            ],
            examples: [
                { globasa: 'Mi loga Globasa', english: 'I speak Globasa' },
                { globasa: 'Te le loga keto?', english: 'What did he/she say?' },
                { globasa: 'Imi loga multi basa', english: 'We speak many languages' }
            ],
            tip: 'Loga can mean both "to speak (a language)" and "to say (something)".'
        },
        {
            title: 'Get / Take',
            content: '**Cudu** means "to get" or "to take":',
            vocabulary: [
                { word: 'cudu', translation: 'get, take' }
            ],
            examples: [
                { globasa: 'Mi xa cudu kitabu', english: 'I will get/take a book' },
                { globasa: 'Yu cudu keto?', english: 'What are you getting?' },
                { globasa: 'Ete le cudu mi su pingo!', english: 'They took my apple!' }
            ]
        },
        {
            title: 'Using Questions with Verbs',
            content: 'Combine question words with the new verbs:',
            examples: [
                { globasa: 'Kete loga Globasa?', english: 'Who speaks Globasa?' },
                { globasa: 'Yu xa cudu keto?', english: 'What will you get?' }
            ]
        }
    ],

    vocabulary: [
        { word: 'loga', translation: 'speak, say' },
        { word: 'cudu', translation: 'get, take' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'ke', 'kete', 'keto', 'imi', 'ete',
        // Earlier
        'xa', 'le', 'kitabu', 'pingo', 'multi'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match new vocabulary',
            pairs: [
                { word: 'loga', translation: 'speak/say' },
                { word: 'cudu', translation: 'get/take' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I speak Globasa"?',
            options: ['Mi loga Globasa', 'Mi cudu Globasa', 'Mi xwexi Globasa'],
            correctAnswer: 'Mi loga Globasa',
            hint: 'Loga = speak'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "What did he say?"',
            words: ['te', 'le', 'loga', 'keto', 'kete'],
            correctAnswer: ['te', 'le', 'loga', 'keto'],
            hint: 'He + past + say + what'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi xa cudu kitabu"',
            correctAnswers: ['I will get a book', 'I will take a book'],
            hint: 'I + will + get/take + book'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Who speaks Globasa?"',
            correctAnswers: ['Kete loga Globasa?'],
            hint: 'Who + speak + Globasa'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which verb means "to say something"?',
            options: ['cudu', 'xwexi', 'loga'],
            correctAnswer: 'loga',
            hint: 'Same as "to speak"'
        }
    ]
};
