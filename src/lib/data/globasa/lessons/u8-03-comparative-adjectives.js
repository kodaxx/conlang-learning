// Unit 8: Comparison - Lesson 3: More/Less for Adjectives
// New words: maxmo (more [adj]), minmo (less [adj])

export default {
    id: 'u8-03-comparative-adjectives',
    name: 'Comparative Adjectives',
    unit: 8,
    unitName: 'Comparison',
    lessonNumber: 3,
    description: 'Learn to compare qualities with maxmo and minmo',
    icon: '📊',
    xpReward: 15,

    teaching: [
        {
            title: 'More + Adjective',
            content: '**Maxmo** means "more" when used with adjectives (like -er):',
            vocabulary: [
                { word: 'maxmo', translation: 'more (for adjectives)' }
            ],
            examples: [
                { globasa: 'Te sen maxmo bala kom mi', english: 'He is stronger than me' },
                { globasa: 'Hin kitabu sen maxmo bon', english: 'This book is better' },
                { globasa: 'Uma sen maxmo velosi kom bwaw', english: 'A horse is faster than a dog' }
            ]
        },
        {
            title: 'Less + Adjective',
            content: '**Minmo** means "less" when used with adjectives:',
            vocabulary: [
                { word: 'minmo', translation: 'less (for adjectives)' }
            ],
            examples: [
                { globasa: 'Te sen minmo gao kom mi', english: 'He is less tall than me / shorter than me' },
                { globasa: 'Hin ogar sen minmo day', english: 'This house is smaller' }
            ],
            tip: 'maxmo/minmo + adjective + kom = comparative'
        },
        {
            title: 'Comparison Pattern',
            content: 'The full comparison structure:',
            examples: [
                { globasa: 'A sen maxmo [adj] kom B', english: 'A is more [adj] than B' },
                { globasa: 'A sen minmo [adj] kom B', english: 'A is less [adj] than B' }
            ]
        }
    ],

    vocabulary: [
        { word: 'maxmo', translation: 'more (for adjectives)' },
        { word: 'minmo', translation: 'less (for adjectives)' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'max', 'min', 'kom',
        // Adjectives
        'bala', 'bon', 'velosi', 'gao', 'day', 'meli'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match comparative words',
            pairs: [
                { word: 'maxmo', translation: 'more (adjective)' },
                { word: 'minmo', translation: 'less (adjective)' },
                { word: 'max', translation: 'more (quantity)' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "He is stronger"?',
            options: ['Te sen max bala', 'Te sen maxmo bala', 'Te sen bala max'],
            correctAnswer: 'Te sen maxmo bala',
            hint: 'maxmo for adjectives'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "A horse is faster than a dog"',
            words: ['uma', 'sen', 'maxmo', 'velosi', 'kom', 'bwaw'],
            correctAnswer: ['uma', 'sen', 'maxmo', 'velosi', 'kom', 'bwaw'],
            hint: 'Horse + is + more + fast + than + dog'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Hin kitabu sen maxmo bon"',
            correctAnswers: ['This book is better'],
            hint: 'This + book + is + more + good'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "This house is smaller"',
            correctAnswers: ['Hin ogar sen minmo day'],
            hint: 'This + house + is + less + big'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between "max" and "maxmo"?',
            options: [
                'max = quantity, maxmo = adjectives',
                'max = adjectives, maxmo = quantity',
                'They are the same'
            ],
            correctAnswer: 'max = quantity, maxmo = adjectives',
            hint: 'max kitabu vs maxmo bon'
        }
    ]
};
