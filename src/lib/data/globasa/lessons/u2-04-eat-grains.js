// Unit 2: Actions & Food - Lesson 4: Eat & Grains
// New words: yam, roti, risi (3 words)
// Concept: SVO word order introduction
// Reviews: Unit 1-2

export default {
    id: 'u2-04-eat-grains',
    name: 'Eat & Grains',
    unit: 2,
    unitName: 'Actions & Food',
    lessonNumber: 4,
    description: 'Learn to eat and your first food words!',
    icon: '🍞',
    xpReward: 20,

    teaching: [
        {
            title: 'Yam - Eat',
            content: '**Yam** means "eat" (or "meal" as a noun). Now you can talk about eating!',
            examples: [
                { globasa: 'Mi yam', english: 'I eat' },
                { globasa: 'Yu yam', english: 'You eat' }
            ]
        },
        {
            title: 'SVO Word Order',
            content: 'Globasa uses **Subject-Verb-Object** order, just like English! The thing being eaten comes AFTER the verb.',
            examples: [
                { globasa: 'Mi yam roti', english: 'I eat bread' },
                { globasa: 'Bwaw yam roti', english: 'The dog eats bread' }
            ],
            tip: 'Subject (who) + Verb (action) + Object (what)'
        },
        {
            title: 'Roti & Risi',
            content: '**Roti** means "bread" and **risi** means "rice" - two staple foods!',
            examples: [
                { globasa: 'Mi yam roti', english: 'I eat bread' },
                { globasa: 'Yu yam risi', english: 'You eat rice' }
            ]
        }
    ],

    vocabulary: [
        { word: 'yam', translation: 'eat / meal', phonetic: 'yam' },
        { word: 'roti', translation: 'bread', phonetic: 'RO-tee' },
        { word: 'risi', translation: 'rice', phonetic: 'REE-see' }
    ],

    reviewVocabulary: ['mi', 'yu', 'bwaw', 'myaw', 'nini', 'xukra'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "yam" mean?',
            options: ['drink', 'eat', 'cook', 'sleep'],
            correctAnswer: 'eat',
            hint: 'Something you do with food'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi yam roti"',
            correctAnswers: ['I eat bread', 'I am eating bread'],
            hint: 'mi = I, yam = eat, roti = bread'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "You eat rice"',
            words: ['yu', 'yam', 'risi', 'roti', 'mi'],
            correctAnswer: ['yu', 'yam', 'risi'],
            hint: 'Subject + verb + object'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the word order in Globasa?',
            options: ['Object-Subject-Verb', 'Subject-Verb-Object', 'Verb-Subject-Object', 'Subject-Object-Verb'],
            correctAnswer: 'Subject-Verb-Object',
            hint: 'Same as English!'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The cat eats"',
            correctAnswers: ['Myaw yam', 'myaw yam'],
            hint: 'Cat + eat'
        },
        // SRS Review
        {
            type: 'multiple-choice',
            prompt: '[Review] How do you say "please"?',
            options: ['xukra', 'fe lutuf', 'salom', 'weda'],
            correctAnswer: 'fe lutuf',
            hint: 'From Lesson 2.3'
        }
    ]
};
