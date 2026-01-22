// Unit 20: Final Review - Lesson 4: Vocabulary Review 4
// Review of vocabulary from Units 16-19

export default {
    id: 'u20-04-vocab-review-4',
    name: 'Vocabulary Review 4',
    unit: 20,
    unitName: 'Final Review',
    lessonNumber: 4,
    description: 'Review vocabulary from Units 16-19',
    icon: '🌤️',
    xpReward: 20,

    teaching: [
        {
            title: 'Units 16-19 Review',
            content: 'Review recent vocabulary:',
            vocabulary: [
                { word: 'hay, barix, taluji, fon', translation: 'Weather vocabulary' },
                { word: 'watu, kewatu, lefe, xafe', translation: 'Time words' },
                { word: 'kos, koski, keseba', translation: 'Reason words' },
                { word: 'haya, ija, baki', translation: 'Time adverbs' }
            ]
        },
        {
            title: 'Key Grammar',
            content: 'Recent grammar:',
            examples: [
                { globasa: 'hay + weather', english: 'Weather pattern' },
                { globasa: 'ki', english: 'That (clause marker)' },
                { globasa: 'ban-', english: 'Some prefix (bante, banto)' }
            ]
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        'hay', 'barix', 'taluji', 'fon', 'garme', 'bardi',
        'watu', 'kewatu', 'lefe', 'xafe', 'predin', 'posdin',
        'kos', 'koski', 'keseba', 'haya', 'ija', 'baki', 'xosu', 'semo'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match weather words',
            pairs: [
                { word: 'barix', translation: 'rain' },
                { word: 'taluji', translation: 'snow' },
                { word: 'garme', translation: 'hot' },
                { word: 'bardi', translation: 'cold' }
            ]
        },
        {
            type: 'matching',
            prompt: 'Match reason words',
            pairs: [
                { word: 'kos', translation: 'because of' },
                { word: 'koski', translation: 'because' },
                { word: 'keseba', translation: 'why' }
            ]
        },
        {
            type: 'word-bank',
            prompt: 'Build: "It\'s raining"',
            words: ['hay', 'sen', 'barix', 'to', 'le'],
            correctAnswer: ['hay', 'barix'],
            hint: 'There is + rain'
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
            type: 'multiple-choice',
            prompt: 'What is the pattern for weather?',
            options: ['Sen + weather', 'Hay + weather', 'To + weather'],
            correctAnswer: 'Hay + weather'
        }
    ]
};
