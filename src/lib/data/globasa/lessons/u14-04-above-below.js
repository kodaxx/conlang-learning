// Unit 14: Commands & Positions - Lesson 4: Above & Below
// New words: supra (above), pu (below)

export default {
    id: 'u14-04-above-below',
    name: 'Above & Below',
    unit: 14,
    unitName: 'Commands & Positions',
    lessonNumber: 4,
    description: 'Learn vertical positions: above and below',
    icon: '⬆️',
    xpReward: 15,

    teaching: [
        {
            title: 'Above / Over',
            content: '**Supra** means "above" or "over":',
            vocabulary: [
                { word: 'supra', translation: 'above, over' }
            ],
            examples: [
                { globasa: 'Piu fley supra ogar', english: 'The bird flies above the house' },
                { globasa: 'Foto sen supra mesa', english: 'The photo is above the table' }
            ]
        },
        {
            title: 'Below / Under',
            content: '**Pu** means "below" or "under":',
            vocabulary: [
                { word: 'pu', translation: 'below, under' }
            ],
            examples: [
                { globasa: 'Mahi suyon pu sui', english: 'Fish swim under the water' },
                { globasa: 'Dukan sen pu hotel', english: 'The store is below the hotel' }
            ],
            tip: 'Compare: per = on (touching), supra = above (not touching), bax/pu = under/below'
        }
    ],

    vocabulary: [
        { word: 'supra', translation: 'above, over' },
        { word: 'pu', translation: 'below, under' }
    ],

    reviewVocabulary: [
        // Recent
        'cejo', 'bulu', 'fronta', 'ruke',
        // Related
        'per', 'bax', 'in',
        // Earlier
        'piu', 'fley', 'mahi', 'suyon'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match vertical positions',
            pairs: [
                { word: 'supra', translation: 'above' },
                { word: 'pu', translation: 'below' },
                { word: 'per', translation: 'on (touching)' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "above the house"?',
            options: ['per ogar', 'supra ogar', 'pu ogar'],
            correctAnswer: 'supra ogar',
            hint: 'supra = above'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The bird flies above the house"',
            words: ['piu', 'fley', 'supra', 'per', 'ogar'],
            correctAnswer: ['piu', 'fley', 'supra', 'ogar'],
            hint: 'Bird + fly + above + house'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mahi suyon pu sui"',
            correctAnswers: ['Fish swim under the water', 'Fish swim below the water'],
            hint: 'Fish + swim + under + water'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "below the hotel"',
            correctAnswers: ['pu hotel'],
            hint: 'below + hotel'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between per and supra?',
            options: [
                'per = on (touching), supra = above (not touching)',
                'per = above, supra = on',
                'They are the same'
            ],
            correctAnswer: 'per = on (touching), supra = above (not touching)'
        }
    ]
};
