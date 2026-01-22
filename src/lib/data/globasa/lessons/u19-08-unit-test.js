// Unit 19: Reasons & Equality - Lesson 8: Unit Test
// Comprehensive review of all Unit 19 vocabulary and concepts

export default {
    id: 'u19-08-unit-test',
    name: 'Unit 19 Test',
    unit: 19,
    unitName: 'Reasons & Equality',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 19: Reasons & Equality!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 19 Review',
            content: 'You\'ve learned **12 new words** in Unit 19!',
            vocabulary: [
                { word: 'kos, koski, keseba', translation: 'Because of, Because, Why' },
                { word: 'sama, denmo, diferan', translation: 'Same, Equally, Different' },
                { word: 'alo', translation: 'Either/Or (exclusive)' },
                { word: 'haya, ija, baki', translation: 'Still, Already, Again' },
                { word: 'xosu, semo', translation: 'Soon, Almost' }
            ]
        },
        {
            title: 'Key Concepts',
            content: '• kos + noun, koski + clause\\n• denmo...kom = as...as\\n• haya = still, ija = already',
            tip: 'You can now express complex relationships!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        'kos', 'koski', 'keseba', 'sama', 'denmo', 'diferan', 'alo', 'haya', 'ija', 'baki', 'xosu', 'semo'
    ],

    exercises: [
        // Reasons
        {
            type: 'matching',
            prompt: 'Match reason words',
            pairs: [
                { word: 'kos', translation: 'because of' },
                { word: 'koski', translation: 'because' },
                { word: 'keseba', translation: 'why' }
            ]
        },
        // Equality
        {
            type: 'matching',
            prompt: 'Match comparison words',
            pairs: [
                { word: 'sama', translation: 'same' },
                { word: 'denmo', translation: 'equally/as' },
                { word: 'diferan', translation: 'different' }
            ]
        },
        // Time adverbs
        {
            type: 'matching',
            prompt: 'Match time adverbs',
            pairs: [
                { word: 'haya', translation: 'still' },
                { word: 'ija', translation: 'already' },
                { word: 'baki', translation: 'again' },
                { word: 'xosu', translation: 'soon' }
            ]
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "Because of rain, I will not go"',
            words: ['kos', 'koski', 'barix', 'mi', 'no', 'xa', 'idi'],
            correctAnswer: ['kos', 'barix', 'mi', 'no', 'xa', 'idi'],
            hint: 'Because of + rain + I + not + will + go'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Te sen denmo bala kom mi"',
            correctAnswers: ['He is as strong as me', 'She is as strong as me'],
            hint: 'He/She + is + as + strong + as + me'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi haya ergo"',
            correctAnswers: ['I\'m still working'],
            hint: 'I + still + work'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I already ate"',
            correctAnswers: ['Mi ija le yam'],
            hint: 'I + already + past + eat'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Why?"',
            correctAnswers: ['Keseba?'],
            hint: 'Just the question word'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between kos and koski?',
            options: ['kos + noun, koski + clause', 'kos + clause, koski + noun', 'Same'],
            correctAnswer: 'kos + noun, koski + clause'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the equality comparison pattern?',
            options: ['maxmo...kom', 'denmo...kom', 'minmo...kom'],
            correctAnswer: 'denmo...kom'
        }
    ]
};
