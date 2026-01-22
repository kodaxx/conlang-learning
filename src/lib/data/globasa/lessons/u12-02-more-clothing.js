// Unit 12: Clothing & Numbers - Lesson 2: More Clothing
// New words: sapatu (shoes), jama (jacket), topi (hat)

export default {
    id: 'u12-02-more-clothing',
    name: 'More Clothing',
    unit: 12,
    unitName: 'Clothing & Numbers',
    lessonNumber: 2,
    description: 'Learn more clothing vocabulary',
    icon: '👟',
    xpReward: 15,

    teaching: [
        {
            title: 'Shoes',
            content: '**Sapatu** means "shoes":',
            vocabulary: [
                { word: 'sapatu', translation: 'shoes' }
            ],
            examples: [
                { globasa: 'Mi kari neo sapatu', english: 'I buy new shoes' },
                { globasa: 'Sapatu sen kotor', english: 'The shoes are dirty' }
            ]
        },
        {
            title: 'Jacket',
            content: '**Jama** means "jacket" or "coat":',
            vocabulary: [
                { word: 'jama', translation: 'jacket, coat' }
            ],
            examples: [
                { globasa: 'Mi hare jama', english: 'I have a jacket' }
            ]
        },
        {
            title: 'Hat',
            content: '**Topi** means "hat":',
            vocabulary: [
                { word: 'topi', translation: 'hat' }
            ],
            examples: [
                { globasa: 'Topi sen meli', english: 'The hat is beautiful' }
            ]
        }
    ],

    vocabulary: [
        { word: 'sapatu', translation: 'shoes' },
        { word: 'jama', translation: 'jacket, coat' },
        { word: 'topi', translation: 'hat' }
    ],

    reviewVocabulary: [
        // Lesson 12.1 recent
        'labas', 'kamisa', 'pantalon',
        // Earlier
        'neo', 'kotor', 'meli', 'hare', 'kari'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match clothing vocabulary',
            pairs: [
                { word: 'sapatu', translation: 'shoes' },
                { word: 'jama', translation: 'jacket' },
                { word: 'topi', translation: 'hat' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What are "sapatu"?',
            options: ['hat', 'shoes', 'gloves'],
            correctAnswer: 'shoes'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I buy new shoes"',
            words: ['mi', 'kari', 'neo', 'sapatu', 'labas'],
            correctAnswer: ['mi', 'kari', 'neo', 'sapatu'],
            hint: 'I + buy + new + shoes'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Sapatu sen kotor"',
            correctAnswers: ['The shoes are dirty'],
            hint: 'Shoes + is + dirty'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The hat is beautiful"',
            correctAnswers: ['Topi sen meli'],
            hint: 'Hat + is + beautiful'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which is worn on the head?',
            options: ['sapatu', 'jama', 'topi'],
            correctAnswer: 'topi'
        }
    ]
};
