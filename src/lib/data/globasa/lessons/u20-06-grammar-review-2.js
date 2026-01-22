// Unit 20: Final Review - Lesson 6: Grammar Review 2
// Review of questions, negation, and comparison

export default {
    id: 'u20-06-grammar-review-2',
    name: 'Grammar Review 2',
    unit: 20,
    unitName: 'Final Review',
    lessonNumber: 6,
    description: 'Review questions, negation, and comparison',
    icon: '❓',
    xpReward: 20,

    teaching: [
        {
            title: 'Questions & Negation',
            content: 'Review question and negation patterns:',
            examples: [
                { globasa: 'Kam yu suki?', english: 'Do you like?' },
                { globasa: 'Mi no suki', english: 'I don\'t like' },
                { globasa: 'Keto? Kete? Keloka?', english: 'What? Who? Where?' }
            ]
        },
        {
            title: 'Comparison',
            content: 'Review comparison patterns:',
            examples: [
                { globasa: 'maxmo...kom', english: 'more...than' },
                { globasa: 'minmo...kom', english: 'less...than' },
                { globasa: 'denmo...kom', english: 'as...as' },
                { globasa: 'maxim', english: 'most (superlative)' },
                { globasa: 'minim', english: 'least (superlative)' }
            ]
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        'kam', 'no', 'keto', 'kete', 'keloka', 'kewatu', 'keseba',
        'maxmo', 'minmo', 'denmo', 'kom', 'maxim', 'minim'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match question words',
            pairs: [
                { word: 'keto', translation: 'what' },
                { word: 'kete', translation: 'who' },
                { word: 'keloka', translation: 'where' },
                { word: 'kewatu', translation: 'when' }
            ]
        },
        {
            type: 'matching',
            prompt: 'Match comparison words',
            pairs: [
                { word: 'maxmo', translation: 'more' },
                { word: 'minmo', translation: 'less' },
                { word: 'maxim', translation: 'most' },
                { word: 'minim', translation: 'least' }
            ]
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Do you like coffee?"',
            words: ['kam', 'yu', 'no', 'suki', 'kafe'],
            correctAnswer: ['kam', 'yu', 'suki', 'kafe'],
            hint: '(Q) + you + like + coffee'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te sen maxmo bala kom mi"',
            correctAnswers: ['He is stronger than me', 'She is stronger than me'],
            hint: 'He/She + is + more + strong + than + me'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I don\'t know"',
            correctAnswers: ['Mi no xana'],
            hint: 'I + not + know'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you form yes/no questions?',
            options: ['Add "kam"', 'Change word order', 'Add "no"'],
            correctAnswer: 'Add "kam"'
        }
    ]
};
