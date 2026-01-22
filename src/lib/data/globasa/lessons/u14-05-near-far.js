// Unit 14: Commands & Positions - Lesson 5: Near & Far
// New words: proksimo (near), teli (far)

export default {
    id: 'u14-05-near-far',
    name: 'Near & Far',
    unit: 14,
    unitName: 'Commands & Positions',
    lessonNumber: 5,
    description: 'Learn distance words: near and far',
    icon: '📍',
    xpReward: 15,

    teaching: [
        {
            title: 'Near',
            content: '**Proksimo** means "near" or "close":',
            vocabulary: [
                { word: 'proksimo', translation: 'near, close' }
            ],
            examples: [
                { globasa: 'Dukan sen proksimo', english: 'The store is near' },
                { globasa: 'Mi ogar proksimo de eskol', english: 'I live near the school' }
            ]
        },
        {
            title: 'Far',
            content: '**Teli** means "far" or "distant":',
            vocabulary: [
                { word: 'teli', translation: 'far, distant' }
            ],
            examples: [
                { globasa: 'Jabal sen teli', english: 'The mountain is far' },
                { globasa: 'Usa sen teli de Nipon', english: 'USA is far from Japan' }
            ]
        }
    ],

    vocabulary: [
        { word: 'proksimo', translation: 'near, close' },
        { word: 'teli', translation: 'far, distant' }
    ],

    reviewVocabulary: [
        // Recent
        'supra', 'pu', 'cejo', 'bulu',
        // Earlier
        'dukan', 'eskol', 'jabal', 'ogar', 'de'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match distance words',
            pairs: [
                { word: 'proksimo', translation: 'near' },
                { word: 'teli', translation: 'far' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "The store is near"?',
            options: ['Dukan sen teli', 'Dukan sen proksimo', 'Dukan sen hinloka'],
            correctAnswer: 'Dukan sen proksimo',
            hint: 'proksimo = near'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I live near the school"',
            words: ['mi', 'ogar', 'proksimo', 'de', 'eskol', 'teli'],
            correctAnswer: ['mi', 'ogar', 'proksimo', 'de', 'eskol'],
            hint: 'I + live + near + of + school'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Jabal sen teli"',
            correctAnswers: ['The mountain is far'],
            hint: 'Mountain + is + far'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "USA is far from Japan"',
            correctAnswers: ['Usa sen teli de Nipon'],
            hint: 'USA + is + far + from + Japan'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of proksimo?',
            options: ['hin', 'teli', 'den'],
            correctAnswer: 'teli',
            hint: 'near vs far'
        }
    ]
};
