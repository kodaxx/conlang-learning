// Unit 20: Final Review - Lesson 7: Affixes Review
// Review of all affixes learned

export default {
    id: 'u20-07-affixes-review',
    name: 'Affixes Review',
    unit: 20,
    unitName: 'Final Review',
    lessonNumber: 7,
    description: 'Review all prefixes and suffixes',
    icon: '🔤',
    xpReward: 20,

    teaching: [
        {
            title: 'Prefixes',
            content: 'Review prefixes you\'ve learned:',
            vocabulary: [
                { word: 'ban-', translation: 'some (bante, banto, banloka)' },
                { word: 'ke-', translation: 'question (keto, kete, keloka)' },
                { word: 'moy-', translation: 'every (moyte, moyto, moyloka)' },
                { word: 'nil-', translation: 'no/none (nilte, nilto, nilloka)' }
            ]
        },
        {
            title: 'Suffixes',
            content: 'Review suffixes you\'ve learned:',
            vocabulary: [
                { word: '-yen', translation: 'person (alimyen, doximyen)' },
                { word: '-sa', translation: 'language (Englisa, Espanisa)' },
                { word: '-li', translation: 'adjective (Englili, Niponli)' },
                { word: '-ya', translation: 'abstract noun (bonya, meliya)' },
                { word: '-pul', translation: 'wear (kamisapul, sapatupul)' },
                { word: '-kal', translation: 'possible (okokal, ahamkal)' }
            ]
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        'ban-', 'ke-', 'moy-', 'nil-',
        '-yen', '-sa', '-li', '-ya', '-pul', '-kal'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match prefixes',
            pairs: [
                { word: 'ban-', translation: 'some' },
                { word: 'ke-', translation: 'question' },
                { word: 'moy-', translation: 'every' },
                { word: 'nil-', translation: 'none' }
            ]
        },
        {
            type: 'matching',
            prompt: 'Match suffixes',
            pairs: [
                { word: '-yen', translation: 'person' },
                { word: '-sa', translation: 'language' },
                { word: '-ya', translation: 'abstract noun' },
                { word: '-kal', translation: 'possible' }
            ]
        },
        {
            type: 'word-bank',
            prompt: 'What is "someone"?',
            words: ['bante', 'kete', 'moyte', 'nilte'],
            correctAnswer: ['bante'],
            hint: 'ban- + te'
        },
        {
            type: 'translation',
            prompt: 'Translate: "meliya"',
            correctAnswers: ['beauty'],
            hint: 'meli + ya'
        },
        {
            type: 'translation',
            prompt: 'What is "visible" in Globasa?',
            correctAnswers: ['okokal'],
            hint: 'oko + kal'
        },
        {
            type: 'multiple-choice',
            prompt: 'What suffix creates language names?',
            options: ['-yen', '-sa', '-li'],
            correctAnswer: '-sa'
        }
    ]
};
