// Unit 12: Clothing & Numbers - Lesson 3: The -pul Suffix (Wear)
// New concept: -pul suffix for wearing

export default {
    id: 'u12-03-wear-suffix',
    name: 'Wearing Clothes (-pul)',
    unit: 12,
    unitName: 'Clothing & Numbers',
    lessonNumber: 3,
    description: 'Learn the -pul suffix for "wearing"',
    icon: '👔',
    xpReward: 15,

    teaching: [
        {
            title: 'The -pul Suffix',
            content: 'Add **-pul** to clothing items to mean "wearing" or "to wear":',
            vocabulary: [
                { word: '-pul', translation: 'wear (suffix)' }
            ],
            examples: [
                { globasa: 'kamisa + pul = kamisapul', english: 'wear a shirt' },
                { globasa: 'sapatu + pul = sapatupul', english: 'wear shoes' }
            ],
            tip: 'CLOTHING + pul = to wear that clothing'
        },
        {
            title: 'Using -pul in Sentences',
            content: 'Examples with the -pul suffix:',
            examples: [
                { globasa: 'Mi kamisapul', english: 'I wear a shirt / I\'m wearing a shirt' },
                { globasa: 'Te sapatupul neo sapatu', english: 'He wears new shoes' },
                { globasa: 'Yu topipul?', english: 'Are you wearing a hat?' }
            ]
        }
    ],

    vocabulary: [
        { word: '-pul', translation: 'wear (suffix)' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'sapatu', 'jama', 'topi', 'labas', 'kamisa', 'pantalon',
        // Earlier
        'neo', 'meli'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match wearing words',
            pairs: [
                { word: 'kamisapul', translation: 'wear a shirt' },
                { word: 'sapatupul', translation: 'wear shoes' },
                { word: 'topipul', translation: 'wear a hat' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I wear a shirt"?',
            options: ['Mi kamisa', 'Mi kamisapul', 'Mi hare kamisa'],
            correctAnswer: 'Mi kamisapul',
            hint: '-pul means to wear'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "She wears new shoes"',
            words: ['te', 'sapatupul', 'neo', 'sapatu', 'kari'],
            correctAnswer: ['te', 'sapatupul', 'neo', 'sapatu'],
            hint: 'She + wear shoes + new + shoes'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Yu topipul?"',
            correctAnswers: ['Are you wearing a hat?', 'Do you wear a hat?'],
            hint: 'You + wear hat'
        },
        {
            type: 'translation',
            prompt: 'How do you say "wear pants"?',
            correctAnswers: ['pantalonpul'],
            hint: 'pantalon + pul'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does the -pul suffix do?',
            options: ['Creates nouns', 'Creates "wear" verbs', 'Creates adjectives'],
            correctAnswer: 'Creates "wear" verbs'
        }
    ]
};
