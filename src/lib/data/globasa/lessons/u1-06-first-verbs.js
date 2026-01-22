// Unit 1: Foundations - Lesson 6: First Verbs
// New words: mi, somno, doxo (3 words)
// Concept: Pronoun "I", first verbs, no conjugation
// Reviews: Lessons 1.1-1.5

export default {
    id: 'u1-06-first-verbs',
    name: 'I + First Verbs',
    unit: 1,
    unitName: 'Foundations',
    lessonNumber: 6,
    description: 'Say "I" and learn your first action verbs!',
    icon: '😴',
    xpReward: 20,

    teaching: [
        {
            title: 'Mi - I',
            content: '**Mi** is the word for "I" in Globasa. It\'s short and simple!',
            examples: [
                { globasa: 'mi', english: 'I / me' }
            ],
            tip: 'Mi works as both subject "I" and object "me"'
        },
        {
            title: 'No Conjugation!',
            content: 'Here\'s the **best news**: Globasa verbs **never change form**! The verb stays the same no matter who does the action.',
            examples: [
                { globasa: 'Mi somno', english: 'I sleep' },
                { globasa: 'Nini somno', english: 'The child sleeps' }
            ],
            tip: 'No need to memorize different verb forms - just learn one!'
        },
        {
            title: 'Somno & Doxo',
            content: '**Somno** means "sleep" and **doxo** means "read". Simple sentences: just combine mi + verb!',
            examples: [
                { globasa: 'Mi somno', english: 'I sleep / I am sleeping' },
                { globasa: 'Mi doxo', english: 'I read / I am reading' }
            ]
        }
    ],

    vocabulary: [
        { word: 'mi', translation: 'I, me', phonetic: 'mee' },
        { word: 'somno', translation: 'sleep', phonetic: 'SOM-no' },
        { word: 'doxo', translation: 'read', phonetic: 'DO-kso' }
    ],

    reviewVocabulary: ['matre', 'patre', 'nini', 'doste', 'bwaw', 'myaw'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I" in Globasa?',
            options: ['yu', 'mi', 'te', 'imi'],
            correctAnswer: 'mi',
            hint: 'The first-person pronoun'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi somno"',
            correctAnswers: ['I sleep', 'I am sleeping', 'I\'m sleeping'],
            hint: 'mi = I, somno = sleep'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "doxo" mean?',
            options: ['sleep', 'read', 'eat', 'run'],
            correctAnswer: 'read',
            hint: 'An activity with books'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I read"',
            words: ['mi', 'doxo', 'somno', 'nini'],
            correctAnswer: ['mi', 'doxo'],
            hint: 'Subject + verb'
        },
        // Concept check
        {
            type: 'multiple-choice',
            prompt: 'In Globasa, verbs change form depending on who does the action.',
            options: ['True', 'False'],
            correctAnswer: 'False',
            hint: 'This is one of Globasa\'s simplest features!'
        },
        // SRS Review
        {
            type: 'matching',
            prompt: '[Review] Match the family words',
            pairs: [
                { word: 'mama', translation: 'mom' },
                { word: 'papa', translation: 'dad' },
                { word: 'nini', translation: 'child' },
                { word: 'sodar', translation: 'sibling' }
            ]
        }
    ]
};
