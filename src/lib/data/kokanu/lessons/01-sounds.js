// Lesson 01: Sounds of Kokanu
// Covers phonology and your first word: peko

export default {
    id: '01-sounds',
    name: 'Sounds of Kokanu',
    description: 'Learn how Kokanu sounds and your first word',
    icon: '🔤',
    xpReward: 20,

    teaching: [
        {
            title: "Welcome to Kokanu!",
            content: `**Kokanu** is a globally accessible auxiliary language designed to be easy for speakers of any language.

**Key features:**
• Only ~380 words to learn
• Simple, consistent grammar
• Easy pronunciation for everyone
• No complex verb conjugations

Let's start with how Kokanu sounds!`,
            tip: "Kokanu means 'international language' — ko (international) + kanu (language)!"
        },
        {
            title: "Consonants",
            content: `Kokanu has only **11 consonants**:

**p, t, k** — like in English "pan", "tan", "can"
**m, n** — like in English "man", "no"
**s** — like in English "sit"
**c** — like "ch" in "chat"
**h** — like in English "hat"
**l** — like in English "let"
**j** — like "y" in "yes"
**w** — like in English "we"

All pronounced simply and consistently!`,
            tip: "The letter 'c' is always 'ch' sound — never 'k' or 's'!"
        },
        {
            title: "Vowels",
            content: `Kokanu has only **5 vowels**:

• **a** — like "a" in "father"
• **e** — like "e" in "pet"
• **i** — like "ee" in "see"
• **o** — like "o" in "go"
• **u** — like "oo" in "boot"

These are the same vowels found in Spanish, Japanese, and many other languages!`
        },
        {
            title: "Your First Word: peko",
            content: `The word **peko** is incredibly versatile — it covers ALL polite expressions:

• **Hello** — peko!
• **Goodbye** — peko!
• **Please** — peko
• **Thank you** — peko
• **Sorry** — peko

Context tells you which meaning applies!`,
            vocabulary: [
                { word: 'peko', translation: 'hello, bye, please, thanks, sorry' }
            ],
            examples: [
                { kokanu: 'peko!', english: 'Hello! / Hi! / Goodbye!' },
                { kokanu: 'peko, peko', english: 'Please, thank you' }
            ],
            tip: "peko comes from Italian 'prego' — use it whenever politeness is needed!"
        }
    ],

    vocabulary: [
        { word: 'peko', translation: 'hello, bye, please, thanks, sorry', phonetic: 'PEH-ko' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'How is the letter "c" pronounced in Kokanu?',
            options: ['Like "k" in king', 'Like "s" in sun', 'Like "ch" in chat', 'Like "c" in cat'],
            correctAnswer: 'Like "ch" in chat',
            hint: 'Think of the word "chance"'
        },
        {
            type: 'multiple-choice',
            prompt: 'How many vowels does Kokanu have?',
            options: ['3', '4', '5', '6'],
            correctAnswer: '5',
            hint: 'a, e, i, o, u'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "peko" mean?',
            options: ['Only hello', 'Only goodbye', 'Only thank you', 'All of: hello, bye, please, thanks, sorry'],
            correctAnswer: 'All of: hello, bye, please, thanks, sorry',
            hint: 'peko is very versatile!'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "Hello!"',
            correctAnswers: ['peko', 'peko!'],
            hint: 'The polite all-purpose word'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which consonant sounds like "y" in English?',
            options: ['c', 'j', 'w', 's'],
            correctAnswer: 'j',
            hint: 'Like in "yes"'
        },
        {
            type: 'matching',
            prompt: 'Match the pairs',
            pairs: [
                { word: 'peko', translation: 'hello/bye/etc' },
                { word: 'makan', translation: 'eat/food' },
                { word: 'tola', translation: 'learn' },
                { word: 'kasa', translation: 'home' }
            ]
        }
    ]
};
