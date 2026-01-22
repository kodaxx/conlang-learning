// Unit 1: Foundations - Lesson 3: Animals 2 + Friend
// New words: uma, mahi, doste (3 words)
// Concept: More animals, friend as gender-neutral
// Reviews: Lessons 1.1-1.2

export default {
    id: 'u1-03-animals-2',
    name: 'Animals 2 & Friend',
    unit: 1,
    unitName: 'Foundations',
    lessonNumber: 3,
    description: 'More animals and your first people word!',
    icon: '🐴',
    xpReward: 15,

    teaching: [
        {
            title: 'Uma - Horse',
            content: 'The word for horse is **uma**. Remember, it can mean one horse or many horses!',
            examples: [
                { globasa: 'uma', english: 'horse / horses' }
            ]
        },
        {
            title: 'Mahi - Fish',
            content: 'Fish in Globasa is **mahi**. Whether it\'s swimming or on a plate, it\'s still mahi!',
            examples: [
                { globasa: 'mahi', english: 'fish / fishes' }
            ]
        },
        {
            title: 'Doste - Friend',
            content: '**Doste** means "friend" - and it\'s gender-neutral! Whether male, female, or non-binary, a friend is always doste.',
            examples: [
                { globasa: 'Salom, doste!', english: 'Hello, friend!' }
            ],
            tip: 'Most Globasa words for people are gender-neutral by default'
        }
    ],

    vocabulary: [
        { word: 'uma', translation: 'horse(s)', phonetic: 'OO-ma' },
        { word: 'mahi', translation: 'fish(es)', phonetic: 'MA-hee' },
        { word: 'doste', translation: 'friend(s)', phonetic: 'DOS-teh' }
    ],

    reviewVocabulary: ['salom', 'weda', 'xanti', 'bwaw', 'myaw', 'piu'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "uma" mean?',
            options: ['dog', 'fish', 'horse', 'bird'],
            correctAnswer: 'horse',
            hint: 'A large animal you can ride'
        },
        {
            type: 'translation',
            prompt: 'Translate: "mahi"',
            correctAnswers: ['fish', 'fishes', 'a fish'],
            hint: 'It swims in water'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "friend" in Globasa?',
            options: ['doste', 'uma', 'mahi', 'nini'],
            correctAnswer: 'doste',
            hint: 'Someone you like spending time with'
        },
        // SRS Review
        {
            type: 'matching',
            prompt: 'Match all the animals',
            pairs: [
                { word: 'bwaw', translation: 'dog' },
                { word: 'myaw', translation: 'cat' },
                { word: 'piu', translation: 'bird' },
                { word: 'uma', translation: 'horse' },
                { word: 'mahi', translation: 'fish' }
            ]
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Goodbye, friend!"',
            words: ['weda', 'doste', 'salom', 'bwaw'],
            correctAnswer: ['weda', 'doste'],
            hint: 'Farewell + person'
        },
        {
            type: 'translation',
            prompt: '[Review] What does "xanti" mean?',
            correctAnswers: ['peace', 'hello', 'goodbye', 'Peace', 'Hello', 'Goodbye'],
            hint: 'A versatile greeting from Lesson 1'
        }
    ]
};
