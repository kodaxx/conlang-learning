// Unit 3: Questions & Preferences - Lesson 4: Senses
// New words: oko, ore (2 words)
// Concept: Noun/verb duality (eye/see, ear/hear)
// Reviews: Units 1-3

export default {
    id: 'u3-04-senses',
    name: 'Senses',
    unit: 3,
    unitName: 'Questions & Preferences',
    lessonNumber: 4,
    description: 'Learn to see and hear in Globasa!',
    icon: '👁️',
    xpReward: 20,

    teaching: [
        {
            title: 'Oko - Eye / See',
            content: '**Oko** means both "eye" (noun) and "see/watch/look" (verb). Many Globasa words work as both!',
            examples: [
                { globasa: 'Mi oko', english: 'I see / I look' },
                { globasa: 'Mi oko filme', english: 'I watch a movie' },
                { globasa: 'oko', english: 'eye (as a noun)' }
            ]
        },
        {
            title: 'Ore - Ear / Hear',
            content: '**Ore** means both "ear" (noun) and "hear/listen to" (verb). Same pattern as oko!',
            examples: [
                { globasa: 'Mi ore', english: 'I hear / I listen' },
                { globasa: 'Mi ore musika', english: 'I listen to music' },
                { globasa: 'ore', english: 'ear (as a noun)' }
            ]
        },
        {
            title: 'Noun/Verb Words',
            content: 'You\'ve seen this before: yam (meal/eat), danse (dance/dance), lala (song/sing). Context tells you if it\'s a noun or verb!',
            tip: 'This dual nature makes Globasa efficient and flexible'
        }
    ],

    vocabulary: [
        { word: 'oko', translation: 'eye / see, watch, look', phonetic: 'O-ko' },
        { word: 'ore', translation: 'ear / hear, listen to', phonetic: 'O-reh' }
    ],

    reviewVocabulary: ['vole', 'na', 'suki', 'yam', 'danse', 'lala', 'filme', 'musika'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "oko" mean as a verb?',
            options: ['hear', 'see/watch/look', 'taste', 'smell'],
            correctAnswer: 'see/watch/look',
            hint: 'Related to eyes'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi oko filme"',
            correctAnswers: ['I watch a movie', 'I watch movie', 'I see a movie', 'I am watching a movie'],
            hint: 'mi = I, oko = see/watch, filme = movie'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I listen to music"',
            words: ['mi', 'ore', 'musika', 'oko', 'filme'],
            correctAnswer: ['mi', 'ore', 'musika'],
            hint: 'I + hear/listen + music'
        },
        {
            type: 'multiple-choice',
            prompt: 'As a noun, "ore" means:',
            options: ['eye', 'ear', 'nose', 'mouth'],
            correctAnswer: 'ear',
            hint: 'The body part for hearing'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Kam yu vole na oko filme?"',
            correctAnswers: ['Do you want to watch a movie?', 'Do you want to see a movie?'],
            hint: 'Question + you + want + to + watch + movie'
        },
        // SRS Review
        {
            type: 'matching',
            prompt: '[Review] Match noun/verb words',
            pairs: [
                { word: 'oko', translation: 'eye / see' },
                { word: 'ore', translation: 'ear / hear' },
                { word: 'yam', translation: 'meal / eat' },
                { word: 'lala', translation: 'song / sing' }
            ]
        }
    ]
};
