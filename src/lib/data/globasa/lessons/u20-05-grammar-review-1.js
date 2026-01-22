// Unit 20: Final Review - Lesson 5: Grammar Review 1
// Review of verb tenses and word order

export default {
    id: 'u20-05-grammar-review-1',
    name: 'Grammar Review 1',
    unit: 20,
    unitName: 'Final Review',
    lessonNumber: 5,
    description: 'Review tenses and word order',
    icon: '📐',
    xpReward: 20,

    teaching: [
        {
            title: 'Tense System',
            content: 'Review the Globasa tense markers:',
            vocabulary: [
                { word: '(no marker)', translation: 'present/general' },
                { word: 'le', translation: 'past' },
                { word: 'xa', translation: 'future' }
            ],
            examples: [
                { globasa: 'Mi yam', english: 'I eat' },
                { globasa: 'Mi le yam', english: 'I ate' },
                { globasa: 'Mi xa yam', english: 'I will eat' }
            ]
        },
        {
            title: 'Word Order',
            content: 'Globasa uses SVO (Subject-Verb-Object):',
            examples: [
                { globasa: 'Mi oko te', english: 'I see him' },
                { globasa: 'Te le yam pingo', english: 'He ate an apple' }
            ],
            tip: 'Adjectives come before nouns: bon kitabu = good book'
        }
    ],

    vocabulary: [],

    reviewVocabulary: ['le', 'xa', 'sen', 'hare'],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match tense markers',
            pairs: [
                { word: '(none)', translation: 'present' },
                { word: 'le', translation: 'past' },
                { word: 'xa', translation: 'future' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the past tense of "Mi yam"?',
            options: ['Mi xa yam', 'Mi le yam', 'Mi yam le'],
            correctAnswer: 'Mi le yam'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "She will see him"',
            words: ['te', 'xa', 'le', 'oko'],
            correctAnswer: ['te', 'xa', 'oko', 'te'],
            hint: 'She + will + see + him'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Imi le oko den filme"',
            correctAnswers: ['We watched that movie', 'We saw that movie'],
            hint: 'We + past + see + that + movie'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I will buy"',
            correctAnswers: ['Mi xa kari'],
            hint: 'I + will + buy'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the Globasa word order?',
            options: ['SOV', 'SVO', 'VSO'],
            correctAnswer: 'SVO'
        }
    ]
};
