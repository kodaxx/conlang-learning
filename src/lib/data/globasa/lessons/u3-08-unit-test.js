// Unit 3: Questions & Preferences - Lesson 8: Unit Test
// Comprehensive review of all Unit 3 vocabulary and concepts

export default {
    id: 'u3-08-unit-test',
    name: 'Unit 3 Test',
    unit: 3,
    unitName: 'Questions & Preferences',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 3: Questions & Preferences!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 3 Review',
            content: 'You\'ve learned **15 new words** in Unit 3! Key vocabulary:',
            vocabulary: [
                { word: 'kam, si, no', translation: 'Questions & responses' },
                { word: 'aham, suki, lubi, vole', translation: 'Feelings & wants' },
                { word: 'na', translation: 'Infinitive marker' },
                { word: 'oko, ore', translation: 'Senses (see, hear)' },
                { word: 'glu, sui, kafe, cay, jusu', translation: 'Drinks' },
                { word: 'filme, musika, bete', translation: 'Entertainment & family' }
            ]
        },
        {
            title: 'Key Concepts',
            content: '• **kam** turns statements into questions\n• **no** negates verbs (put before verb)\n• **na** links two verbs (want TO eat)\n• Many words work as both nouns AND verbs',
            tip: 'These patterns apply to all Globasa sentences!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        // Unit 3
        'kam', 'si', 'no', 'aham', 'suki', 'lubi', 'vole', 'na',
        'oko', 'ore', 'glu', 'sui', 'kafe', 'cay', 'jusu',
        'filme', 'musika', 'bete',
        // Earlier units
        'mi', 'yu', 'yam', 'hare', 'danse', 'bwaw', 'nini', 'mama'
    ],

    exercises: [
        // Questions vocabulary
        {
            type: 'matching',
            prompt: 'Match question words',
            pairs: [
                { word: 'kam', translation: 'question particle' },
                { word: 'si', translation: 'yes' },
                { word: 'no', translation: 'no/not' }
            ]
        },
        // Feelings
        {
            type: 'matching',
            prompt: 'Match feelings',
            pairs: [
                { word: 'aham', translation: 'understand' },
                { word: 'suki', translation: 'like' },
                { word: 'lubi', translation: 'love' },
                { word: 'vole', translation: 'want' }
            ]
        },
        // Drinks
        {
            type: 'matching',
            prompt: 'Match drinks',
            pairs: [
                { word: 'sui', translation: 'water' },
                { word: 'kafe', translation: 'coffee' },
                { word: 'cay', translation: 'tea' },
                { word: 'jusu', translation: 'juice' }
            ]
        },
        // Question formation
        {
            type: 'translation',
            prompt: 'Translate: "Kam yu suki kafe?"',
            correctAnswers: ['Do you like coffee?'],
            hint: 'Question + you + like + coffee'
        },
        // Negation
        {
            type: 'translation',
            prompt: 'Translate: "Mi no aham"',
            correctAnswers: ['I don\'t understand', 'I do not understand'],
            hint: 'I + not + understand'
        },
        // Infinitives
        {
            type: 'word-bank',
            prompt: 'Build: "I want to watch a movie"',
            words: ['mi', 'vole', 'na', 'oko', 'filme', 'suki', 'ore'],
            correctAnswer: ['mi', 'vole', 'na', 'oko', 'filme'],
            hint: 'I + want + to + watch + movie'
        },
        // Mixed
        {
            type: 'translation',
            prompt: 'Translate: "Kam nini vole na glu jusu?"',
            correctAnswers: ['Does the child want to drink juice?', 'Does the kid want to drink juice?'],
            hint: 'Question + child + want + to + drink + juice'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "You listen to music"',
            correctAnswers: ['Yu ore musika', 'yu ore musika'],
            hint: 'You + hear/listen + music'
        },
        // Senses
        {
            type: 'matching',
            prompt: 'Match senses',
            pairs: [
                { word: 'oko', translation: 'eye / see' },
                { word: 'ore', translation: 'ear / hear' }
            ]
        },
        // Integration
        {
            type: 'translation',
            prompt: 'Translate: "Si, mi lubi na ore musika"',
            correctAnswers: ['Yes, I love to listen to music', 'Yes, I love listening to music'],
            hint: 'Yes + I + love + to + listen + music'
        },
        // Cumulative review
        {
            type: 'word-bank',
            prompt: 'Build: "The dog drinks water"',
            words: ['bwaw', 'glu', 'sui', 'yam', 'roti'],
            correctAnswer: ['bwaw', 'glu', 'sui'],
            hint: 'Dog + drink + water'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which sentence means "I don\'t want to eat"?',
            options: ['Mi vole na yam', 'Mi no vole na yam', 'Mi vole na no yam', 'No mi vole na yam'],
            correctAnswer: 'Mi no vole na yam',
            hint: 'Put "no" before the main verb "vole"'
        }
    ]
};
