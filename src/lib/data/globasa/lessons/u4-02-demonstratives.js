// Unit 4: Descriptions - Lesson 2: Demonstratives
// New words: hin, den (2 words)
// Concept: This/that, using with pronouns
// Reviews: Units 1-4

export default {
    id: 'u4-02-demonstratives',
    name: 'This & That',
    unit: 4,
    unitName: 'Descriptions',
    lessonNumber: 2,
    description: 'Learn to point things out with "this" and "that"!',
    icon: '👆',
    xpReward: 20,

    teaching: [
        {
            title: 'Hin - This/These',
            content: '**Hin** means "this" or "these". It must be followed by a noun or pronoun!',
            examples: [
                { globasa: 'hin kitabu', english: 'this book' },
                { globasa: 'hin pingo', english: 'this apple' }
            ],
            tip: 'Hin never stands alone - always add a noun after it'
        },
        {
            title: 'Den - That/Those',
            content: '**Den** means "that" or "those". Same rule - must be followed by a noun!',
            examples: [
                { globasa: 'den bwaw', english: 'that dog' },
                { globasa: 'den filme', english: 'that movie' }
            ]
        },
        {
            title: 'With Sen',
            content: 'Combine hin/den with sen to describe things!',
            examples: [
                { globasa: 'Hin kitabu sen bon', english: 'This book is good' },
                { globasa: 'Den piu sen day', english: 'That bird is big' }
            ]
        }
    ],

    vocabulary: [
        { word: 'hin', translation: 'this, these', phonetic: 'heen' },
        { word: 'den', translation: 'that, those', phonetic: 'den' }
    ],

    reviewVocabulary: ['ji', 'sen', 'te', 'kitabu', 'pingo', 'bwaw', 'piu'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "hin" mean?',
            options: ['that', 'this', 'which', 'what'],
            correctAnswer: 'this',
            hint: 'Something close to you'
        },
        {
            type: 'translation',
            prompt: 'Translate: "hin kitabu"',
            correctAnswers: ['this book', 'these books'],
            hint: 'hin = this, kitabu = book'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "that dog"',
            words: ['den', 'bwaw', 'hin', 'myaw'],
            correctAnswer: ['den', 'bwaw'],
            hint: 'That + dog'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Den piu sen day"',
            correctAnswers: ['That bird is big', 'Those birds are big'],
            hint: 'den = that, piu = bird, sen = is, day = big'
        },
        {
            type: 'multiple-choice',
            prompt: 'Can "hin" or "den" stand alone without a noun?',
            options: ['Yes', 'No, they must have a noun after them'],
            correctAnswer: 'No, they must have a noun after them',
            hint: 'They always need something to point to'
        },
        // SRS Review
        {
            type: 'translation',
            prompt: '[Review] Translate: "Te sen doste"',
            correctAnswers: ['He is a friend', 'She is a friend'],
            hint: 'Third person + is + friend'
        }
    ]
};
