// Unit 1: Foundations - Lesson 1: Greetings
// New words: salom, weda, xanti (3 words)
// Concept: Basic greetings, word "xanti" as peace/hello/bye

export default {
    id: 'u1-01-greetings',
    name: 'Greetings',
    unit: 1,
    unitName: 'Foundations',
    lessonNumber: 1,
    description: 'Learn to say hello and goodbye in Globasa!',
    icon: '👋',
    xpReward: 15,

    teaching: [
        {
            title: 'Salom!',
            content: 'The simplest way to say **hello** in Globasa is **salom**. This word comes from Arabic and Hebrew greetings meaning "peace".',
            examples: [
                { globasa: 'Salom!', english: 'Hello!' }
            ]
        },
        {
            title: 'Saying Goodbye',
            content: 'To say **goodbye**, use **weda**. It\'s short and easy to remember!',
            examples: [
                { globasa: 'Weda!', english: 'Goodbye!' }
            ]
        },
        {
            title: 'Xanti - The Peaceful Greeting',
            content: 'The word **xanti** means "peace" but can also be used as both **hello** and **goodbye**. It\'s like saying "peace be with you".',
            examples: [
                { globasa: 'Xanti!', english: 'Peace! / Hello! / Goodbye!' }
            ],
            tip: 'Xanti is versatile - use it when arriving or leaving!'
        }
    ],

    vocabulary: [
        { word: 'salom', translation: 'hello, hi', phonetic: 'sa-LOM' },
        { word: 'weda', translation: 'goodbye, bye', phonetic: 'WEH-da' },
        { word: 'xanti', translation: 'peace (also: hello, goodbye)', phonetic: 'SHAN-tee' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'How do you say "hello" in Globasa?',
            options: ['weda', 'salom', 'xanti', 'bon'],
            correctAnswer: 'salom',
            hint: 'This word comes from Arabic/Hebrew'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "weda" mean?',
            options: ['hello', 'goodbye', 'peace', 'friend'],
            correctAnswer: 'goodbye',
            hint: 'You use this when leaving'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "Xanti!"',
            correctAnswers: ['Peace!', 'Hello!', 'Goodbye!', 'peace', 'hello', 'goodbye'],
            hint: 'This word has multiple meanings'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which word can mean BOTH hello AND goodbye?',
            options: ['salom', 'weda', 'xanti', 'bon'],
            correctAnswer: 'xanti',
            hint: 'It literally means "peace"'
        },
        {
            type: 'translation',
            prompt: 'How do you say "Goodbye!" in Globasa?',
            correctAnswers: ['Weda!', 'weda', 'Xanti!', 'xanti'],
            hint: 'There are two possible answers'
        },
        {
            type: 'matching',
            prompt: 'Match the greetings',
            pairs: [
                { word: 'salom', translation: 'hello' },
                { word: 'weda', translation: 'goodbye' },
                { word: 'xanti', translation: 'peace' }
            ]
        }
    ]
};
