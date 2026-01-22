// Unit 4: Descriptions - Lesson 5: Adjectives 3
// New words: juni, hox, safe (3 words)
// Concept: More descriptive adjectives
// Reviews: Units 1-4

export default {
    id: 'u4-05-adjectives-3',
    name: 'Adjectives 3',
    unit: 4,
    unitName: 'Descriptions',
    lessonNumber: 5,
    description: 'Learn young, happy, and clean!',
    icon: '😊',
    xpReward: 20,

    teaching: [
        {
            title: 'Juni - Young',
            content: '**Juni** means "young". The opposite of old (for people).',
            examples: [
                { globasa: 'juni nini', english: 'young child' },
                { globasa: 'Te sen juni', english: 'He/She is young' }
            ]
        },
        {
            title: 'Hox - Happy',
            content: '**Hox** means "happy" or "glad".',
            examples: [
                { globasa: 'hox nini', english: 'happy child' },
                { globasa: 'Mi sen hox', english: 'I am happy' }
            ]
        },
        {
            title: 'Safe - Clean',
            content: '**Safe** means "clean".',
            examples: [
                { globasa: 'safe myaw', english: 'clean cat' },
                { globasa: 'Hin kamer sen safe', english: 'This room is clean' }
            ],
            tip: 'Coming soon: "kamer" (room) in Unit 5!'
        }
    ],

    vocabulary: [
        { word: 'juni', translation: 'young', phonetic: 'JOO-nee' },
        { word: 'hox', translation: 'happy, glad', phonetic: 'hoksh' },
        { word: 'safe', translation: 'clean', phonetic: 'SA-feh' }
    ],

    reviewVocabulary: ['meli', 'velosi', 'neo', 'bon', 'day', 'nini', 'myaw', 'mi', 'te'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "juni" mean?',
            options: ['old', 'young', 'tall', 'short'],
            correctAnswer: 'young',
            hint: 'Opposite of old'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi sen hox"',
            correctAnswers: ['I am happy', 'I\'m happy', 'I am glad'],
            hint: 'mi = I, sen = am, hox = happy'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "clean cat"',
            words: ['safe', 'myaw', 'meli', 'bwaw'],
            correctAnswer: ['safe', 'myaw'],
            hint: 'Clean + cat'
        },
        {
            type: 'translation',
            prompt: 'Translate: "juni nini"',
            correctAnswers: ['young child', 'young kid', 'a young child'],
            hint: 'juni = young, nini = child'
        },
        {
            type: 'translation',
            prompt: 'How do you say "He is happy" in Globasa?',
            correctAnswers: ['Te sen hox'],
            hint: 'He + is + happy'
        },
        // SRS Review
        {
            type: 'matching',
            prompt: '[Review] Match more adjectives',
            pairs: [
                { word: 'juni', translation: 'young' },
                { word: 'hox', translation: 'happy' },
                { word: 'safe', translation: 'clean' },
                { word: 'velosi', translation: 'fast' }
            ]
        }
    ]
};
