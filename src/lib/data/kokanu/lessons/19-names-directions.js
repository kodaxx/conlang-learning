// Lesson 14: Proper Names & Directions
// Covers adapting names and direction vocabulary

export default {
    id: '14-names-directions',
    name: 'Names & Directions',
    description: 'Learn proper names and direction words',
    icon: '🧭',
    xpReward: 35,

    teaching: [
        {
            title: "Proper Names",
            content: `Proper names are **always capitalized** — the only capitalized words in Kokanu!

Names should follow Kokanu phonology when possible:
• John → **Jon**
• Maria → **Malija**
• Tokyo → **Tokijo**

Names work like nouns.`,
            examples: [
                { kokanu: 'Jon le makan', english: 'John eats' },
                { kokanu: 'mi le amo in Malija', english: 'I love Maria' },
                { kokanu: 'ja le pi Tokijo', english: 'He is in Tokyo' }
            ],
            tip: "Adapt names to Kokanu's sound system (no consonant clusters, 5 vowels)"
        },
        {
            title: "Name Adaptation Rules",
            content: `When adapting names:

1. **Use Kokanu consonants:** p, t, k, c, w, l, j, m, n, s, h
2. **Use Kokanu vowels:** a, e, i, o, u
3. **No consonant clusters** — add vowels if needed
4. **Syllables end in vowel or n**

Examples:
• Chris → **Kilisi** (add vowels)
• Steve → **Setewe** (break up clusters)
• Berlin → **Pelin** (b→p)`,
            examples: [
                { kokanu: 'Kilisi', english: 'Chris' },
                { kokanu: 'Pelin', english: 'Berlin' },
                { kokanu: 'Nipon', english: 'Japan (Nihon)' }
            ]
        },
        {
            title: "Relative Directions",
            content: `Kokanu has 6 relative direction words:

• **polan** = forward, front
• **pice** = back, behind
• **mesa** = up, above
• **hento** = down, below
• **pajan** = left
• **jamin** = right`,
            vocabulary: [
                { word: 'polan', translation: 'forward, front' },
                { word: 'pice', translation: 'back, behind' },
                { word: 'mesa', translation: 'up, above' },
                { word: 'hento', translation: 'down, below' },
                { word: 'pajan', translation: 'left' },
                { word: 'jamin', translation: 'right' }
            ]
        },
        {
            title: "Using Directions",
            content: `Directions work as nouns:

• mi le go ki **polan** = I go forward
• pawo le pi **pice** = The dog is behind
• **mesa** le tope = Up is good (above is good)

And as modifiers:
• pata **pajan** = the left book
• jan **hento** = the place below`,
            examples: [
                { kokanu: 'mi le go ki polan', english: 'I go forward' },
                { kokanu: 'ja le pi pice je mi', english: 'He is behind me' },
                { kokanu: 'o teka ki jamin', english: 'Look to the right!' }
            ]
        },
        {
            title: "Cardinal Directions",
            content: `Kokanu has **no built-in cardinal directions** (north, south...).

You describe them relatively:
• "sun's rising direction" = east
• "sun's setting direction" = west

Or use adapted names:
• noto (north), suto (south), esto (east), westo (west)`,
            vocabulary: [
                { word: 'kin', translation: 'sun, day' }
            ],
            examples: [
                { kokanu: 'jan je kin tepu', english: 'place of sun starting (east)' },
                { kokanu: 'jan je kin konje', english: 'place of sun ending (west)' }
            ],
            tip: "Kokanu favors description over fixed vocabulary!"
        },
        {
            title: "Locations with pi",
            content: `Use **pi** (at) with directions:

• mi le **pi pajan** = I am on the left
• pata le **pi mesa** = The book is above
• ja le **pi pice je insu** = He is behind the building`,
            examples: [
                { kokanu: 'mi le pi pajan', english: 'I am on the left' },
                { kokanu: 'pawo le pi hento je pata', english: 'The dog is under the table' },
                { kokanu: 'kuwosi le pi mesa', english: 'The fruit is above' }
            ]
        },
        {
            title: "Practice with Names & Directions",
            content: `Let's combine what we've learned:

• **Jon** le pi **pajan** je mi = John is to my left
• mi le go ki **Tokijo** = I go to Tokyo
• pawo je **Malija** le pi **pice** = Maria's dog is behind`,
            examples: [
                { kokanu: 'Jon le pi pajan je mi', english: 'John is to my left' },
                { kokanu: 'mi le go ki polan sun Pelin', english: 'I go forward from Berlin' }
            ]
        }
    ],

    vocabulary: [
        { word: 'polan', translation: 'forward, front', phonetic: 'POH-lahn' },
        { word: 'pice', translation: 'back, behind', phonetic: 'PEE-cheh' },
        { word: 'mesa', translation: 'up, above', phonetic: 'MEH-sah' },
        { word: 'hento', translation: 'down, below', phonetic: 'HEN-toh' },
        { word: 'pajan', translation: 'left', phonetic: 'PAH-jahn' },
        { word: 'jamin', translation: 'right', phonetic: 'JAH-meen' },
        { word: 'kin', translation: 'sun, day', phonetic: 'keen' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'How are proper names written in Kokanu?',
            options: ['lowercase', 'UPPERCASE', 'Capitalized', 'In quotes'],
            correctAnswer: 'Capitalized',
            hint: 'The only capitalized words!'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "Jon le makan"',
            correctAnswers: ['John eats', 'Jon eats'],
            hint: 'Jon = adapted name for John'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "polan" mean?',
            options: ['left', 'right', 'forward/front', 'back'],
            correctAnswer: 'forward/front',
            hint: 'Moving ahead'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "I go forward"',
            correctAnswers: ['mi le go ki polan'],
            hint: 'go + ki + direction'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "hento" mean?',
            options: ['up', 'down/below', 'left', 'forward'],
            correctAnswer: 'down/below',
            hint: 'Opposite of mesa'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "pawo le pi pice"',
            correctAnswers: ['The dog is behind', 'A dog is behind', 'dog is behind'],
            hint: 'pice = behind'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "Look to the right!"',
            correctAnswers: ['o teka ki jamin', 'o teka ki jamin!'],
            hint: 'jamin = right'
        },
        {
            type: 'multiple-choice',
            prompt: 'What are "pajan" and "jamin"?',
            options: ['up and down', 'front and back', 'left and right', 'in and out'],
            correctAnswer: 'left and right',
            hint: 'Horizontal directions'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le pi pajan je na"',
            correctAnswers: ['I am to your left', 'I am on your left'],
            hint: 'pajan = left, je = of'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "pata le pi mesa"',
            correctAnswers: ['The book is above', 'the book is above', 'A book is above'],
            hint: 'mesa = above'
        }
    ]
};
