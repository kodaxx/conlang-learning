// Unit 6: Communication - Lesson 2: Question Words
// New words: ke (which), kete (who), keto (what)

export default {
    id: 'u6-02-question-words',
    name: 'Question Words',
    unit: 6,
    unitName: 'Communication',
    lessonNumber: 2,
    description: 'Learn the essential question words: which, who, what',
    icon: '❓',
    xpReward: 15,

    teaching: [
        {
            title: 'Which',
            content: '**Ke** means "which" and introduces questions about choices:',
            vocabulary: [
                { word: 'ke', translation: 'which' }
            ],
            examples: [
                { globasa: 'Ke kitabu?', english: 'Which book?' },
                { globasa: 'Yu suki ke filme?', english: 'Which movie do you like?' }
            ]
        },
        {
            title: 'Who',
            content: '**Kete** means "who" (ke + te = which person):',
            vocabulary: [
                { word: 'kete', translation: 'who' }
            ],
            examples: [
                { globasa: 'Kete sen te?', english: 'Who is he/she?' },
                { globasa: 'Kete le yam mi su pingo?', english: 'Who ate my apple?' }
            ],
            tip: 'Kete = ke (which) + te (he/she) = "which person" = who'
        },
        {
            title: 'What',
            content: '**Keto** means "what" (ke + to = which thing):',
            vocabulary: [
                { word: 'keto', translation: 'what' }
            ],
            examples: [
                { globasa: 'Keto sen den?', english: 'What is that?' },
                { globasa: 'Yu yam keto?', english: 'What are you eating?' }
            ],
            tip: 'Keto = ke (which) + to (it) = "which thing" = what'
        }
    ],

    vocabulary: [
        { word: 'ke', translation: 'which' },
        { word: 'kete', translation: 'who' },
        { word: 'keto', translation: 'what' }
    ],

    reviewVocabulary: [
        // Lesson 6.1 recent
        'imi', 'uyu', 'ete', 'oto',
        // Earlier
        'sen', 'te', 'to', 'suki', 'yam', 'kitabu', 'filme', 'pingo'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match question words',
            pairs: [
                { word: 'ke', translation: 'which' },
                { word: 'kete', translation: 'who' },
                { word: 'keto', translation: 'what' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you ask "Who is that?"',
            options: ['Ke sen den?', 'Kete sen den?', 'Keto sen den?'],
            correctAnswer: 'Kete sen den?',
            hint: 'Kete = who (about a person)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "What is that?"',
            words: ['keto', 'kete', 'sen', 'den', 'hin'],
            correctAnswer: ['keto', 'sen', 'den'],
            hint: 'What + is + that'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Yu suki ke filme?"',
            correctAnswers: ['Which movie do you like?', 'Which film do you like?'],
            hint: 'You + like + which + movie'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Who ate my apple?"',
            correctAnswers: ['Kete le yam mi su pingo?'],
            hint: 'Who + past + eat + my + apple'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is "keto" formed from?',
            options: [
                'ke + te (which + he/she)',
                'ke + to (which + it)',
                'ke + oto (which + one)'
            ],
            correctAnswer: 'ke + to (which + it)',
            hint: 'to = it (impersonal)'
        }
    ]
};
