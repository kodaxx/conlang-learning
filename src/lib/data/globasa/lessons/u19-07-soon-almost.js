// Unit 19: Reasons & Equality - Lesson 7: Soon & Almost
// New words: watu xosu (soon), semo (almost)

export default {
    id: 'u19-07-soon-almost',
    name: 'Soon & Almost',
    unit: 19,
    unitName: 'Reasons & Equality',
    lessonNumber: 7,
    description: 'Learn "soon" and "almost"',
    icon: '⏱️',
    xpReward: 15,

    teaching: [
        {
            title: 'Soon',
            content: '**Xosu** means "soon":',
            vocabulary: [
                { word: 'xosu', translation: 'soon' }
            ],
            examples: [
                { globasa: 'Mi xa ata xosu', english: 'I will come soon' },
                { globasa: 'Te xa ergo xosu', english: 'He will work soon' }
            ]
        },
        {
            title: 'Almost',
            content: '**Semo** means "almost" or "nearly":',
            vocabulary: [
                { word: 'semo', translation: 'almost, nearly' }
            ],
            examples: [
                { globasa: 'Mi semo le fini', english: 'I almost finished' },
                { globasa: 'To sen semo bon', english: 'It\'s almost good' }
            ]
        }
    ],

    vocabulary: [
        { word: 'xosu', translation: 'soon' },
        { word: 'semo', translation: 'almost' }
    ],

    reviewVocabulary: [
        // Recent
        'baki', 'haya', 'ija',
        // Earlier
        'ata', 'ergo', 'fini', 'bon'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match adverbs',
            pairs: [
                { word: 'xosu', translation: 'soon' },
                { word: 'semo', translation: 'almost' },
                { word: 'baki', translation: 'again' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I will come soon"?',
            options: ['Mi xa ata semo', 'Mi xa ata xosu', 'Mi xa ata baki'],
            correctAnswer: 'Mi xa ata xosu',
            hint: 'xosu = soon'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I almost finished"',
            words: ['mi', 'semo', 'xosu', 'le', 'fini'],
            correctAnswer: ['mi', 'semo', 'le', 'fini'],
            hint: 'I + almost + past + finish'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te xa ergo xosu"',
            correctAnswers: ['He will work soon', 'She will work soon'],
            hint: 'He/She + will + work + soon'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "It\'s almost good"',
            correctAnswers: ['To sen semo bon'],
            hint: 'It + is + almost + good'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "semo" mean?',
            options: ['soon', 'almost', 'already'],
            correctAnswer: 'almost'
        }
    ]
};
