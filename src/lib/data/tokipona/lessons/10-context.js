export default {
    id: '10-context',
    name: 'Context with la',
    description: 'Learn to express time, conditions, and context',
    icon: '⏰',
    xpReward: 30,

    teaching: [
        {
            title: "The la Particle",
            content: `The particle **la** is used to set context at the beginning of a sentence.

The pattern is: **[context] la [main sentence]**

Think of it as: "In the context of X, ..."`,
            vocabulary: [
                { word: 'la', translation: '(context separator)' },
                { word: 'tenpo', translation: 'time, moment, occasion' },
                { word: 'open', translation: 'begin, start, open, turn on' },
                { word: 'pini', translation: 'end, finish, past, close' }
            ]
        },
        {
            title: "Time: tenpo",
            content: `**tenpo** means time. Combine it with other words:`,
            examples: [
                { tokipona: "tenpo ni", english: "now / this time", breakdown: "time + this" },
                { tokipona: "tenpo pini", english: "the past / before", breakdown: "time + finished" },
                { tokipona: "tenpo kama", english: "the future / later", breakdown: "time + coming" },
                { tokipona: "tenpo suno", english: "day / daytime", breakdown: "time + sun" }
            ],
            tip: "tenpo pini = past (ended time), tenpo kama = future (coming time)"
        },
        {
            title: "Using la for Time",
            content: `Put time expressions before **la** to set when something happens:`,
            examples: [
                { tokipona: "tenpo ni la mi moku", english: "Now, I eat / Currently I'm eating", breakdown: "time-this + la + I eat" },
                { tokipona: "tenpo pini la mi pali", english: "Before, I worked / In the past, I worked", breakdown: "time-past + la + I work" },
                { tokipona: "tenpo kama la mi tawa", english: "Later, I will go / In the future, I'll go", breakdown: "time-future + la + I go" }
            ]
        },
        {
            title: "If-Then with la",
            content: `**la** can also express "if...then":`,
            examples: [
                { tokipona: "sina pona la mi pona", english: "If you're good, I'm good", breakdown: "you good + la + I good" },
                { tokipona: "suno li lon la mi tawa", english: "If the sun is out, I go", breakdown: "sun exists + la + I go" },
                { tokipona: "sina wile la o kama", english: "If you want, come!", breakdown: "you want + la + o come" }
            ]
        },
        {
            title: "Beginning and Ending",
            content: `**open** = begin, start, turn on
**pini** = end, finish, stop`,
            examples: [
                { tokipona: "mi open pali", english: "I start working", breakdown: "" },
                { tokipona: "ona li pini moku", english: "He/she finishes eating", breakdown: "" },
                { tokipona: "tenpo pini la ni li open", english: "Before, this started", breakdown: "" }
            ]
        }
    ],

    vocabulary: [
        { word: 'la', translation: '(context separator)', phonetic: 'lah' },
        { word: 'tenpo', translation: 'time, moment', phonetic: 'TEHN-poh' },
        { word: 'open', translation: 'begin, start, open', phonetic: 'OH-pehn' },
        { word: 'pini', translation: 'end, finish, past', phonetic: 'PEE-nee' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What is "la" used for?',
            options: ['Objects', 'Commands', 'Setting context', 'Questions'],
            correctAnswer: 'Setting context',
            hint: 'Putting something at the start of a sentence'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "tenpo" mean?',
            options: ['place', 'time', 'person', 'thing'],
            correctAnswer: 'time',
            hint: 'Clock and calendar'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "the past" or "before"?',
            options: ['tenpo ni', 'tenpo kama', 'tenpo pini', 'tenpo suno'],
            correctAnswer: 'tenpo pini',
            hint: 'time + ended/finished'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "tenpo ni la mi moku"',
            correctAnswers: ['now I eat', 'right now I eat', 'currently I am eating', 'now I\'m eating'],
            hint: 'time-now + la + I eat'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "tenpo kama la ona li tawa"',
            correctAnswers: ['later he will go', 'in the future she will go', 'later they go', 'in the future he goes'],
            hint: 'time-future + la + he/she goes'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "sina pona la mi pona"',
            correctAnswers: ['if you\'re good, I\'m good', 'if you are good, I am good', 'when you\'re good, I\'m good'],
            hint: 'you good + la + I good (conditional)'
        },
        {
            type: 'fill-blank',
            prompt: 'tenpo ni ___ mi moku. (Now I eat)',
            options: ['li', 'e', 'la', 'o'],
            correctAnswer: 'la',
            hint: 'Context separator'
        },
        {
            type: 'fill-blank',
            prompt: 'mi ___ pali. (I start working)',
            options: ['pini', 'open', 'la', 'tenpo'],
            correctAnswer: 'open',
            hint: 'To begin'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Now I am good"',
            words: ['tenpo', 'ni', 'la', 'mi', 'pona', 'li'],
            correctAnswer: ['tenpo', 'ni', 'la', 'mi', 'pona'],
            hint: 'time-this + la + I good'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Before, she worked"',
            words: ['tenpo', 'pini', 'la', 'ona', 'li', 'pali'],
            correctAnswer: ['tenpo', 'pini', 'la', 'ona', 'li', 'pali'],
            hint: 'time-past + la + she + li + work'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "Now I want to sleep"',
            correctAnswers: ['tenpo ni la mi wile lape'],
            hint: 'time-this + la + I want sleep'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "I finish eating"',
            correctAnswers: ['mi pini moku'],
            hint: 'I + finish + eat'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "open" mean?',
            options: ['close', 'begin/start', 'end', 'time'],
            correctAnswer: 'begin/start',
            hint: 'Starting something'
        }
    ]
};
