// Unit 20: Final Review - Lesson 2: Vocabulary Review 2
// Review of vocabulary from Units 6-10

export default {
    id: 'u20-02-vocab-review-2',
    name: 'Vocabulary Review 2',
    unit: 20,
    unitName: 'Final Review',
    lessonNumber: 2,
    description: 'Review vocabulary from Units 6-10',
    icon: '📖',
    xpReward: 20,

    teaching: [
        {
            title: 'Units 6-10 Review',
            content: 'Review intermediate vocabulary:',
            vocabulary: [
                { word: 'imi, uyu, oto', translation: 'We, You (pl), They' },
                { word: 'de, ton, fe', translation: 'Of, With, At' },
                { word: 'un, dua, tiga...des', translation: 'Numbers 1-10' },
                { word: 'dexa, basa', translation: 'Country, Language' }
            ]
        },
        {
            title: 'Key Grammar',
            content: 'Intermediate grammar:',
            examples: [
                { globasa: 'maxmo...kom', english: 'More...than (comparative)' },
                { globasa: 'keto, keloka, kete', english: 'Question words' },
                { globasa: '-sa, -li, -yen', english: 'Nationality suffixes' }
            ]
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        'imi', 'uyu', 'oto', 'de', 'ton', 'fe', 'in', 'per', 'bax',
        'un', 'dua', 'tiga', 'care', 'lima', 'sisa', 'sabe', 'oco', 'nue', 'des',
        'dexa', 'basa', 'Engli', 'Espani', 'Nipon'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match pronouns',
            pairs: [
                { word: 'imi', translation: 'we' },
                { word: 'uyu', translation: 'you (plural)' },
                { word: 'oto', translation: 'they' }
            ]
        },
        {
            type: 'matching',
            prompt: 'Match prepositions',
            pairs: [
                { word: 'de', translation: 'of' },
                { word: 'ton', translation: 'with' },
                { word: 'fe', translation: 'at' },
                { word: 'in', translation: 'in' }
            ]
        },
        {
            type: 'word-bank',
            prompt: 'Build: "three books"',
            words: ['tiga', 'dua', 'kitabu', 'plu'],
            correctAnswer: ['tiga', 'kitabu'],
            hint: 'Three + books'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te sen maxmo bala kom mi"',
            correctAnswers: ['He is stronger than me', 'She is stronger than me'],
            hint: 'He/She + is + more + strong + than + me'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "English (language)"',
            correctAnswers: ['Englisa'],
            hint: 'England + sa'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you form language names?',
            options: ['Country + -li', 'Country + -sa', 'Country + -yen'],
            correctAnswer: 'Country + -sa'
        }
    ]
};
