// Unit 2: Actions & Food - Lesson 5: More Food
// New words: supa, salada, jubin (3 words)
// Concept: Practicing SVO with more food vocabulary
// Reviews: Unit 1-2

export default {
    id: 'u2-05-more-food',
    name: 'More Food',
    unit: 2,
    unitName: 'Actions & Food',
    lessonNumber: 5,
    description: 'Expand your food vocabulary!',
    icon: '🥗',
    xpReward: 15,

    teaching: [
        {
            title: 'Supa - Soup',
            content: '**Supa** means "soup". Easy to remember!',
            examples: [
                { globasa: 'Mi yam supa', english: 'I eat soup' },
                { globasa: 'Mama yam supa', english: 'Mom eats soup' }
            ]
        },
        {
            title: 'Salada - Salad',
            content: '**Salada** means "salad". Many Globasa words are international!',
            examples: [
                { globasa: 'Yu yam salada', english: 'You eat salad' }
            ]
        },
        {
            title: 'Jubin - Cheese',
            content: '**Jubin** means "cheese". Perfect for your food vocabulary!',
            examples: [
                { globasa: 'Bwaw yam jubin', english: 'The dog eats cheese' },
                { globasa: 'Myaw yam jubin', english: 'The cat eats cheese' }
            ]
        }
    ],

    vocabulary: [
        { word: 'supa', translation: 'soup', phonetic: 'SOO-pa' },
        { word: 'salada', translation: 'salad', phonetic: 'sa-LA-da' },
        { word: 'jubin', translation: 'cheese', phonetic: 'JOO-bin' }
    ],

    reviewVocabulary: ['yam', 'roti', 'risi', 'mi', 'yu', 'bwaw', 'myaw', 'mama'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "supa" mean?',
            options: ['salad', 'soup', 'bread', 'cheese'],
            correctAnswer: 'soup',
            hint: 'A liquid food you eat with a spoon'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Yu yam salada"',
            correctAnswers: ['You eat salad', 'You are eating salad'],
            hint: 'yu = you, yam = eat, salada = salad'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The cat eats cheese"',
            words: ['myaw', 'yam', 'jubin', 'supa', 'bwaw'],
            correctAnswer: ['myaw', 'yam', 'jubin'],
            hint: 'Cat + eat + cheese'
        },
        {
            type: 'matching',
            prompt: 'Match all food words',
            pairs: [
                { word: 'roti', translation: 'bread' },
                { word: 'risi', translation: 'rice' },
                { word: 'supa', translation: 'soup' },
                { word: 'salada', translation: 'salad' },
                { word: 'jubin', translation: 'cheese' }
            ]
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Mom eats rice"',
            correctAnswers: ['Mama yam risi', 'mama yam risi'],
            hint: 'Subject + verb + object'
        },
        // SRS Review
        {
            type: 'multiple-choice',
            prompt: '[Review] What does "yam" mean?',
            options: ['drink', 'cook', 'eat', 'have'],
            correctAnswer: 'eat',
            hint: 'From Lesson 2.4'
        }
    ]
};
