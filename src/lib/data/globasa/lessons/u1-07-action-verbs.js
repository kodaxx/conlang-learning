// Unit 1: Foundations - Lesson 7: Action Verbs
// New words: danse, lala, yuxi (3 words)
// Concept: More verbs, noun/verb words
// Reviews: Lessons 1.1-1.6

export default {
    id: 'u1-07-action-verbs',
    name: 'Action Verbs',
    unit: 1,
    unitName: 'Foundations',
    lessonNumber: 7,
    description: 'Dance, sing, and play in Globasa!',
    icon: '💃',
    xpReward: 20,

    teaching: [
        {
            title: 'Danse - Dance',
            content: '**Danse** means "dance" - both "to dance" (verb) and "a dance" (noun)! Many Globasa words work as both nouns and verbs.',
            examples: [
                { globasa: 'Mi danse', english: 'I dance / I am dancing' },
                { globasa: 'danse', english: 'dance (noun or verb)' }
            ]
        },
        {
            title: 'Lala - Sing',
            content: '**Lala** means "sing" or "song". Notice how the word sounds musical!',
            examples: [
                { globasa: 'Mi lala', english: 'I sing / I am singing' },
                { globasa: 'lala', english: 'song / sing' }
            ]
        },
        {
            title: 'Yuxi - Play',
            content: '**Yuxi** means "play" (as in games or fun activities).',
            examples: [
                { globasa: 'Mi yuxi', english: 'I play / I am playing' },
                { globasa: 'Nini yuxi', english: 'The child plays' }
            ],
            tip: 'Many words in Globasa can be either nouns or verbs depending on context'
        }
    ],

    vocabulary: [
        { word: 'danse', translation: 'dance (verb/noun)', phonetic: 'DAN-seh' },
        { word: 'lala', translation: 'sing / song', phonetic: 'LA-la' },
        { word: 'yuxi', translation: 'play', phonetic: 'YOO-shee' }
    ],

    reviewVocabulary: ['mi', 'somno', 'doxo', 'nini', 'mama', 'papa', 'bwaw'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "danse" mean?',
            options: ['sleep', 'dance', 'sing', 'read'],
            correctAnswer: 'dance',
            hint: 'A rhythmic movement activity'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi lala"',
            correctAnswers: ['I sing', 'I am singing', 'I\'m singing'],
            hint: 'mi = I, lala = sing'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The child plays"',
            words: ['nini', 'yuxi', 'mi', 'somno'],
            correctAnswer: ['nini', 'yuxi'],
            hint: 'Subject + verb'
        },
        {
            type: 'multiple-choice',
            prompt: 'In Globasa, "lala" can mean:',
            options: ['Only the verb "sing"', 'Only the noun "song"', 'Both "sing" and "song"', 'Neither'],
            correctAnswer: 'Both "sing" and "song"',
            hint: 'Many Globasa words work as both nouns and verbs'
        },
        // SRS Review
        {
            type: 'translation',
            prompt: '[Review] Translate: "Mi doxo"',
            correctAnswers: ['I read', 'I am reading', 'I\'m reading'],
            hint: 'From Lesson 6'
        },
        {
            type: 'matching',
            prompt: 'Match all the verbs you\'ve learned',
            pairs: [
                { word: 'somno', translation: 'sleep' },
                { word: 'doxo', translation: 'read' },
                { word: 'danse', translation: 'dance' },
                { word: 'lala', translation: 'sing' },
                { word: 'yuxi', translation: 'play' }
            ]
        }
    ]
};
