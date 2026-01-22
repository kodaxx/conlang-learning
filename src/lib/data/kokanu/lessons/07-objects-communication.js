// Lesson 07: Objects & Communication
// Learn to use direct objects and communication verbs

export default {
    id: '07-objects-communication',
    name: 'Objects & Communication',
    description: 'Learn to use direct objects with in',
    icon: '🗣️',
    xpReward: 25,

    teaching: [
        {
            title: "The Object Marker: in",
            content: `To add a **direct object** (what you eat, see, like...), use **in**:

**Structure:** Subject + le + Verb + **in** + Object

The **in** particle marks what the verb acts upon.

• **mi le makan in kuwosi** = I eat fruit
• **ja le teka in pawo** = He sees the dog`,
            vocabulary: [
                { word: 'in', translation: 'direct object marker' }
            ],
            tip: "in marks what the verb acts upon — think of it as 'WHAT did you [verb]?'"
        },
        {
            title: "SVO Word Order",
            content: `Kokanu uses **Subject-Verb-Object** order:

**S** (who) + **le V** (action) + **in O** (what)

• **mi** le makan in **kuwosi** = I eat fruit
• **pawo** le teka in **meja** = The dog sees the cat
• **ja** le amo in **na** = He/she loves you

This is the same order as English!`,
            examples: [
                { kokanu: 'mi le amo in na', english: 'I love you' },
                { kokanu: 'pawo le teka in meja', english: 'The dog sees the cat' },
                { kokanu: 'ja le suki in kuwosi', english: 'He/she likes fruit' }
            ]
        },
        {
            title: "Communication Verbs",
            content: `Let's learn verbs for communication:

• **kota** = to talk, speak
• **pata** = to read
• **lika** = to write

**pata** is special - it means both "to read" AND "book"!
• **mi le pata in pata** = I read a book`,
            vocabulary: [
                { word: 'kota', translation: 'to talk, speak' },
                { word: 'pata', translation: 'to read; book' },
                { word: 'lika', translation: 'to write' }
            ],
            examples: [
                { kokanu: 'mi le kota', english: 'I speak' },
                { kokanu: 'ja le pata in pata', english: 'He reads a book' }
            ]
        },
        {
            title: "More Useful Words",
            content: `Two more useful words for your sentences:

• **niku** = meat
• **cenpo** = big

• **pawo le makan in niku** = The dog eats meat
• **pata le cenpo** = The book is big`,
            vocabulary: [
                { word: 'niku', translation: 'meat' },
                { word: 'cenpo', translation: 'big' }
            ]
        }
    ],

    vocabulary: [
        { word: 'in', translation: 'object marker', phonetic: 'een' },
        { word: 'kota', translation: 'to talk, speak', phonetic: 'KOH-tah' },
        { word: 'pata', translation: 'to read; book', phonetic: 'PAH-tah' },
        { word: 'lika', translation: 'to write', phonetic: 'LEE-kah' },
        { word: 'niku', translation: 'meat', phonetic: 'NEE-koo' },
        { word: 'cenpo', translation: 'big', phonetic: 'CHEN-po' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "in" mark in a Kokanu sentence?',
            options: ['The subject', 'The verb', 'The direct object', 'The location'],
            correctAnswer: 'The direct object',
            hint: 'It marks what the verb acts upon'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le makan in kuwosi"',
            correctAnswers: ['I eat fruit', 'I eat a fruit', 'We eat fruit'],
            hint: 'makan = eat, kuwosi = fruit'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "I love you"',
            correctAnswers: ['mi le amo in na'],
            hint: 'Subject + le + verb + in + object'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "pata" mean?',
            options: ['to read', 'book', 'paper', 'both to read and book'],
            correctAnswer: 'both to read and book',
            hint: 'It works as both a verb and a noun'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "The dog eats meat"',
            correctAnswers: ['pawo le makan in niku'],
            hint: 'pawo = dog, niku = meat'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ja le pata"',
            correctAnswers: ['he reads', 'she reads', 'they read', 'he is reading'],
            hint: 'pata = to read'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I eat meat"',
            words: ['mi', 'le', 'makan', 'in', 'niku', 'ja'],
            correctAnswer: ['mi', 'le', 'makan', 'in', 'niku'],
            hint: 'Don\'t forget the object marker!'
        },
        {
            prompt: 'Build: "He reads a book"',
            words: ['ja', 'le', 'pata', 'in', 'pata', 'makan'],
            correctAnswer: ['ja', 'le', 'pata', 'in', 'pata'],
            hint: 'Subject + le + verb + in + object'
        },
        {
            type: 'matching',
            prompt: 'Match the words',
            pairs: [
                { word: 'kota', translation: 'to talk' },
                { word: 'pata', translation: 'to read / book' },
                { word: 'lika', translation: 'to write' },
                { word: 'niku', translation: 'meat' },
                { word: 'cenpo', translation: 'big' }
            ]
        }
    ]
};
