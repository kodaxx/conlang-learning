export default {
    id: '15-mastery',
    name: 'Mastery',
    description: 'Put it all together with advanced vocabulary and full sentences',
    icon: '🏆',
    xpReward: 50,

    teaching: [
        {
            title: "sina sona e toki pona!",
            content: `Congratulations! You've learned the core of Toki Pona!

Let's add some final vocabulary and practice putting everything together.`,
            vocabulary: [
                { word: 'musi', translation: 'fun, play, game, art' },
                { word: 'soweli', translation: 'animal, mammal' },
                { word: 'waso', translation: 'bird, flying creature' },
                { word: 'kala', translation: 'fish, sea creature' },
                { word: 'akesi', translation: 'reptile, amphibian' }
            ]
        },
        {
            title: "Fun and Play: musi",
            content: `**musi** covers fun, play, games, entertainment, and art:`,
            examples: [
                { tokipona: "mi musi", english: "I play / I'm having fun", breakdown: "" },
                { tokipona: "ijo musi", english: "toy / game", breakdown: "thing + fun" },
                { tokipona: "tomo musi", english: "theater / game room", breakdown: "building + fun" },
                { tokipona: "kalama musi", english: "music", breakdown: "sound + fun" }
            ]
        },
        {
            title: "Animals",
            content: `Toki Pona groups animals by type:`,
            examples: [
                { tokipona: "soweli", english: "land animal, mammal (dog, cat, etc.)", breakdown: "" },
                { tokipona: "waso", english: "bird, flying animal", breakdown: "" },
                { tokipona: "kala", english: "fish, water animal", breakdown: "" },
                { tokipona: "akesi", english: "reptile, non-fluffy animal", breakdown: "" }
            ],
            tip: "For specific animals, add modifiers: soweli lili = small animal (mouse, rabbit)"
        },
        {
            title: "More Useful Words",
            content: `Some final essential words:`,
            vocabulary: [
                { word: 'poki', translation: 'container, box, cup' },
                { word: 'lipu', translation: 'paper, document, book' },
                { word: 'len', translation: 'cloth, clothing, cover' },
                { word: 'seli', translation: 'fire, heat, hot' },
                { word: 'lete', translation: 'cold, cool, raw' }
            ],
            examples: [
                { tokipona: "poki telo", english: "cup / water container", breakdown: "" },
                { tokipona: "lipu sona", english: "book (knowledge paper)", breakdown: "" },
                { tokipona: "len mi", english: "my clothes", breakdown: "" }
            ]
        },
        {
            title: "Full Sentences",
            content: `Let's practice complete thoughts using everything you've learned:`,
            examples: [
                { tokipona: "tenpo pini la soweli mi li moku e kasi", english: "Before, my pet ate a plant", breakdown: "time-past + la + animal-my + li + eat + e + plant" },
                { tokipona: "mi wile tawa ma kasi kepeken tomo tawa", english: "I want to go to the forest by car", breakdown: "" },
                { tokipona: "jan pi sona mute li pali e lipu sin", english: "The expert creates a new book", breakdown: "" }
            ]
        }
    ],

    vocabulary: [
        { word: 'musi', translation: 'fun, play, game', phonetic: 'MOO-see' },
        { word: 'soweli', translation: 'animal, mammal', phonetic: 'soh-WEH-lee' },
        { word: 'waso', translation: 'bird', phonetic: 'WAH-soh' },
        { word: 'kala', translation: 'fish', phonetic: 'KAH-lah' },
        { word: 'akesi', translation: 'reptile', phonetic: 'ah-KEH-see' },
        { word: 'poki', translation: 'container, box', phonetic: 'POH-kee' },
        { word: 'lipu', translation: 'paper, book', phonetic: 'LEE-poo' },
        { word: 'len', translation: 'cloth, clothing', phonetic: 'lehn' },
        { word: 'seli', translation: 'fire, heat', phonetic: 'SEH-lee' },
        { word: 'lete', translation: 'cold', phonetic: 'LEH-teh' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "musi" mean?',
            options: ['music only', 'fun/play/game', 'sound', 'person'],
            correctAnswer: 'fun/play/game',
            hint: 'Entertainment and enjoyment'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "soweli" mean?',
            options: ['bird', 'fish', 'land animal/mammal', 'reptile'],
            correctAnswer: 'land animal/mammal',
            hint: 'Dogs, cats, horses...'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "lipu" mean?',
            options: ['container', 'paper/book', 'clothing', 'fire'],
            correctAnswer: 'paper/book',
            hint: 'What you read'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "kalama musi"',
            correctAnswers: ['music', 'fun sounds', 'entertainment sounds'],
            hint: 'sound + fun'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi wile e soweli"',
            correctAnswers: ['I want an animal', 'I want a pet', 'I want a mammal'],
            hint: 'I + want + e + animal'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "telo li lete"',
            correctAnswers: ['the water is cold', 'water is cold'],
            hint: 'water + li + cold'
        },
        {
            type: 'fill-blank',
            prompt: 'mi lukin e ___. (I see a bird)',
            options: ['soweli', 'waso', 'kala', 'akesi'],
            correctAnswer: 'waso',
            hint: 'Flying animal'
        },
        {
            type: 'fill-blank',
            prompt: 'poki ___. (cup / water container)',
            options: ['seli', 'telo', 'musi', 'len'],
            correctAnswer: 'telo',
            hint: 'Container of water'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I play" / "I have fun"',
            words: ['mi', 'musi', 'pali', 'li', 'toki'],
            correctAnswer: ['mi', 'musi'],
            hint: 'I + fun/play'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The water is hot"',
            words: ['telo', 'li', 'seli', 'lete', 'mi'],
            correctAnswer: ['telo', 'li', 'seli'],
            hint: 'water + li + hot/fire'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "I read a book"',
            correctAnswers: ['mi lukin e lipu'],
            hint: 'I + see/read + e + paper/book'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "My clothes are good"',
            correctAnswers: ['len mi li pona'],
            hint: 'clothes + my + li + good'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The fish is in the water"',
            words: ['kala', 'li', 'lon', 'telo', 'e', 'tawa'],
            correctAnswer: ['kala', 'li', 'lon', 'telo'],
            hint: 'fish + li + at/in + water'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "sina sona e toki pona!"',
            correctAnswers: ['you know toki pona!', 'you understand toki pona!'],
            hint: 'you + know + e + toki pona'
        }
    ]
};
