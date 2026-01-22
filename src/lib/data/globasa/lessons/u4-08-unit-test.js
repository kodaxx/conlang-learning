// Unit 4: Descriptions - Lesson 8: Unit Test
// Comprehensive review of all Unit 4 vocabulary and concepts

export default {
    id: 'u4-08-unit-test',
    name: 'Unit 4 Test',
    unit: 4,
    unitName: 'Descriptions',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 4: Descriptions!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 4 Review',
            content: 'You\'ve learned **16 new words** in Unit 4! Key vocabulary:',
            vocabulary: [
                { word: 'ji, sen, te', translation: 'And, be, he/she' },
                { word: 'hin, den', translation: 'This, that' },
                { word: 'bon, day, bala, meli, velosi, neo', translation: 'Adjectives 1-2' },
                { word: 'juni, hox, safe, lungo, gao', translation: 'Adjectives 3-4' },
                { word: 'ixu, femixu, manixu', translation: 'Adults & gender' }
            ]
        },
        {
            title: 'Key Concepts',
            content: '• Adjectives go **before** nouns: bon kitabu\n• **sen** links subject to descriptions: Te sen bon\n• **hin/den** need a noun after them\n• **fem-/man-** prefixes specify gender',
            tip: 'You now know how to describe almost anything!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        // Unit 4
        'ji', 'sen', 'te', 'hin', 'den',
        'bon', 'day', 'bala', 'meli', 'velosi', 'neo',
        'juni', 'hox', 'safe', 'lungo', 'gao',
        'ixu', 'femixu', 'manixu',
        // Earlier units
        'mi', 'yu', 'nini', 'kitabu', 'filme', 'piu', 'uma'
    ],

    exercises: [
        // Connector and pronouns
        {
            type: 'matching',
            prompt: 'Match pronouns and connectors',
            pairs: [
                { word: 'mi', translation: 'I/me' },
                { word: 'yu', translation: 'you' },
                { word: 'te', translation: 'he/she/it' },
                { word: 'ji', translation: 'and' }
            ]
        },
        // Demonstratives
        {
            type: 'matching',
            prompt: 'Match demonstratives',
            pairs: [
                { word: 'hin', translation: 'this/these' },
                { word: 'den', translation: 'that/those' }
            ]
        },
        // Adjectives
        {
            type: 'matching',
            prompt: 'Match adjectives',
            pairs: [
                { word: 'bon', translation: 'good' },
                { word: 'day', translation: 'big' },
                { word: 'meli', translation: 'beautiful' },
                { word: 'juni', translation: 'young' },
                { word: 'gao', translation: 'tall' }
            ]
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "This book is good"',
            words: ['hin', 'kitabu', 'sen', 'bon', 'meli'],
            correctAnswer: ['hin', 'kitabu', 'sen', 'bon'],
            hint: 'This + book + is + good'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "beautiful woman"',
            words: ['meli', 'femixu', 'manixu', 'gao'],
            correctAnswer: ['meli', 'femixu'],
            hint: 'Adjective + noun'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Den uma sen day ji bala"',
            correctAnswers: ['That horse is big and strong'],
            hint: 'That + horse + is + big + and + strong'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te sen juni ji hox"',
            correctAnswers: ['He is young and happy', 'She is young and happy', 'He/She is young and happy'],
            hint: 'He/she + is + young + and + happy'
        },
        // Gender
        {
            type: 'matching',
            prompt: 'Match adult/gender words',
            pairs: [
                { word: 'ixu', translation: 'adult' },
                { word: 'femixu', translation: 'woman' },
                { word: 'manixu', translation: 'man' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "girl" using the prefix system?',
            options: ['femixu', 'mannini', 'femnini', 'junifem'],
            correctAnswer: 'femnini',
            hint: 'Female prefix + child'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'Where do adjectives go in Globasa?',
            options: ['After the noun', 'Before the noun', 'Either position'],
            correctAnswer: 'Before the noun',
            hint: 'Same as English!'
        },
        // Integration with earlier units
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I am happy"',
            correctAnswers: ['Mi sen hox'],
            hint: 'I + am + happy'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The tall man is strong"',
            correctAnswers: ['Gao manixu sen bala', 'Den gao manixu sen bala'],
            hint: 'Tall + man + is + strong'
        }
    ]
};
