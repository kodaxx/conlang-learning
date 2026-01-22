// Unit 8: Comparison - Lesson 2: More, Less & Than
// New words: max (more), min (less), kom (than, as)

export default {
    id: 'u8-02-more-less-than',
    name: 'More, Less & Than',
    unit: 8,
    unitName: 'Comparison',
    lessonNumber: 2,
    description: 'Learn to make comparisons',
    icon: '⚖️',
    xpReward: 15,

    teaching: [
        {
            title: 'More',
            content: '**Max** means "more":',
            vocabulary: [
                { word: 'max', translation: 'more' }
            ],
            examples: [
                { globasa: 'Mi hare max kitabu', english: 'I have more books' },
                { globasa: 'Te vole max sui', english: 'He/She wants more water' }
            ]
        },
        {
            title: 'Less',
            content: '**Min** means "less" or "fewer":',
            vocabulary: [
                { word: 'min', translation: 'less, fewer' }
            ],
            examples: [
                { globasa: 'Mi yam min roti', english: 'I eat less bread' },
                { globasa: 'Imi hare min kursi', english: 'We have fewer chairs' }
            ]
        },
        {
            title: 'Than / As',
            content: '**Kom** means "than" or "as" (for comparisons):',
            vocabulary: [
                { word: 'kom', translation: 'than, as' }
            ],
            examples: [
                { globasa: 'Te hare max kitabu kom mi', english: 'He has more books than I do' },
                { globasa: 'Mi sen bala kom yu', english: 'I am as strong as you' }
            ],
            tip: 'Comparison pattern: A + max/min + NOUN + kom + B'
        }
    ],

    vocabulary: [
        { word: 'max', translation: 'more' },
        { word: 'min', translation: 'less, fewer' },
        { word: 'kom', translation: 'than, as' }
    ],

    reviewVocabulary: [
        // Lesson 8.1 recent
        '-su', 'se',
        // Earlier
        'hare', 'kitabu', 'sui', 'roti', 'kursi', 'bala', 'vole'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match comparison words',
            pairs: [
                { word: 'max', translation: 'more' },
                { word: 'min', translation: 'less' },
                { word: 'kom', translation: 'than/as' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I have more books"?',
            options: ['Mi hare min kitabu', 'Mi hare max kitabu', 'Mi kitabu max hare'],
            correctAnswer: 'Mi hare max kitabu',
            hint: 'max = more'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "He has more books than I"',
            words: ['te', 'hare', 'max', 'kitabu', 'kom', 'mi'],
            correctAnswer: ['te', 'hare', 'max', 'kitabu', 'kom', 'mi'],
            hint: 'He + have + more + books + than + I'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi yam min roti"',
            correctAnswers: ['I eat less bread'],
            hint: 'I + eat + less + bread'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "She wants more water"',
            correctAnswers: ['Te vole max sui'],
            hint: 'She + want + more + water'
        },
        {
            type: 'multiple-choice',
            prompt: 'What word means "than" in comparisons?',
            options: ['max', 'min', 'kom'],
            correctAnswer: 'kom',
            hint: 'A more than B = A max kom B'
        }
    ]
};
