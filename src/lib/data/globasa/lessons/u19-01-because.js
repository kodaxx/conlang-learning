// Unit 19: Reasons & Equality - Lesson 1: Because
// New words: kos (because of), koski (because)

export default {
    id: 'u19-01-because',
    name: 'Because',
    unit: 19,
    unitName: 'Reasons & Equality',
    lessonNumber: 1,
    description: 'Learn to express reasons with "because"',
    icon: '💡',
    xpReward: 15,

    teaching: [
        {
            title: 'Because Of',
            content: '**Kos** means "because of" (+ noun):',
            vocabulary: [
                { word: 'kos', translation: 'because of' }
            ],
            examples: [
                { globasa: 'Kos barix, mi no xa idi', english: 'Because of rain, I will not go' },
                { globasa: 'Te sen hox kos yu', english: 'He is happy because of you' }
            ]
        },
        {
            title: 'Because',
            content: '**Koski** means "because" (+ clause):',
            vocabulary: [
                { word: 'koski', translation: 'because (+ clause)' }
            ],
            examples: [
                { globasa: 'Mi no xa idi koski hay barix', english: 'I will not go because it\'s raining' },
                { globasa: 'Te le ata koski te vole oko yu', english: 'He came because he wants to see you' }
            ],
            tip: 'kos + noun, koski + clause!'
        }
    ],

    vocabulary: [
        { word: 'kos', translation: 'because of' },
        { word: 'koski', translation: 'because' }
    ],

    reviewVocabulary: [
        // Unit 18 recent
        'kewatu', 'posdin', 'satu',
        // Earlier
        'barix', 'hox', 'hay', 'oko', 'vole'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match vocabulary',
            pairs: [
                { word: 'kos', translation: 'because of' },
                { word: 'koski', translation: 'because' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'Which takes a clause (full sentence)?',
            options: ['kos', 'koski', 'Both'],
            correctAnswer: 'koski',
            hint: 'kos + noun, koski + clause'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Because of rain, I will not go"',
            words: ['kos', 'koski', 'barix', 'mi', 'no', 'xa', 'idi'],
            correctAnswer: ['kos', 'barix', 'mi', 'no', 'xa', 'idi'],
            hint: 'Because of + rain + I + not + will + go'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te sen hox kos yu"',
            correctAnswers: ['He is happy because of you', 'She is happy because of you'],
            hint: 'He/She + is + happy + because of + you'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I will not go because it\'s raining"',
            correctAnswers: ['Mi no xa idi koski hay barix'],
            hint: 'I + not + will + go + because + rain'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between kos and koski?',
            options: [
                'kos + noun, koski + clause',
                'kos + clause, koski + noun',
                'They are the same'
            ],
            correctAnswer: 'kos + noun, koski + clause'
        }
    ]
};
