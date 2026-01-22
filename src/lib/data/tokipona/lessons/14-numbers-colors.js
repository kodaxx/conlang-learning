export default {
    id: '14-numbers-colors',
    name: 'Numbers & Colors',
    description: 'Learn to count and describe colors in Toki Pona',
    icon: '🔢',
    xpReward: 30,

    teaching: [
        {
            title: "Numbers in Toki Pona",
            content: `Toki Pona has a simple number system. Large exact numbers aren't typically used:`,
            vocabulary: [
                { word: 'wan', translation: 'one, united' },
                { word: 'tu', translation: 'two, separate' },
                { word: 'luka', translation: 'five (also: hand)' },
                { word: 'mute', translation: 'many, 20+' },
                { word: 'ale', translation: 'all, 100, infinity' }
            ],
            tip: "Most Toki Pona speakers don't count exactly. 'mute' (many) is usually enough!"
        },
        {
            title: "Counting",
            content: `To count, add numbers together:`,
            examples: [
                { tokipona: "wan", english: "one (1)", breakdown: "" },
                { tokipona: "tu", english: "two (2)", breakdown: "" },
                { tokipona: "tu wan", english: "three (2+1)", breakdown: "" },
                { tokipona: "tu tu", english: "four (2+2)", breakdown: "" },
                { tokipona: "luka", english: "five (5)", breakdown: "" },
                { tokipona: "luka tu", english: "seven (5+2)", breakdown: "" }
            ],
            tip: "jan tu wan = three people, tomo luka = five buildings"
        },
        {
            title: "Colors",
            content: `Toki Pona has five basic colors:`,
            vocabulary: [
                { word: 'loje', translation: 'red' },
                { word: 'jelo', translation: 'yellow' },
                { word: 'laso', translation: 'blue, green' },
                { word: 'walo', translation: 'white, pale' },
                { word: 'pimeja', translation: 'black, dark' }
            ],
            tip: "laso covers both blue AND green!"
        },
        {
            title: "Using Colors",
            content: `Colors work like adjectives — they come after the noun:`,
            examples: [
                { tokipona: "kasi laso", english: "green plant", breakdown: "plant + blue-green" },
                { tokipona: "telo laso", english: "blue water", breakdown: "water + blue-green" },
                { tokipona: "suno jelo", english: "yellow sun", breakdown: "sun + yellow" },
                { tokipona: "ma pimeja", english: "dark land / night", breakdown: "land + dark" }
            ]
        },
        {
            title: "wan and tu as verbs",
            content: `**wan** and **tu** can also be verbs:
- wan = to unite, make one
- tu = to divide, separate`,
            examples: [
                { tokipona: "mi wan e jan", english: "I unite the people", breakdown: "" },
                { tokipona: "ona li tu e moku", english: "He/she divides the food", breakdown: "" }
            ]
        }
    ],

    vocabulary: [
        { word: 'wan', translation: 'one, united', phonetic: 'wahn' },
        { word: 'tu', translation: 'two, divide', phonetic: 'too' },
        { word: 'loje', translation: 'red', phonetic: 'LOH-yeh' },
        { word: 'jelo', translation: 'yellow', phonetic: 'YEH-loh' },
        { word: 'laso', translation: 'blue, green', phonetic: 'LAH-soh' },
        { word: 'walo', translation: 'white, pale', phonetic: 'WAH-loh' },
        { word: 'pimeja', translation: 'black, dark', phonetic: 'pee-MEH-yah' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "wan" mean?',
            options: ['two', 'one', 'five', 'many'],
            correctAnswer: 'one',
            hint: 'The first number'
        },
        {
            type: 'multiple-choice',
            prompt: 'What color is "laso"?',
            options: ['red', 'yellow', 'blue/green', 'white'],
            correctAnswer: 'blue/green',
            hint: 'This covers two colors!'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "three" in Toki Pona?',
            options: ['wan tu', 'tu wan', 'tu tu', 'luka'],
            correctAnswer: 'tu wan',
            hint: '2 + 1'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "jan tu"',
            correctAnswers: ['two people', 'two persons', '2 people'],
            hint: 'person + two'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "kasi laso"',
            correctAnswers: ['green plant', 'blue plant', 'green vegetation'],
            hint: 'plant + blue/green'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "suno jelo"',
            correctAnswers: ['yellow sun', 'the yellow sun'],
            hint: 'sun + yellow'
        },
        {
            type: 'fill-blank',
            prompt: 'telo ___. (blue water)',
            options: ['loje', 'jelo', 'laso', 'walo'],
            correctAnswer: 'laso',
            hint: 'Blue or green'
        },
        {
            type: 'fill-blank',
            prompt: 'jan tu ___. (three people)',
            options: ['tu', 'wan', 'luka', 'mute'],
            correctAnswer: 'wan',
            hint: 'two + ? = three'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "white house"',
            words: ['tomo', 'walo', 'pimeja', 'loje'],
            correctAnswer: ['tomo', 'walo'],
            hint: 'building + white'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "five friends"',
            words: ['jan', 'pona', 'luka', 'tu', 'wan'],
            correctAnswer: ['jan', 'pona', 'luka'],
            hint: 'person + good + five'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "red"',
            correctAnswers: ['loje'],
            hint: 'The color of fire'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "dark/black"',
            correctAnswers: ['pimeja'],
            hint: 'Absence of light'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is "luka tu wan"?',
            options: ['six', 'seven', 'eight', 'nine'],
            correctAnswer: 'eight',
            hint: '5 + 2 + 1 = ?'
        }
    ]
};
