// Unit 4: Descriptions - Lesson 4: Adjectives 2
// New words: meli, velosi, neo (3 words)
// Concept: More adjectives, combining with sen
// Reviews: Units 1-4

export default {
    id: 'u4-04-adjectives-2',
    name: 'Adjectives 2',
    unit: 4,
    unitName: 'Descriptions',
    lessonNumber: 4,
    description: 'Learn beautiful, fast, and new!',
    icon: '✨',
    xpReward: 20,

    teaching: [
        {
            title: 'Meli - Beautiful',
            content: '**Meli** means "beautiful" or "pretty".',
            examples: [
                { globasa: 'meli piu', english: 'beautiful bird' },
                { globasa: 'Te sen meli', english: 'He/She is beautiful' }
            ]
        },
        {
            title: 'Velosi - Fast',
            content: '**Velosi** means "fast" or "quick".',
            examples: [
                { globasa: 'velosi uma', english: 'fast horse' },
                { globasa: 'Den bwaw sen velosi', english: 'That dog is fast' }
            ]
        },
        {
            title: 'Neo - New',
            content: '**Neo** means "new".',
            examples: [
                { globasa: 'neo kitabu', english: 'new book' },
                { globasa: 'Hin sen neo', english: 'This is new' }
            ]
        }
    ],

    vocabulary: [
        { word: 'meli', translation: 'beautiful, pretty', phonetic: 'MEH-lee' },
        { word: 'velosi', translation: 'fast, quick', phonetic: 'veh-LO-see' },
        { word: 'neo', translation: 'new', phonetic: 'NEH-o' }
    ],

    reviewVocabulary: ['bon', 'day', 'bala', 'hin', 'den', 'sen', 'piu', 'uma', 'kitabu'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "meli" mean?',
            options: ['big', 'strong', 'beautiful', 'fast'],
            correctAnswer: 'beautiful',
            hint: 'Describes something pretty'
        },
        {
            type: 'translation',
            prompt: 'Translate: "velosi uma"',
            correctAnswers: ['fast horse', 'quick horse', 'a fast horse'],
            hint: 'velosi = fast, uma = horse'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "This book is new"',
            words: ['hin', 'kitabu', 'sen', 'neo', 'bon'],
            correctAnswer: ['hin', 'kitabu', 'sen', 'neo'],
            hint: 'This + book + is + new'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te sen meli"',
            correctAnswers: ['He is beautiful', 'She is beautiful', 'He/She is beautiful', 'It is beautiful', 'She is pretty', 'He is pretty'],
            hint: 'te = he/she, sen = is, meli = beautiful'
        },
        {
            type: 'translation',
            prompt: 'How do you say "new bird" in Globasa?',
            correctAnswers: ['neo piu'],
            hint: 'Adjective + noun'
        },
        // SRS Review
        {
            type: 'matching',
            prompt: '[Review] Match all adjectives',
            pairs: [
                { word: 'bon', translation: 'good' },
                { word: 'day', translation: 'big' },
                { word: 'meli', translation: 'beautiful' },
                { word: 'velosi', translation: 'fast' },
                { word: 'neo', translation: 'new' }
            ]
        }
    ]
};
