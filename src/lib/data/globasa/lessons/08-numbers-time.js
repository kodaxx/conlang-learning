export default {
    id: '08-numbers-time',
    name: 'Numbers & Time',
    description: 'Learn to count and tell time.',
    icon: '⏰',
    xpReward: 25,
    teaching: [
        {
            title: 'Numbers 1-10',
            content: 'Basic numbers: un (1), dua (2), tiga (3), care (4), lima (5), sisa (6), sabe (7), oco (8), nue (9), des (10).',
            examples: []
        },
        {
            title: 'Larger Numbers',
            content: 'Combine numbers: des-un = 11, dua-des = 20.',
            examples: [
                { globasa: 'des-lima', english: '15' },
                { globasa: 'tiga-des', english: '30' }
            ]
        }
    ],
    vocabulary: [
        { word: 'un', translation: 'one', phonetic: 'oon' },
        { word: 'dua', translation: 'two', phonetic: 'DOO-a' },
        { word: 'tiga', translation: 'three', phonetic: 'TEE-ga' },
        { word: 'care', translation: 'four', phonetic: 'CHA-reh' },
        { word: 'lima', translation: 'five', phonetic: 'LEE-ma' },
        { word: 'des', translation: 'ten', phonetic: 'des' }
    ],
    exercises: [
        {
            type: 'matching',
            prompt: 'Match numbers',
            leftCards: [
                { id: 'l1', text: 'un', pairId: 'p1' },
                { id: 'l2', text: 'dua', pairId: 'p2' },
                { id: 'l3', text: 'lima', pairId: 'p3' },
                { id: 'l4', text: 'des', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: '1', pairId: 'p1' },
                { id: 'r2', text: '2', pairId: 'p2' },
                { id: 'r3', text: '5', pairId: 'p3' },
                { id: 'r4', text: '10', pairId: 'p4' }
            ]
        },
        {
            type: 'translation',
            prompt: 'Translate: "des-un"',
            correctAnswers: ['11', 'eleven'],
            hint: 'ten + one'
        },
        {
            type: 'fill-blank',
            prompt: 'Mi hare ___ kitabu. (I have 3 books)',
            options: ['un', 'dua', 'tiga', 'care'],
            correctAnswer: 'tiga',
            hint: 'Three'
        }
    ]
};
