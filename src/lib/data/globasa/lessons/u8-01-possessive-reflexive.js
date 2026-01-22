// Unit 8: Comparison - Lesson 1: Possessives & Reflexive
// New words: -su (possessive suffix), se (reflexive pronoun)

export default {
    id: 'u8-01-possessive-reflexive',
    name: 'Possessives & Reflexive',
    unit: 8,
    unitName: 'Comparison',
    lessonNumber: 1,
    description: 'Learn the possessive suffix and reflexive pronoun',
    icon: '👆',
    xpReward: 15,

    teaching: [
        {
            title: 'Possessive Suffix -su',
            content: 'Add **-su** to pronouns to make possessives:',
            vocabulary: [
                { word: '-su', translation: 'possessive suffix (\'s)' }
            ],
            examples: [
                { globasa: 'mi su kitabu', english: 'my book' },
                { globasa: 'yu su ogar', english: 'your house' },
                { globasa: 'te su mama', english: 'his/her mother' }
            ],
            tip: 'You already know "mi su" = my! This is the -su suffix in action.'
        },
        {
            title: 'More Possessives',
            content: 'The -su suffix works with all pronouns:',
            examples: [
                { globasa: 'imi su alimyen', english: 'our teacher' },
                { globasa: 'uyu su eskol', english: 'your (plural) school' },
                { globasa: 'ete su ogar', english: 'their house' }
            ]
        },
        {
            title: 'Reflexive Pronoun',
            content: '**Se** means "oneself" (reflexive):',
            vocabulary: [
                { word: 'se', translation: 'oneself (reflexive)' }
            ],
            examples: [
                { globasa: 'Mi oko se', english: 'I see myself' },
                { globasa: 'Te lubi se', english: 'He/She loves himself/herself' },
                { globasa: 'Imi oko se', english: 'We see ourselves' }
            ],
            tip: 'Use "se" when the subject and object are the same person.'
        }
    ],

    vocabulary: [
        { word: '-su', translation: 'possessive suffix' },
        { word: 'se', translation: 'oneself (reflexive)' }
    ],

    reviewVocabulary: [
        // Unit 7 recent
        'de', 'ton', 'keloka',
        // Earlier pronouns
        'mi', 'yu', 'te', 'imi', 'uyu', 'ete', 'oko', 'lubi', 'kitabu', 'ogar'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match new concepts',
            pairs: [
                { word: '-su', translation: 'possessive (my, your, etc.)' },
                { word: 'se', translation: 'oneself (reflexive)' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "my book"?',
            options: ['mi de kitabu', 'mi su kitabu', 'kitabu de mi'],
            correctAnswer: 'mi su kitabu',
            hint: 'pronoun + su + noun'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I see myself"',
            words: ['mi', 'oko', 'se', 'te', 'yu'],
            correctAnswer: ['mi', 'oko', 'se'],
            hint: 'I + see + myself'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te lubi se"',
            correctAnswers: ['He loves himself', 'She loves herself'],
            hint: 'He/She + love + self'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "their house"',
            correctAnswers: ['ete su ogar'],
            hint: 'they + possessive + house'
        },
        {
            type: 'multiple-choice',
            prompt: 'When do you use "se"?',
            options: [
                'When subject and object are the same',
                'For possession',
                'For asking questions'
            ],
            correctAnswer: 'When subject and object are the same',
            hint: 'I see myself = Mi oko se'
        }
    ]
};
