// Unit 12: Clothing & Numbers - Lesson 8: Unit Test
// Comprehensive review of all Unit 12 vocabulary and concepts

export default {
    id: 'u12-08-unit-test',
    name: 'Unit 12 Test',
    unit: 12,
    unitName: 'Clothing & Numbers',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 12: Clothing & Numbers!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 12 Review',
            content: 'You\'ve learned **10 new words** plus number patterns in Unit 12!',
            vocabulary: [
                { word: 'labas, kamisa, pantalon', translation: 'Clothing, Shirt, Pants' },
                { word: 'sapatu, jama, topi', translation: 'Shoes, Jacket, Hat' },
                { word: '-pul', translation: 'Wear suffix' },
                { word: 'renki', translation: 'Color' }
            ]
        },
        {
            title: 'Number System',
            content: '• **des X** = teens (des un = 11)\\n• **Xdes** = tens (duades = 20)\\n• **Xdes Y** = compound (duades un = 21)',
            tip: 'You can now count from 1 to 99!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        'labas', 'kamisa', 'pantalon', 'sapatu', 'jama', 'topi', '-pul', 'renki',
        'des un', 'duades', 'tigades care'
    ],

    exercises: [
        // Clothing
        {
            type: 'matching',
            prompt: 'Match clothing',
            pairs: [
                { word: 'kamisa', translation: 'shirt' },
                { word: 'pantalon', translation: 'pants' },
                { word: 'sapatu', translation: 'shoes' },
                { word: 'topi', translation: 'hat' }
            ]
        },
        // Numbers teens
        {
            type: 'matching',
            prompt: 'Match teen numbers',
            pairs: [
                { word: 'des un', translation: '11' },
                { word: 'des lima', translation: '15' },
                { word: 'des nue', translation: '19' }
            ]
        },
        // Numbers tens
        {
            type: 'matching',
            prompt: 'Match tens',
            pairs: [
                { word: 'duades', translation: '20' },
                { word: 'limades', translation: '50' },
                { word: 'nuedes', translation: '90' }
            ]
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "I wear a shirt"',
            words: ['mi', 'kamisapul', 'kamisa', 'hare', 'kari'],
            correctAnswer: ['mi', 'kamisapul'],
            hint: 'I + wear-shirt'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The price is 25"',
            words: ['jiaja', 'sen', 'duades', 'lima', 'dua'],
            correctAnswer: ['jiaja', 'sen', 'duades', 'lima'],
            hint: 'Price + is + twenty + five'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Mi kari neo sapatu"',
            correctAnswers: ['I buy new shoes'],
            hint: 'I + buy + new + shoes'
        },
        {
            type: 'translation',
            prompt: 'What is "tigades sabe"?',
            correctAnswers: ['37', 'thirty-seven'],
            hint: 'thirty + seven'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "42"',
            correctAnswers: ['carades dua'],
            hint: 'forty + two'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'How do you say "wear shoes"?',
            options: ['sapatu hare', 'sapatupul', 'pul sapatu'],
            correctAnswer: 'sapatupul',
            hint: 'clothing + pul'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which is 58?',
            options: ['limades oco', 'ocodes lima', 'des limades oco'],
            correctAnswer: 'limades oco',
            hint: 'fifty + eight'
        }
    ]
};
