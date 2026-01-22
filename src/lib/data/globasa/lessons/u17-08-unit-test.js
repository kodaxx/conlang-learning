// Unit 17: Recipients & Clauses - Lesson 8: Unit Test
// Comprehensive review of all Unit 17 vocabulary and concepts

export default {
    id: 'u17-08-unit-test',
    name: 'Unit 17 Test',
    unit: 17,
    unitName: 'Recipients & Clauses',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 17: Recipients & Clauses!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 17 Review',
            content: 'You\'ve learned **9 new words/affixes** in Unit 17!',
            vocabulary: [
                { word: 'tas, ki, sin', translation: 'For, That (clause), Without' },
                { word: 'xana, fikir', translation: 'Know, Think' },
                { word: 'kredi, asha', translation: 'Believe, Hope' },
                { word: 'ban-, -kal', translation: 'Some (prefix), Possible (suffix)' }
            ]
        },
        {
            title: 'Key Concepts',
            content: '• **tas** = for (recipient)\\n• **ki** = that (clause marker)\\n• **ban-** = some (bante, banto)\\n• **-kal** = possible/able',
            tip: 'You can now express complex thoughts!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        'tas', 'ki', 'sin', 'xana', 'fikir', 'kredi', 'asha', 'ban-', '-kal'
    ],

    exercises: [
        // Prepositions
        {
            type: 'matching',
            prompt: 'Match prepositions',
            pairs: [
                { word: 'tas', translation: 'for (recipient)' },
                { word: 'cel', translation: 'to (destination)' },
                { word: 'sin', translation: 'without' }
            ]
        },
        // Mental verbs
        {
            type: 'matching',
            prompt: 'Match mental verbs',
            pairs: [
                { word: 'xana', translation: 'know' },
                { word: 'fikir', translation: 'think' },
                { word: 'kredi', translation: 'believe' },
                { word: 'asha', translation: 'hope' }
            ]
        },
        // Correlatives
        {
            type: 'matching',
            prompt: 'Match ban- words',
            pairs: [
                { word: 'bante', translation: 'someone' },
                { word: 'banto', translation: 'something' },
                { word: 'banloka', translation: 'somewhere' }
            ]
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "This is for you"',
            words: ['hin', 'sen', 'tas', 'cel', 'yu'],
            correctAnswer: ['hin', 'sen', 'tas', 'yu'],
            hint: 'This + is + for + you'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I know that he will come"',
            words: ['mi', 'xana', 'fikir', 'ki', 'te', 'xa', 'ata'],
            correctAnswer: ['mi', 'xana', 'ki', 'te', 'xa', 'ata'],
            hint: 'I + know + that + he + will + come'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Mi glu kafe sin suga"',
            correctAnswers: ['I drink coffee without sugar'],
            hint: 'I + drink + coffee + without + sugar'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Bante le ata"',
            correctAnswers: ['Someone came'],
            hint: 'Someone + past + come'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I believe that it is true"',
            correctAnswers: ['Mi kredi ki to sen vera'],
            hint: 'I + believe + that + it + is + true'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'What does "ki" introduce?',
            options: ['A question', 'A subordinate clause', 'A command'],
            correctAnswer: 'A subordinate clause'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does the -kal suffix create?',
            options: ['Nouns', 'Adjectives meaning "able to be..."', 'Verbs'],
            correctAnswer: 'Adjectives meaning "able to be..."'
        }
    ]
};
