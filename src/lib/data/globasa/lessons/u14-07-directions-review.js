// Unit 14: Commands & Positions - Lesson 7: Direction Review
// Integration lesson combining commands and directions

export default {
    id: 'u14-07-directions-review',
    name: 'Giving Directions',
    unit: 14,
    unitName: 'Commands & Positions',
    lessonNumber: 7,
    description: 'Practice giving directions using commands and positions',
    icon: '🗺️',
    xpReward: 15,

    teaching: [
        {
            title: 'Giving Directions',
            content: 'Combine commands with position words:',
            examples: [
                { globasa: 'Idi cel cejo!', english: 'Go left!' },
                { globasa: 'Idi cel bulu ji ergo fe fronta de dukan!', english: 'Go right and stop in front of the store!' }
            ]
        },
        {
            title: 'Describing Locations',
            content: 'Use position words to describe where things are:',
            examples: [
                { globasa: 'Banko sen fe cejo de eskol', english: 'The bank is to the left of the school' },
                { globasa: 'Parke sen mey hotel', english: 'The park is next to the hotel' },
                { globasa: 'Restoran sen proksimo de hinloka', english: 'The restaurant is near here' }
            ]
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        // All position words
        'fronta', 'ruke', 'cejo', 'bulu', 'supra', 'pu', 'proksimo', 'teli', 'miden', 'mey',
        // Commands
        'am', 'idi', 'ata',
        // Prepositions
        'fe', 'de', 'cel'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match all position words',
            pairs: [
                { word: 'cejo', translation: 'left' },
                { word: 'bulu', translation: 'right' },
                { word: 'fronta', translation: 'front' },
                { word: 'ruke', translation: 'back' }
            ]
        },
        {
            type: 'matching',
            prompt: 'Match more position words',
            pairs: [
                { word: 'supra', translation: 'above' },
                { word: 'pu', translation: 'below' },
                { word: 'proksimo', translation: 'near' },
                { word: 'teli', translation: 'far' }
            ]
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Go left!"',
            words: ['idi', 'cel', 'cejo', 'bulu', 'am'],
            correctAnswer: ['idi', 'cel', 'cejo'],
            hint: 'Go + to + left'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Banko sen fe cejo de eskol"',
            correctAnswers: ['The bank is to the left of the school'],
            hint: 'Bank + is + at + left + of + school'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Come here!"',
            correctAnswers: ['Ata hinloka!'],
            hint: 'Come + here'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The restaurant is near here"',
            correctAnswers: ['Restoran sen proksimo de hinloka'],
            hint: 'Restaurant + is + near + of + here'
        }
    ]
};
