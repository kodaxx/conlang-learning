// Unit 12: Clothing & Numbers - Lesson 1: Clothing
// New words: labas (clothing), kamisa (shirt), pantalon (pants)

export default {
    id: 'u12-01-clothing',
    name: 'Clothing Basics',
    unit: 12,
    unitName: 'Clothing & Numbers',
    lessonNumber: 1,
    description: 'Learn basic clothing vocabulary',
    icon: '👕',
    xpReward: 15,

    teaching: [
        {
            title: 'Clothing',
            content: '**Labas** means "clothing" or "clothes":',
            vocabulary: [
                { word: 'labas', translation: 'clothing, clothes' }
            ],
            examples: [
                { globasa: 'Mi kari labas', english: 'I buy clothes' },
                { globasa: 'Labas sen neo', english: 'The clothes are new' }
            ]
        },
        {
            title: 'Shirt',
            content: '**Kamisa** means "shirt":',
            vocabulary: [
                { word: 'kamisa', translation: 'shirt' }
            ],
            examples: [
                { globasa: 'Mi hare meli kamisa', english: 'I have a beautiful shirt' }
            ]
        },
        {
            title: 'Pants',
            content: '**Pantalon** means "pants" or "trousers":',
            vocabulary: [
                { word: 'pantalon', translation: 'pants, trousers' }
            ],
            examples: [
                { globasa: 'Pantalon sen lama', english: 'The pants are old' }
            ]
        }
    ],

    vocabulary: [
        { word: 'labas', translation: 'clothing, clothes' },
        { word: 'kamisa', translation: 'shirt' },
        { word: 'pantalon', translation: 'pants' }
    ],

    reviewVocabulary: [
        // Unit 11 recent
        'kari', 'dukan', 'jiaja',
        // Earlier
        'neo', 'lama', 'meli', 'hare'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match clothing vocabulary',
            pairs: [
                { word: 'labas', translation: 'clothing' },
                { word: 'kamisa', translation: 'shirt' },
                { word: 'pantalon', translation: 'pants' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "labas" mean?',
            options: ['shoes', 'clothing', 'shirt'],
            correctAnswer: 'clothing'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I buy clothes"',
            words: ['mi', 'kari', 'labas', 'kamisa', 'hare'],
            correctAnswer: ['mi', 'kari', 'labas'],
            hint: 'I + buy + clothes'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Labas sen neo"',
            correctAnswers: ['The clothes are new'],
            hint: 'Clothes + is + new'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The pants are old"',
            correctAnswers: ['Pantalon sen lama'],
            hint: 'Pants + is + old'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is "kamisa"?',
            options: ['pants', 'shirt', 'shoes'],
            correctAnswer: 'shirt'
        }
    ]
};
