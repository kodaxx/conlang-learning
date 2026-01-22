// Unit 20: Final Review - Lesson 8: Final Exam
// Comprehensive final test covering all 20 units

export default {
    id: 'u20-08-final-exam',
    name: 'Final Exam 🎓',
    unit: 20,
    unitName: 'Final Review',
    lessonNumber: 8,
    description: 'Comprehensive final exam - Congratulations on completing the course!',
    icon: '🎓',
    xpReward: 100,
    isUnitTest: true,
    isFinalExam: true,

    teaching: [
        {
            title: '🎉 Congratulations!',
            content: 'You\'ve completed all 20 units of the Globasa curriculum!',
            vocabulary: [
                { word: '~300 words', translation: 'Total vocabulary learned' },
                { word: '160 lessons', translation: 'Total lessons completed' },
                { word: '20 units', translation: 'Core Globasa curriculum' }
            ]
        },
        {
            title: 'What You\'ve Learned',
            content: '• Basic to advanced vocabulary\\n• Tenses: past, present, future\\n• Questions and negation\\n• Comparatives and superlatives\\n• Modals: can, must, should\\n• Conditionals: if...then\\n• Many affixes for word-building',
            tip: 'Yu nun pala Globasa! (You now speak Globasa!)'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [],

    exercises: [
        // Core vocabulary
        {
            type: 'matching',
            prompt: 'Match core vocabulary',
            pairs: [
                { word: 'salom', translation: 'hello' },
                { word: 'xanti', translation: 'peace' },
                { word: 'lubi', translation: 'love' },
                { word: 'suki', translation: 'like' }
            ]
        },
        // Tenses
        {
            type: 'matching',
            prompt: 'Match tense examples',
            pairs: [
                { word: 'Mi yam', translation: 'I eat' },
                { word: 'Mi le yam', translation: 'I ate' },
                { word: 'Mi xa yam', translation: 'I will eat' }
            ]
        },
        // Modals
        {
            type: 'matching',
            prompt: 'Match modals',
            pairs: [
                { word: 'abil', translation: 'can' },
                { word: 'musi', translation: 'must' },
                { word: 'ingay', translation: 'should' },
                { word: 'vole', translation: 'want' }
            ]
        },
        // Complex sentences
        {
            type: 'word-bank',
            prompt: 'Build: "If you want, I will come"',
            words: ['eger', 'yu', 'vole', 'mi', 'xa', 'ata'],
            correctAnswer: ['eger', 'yu', 'vole', 'mi', 'xa', 'ata'],
            hint: 'If + you + want + I + will + come'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I know that he is a teacher"',
            words: ['mi', 'xana', 'ki', 'te', 'sen', 'alimyen'],
            correctAnswer: ['mi', 'xana', 'ki', 'te', 'sen', 'alimyen'],
            hint: 'I + know + that + he + is + teacher'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Mi abil loga Globasa!"',
            correctAnswers: ['I can speak Globasa!'],
            hint: 'I + can + speak + Globasa'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te sen maxim bon doste"',
            correctAnswers: ['He is the best friend', 'She is the best friend'],
            hint: 'He/She + is + most + good + friend'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I love you"',
            correctAnswers: ['Mi lubi yu'],
            hint: 'I + love + you'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Thank you!"',
            correctAnswers: ['Xukra!'],
            hint: 'Thanks!'
        },
        // Final questions
        {
            type: 'multiple-choice',
            prompt: 'What does "Yu nun pala Globasa!" mean?',
            options: [
                'You now speak Globasa!',
                'You want to speak Globasa!',
                'You can\'t speak Globasa!'
            ],
            correctAnswer: 'You now speak Globasa!'
        },
        {
            type: 'multiple-choice',
            prompt: 'How many tense markers does Globasa have?',
            options: ['2 (past, future)', '3 (past, present, future)', '4'],
            correctAnswer: '2 (past, future)',
            hint: 'Present is unmarked'
        }
    ]
};
