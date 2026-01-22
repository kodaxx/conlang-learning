// Unit 17: Recipients & Clauses - Lesson 4: Without
// New words: sin (without)

export default {
    id: 'u17-04-without',
    name: 'Without',
    unit: 17,
    unitName: 'Recipients & Clauses',
    lessonNumber: 4,
    description: 'Learn to express "without"',
    icon: '🚫',
    xpReward: 15,

    teaching: [
        {
            title: 'Without',
            content: '**Sin** means "without":',
            vocabulary: [
                { word: 'sin', translation: 'without' }
            ],
            examples: [
                { globasa: 'Mi glu kafe sin suga', english: 'I drink coffee without sugar' },
                { globasa: 'Te idi sin mi', english: 'He goes without me' },
                { globasa: 'Sin problema!', english: 'No problem! (Without problem)' }
            ],
            tip: 'sin is the opposite of ton (with).'
        },
        {
            title: 'Compare sin and ton',
            content: 'Opposites:',
            examples: [
                { globasa: 'ton mi', english: 'with me' },
                { globasa: 'sin mi', english: 'without me' }
            ]
        }
    ],

    vocabulary: [
        { word: 'sin', translation: 'without' }
    ],

    reviewVocabulary: [
        // Recent
        'xana', 'fikir', 'ki',
        // Earlier
        'ton', 'glu', 'kafe', 'idi'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match opposites',
            pairs: [
                { word: 'sin', translation: 'without' },
                { word: 'ton', translation: 'with' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of "ton"?',
            options: ['de', 'sin', 'cel'],
            correctAnswer: 'sin',
            hint: 'with vs without'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I drink coffee without sugar"',
            words: ['mi', 'glu', 'kafe', 'sin', 'ton', 'suga'],
            correctAnswer: ['mi', 'glu', 'kafe', 'sin', 'suga'],
            hint: 'I + drink + coffee + without + sugar'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te idi sin mi"',
            correctAnswers: ['He goes without me', 'She goes without me'],
            hint: 'He/She + go + without + me'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "No problem!"',
            correctAnswers: ['Sin problema!'],
            hint: 'Without + problem'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "sin" mean?',
            options: ['with', 'without', 'for'],
            correctAnswer: 'without'
        }
    ]
};
