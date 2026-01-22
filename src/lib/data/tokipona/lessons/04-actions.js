export default {
    id: '04-actions',
    name: 'Actions',
    description: 'Learn verbs for doing, going, coming, wanting, and being able',
    icon: '🏃',
    xpReward: 30,

    teaching: [
        {
            title: "Verbs in Toki Pona",
            content: `Toki Pona verbs are simple — most words can act as verbs depending on position!

Now let's learn some common **action words**:`,
            vocabulary: [
                { word: 'pali', translation: 'do, make, work, create' },
                { word: 'tawa', translation: 'go, move, walk, travel' },
                { word: 'kama', translation: 'come, arrive, become, happen' },
                { word: 'wile', translation: 'want, need, desire, must' },
                { word: 'ken', translation: 'can, able, possible, may' }
            ]
        },
        {
            title: "Making and Doing",
            content: `The word **pali** covers making, doing, working, and creating:`,
            examples: [
                { tokipona: "mi pali", english: "I work / I do / I make", breakdown: "" },
                { tokipona: "ona li pali", english: "He/she works", breakdown: "Remember li after ona!" },
                { tokipona: "jan li pali", english: "The person works", breakdown: "" }
            ]
        },
        {
            title: "Coming and Going",
            content: `**tawa** = go, move (away from here)
**kama** = come, arrive (toward here)`,
            examples: [
                { tokipona: "mi tawa", english: "I go / I'm going", breakdown: "" },
                { tokipona: "ona li kama", english: "He/she comes / is coming", breakdown: "" },
                { tokipona: "jan li tawa", english: "The person goes/leaves", breakdown: "" }
            ],
            tip: "tawa = away from speaker, kama = toward speaker"
        },
        {
            title: "Wanting and Needing",
            content: `**wile** expresses wants, needs, and desires. It can also work like "must" or "should":`,
            examples: [
                { tokipona: "mi wile moku", english: "I want to eat / I want food", breakdown: "" },
                { tokipona: "sina wile tawa", english: "You want to go / You need to go", breakdown: "" },
                { tokipona: "ona li wile pali", english: "He/she wants to work", breakdown: "" }
            ],
            tip: "wile + another verb = want to [do that thing]"
        },
        {
            title: "Can and Able",
            content: `**ken** means can, able, possible, or may:`,
            examples: [
                { tokipona: "mi ken toki", english: "I can speak", breakdown: "" },
                { tokipona: "sina ken moku", english: "You can eat / You may eat", breakdown: "" },
                { tokipona: "ona li ken kama", english: "He/she can come", breakdown: "" }
            ],
            tip: "ken + another verb = can [do that thing]"
        }
    ],

    vocabulary: [
        { word: 'pali', translation: 'do, make, work', phonetic: 'PAH-lee' },
        { word: 'tawa', translation: 'go, move, toward', phonetic: 'TAH-wah' },
        { word: 'kama', translation: 'come, arrive, become', phonetic: 'KAH-mah' },
        { word: 'wile', translation: 'want, need, must', phonetic: 'WEE-leh' },
        { word: 'ken', translation: 'can, able, possible', phonetic: 'kehn' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "pali" mean?',
            options: ['eat', 'work/do/make', 'go', 'come'],
            correctAnswer: 'work/do/make',
            hint: 'Think of doing or making things'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "wile" mean?',
            options: ['can', 'go', 'want/need', 'come'],
            correctAnswer: 'want/need',
            hint: 'Expressing desire'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "ken" mean?',
            options: ['want', 'can/able', 'must', 'go'],
            correctAnswer: 'can/able',
            hint: 'Expressing ability'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi wile moku"',
            correctAnswers: ['I want to eat', 'I want food', 'I need to eat', 'I\'m hungry'],
            hint: 'mi = I, wile = want, moku = eat'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "sina ken tawa"',
            correctAnswers: ['you can go', 'you may go', 'you are able to go'],
            hint: 'sina = you, ken = can, tawa = go'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ona li pali"',
            correctAnswers: ['he works', 'she works', 'they work', 'he is working', 'she is working'],
            hint: 'ona = he/she/they, li = (marker), pali = work'
        },
        {
            type: 'fill-blank',
            prompt: 'mi ___ moku. (I want to eat)',
            options: ['ken', 'wile', 'pali', 'tawa'],
            correctAnswer: 'wile',
            hint: 'Which word means "want"?'
        },
        {
            type: 'fill-blank',
            prompt: 'sina ___ toki. (You can speak)',
            options: ['wile', 'ken', 'pali', 'kama'],
            correctAnswer: 'ken',
            hint: 'Which word means "can"?'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I go" or "I\'m going"',
            words: ['mi', 'tawa', 'kama', 'li', 'pali'],
            correctAnswer: ['mi', 'tawa'],
            hint: 'I + go (no li after mi!)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "She wants to come"',
            words: ['ona', 'li', 'wile', 'kama', 'tawa'],
            correctAnswer: ['ona', 'li', 'wile', 'kama'],
            hint: 'she + li + want + come'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "I work"',
            correctAnswers: ['mi pali'],
            hint: 'I + work'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "They can eat"',
            correctAnswers: ['ona li ken moku'],
            hint: 'they + li + can + eat'
        },
        {
            type: 'multiple-choice',
            prompt: 'What\'s the difference between "tawa" and "kama"?',
            options: ['They mean the same', 'tawa=go away, kama=come toward', 'tawa=come, kama=go', 'No difference'],
            correctAnswer: 'tawa=go away, kama=come toward',
            hint: 'Direction matters!'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The person works"',
            words: ['jan', 'li', 'pali', 'mi', 'wile'],
            correctAnswer: ['jan', 'li', 'pali'],
            hint: 'person + li + work'
        }
    ]
};
