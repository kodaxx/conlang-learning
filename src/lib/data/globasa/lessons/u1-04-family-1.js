// Unit 1: Foundations - Lesson 4: Family 1
// New words: nini, sodar (2 words - smaller set as concepts are important)
// Concept: Gender-neutral family terms
// Reviews: Lessons 1.1-1.3

export default {
    id: 'u1-04-family-1',
    name: 'Children & Siblings',
    unit: 1,
    unitName: 'Foundations',
    lessonNumber: 4,
    description: 'Learn gender-neutral words for children and siblings.',
    icon: '👧',
    xpReward: 15,

    teaching: [
        {
            title: 'Nini - Child',
            content: '**Nini** means "child" - boy, girl, or any kid! In Globasa, we don\'t specify gender unless needed.',
            examples: [
                { globasa: 'nini', english: 'child / children / kid(s)' },
                { globasa: 'Salom, nini!', english: 'Hello, child!' }
            ]
        },
        {
            title: 'Sodar - Sibling',
            content: '**Sodar** means "sibling" - brother or sister. Again, no gender specified by default!',
            examples: [
                { globasa: 'sodar', english: 'sibling(s) / brother(s) / sister(s)' }
            ],
            tip: 'Later, you\'ll learn how to specify gender when needed using prefixes'
        }
    ],

    vocabulary: [
        { word: 'nini', translation: 'child, kid, boy/girl', phonetic: 'NEE-nee' },
        { word: 'sodar', translation: 'sibling, brother/sister', phonetic: 'SO-dar' }
    ],

    reviewVocabulary: ['salom', 'weda', 'xanti', 'bwaw', 'myaw', 'piu', 'uma', 'mahi', 'doste'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "nini" mean?',
            options: ['friend', 'child', 'sibling', 'dog'],
            correctAnswer: 'child',
            hint: 'A young person'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "sibling" in Globasa?',
            options: ['nini', 'doste', 'sodar', 'mahi'],
            correctAnswer: 'sodar',
            hint: 'A brother or sister'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Xanti, sodar!"',
            correctAnswers: ['Peace, sibling!', 'Hello, sibling!', 'Goodbye, sibling!', 'Hi, brother!', 'Hi, sister!', 'Peace, brother!', 'Peace, sister!'],
            hint: 'Greeting + family member'
        },
        // SRS Review - animals
        {
            type: 'multiple-choice',
            prompt: '[Review] What is "myaw"?',
            options: ['dog', 'cat', 'horse', 'fish'],
            correctAnswer: 'cat',
            hint: 'From Lesson 2'
        },
        {
            type: 'matching',
            prompt: 'Match people words',
            pairs: [
                { word: 'nini', translation: 'child' },
                { word: 'sodar', translation: 'sibling' },
                { word: 'doste', translation: 'friend' }
            ]
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Hello, child!"',
            words: ['salom', 'nini', 'weda', 'sodar'],
            correctAnswer: ['salom', 'nini'],
            hint: 'Greeting + young person'
        }
    ]
};
