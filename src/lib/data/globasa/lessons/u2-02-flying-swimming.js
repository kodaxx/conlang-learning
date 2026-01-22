// Unit 2: Actions & Food - Lesson 2: Flying & Swimming
// New words: fley, suyon (2 words)
// Concept: More animal-related verbs
// Reviews: Unit 1 + L2.1

export default {
    id: 'u2-02-flying-swimming',
    name: 'Flying & Swimming',
    unit: 2,
    unitName: 'Actions & Food',
    lessonNumber: 2,
    description: 'Fly like a bird and swim like a fish!',
    icon: '🦅',
    xpReward: 15,

    teaching: [
        {
            title: 'Fley - Fly',
            content: '**Fley** means "fly" (or "flight" as a noun). Perfect for talking about birds!',
            examples: [
                { globasa: 'Piu fley', english: 'The bird flies' },
                { globasa: 'Mi fley', english: 'I fly' }
            ],
            tip: 'Remember: fley can be both "fly" (verb) and "flight" (noun)'
        },
        {
            title: 'Suyon - Swim',
            content: '**Suyon** means "swim". Great for talking about fish!',
            examples: [
                { globasa: 'Mahi suyon', english: 'The fish swims' },
                { globasa: 'Nini suyon', english: 'The child swims' }
            ]
        }
    ],

    vocabulary: [
        { word: 'fley', translation: 'fly / flight', phonetic: 'fley' },
        { word: 'suyon', translation: 'swim', phonetic: 'SOO-yon' }
    ],

    reviewVocabulary: ['ergo', 'pawbu', 'anda', 'piu', 'mahi', 'nini', 'bwaw', 'myaw'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "fley" mean?',
            options: ['swim', 'fly', 'run', 'walk'],
            correctAnswer: 'fly',
            hint: 'What birds do'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mahi suyon"',
            correctAnswers: ['The fish swims', 'Fish swim', 'The fish is swimming'],
            hint: 'mahi = fish, suyon = swim'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The bird flies"',
            words: ['piu', 'fley', 'mahi', 'suyon'],
            correctAnswer: ['piu', 'fley'],
            hint: 'Bird + action'
        },
        // SRS Review
        {
            type: 'multiple-choice',
            prompt: '[Review] What does "pawbu" mean?',
            options: ['walk', 'run', 'fly', 'swim'],
            correctAnswer: 'run',
            hint: 'From Lesson 2.1'
        },
        {
            type: 'matching',
            prompt: 'Match animals to their actions',
            pairs: [
                { word: 'piu fley', translation: 'bird flies' },
                { word: 'mahi suyon', translation: 'fish swims' },
                { word: 'bwaw pawbu', translation: 'dog runs' }
            ]
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The cat walks"',
            correctAnswers: ['Myaw anda', 'myaw anda'],
            hint: 'Cat + walk'
        }
    ]
};
