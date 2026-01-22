// Unit 3: Questions & Preferences - Lesson 2: Feelings
// New words: aham, suki, lubi (3 words)
// Concept: Expressing understanding, liking, and loving
// Reviews: Units 1-3

export default {
    id: 'u3-02-feelings',
    name: 'Feelings',
    unit: 3,
    unitName: 'Questions & Preferences',
    lessonNumber: 2,
    description: 'Express what you understand, like, and love!',
    icon: '❤️',
    xpReward: 20,

    teaching: [
        {
            title: 'Aham - Understand',
            content: '**Aham** means "understand". Essential for language learning!',
            examples: [
                { globasa: 'Mi aham', english: 'I understand' },
                { globasa: 'Kam yu aham?', english: 'Do you understand?' },
                { globasa: 'Mi no aham', english: 'I don\'t understand' }
            ]
        },
        {
            title: 'Suki - Like',
            content: '**Suki** means "like". Use it to express preferences!',
            examples: [
                { globasa: 'Mi suki pingo', english: 'I like apples' },
                { globasa: 'Yu suki musika', english: 'You like music' }
            ]
        },
        {
            title: 'Lubi - Love',
            content: '**Lubi** means "love". Stronger than suki!',
            examples: [
                { globasa: 'Mi lubi yu', english: 'I love you' },
                { globasa: 'Nini lubi mama', english: 'The child loves mom' }
            ]
        }
    ],

    vocabulary: [
        { word: 'aham', translation: 'understand', phonetic: 'A-ham' },
        { word: 'suki', translation: 'like', phonetic: 'SOO-kee' },
        { word: 'lubi', translation: 'love', phonetic: 'LOO-bee' }
    ],

    reviewVocabulary: ['kam', 'si', 'no', 'mi', 'yu', 'pingo', 'mama', 'nini'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "aham" mean?',
            options: ['like', 'love', 'understand', 'want'],
            correctAnswer: 'understand',
            hint: 'What you do when something makes sense'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi suki banana"',
            correctAnswers: ['I like bananas', 'I like banana', 'I like a banana'],
            hint: 'mi = I, suki = like, banana = banana'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which word expresses STRONGER affection?',
            options: ['suki', 'lubi', 'aham', 'hare'],
            correctAnswer: 'lubi',
            hint: 'Think: like vs love'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Do you understand?"',
            words: ['kam', 'yu', 'aham', 'mi', 'si'],
            correctAnswer: ['kam', 'yu', 'aham'],
            hint: 'Question + you + understand'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi lubi yu"',
            correctAnswers: ['I love you'],
            hint: 'A classic phrase in any language!'
        },
        // SRS Review with negation
        {
            type: 'translation',
            prompt: 'Translate: "Mi no aham"',
            correctAnswers: ['I don\'t understand', 'I do not understand'],
            hint: 'From Lesson 3.1: no negates the verb'
        }
    ]
};
