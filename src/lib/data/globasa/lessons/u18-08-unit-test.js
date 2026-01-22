// Unit 18: Time Expressions - Lesson 8: Unit Test
// Comprehensive review of all Unit 18 vocabulary and concepts

export default {
    id: 'u18-08-unit-test',
    name: 'Unit 18 Test',
    unit: 18,
    unitName: 'Time Expressions',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 18: Time Expressions!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 18 Review',
            content: 'You\'ve learned **15 new words** in Unit 18!',
            vocabulary: [
                { word: 'watu, kewatu', translation: 'Time, When' },
                { word: 'nun, nundin', translation: 'Now, Today' },
                { word: 'lefe, xafe', translation: 'Before, After' },
                { word: 'predin, posdin', translation: 'Yesterday, Tomorrow' },
                { word: 'nyan, mes', translation: 'Year, Month' },
                { word: 'satu, minuta', translation: 'Hour, Minute' },
                { word: 'Lunadin-Soladin', translation: 'Days of the week' }
            ]
        },
        {
            title: 'Key Concepts',
            content: '• Days end in **-din**\\n• lefe/xafe = before/after\\n• predin/posdin = yesterday/tomorrow',
            tip: 'You can now talk about time!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        'watu', 'kewatu', 'nun', 'nundin', 'lefe', 'xafe', 'predin', 'posdin',
        'nyan', 'mes', 'satu', 'minuta', 'Lunadin', 'Soladin'
    ],

    exercises: [
        // Time vocabulary
        {
            type: 'matching',
            prompt: 'Match time words',
            pairs: [
                { word: 'watu', translation: 'time' },
                { word: 'kewatu', translation: 'when' },
                { word: 'nun', translation: 'now' },
                { word: 'nundin', translation: 'today' }
            ]
        },
        // Before/After
        {
            type: 'matching',
            prompt: 'Match temporal relations',
            pairs: [
                { word: 'lefe', translation: 'before' },
                { word: 'xafe', translation: 'after' },
                { word: 'predin', translation: 'yesterday' },
                { word: 'posdin', translation: 'tomorrow' }
            ]
        },
        // Time periods
        {
            type: 'matching',
            prompt: 'Match time periods',
            pairs: [
                { word: 'nyan', translation: 'year' },
                { word: 'mes', translation: 'month' },
                { word: 'satu', translation: 'hour' },
                { word: 'minuta', translation: 'minute' }
            ]
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "When will you come?"',
            words: ['kewatu', 'keto', 'yu', 'xa', 'ata'],
            correctAnswer: ['kewatu', 'yu', 'xa', 'ata'],
            hint: 'When + you + will + come'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Mi le ergo predin"',
            correctAnswers: ['I worked yesterday'],
            hint: 'I + past + work + yesterday'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Xafe yam, mi somno"',
            correctAnswers: ['After eating, I sleep'],
            hint: 'After + eat + I + sleep'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I will go tomorrow"',
            correctAnswers: ['Mi xa idi posdin'],
            hint: 'I + will + go + tomorrow'
        },
        {
            type: 'translation',
            prompt: 'What is Saturday in Globasa?',
            correctAnswers: ['Saturdin'],
            hint: 'Saturn + din'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'What suffix do all days share?',
            options: ['-watu', '-din', '-nyan'],
            correctAnswer: '-din'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of lefe?',
            options: ['predin', 'xafe', 'posdin'],
            correctAnswer: 'xafe'
        }
    ]
};
