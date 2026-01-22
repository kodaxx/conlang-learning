// Unit 20: Final Review - Lesson 1: Vocabulary Review 1
// Review of core vocabulary from Units 1-5

export default {
    id: 'u20-01-vocab-review-1',
    name: 'Vocabulary Review 1',
    unit: 20,
    unitName: 'Final Review',
    lessonNumber: 1,
    description: 'Review vocabulary from Units 1-5',
    icon: '📚',
    xpReward: 20,

    teaching: [
        {
            title: 'Units 1-5 Review',
            content: 'Let\'s review the foundation vocabulary you\'ve learned:',
            vocabulary: [
                { word: 'salom, xanti', translation: 'Hello, Peace' },
                { word: 'mama, papa, doste', translation: 'Mother, Father, Friend' },
                { word: 'myaw, bwaw, piu', translation: 'Cat, Dog, Bird' },
                { word: 'yam, glu, oko', translation: 'Eat, Drink, See' }
            ]
        },
        {
            title: 'Key Grammar',
            content: 'Core grammar patterns:',
            examples: [
                { globasa: 'SVO word order', english: 'Subject + Verb + Object' },
                { globasa: 'le (past), xa (future)', english: 'Tense markers' },
                { globasa: 'sen (is/are)', english: 'Linking verb' }
            ]
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        'salom', 'xanti', 'mama', 'papa', 'doste', 'myaw', 'bwaw', 'piu',
        'yam', 'glu', 'oko', 'idi', 'ata', 'sen', 'le', 'xa'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match greetings',
            pairs: [
                { word: 'salom', translation: 'hello' },
                { word: 'xanti', translation: 'peace' }
            ]
        },
        {
            type: 'matching',
            prompt: 'Match animals',
            pairs: [
                { word: 'myaw', translation: 'cat' },
                { word: 'bwaw', translation: 'dog' },
                { word: 'piu', translation: 'bird' },
                { word: 'mahi', translation: 'fish' }
            ]
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I ate"',
            words: ['mi', 'le', 'xa', 'yam', 'sen'],
            correctAnswer: ['mi', 'le', 'yam'],
            hint: 'I + past + eat'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te sen mi su doste"',
            correctAnswers: ['He is my friend', 'She is my friend'],
            hint: 'He/She + is + my + friend'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I will go"',
            correctAnswers: ['Mi xa idi'],
            hint: 'I + future + go'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the word order in Globasa?',
            options: ['SOV', 'SVO', 'VSO'],
            correctAnswer: 'SVO'
        }
    ]
};
