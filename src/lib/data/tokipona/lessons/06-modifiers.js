export default {
    id: '06-modifiers',
    name: 'Modifiers',
    description: 'Learn adjectives and how they modify nouns in Toki Pona',
    icon: '🎨',
    xpReward: 25,

    teaching: [
        {
            title: "Modifiers in Toki Pona",
            content: `In Toki Pona, **modifiers always come AFTER** the word they describe.

This is the opposite of English where we say "big house" — in Toki Pona it's "house big"!`,
            vocabulary: [
                { word: 'lili', translation: 'small, little, young' },
                { word: 'suli', translation: 'big, large, important' },
                { word: 'sin', translation: 'new, fresh, another' },
                { word: 'mute', translation: 'many, much, very' },
                { word: 'ale', translation: 'all, everything, 100' }
            ]
        },
        {
            title: "Size: lili and suli",
            content: `**lili** = small, little, young
**suli** = big, large, important`,
            examples: [
                { tokipona: "jan lili", english: "small person / child", breakdown: "person + small" },
                { tokipona: "tomo suli", english: "big building", breakdown: "building + big" },
                { tokipona: "moku lili", english: "small food / snack", breakdown: "food + small" }
            ],
            tip: "lili can mean 'young' for people, so jan lili often means 'child'"
        },
        {
            title: "New and Many",
            content: `**sin** = new, fresh, another
**mute** = many, much, very, a lot`,
            examples: [
                { tokipona: "toki sin", english: "new language / new words", breakdown: "language + new" },
                { tokipona: "jan mute", english: "many people", breakdown: "people + many" },
                { tokipona: "moku mute", english: "much food / a lot of food", breakdown: "food + much" }
            ]
        },
        {
            title: "Everything: ale",
            content: `**ale** (or **ali**) means all, every, everything, the universe!`,
            examples: [
                { tokipona: "jan ale", english: "all people / everyone", breakdown: "people + all" },
                { tokipona: "ale li pona", english: "Everything is good / All is well", breakdown: "" },
                { tokipona: "mi sona e ale", english: "I know everything", breakdown: "" }
            ],
            tip: "ale by itself can mean 'everything' or 'the universe'"
        },
        {
            title: "Stacking Modifiers",
            content: `You can use multiple modifiers! They come one after another:`,
            examples: [
                { tokipona: "jan pona mute", english: "many good people / many friends", breakdown: "person + good + many" },
                { tokipona: "tomo suli sin", english: "new big building", breakdown: "building + big + new" },
                { tokipona: "moku pona lili", english: "small good food", breakdown: "food + good + small" }
            ],
            tip: "Each modifier describes the whole phrase before it: jan pona (friend) + mute (many) = many friends"
        }
    ],

    vocabulary: [
        { word: 'lili', translation: 'small, little, young', phonetic: 'LEE-lee' },
        { word: 'suli', translation: 'big, large, important', phonetic: 'SOO-lee' },
        { word: 'sin', translation: 'new, fresh, another', phonetic: 'seen' },
        { word: 'mute', translation: 'many, much, very', phonetic: 'MOO-teh' },
        { word: 'ale', translation: 'all, everything', phonetic: 'AH-leh' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "lili" mean?',
            options: ['big', 'small', 'new', 'many'],
            correctAnswer: 'small',
            hint: 'The opposite of suli'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "suli" mean?',
            options: ['small', 'new', 'big', 'all'],
            correctAnswer: 'big',
            hint: 'The opposite of lili'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "mute" mean?',
            options: ['quiet', 'many/much', 'new', 'small'],
            correctAnswer: 'many/much',
            hint: 'A large quantity'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "jan lili"',
            correctAnswers: ['small person', 'child', 'little person', 'kid', 'young person'],
            hint: 'person + small'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "tomo suli"',
            correctAnswers: ['big house', 'big building', 'large house', 'large building'],
            hint: 'building + big'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "jan pona mute"',
            correctAnswers: ['many friends', 'many good people', 'a lot of friends'],
            hint: 'person + good (=friend) + many'
        },
        {
            type: 'fill-blank',
            prompt: 'tomo ___. (big building)',
            options: ['lili', 'suli', 'sin', 'mute'],
            correctAnswer: 'suli',
            hint: 'Which word means big?'
        },
        {
            type: 'fill-blank',
            prompt: 'moku ___. (small food / snack)',
            options: ['suli', 'lili', 'mute', 'ale'],
            correctAnswer: 'lili',
            hint: 'Which word means small?'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "many people"',
            words: ['jan', 'mute', 'lili', 'pona'],
            correctAnswer: ['jan', 'mute'],
            hint: 'people + many'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "new language"',
            words: ['toki', 'sin', 'suli', 'lili'],
            correctAnswer: ['toki', 'sin'],
            hint: 'language + new'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "all people" or "everyone"',
            correctAnswers: ['jan ale', 'jan ali'],
            hint: 'people + all'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "small house"',
            correctAnswers: ['tomo lili'],
            hint: 'house + small'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which means "child" in Toki Pona?',
            options: ['lili jan', 'jan lili', 'jan suli', 'suli jan'],
            correctAnswer: 'jan lili',
            hint: 'Modifiers come AFTER in Toki Pona'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Everything is good"',
            words: ['ale', 'li', 'pona', 'ike', 'mi'],
            correctAnswer: ['ale', 'li', 'pona'],
            hint: 'everything + li + good'
        }
    ]
};
