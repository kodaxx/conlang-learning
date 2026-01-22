// Unit 3: Questions & Preferences - Lesson 3: Wants & Infinitives
// New words: vole, na (2 words)
// Concept: The infinitive marker "na"
// Reviews: Units 1-3

export default {
    id: 'u3-03-wants',
    name: 'Wants & Infinitives',
    unit: 3,
    unitName: 'Questions & Preferences',
    lessonNumber: 3,
    description: 'Learn to express what you want to do!',
    icon: '🎯',
    xpReward: 25,

    teaching: [
        {
            title: 'Vole - Want',
            content: '**Vole** means "want". Use it to express your desires!',
            examples: [
                { globasa: 'Mi vole pingo', english: 'I want an apple' },
                { globasa: 'Yu vole roti', english: 'You want bread' }
            ]
        },
        {
            title: 'Na - To (Infinitive)',
            content: '**Na** is the infinitive marker. Use it between two verbs, like "want TO eat".',
            examples: [
                { globasa: 'Mi vole na yam', english: 'I want to eat' },
                { globasa: 'Yu vole na danse', english: 'You want to dance' }
            ],
            tip: 'Na always comes between two verbs!'
        },
        {
            title: 'Combining Verbs',
            content: 'Now you can say what you want to do!',
            examples: [
                { globasa: 'Mi vole na yam pingo', english: 'I want to eat an apple' },
                { globasa: 'Nini vole na yuxi', english: 'The child wants to play' },
                { globasa: 'Kam yu vole na doxo?', english: 'Do you want to read?' }
            ]
        }
    ],

    vocabulary: [
        { word: 'vole', translation: 'want', phonetic: 'VO-leh' },
        { word: 'na', translation: 'to (infinitive marker)', phonetic: 'na' }
    ],

    reviewVocabulary: ['suki', 'lubi', 'yam', 'danse', 'doxo', 'yuxi', 'pingo', 'kam'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "vole" mean?',
            options: ['need', 'want', 'have', 'like'],
            correctAnswer: 'want',
            hint: 'Expressing desire'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi vole na yam"',
            correctAnswers: ['I want to eat'],
            hint: 'mi = I, vole = want, na = to, yam = eat'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "You want to dance"',
            words: ['yu', 'vole', 'na', 'danse', 'mi', 'yam'],
            correctAnswer: ['yu', 'vole', 'na', 'danse'],
            hint: 'Subject + want + to + verb'
        },
        {
            type: 'multiple-choice',
            prompt: 'When do you use "na"?',
            options: ['Before nouns', 'After nouns', 'Between two verbs', 'At the end of sentences'],
            correctAnswer: 'Between two verbs',
            hint: 'Like "to" in "want to eat"'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Kam yu vole na doxo?"',
            correctAnswers: ['Do you want to read?'],
            hint: 'Question + you + want + to + read'
        },
        // SRS Review
        {
            type: 'translation',
            prompt: '[Review] Translate: "Mi suki na lala"',
            correctAnswers: ['I like to sing'],
            hint: 'Like + to + sing'
        }
    ]
};
