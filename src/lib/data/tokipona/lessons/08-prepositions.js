export default {
    id: '08-prepositions',
    name: 'Prepositions',
    description: 'Learn to express location, direction, and cause',
    icon: '📍',
    xpReward: 30,

    teaching: [
        {
            title: "Prepositions in Toki Pona",
            content: `Prepositions tell us about relationships — where, to where, from where, and with what.

In Toki Pona, these words come at the end of the sentence:`,
            vocabulary: [
                { word: 'lon', translation: 'at, in, on, exist, true' },
                { word: 'tawa', translation: 'to, toward, for, going' },
                { word: 'tan', translation: 'from, because of, origin' },
                { word: 'kepeken', translation: 'using, with (tool)' },
                { word: 'sama', translation: 'same, similar, like' }
            ]
        },
        {
            title: "Location: lon",
            content: `**lon** means "at", "in", "on", or "located at":`,
            examples: [
                { tokipona: "mi lon tomo", english: "I am in the building", breakdown: "I + at + building" },
                { tokipona: "ona li lon", english: "He/she is here / exists", breakdown: "he/she + li + at/exist" },
                { tokipona: "jan li moku lon tomo", english: "The person eats in the building", breakdown: "person + li + eat + at + building" }
            ],
            tip: "lon by itself means 'to exist' or 'to be present'"
        },
        {
            title: "Direction: tawa",
            content: `**tawa** means "to", "toward", or "for":`,
            examples: [
                { tokipona: "mi tawa tomo", english: "I go to the building", breakdown: "I + go-to + building" },
                { tokipona: "ni li pona tawa mi", english: "This is good for me", breakdown: "this + li + good + for + me" },
                { tokipona: "ona li toki tawa sina", english: "He/she speaks to you", breakdown: "he/she + li + speak + to + you" }
            ]
        },
        {
            title: "Origin and Cause: tan",
            content: `**tan** means "from", "because of", or "origin":`,
            examples: [
                { tokipona: "mi tan ma", english: "I am from the land/country", breakdown: "I + from + land" },
                { tokipona: "mi pona tan sina", english: "I am good because of you", breakdown: "I + good + because-of + you" },
                { tokipona: "ona li kama tan tomo", english: "He/she comes from the building", breakdown: "he/she + li + come + from + building" }
            ]
        },
        {
            title: "Using and Similar",
            content: `**kepeken** = using, with (a tool)
**sama** = same, similar, like`,
            examples: [
                { tokipona: "mi moku kepeken luka", english: "I eat using hands", breakdown: "I + eat + using + hand" },
                { tokipona: "ona li sama mi", english: "He/she is like me / the same as me", breakdown: "" },
                { tokipona: "toki pona li pona sama ni", english: "Toki Pona is good like this", breakdown: "" }
            ]
        }
    ],

    vocabulary: [
        { word: 'lon', translation: 'at, in, on, exist', phonetic: 'lohn' },
        { word: 'tawa', translation: 'to, toward, for', phonetic: 'TAH-wah' },
        { word: 'tan', translation: 'from, because of', phonetic: 'tahn' },
        { word: 'kepeken', translation: 'using, with (tool)', phonetic: 'keh-PEH-kehn' },
        { word: 'sama', translation: 'same, similar, like', phonetic: 'SAH-mah' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "lon" mean?',
            options: ['to', 'from', 'at/in/on', 'using'],
            correctAnswer: 'at/in/on',
            hint: 'Location'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "tan" mean?',
            options: ['to', 'from/because of', 'at', 'with'],
            correctAnswer: 'from/because of',
            hint: 'Origin or cause'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi lon tomo"',
            correctAnswers: ['I am in the building', 'I am at the building', 'I\'m in the house', 'I am in the house'],
            hint: 'I + at + building/house'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ona li tawa tomo"',
            correctAnswers: ['he goes to the building', 'she goes to the building', 'they go to the building', 'he goes to the house'],
            hint: 'he/she + li + go-to + building'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ni li pona tawa mi"',
            correctAnswers: ['this is good for me', 'that is good for me', 'this is good to me'],
            hint: 'this + li + good + for + me'
        },
        {
            type: 'fill-blank',
            prompt: 'mi ___ tomo. (I am in the building)',
            options: ['tawa', 'lon', 'tan', 'kepeken'],
            correctAnswer: 'lon',
            hint: 'At/in a location'
        },
        {
            type: 'fill-blank',
            prompt: 'ona li kama ___ tomo. (She comes FROM the building)',
            options: ['lon', 'tawa', 'tan', 'sama'],
            correctAnswer: 'tan',
            hint: 'Origin/source'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I go to the house"',
            words: ['mi', 'tawa', 'tomo', 'lon', 'tan'],
            correctAnswer: ['mi', 'tawa', 'tomo'],
            hint: 'I + go-to + building'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "This is good for you"',
            words: ['ni', 'li', 'pona', 'tawa', 'sina', 'mi'],
            correctAnswer: ['ni', 'li', 'pona', 'tawa', 'sina'],
            hint: 'this + li + good + for + you'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "I am from here"',
            correctAnswers: ['mi tan ni'],
            hint: 'I + from + this'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "She is at home"',
            correctAnswers: ['ona li lon tomo'],
            hint: 'she + li + at + building'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "kepeken" mean?',
            options: ['at', 'to', 'using/with', 'from'],
            correctAnswer: 'using/with',
            hint: 'Using a tool or instrument'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "sama" mean?',
            options: ['different', 'same/similar', 'far', 'near'],
            correctAnswer: 'same/similar',
            hint: 'Like or similar to'
        }
    ]
};
