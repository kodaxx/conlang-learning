// Unit 3: Questions & Preferences - Lesson 6: Drinks 2 & Entertainment
// New words: cay, jusu, filme, musika (4 words)
// Concept: More beverages and entertainment vocabulary
// Reviews: Units 1-3

export default {
    id: 'u3-06-drinks-entertainment',
    name: 'Drinks & Entertainment',
    unit: 3,
    unitName: 'Questions & Preferences',
    lessonNumber: 6,
    description: 'More drinks and entertainment words!',
    icon: '🎬',
    xpReward: 20,

    teaching: [
        {
            title: 'Cay - Tea',
            content: '**Cay** means "tea". Another international beverage!',
            examples: [
                { globasa: 'Mi suki cay', english: 'I like tea' },
                { globasa: 'Kam yu vole cay?', english: 'Do you want tea?' }
            ]
        },
        {
            title: 'Jusu - Juice',
            content: '**Jusu** means "juice". Great with fruits!',
            examples: [
                { globasa: 'Mi glu jusu', english: 'I drink juice' },
                { globasa: 'Nini suki jusu', english: 'The child likes juice' }
            ]
        },
        {
            title: 'Filme & Musika',
            content: '**Filme** means "film/movie" and **musika** means "music". Perfect for talking about entertainment!',
            examples: [
                { globasa: 'Mi oko filme', english: 'I watch a movie' },
                { globasa: 'Yu ore musika', english: 'You listen to music' }
            ]
        }
    ],

    vocabulary: [
        { word: 'cay', translation: 'tea', phonetic: 'chay' },
        { word: 'jusu', translation: 'juice', phonetic: 'JOO-soo' },
        { word: 'filme', translation: 'film, movie', phonetic: 'FIL-meh' },
        { word: 'musika', translation: 'music', phonetic: 'moo-SEE-ka' }
    ],

    reviewVocabulary: ['glu', 'sui', 'kafe', 'oko', 'ore', 'suki', 'nini'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "cay" mean?',
            options: ['coffee', 'water', 'tea', 'juice'],
            correctAnswer: 'tea',
            hint: 'A hot beverage from leaves'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Me glu jusu"',
            correctAnswers: ['I drink juice', 'I am drinking juice'],
            hint: 'mi = I, glu = drink, jusu = juice'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I watch a movie"',
            words: ['mi', 'oko', 'filme', 'ore', 'musika'],
            correctAnswer: ['mi', 'oko', 'filme'],
            hint: 'I + see/watch + movie'
        },
        {
            type: 'matching',
            prompt: 'Match beverages',
            pairs: [
                { word: 'sui', translation: 'water' },
                { word: 'kafe', translation: 'coffee' },
                { word: 'cay', translation: 'tea' },
                { word: 'jusu', translation: 'juice' }
            ]
        },
        {
            type: 'translation',
            prompt: 'Translate: "Yu ore musika"',
            correctAnswers: ['You listen to music', 'You hear music'],
            hint: 'yu = you, ore = hear/listen, musika = music'
        },
        // SRS Review
        {
            type: 'multiple-choice',
            prompt: '[Review] How do you say "I don\'t like coffee"?',
            options: ['Mi suki kafe', 'Mi no suki kafe', 'No mi suki kafe', 'Mi suki no kafe'],
            correctAnswer: 'Mi no suki kafe',
            hint: 'Put "no" before the verb'
        }
    ]
};
