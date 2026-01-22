// Unit 1: Foundations - Lesson 5: Family 2
// New words: matre, mama, patre, papa (4 words)
// Concept: Parent words, gender-specific vocabulary
// Reviews: Lessons 1.1-1.4

export default {
    id: 'u1-05-family-2',
    name: 'Parents',
    unit: 1,
    unitName: 'Foundations',
    lessonNumber: 5,
    description: 'Learn words for mother and father.',
    icon: '👨‍👩‍👧',
    xpReward: 15,

    teaching: [
        {
            title: 'Matre & Mama',
            content: '**Matre** means "mother" (formal) and **mama** means "mom" (informal). Use whichever fits the situation!',
            examples: [
                { globasa: 'matre', english: 'mother' },
                { globasa: 'mama', english: 'mom' },
                { globasa: 'Salom, mama!', english: 'Hello, mom!' }
            ]
        },
        {
            title: 'Patre & Papa',
            content: 'Similarly, **patre** means "father" (formal) and **papa** means "dad" (informal).',
            examples: [
                { globasa: 'patre', english: 'father' },
                { globasa: 'papa', english: 'dad' },
                { globasa: 'Weda, papa!', english: 'Goodbye, dad!' }
            ]
        },
        {
            title: 'Gender in Globasa',
            content: 'These are some of the few words in Globasa that indicate gender. Most words (like nini, sodar, doste) are gender-neutral.',
            tip: 'Matre/patre and mama/papa are exceptions to the gender-neutral rule'
        }
    ],

    vocabulary: [
        { word: 'matre', translation: 'mother', phonetic: 'MAH-treh' },
        { word: 'mama', translation: 'mom', phonetic: 'MA-ma' },
        { word: 'patre', translation: 'father', phonetic: 'PAH-treh' },
        { word: 'papa', translation: 'dad', phonetic: 'PA-pa' }
    ],

    reviewVocabulary: ['nini', 'sodar', 'doste', 'salom', 'weda'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "matre" mean?',
            options: ['father', 'mother', 'child', 'sibling'],
            correctAnswer: 'mother',
            hint: 'The formal word for a female parent'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "dad" (informal) in Globasa?',
            options: ['patre', 'mama', 'papa', 'matre'],
            correctAnswer: 'papa',
            hint: 'The casual word for father'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Xanti, mama!"',
            correctAnswers: ['Peace, mom!', 'Hello, mom!', 'Goodbye, mom!', 'Hi, mom!', 'Bye, mom!'],
            hint: 'Greeting + informal mother'
        },
        {
            type: 'matching',
            prompt: 'Match the family words',
            pairs: [
                { word: 'matre', translation: 'mother' },
                { word: 'mama', translation: 'mom' },
                { word: 'patre', translation: 'father' },
                { word: 'papa', translation: 'dad' }
            ]
        },
        // SRS Review
        {
            type: 'multiple-choice',
            prompt: '[Review] What does "sodar" mean?',
            options: ['child', 'friend', 'sibling', 'parent'],
            correctAnswer: 'sibling',
            hint: 'From Lesson 4'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Hello, father!"',
            words: ['salom', 'patre', 'weda', 'mama'],
            correctAnswer: ['salom', 'patre'],
            hint: 'Greeting + formal male parent'
        }
    ]
};
