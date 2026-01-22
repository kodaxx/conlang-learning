// Unit 9: Numbers & Quantifiers - Lesson 2: Numbers 4-6
// New words: care (four), lima (five), sisa (six)

export default {
    id: 'u9-02-numbers-4-6',
    name: 'Numbers 4-6',
    unit: 9,
    unitName: 'Numbers & Quantifiers',
    lessonNumber: 2,
    description: 'Learn the numbers four through six',
    icon: '4️⃣',
    xpReward: 15,

    teaching: [
        {
            title: 'Four, Five, Six',
            content: 'Learn the next three numbers:',
            vocabulary: [
                { word: 'care', translation: 'four' },
                { word: 'lima', translation: 'five' },
                { word: 'sisa', translation: 'six' }
            ],
            examples: [
                { globasa: 'Mi hare care kursi', english: 'I have four chairs' },
                { globasa: 'Lima yen le ata', english: 'Five people came' },
                { globasa: 'Ogar hare sisa kamer', english: 'The house has six rooms' }
            ]
        },
        {
            title: 'Counting 1-6',
            content: 'Review all numbers learned so far:',
            examples: [
                { globasa: 'un, dua, tiga, care, lima, sisa', english: '1, 2, 3, 4, 5, 6' }
            ]
        }
    ],

    vocabulary: [
        { word: 'care', translation: 'four' },
        { word: 'lima', translation: 'five' },
        { word: 'sisa', translation: 'six' }
    ],

    reviewVocabulary: [
        // Lesson 9.1 recent
        'numer', 'un', 'dua', 'tiga',
        // Earlier
        'kursi', 'yen', 'ata', 'ogar', 'kamer', 'hare'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match numbers',
            pairs: [
                { word: 'care', translation: 'four' },
                { word: 'lima', translation: 'five' },
                { word: 'sisa', translation: 'six' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What number is "lima"?',
            options: ['4', '5', '6'],
            correctAnswer: '5'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Five people came"',
            words: ['lima', 'care', 'yen', 'le', 'ata'],
            correctAnswer: ['lima', 'yen', 'le', 'ata'],
            hint: 'Five + people + past + come'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi hare care kursi"',
            correctAnswers: ['I have four chairs'],
            hint: 'I + have + four + chairs'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "six rooms"',
            correctAnswers: ['sisa kamer'],
            hint: 'six + rooms'
        },
        {
            type: 'multiple-choice',
            prompt: 'What comes after "lima"?',
            options: ['care', 'sisa', 'tiga'],
            correctAnswer: 'sisa',
            hint: 'lima = 5, so next is...'
        }
    ]
};
