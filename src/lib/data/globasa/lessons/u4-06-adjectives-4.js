// Unit 4: Descriptions - Lesson 6: Adjectives 4
// New words: lungo, gao (2 words)
// Concept: Size adjectives
// Reviews: Units 1-4

export default {
    id: 'u4-06-adjectives-4',
    name: 'Adjectives 4',
    unit: 4,
    unitName: 'Descriptions',
    lessonNumber: 6,
    description: 'Learn long and tall!',
    icon: '📏',
    xpReward: 15,

    teaching: [
        {
            title: 'Lungo - Long',
            content: '**Lungo** means "long" (in length or duration).',
            examples: [
                { globasa: 'lungo filme', english: 'long movie' },
                { globasa: 'Hin filme sen lungo', english: 'This movie is long' }
            ]
        },
        {
            title: 'Gao - Tall/High',
            content: '**Gao** means "tall" (for people) or "high" (for things).',
            examples: [
                { globasa: 'gao manixu', english: 'tall man' },
                { globasa: 'Te sen gao', english: 'He/She is tall' }
            ],
            tip: 'Preview: manixu (man) comes in the next lesson!'
        }
    ],

    vocabulary: [
        { word: 'lungo', translation: 'long', phonetic: 'LOON-go' },
        { word: 'gao', translation: 'tall, high', phonetic: 'gao' }
    ],

    reviewVocabulary: ['juni', 'hox', 'safe', 'day', 'meli', 'filme', 'te', 'hin'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "lungo" mean?',
            options: ['short', 'tall', 'long', 'wide'],
            correctAnswer: 'long',
            hint: 'Describes length or duration'
        },
        {
            type: 'translation',
            prompt: 'Translate: "lungo filme"',
            correctAnswers: ['long movie', 'long film', 'a long movie'],
            hint: 'lungo = long, filme = movie'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "He is tall"',
            words: ['te', 'sen', 'gao', 'lungo', 'mi'],
            correctAnswer: ['te', 'sen', 'gao'],
            hint: 'He + is + tall'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Hin filme sen lungo"',
            correctAnswers: ['This movie is long', 'This film is long'],
            hint: 'This + movie + is + long'
        },
        // SRS Review
        {
            type: 'multiple-choice',
            prompt: '[Review] What does "day" mean?',
            options: ['small', 'big', 'long', 'tall'],
            correctAnswer: 'big',
            hint: 'From Lesson 4.3'
        },
        {
            type: 'matching',
            prompt: 'Match size adjectives',
            pairs: [
                { word: 'day', translation: 'big' },
                { word: 'lungo', translation: 'long' },
                { word: 'gao', translation: 'tall/high' }
            ]
        }
    ]
};
