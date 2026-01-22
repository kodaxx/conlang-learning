// Unit 2: Actions & Food - Lesson 1: Movement Verbs
// New words: ergo, pawbu, anda (3 words)
// Concept: Work and movement verbs
// Reviews: Unit 1 verbs

export default {
    id: 'u2-01-movement-verbs',
    name: 'Movement Verbs',
    unit: 2,
    unitName: 'Actions & Food',
    lessonNumber: 1,
    description: 'Learn to work, run, and walk in Globasa!',
    icon: '🏃',
    xpReward: 20,

    teaching: [
        {
            title: 'Ergo - Work',
            content: '**Ergo** means "work". Just like the verbs you learned in Unit 1, it never changes form!',
            examples: [
                { globasa: 'Mi ergo', english: 'I work / I am working' },
                { globasa: 'Papa ergo', english: 'Dad works' }
            ]
        },
        {
            title: 'Pawbu - Run',
            content: '**Pawbu** means "run". Notice how easy it is to make sentences!',
            examples: [
                { globasa: 'Mi pawbu', english: 'I run / I am running' },
                { globasa: 'Bwaw pawbu', english: 'The dog runs' }
            ]
        },
        {
            title: 'Anda - Walk',
            content: '**Anda** means "walk". You now know running AND walking!',
            examples: [
                { globasa: 'Mi anda', english: 'I walk / I am walking' },
                { globasa: 'Nini anda', english: 'The child walks' }
            ]
        }
    ],

    vocabulary: [
        { word: 'ergo', translation: 'work', phonetic: 'ER-go' },
        { word: 'pawbu', translation: 'run', phonetic: 'PAW-boo' },
        { word: 'anda', translation: 'walk', phonetic: 'AN-da' }
    ],

    reviewVocabulary: ['mi', 'somno', 'doxo', 'danse', 'lala', 'yuxi', 'papa', 'nini', 'bwaw'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "ergo" mean?',
            options: ['run', 'walk', 'work', 'sleep'],
            correctAnswer: 'work',
            hint: 'Something you do at a job'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi pawbu"',
            correctAnswers: ['I run', 'I am running', 'I\'m running'],
            hint: 'mi = I, pawbu = run'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The dog walks"',
            words: ['bwaw', 'anda', 'pawbu', 'mi'],
            correctAnswer: ['bwaw', 'anda'],
            hint: 'Subject + verb'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "walk" in Globasa?',
            options: ['pawbu', 'anda', 'ergo', 'somno'],
            correctAnswer: 'anda',
            hint: 'A slower form of movement'
        },
        // SRS Review
        {
            type: 'translation',
            prompt: '[Review] Translate: "Mi lala"',
            correctAnswers: ['I sing', 'I am singing'],
            hint: 'From Unit 1'
        },
        {
            type: 'matching',
            prompt: 'Match ALL movement verbs',
            pairs: [
                { word: 'pawbu', translation: 'run' },
                { word: 'anda', translation: 'walk' },
                { word: 'danse', translation: 'dance' }
            ]
        }
    ]
};
