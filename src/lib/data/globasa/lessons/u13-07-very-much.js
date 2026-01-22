// Unit 13: Modals & Superlatives - Lesson 7: Very Much
// New words: daymo (very much, extremely)

export default {
    id: 'u13-07-very-much',
    name: 'Very Much',
    unit: 13,
    unitName: 'Modals & Superlatives',
    lessonNumber: 7,
    description: 'Learn to intensify with "daymo"',
    icon: '🔥',
    xpReward: 15,

    teaching: [
        {
            title: 'Very Much / Extremely',
            content: '**Daymo** means "very much" or "extremely":',
            vocabulary: [
                { word: 'daymo', translation: 'very much, extremely' }
            ],
            examples: [
                { globasa: 'Mi daymo suki to', english: 'I like it very much' },
                { globasa: 'Te sen daymo bala', english: 'He is extremely strong' },
                { globasa: 'Hin sen daymo bon!', english: 'This is very good!' }
            ],
            tip: 'daymo intensifies both verbs and adjectives.'
        },
        {
            title: 'Position of daymo',
            content: 'daymo can come before verbs or adjectives:',
            examples: [
                { globasa: 'Mi daymo lubi yu', english: 'I love you very much' },
                { globasa: 'Filme sen daymo meli', english: 'The movie is very beautiful' }
            ]
        }
    ],

    vocabulary: [
        { word: 'daymo', translation: 'very much, extremely' }
    ],

    reviewVocabulary: [
        // Recent
        'kepul', 'ingay', 'maxim',
        // Earlier
        'suki', 'lubi', 'bala', 'bon', 'meli'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match degree words',
            pairs: [
                { word: 'daymo', translation: 'very much' },
                { word: 'maxim', translation: 'most' },
                { word: 'maxmo', translation: 'more' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I like it very much"?',
            options: ['Mi suki to daymo', 'Mi daymo suki to', 'Daymo mi suki to'],
            correctAnswer: 'Mi daymo suki to',
            hint: 'Subject + daymo + verb'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "He is extremely strong"',
            words: ['te', 'sen', 'daymo', 'bala', 'maxim'],
            correctAnswer: ['te', 'sen', 'daymo', 'bala'],
            hint: 'He + is + very + strong'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Hin sen daymo bon!"',
            correctAnswers: ['This is very good!', 'This is extremely good!'],
            hint: 'This + is + very + good'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I love you very much"',
            correctAnswers: ['Mi daymo lubi yu'],
            hint: 'I + very + love + you'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "daymo" intensify?',
            options: ['Only verbs', 'Only adjectives', 'Both verbs and adjectives'],
            correctAnswer: 'Both verbs and adjectives'
        }
    ]
};
