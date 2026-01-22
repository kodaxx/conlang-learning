// Unit 1: Foundations - Lesson 2: Animals 1
// New words: bwaw, myaw, piu (3 words)
// Concept: Animal nouns, gender-neutral
// Reviews: Lesson 1.1 (greetings)

export default {
    id: 'u1-02-animals-1',
    name: 'Animals 1',
    unit: 1,
    unitName: 'Foundations',
    lessonNumber: 2,
    description: 'Meet your first animal friends in Globasa!',
    icon: '🐕',
    xpReward: 15,

    teaching: [
        {
            title: 'No Genders, No Plurals',
            content: 'In Globasa, nouns are **simple**! The word **bwaw** means "dog" - whether it\'s one dog, many dogs, male or female. The context tells us!',
            examples: [
                { globasa: 'bwaw', english: 'dog / dogs' }
            ],
            tip: 'No need to memorize plural forms - there are none!'
        },
        {
            title: 'Myaw - Cat',
            content: 'The word for cat is **myaw** - it sounds a bit like a cat\'s meow!',
            examples: [
                { globasa: 'myaw', english: 'cat / cats' }
            ]
        },
        {
            title: 'Piu - Bird',
            content: 'Birds are called **piu** - another word that sounds like what it describes!',
            examples: [
                { globasa: 'piu', english: 'bird / birds' }
            ]
        }
    ],

    vocabulary: [
        { word: 'bwaw', translation: 'dog(s)', phonetic: 'BWAW' },
        { word: 'myaw', translation: 'cat(s)', phonetic: 'MYAW' },
        { word: 'piu', translation: 'bird(s)', phonetic: 'PEE-oo' }
    ],

    // Review vocabulary from previous lessons (for SRS)
    reviewVocabulary: ['salom', 'weda', 'xanti'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "bwaw" mean?',
            options: ['cat', 'dog', 'bird', 'fish'],
            correctAnswer: 'dog',
            hint: 'Man\'s best friend'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "cat" in Globasa?',
            options: ['bwaw', 'piu', 'myaw', 'uma'],
            correctAnswer: 'myaw',
            hint: 'It sounds like what cats say!'
        },
        {
            type: 'translation',
            prompt: 'Translate: "piu"',
            correctAnswers: ['bird', 'birds', 'a bird'],
            hint: 'It has wings and flies'
        },
        // SRS Review from L1.1
        {
            type: 'multiple-choice',
            prompt: '[Review] How do you say "hello"?',
            options: ['weda', 'salom', 'bwaw', 'myaw'],
            correctAnswer: 'salom',
            hint: 'From Lesson 1'
        },
        {
            type: 'matching',
            prompt: 'Match the animals',
            pairs: [
                { word: 'bwaw', translation: 'dog' },
                { word: 'myaw', translation: 'cat' },
                { word: 'piu', translation: 'bird' }
            ]
        },
        // Combined review
        {
            type: 'word-bank',
            prompt: 'Build: "Hello, dog!"',
            words: ['salom', 'bwaw', 'weda', 'myaw'],
            correctAnswer: ['salom', 'bwaw'],
            hint: 'Greeting + animal'
        }
    ]
};
