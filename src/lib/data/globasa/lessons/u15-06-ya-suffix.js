// Unit 15: Conditionals & Colors - Lesson 6: The -ya Suffix
// New concept: -ya suffix for abstract nouns

export default {
    id: 'u15-06-ya-suffix',
    name: 'Abstract Nouns (-ya)',
    unit: 15,
    unitName: 'Conditionals & Colors',
    lessonNumber: 6,
    description: 'Learn the -ya suffix for abstract nouns',
    icon: '💭',
    xpReward: 15,

    teaching: [
        {
            title: 'The -ya Suffix',
            content: 'Add **-ya** to create abstract nouns:',
            vocabulary: [
                { word: '-ya', translation: 'abstract noun suffix' }
            ],
            examples: [
                { globasa: 'bon → bonya', english: 'good → goodness' },
                { globasa: 'meli → meliya', english: 'beautiful → beauty' },
                { globasa: 'bala → balaya', english: 'strong → strength' }
            ],
            tip: 'adjective + ya = abstract quality'
        },
        {
            title: 'Using -ya Words',
            content: 'Use -ya words as nouns:',
            examples: [
                { globasa: 'Meliya sen daymo importante', english: 'Beauty is very important' },
                { globasa: 'Mi suki te su bonya', english: 'I like his/her goodness' }
            ]
        }
    ],

    vocabulary: [
        { word: '-ya', translation: 'abstract noun suffix' }
    ],

    reviewVocabulary: [
        // Adjectives
        'bon', 'meli', 'bala', 'velosi', 'hazuni',
        // Recent
        'daymo'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match abstract nouns',
            pairs: [
                { word: 'bonya', translation: 'goodness' },
                { word: 'meliya', translation: 'beauty' },
                { word: 'balaya', translation: 'strength' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "beauty"?',
            options: ['meli', 'meliya', 'melili'],
            correctAnswer: 'meliya',
            hint: 'meli + ya'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "strength"',
            words: ['bala', '-ya', 'balaya', 'bon'],
            correctAnswer: ['balaya'],
            hint: 'Strong + ya'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Meliya sen daymo importante"',
            correctAnswers: ['Beauty is very important'],
            hint: 'Beauty + is + very + important'
        },
        {
            type: 'translation',
            prompt: 'How do you say "happiness" (from hox)?',
            correctAnswers: ['hoxya'],
            hint: 'happy + ya'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does the -ya suffix create?',
            options: ['Verbs', 'Abstract nouns', 'Adjectives'],
            correctAnswer: 'Abstract nouns'
        }
    ]
};
