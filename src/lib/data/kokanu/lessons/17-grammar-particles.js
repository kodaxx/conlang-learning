// Lesson 12: Grammar Particles
// Covers peko, la, je, lun, mu, pan, and other particles

export default {
    id: '12-grammar-particles',
    name: 'Grammar Particles',
    description: 'Master the essential grammar particles',
    icon: '⚙️',
    xpReward: 40,

    teaching: [
        {
            title: "peko: The Polite Particle",
            content: `We learned **peko** = hello/bye/please/thanks/sorry.

It can also end sentences for politeness:
• o tene in pata ki mi, **peko** = Please give me the book
• mi le pen, **peko** = I understand, thank you

Use **peko** whenever you want to be polite!`,
            vocabulary: [
                { word: 'peko', translation: 'polite particle' }
            ],
            examples: [
                { kokanu: 'o tene in pata ki mi, peko', english: 'Please give me the book' },
                { kokanu: 'peko, mi le ju in pani', english: 'Please, I want water' }
            ]
        },
        {
            title: "la: Emphasis",
            content: `**la** adds emphasis — like "indeed" or stress in English:

• mi **la** le makan = I DO eat
• ja le cenpo **la** = He IS big (emphasis)

**la** can appear in various positions for different emphases.`,
            vocabulary: [
                { word: 'la', translation: 'emphasis particle' }
            ],
            examples: [
                { kokanu: 'mi la le makan', english: 'I DO eat (emphasis on I)' },
                { kokanu: 'ja le pasan la', english: 'He IS happy (emphasis)' }
            ]
        },
        {
            title: "je: Genitive (Of)",
            content: `**je** marks possession or relation — like "of":

• pata **je** mi = the book **of** me = my book
• sapole **je** kuwosi = the taste **of** fruit

Also used for regrouping:
• pawo cenpo **je** wiki = a big dog **that is** fast`,
            vocabulary: [
                { word: 'je', translation: 'of (genitive)' },
                { word: 'sapole', translation: 'taste' }
            ],
            examples: [
                { kokanu: 'pata je mi', english: 'my book / the book of me' },
                { kokanu: 'sapole je kuwosi', english: 'the taste of fruit' }
            ],
            tip: "je is more formal than putting the pronoun after (pawo mi)"
        },
        {
            title: "lun: Causative",
            content: `**lun** means "to make/cause to be":

• mi le **lun** cenpo in pawo = I make the dog big
• ja le **lun** pasan in mi = He makes me happy

Pattern: **lun** [quality/noun] **in** [object]`,
            vocabulary: [
                { word: 'lun', translation: 'to make/cause' }
            ],
            examples: [
                { kokanu: 'mi le lun cenpo in pawo', english: 'I make the dog big' },
                { kokanu: 'ja le lun pasan in mi', english: 'He makes me happy' },
                { kokanu: 'mi le lun kula in pata', english: 'I open the book (make it open)' }
            ]
        },
        {
            title: "mu: Agent Noun",
            content: `**mu** + verb = "one who does [verb]":

• **mu** kosan = one who builds = builder
• **mu** lika = one who writes = writer
• **mu** ikasi = one who learns = learner/student`,
            vocabulary: [
                { word: 'mu', translation: 'agent noun marker' }
            ],
            examples: [
                { kokanu: 'mu kosan le moka', english: 'The builder works' },
                { kokanu: 'mi le mu lika', english: 'I am a writer' },
                { kokanu: 'mu ikasi le cenpo', english: 'The student is big' }
            ]
        },
        {
            title: "pan: Causative Agent",
            content: `**pan** + verb = "one who causes [verb]":

• **pan** pasan = one who causes happiness
• **pan** osole = one who causes fear

Subtle difference from **mu**:
• **mu** = does the action
• **pan** = causes others to do/be`,
            vocabulary: [
                { word: 'pan', translation: 'causative agent marker' },
                { word: 'osole', translation: 'afraid' }
            ],
            examples: [
                { kokanu: 'ja le pan pasan', english: 'He causes happiness / He is joy-bringer' },
                { kokanu: 'canwa le pan osole', english: 'The animal causes fear' }
            ]
        },
        {
            title: "Particles Summary",
            content: `Here's your particle reference:

| Particle | Meaning |
|----------|---------|
| **peko** | polite (hello, thanks...) |
| **la** | emphasis |
| **je** | of (genitive) |
| **lun** | to make/cause |
| **mu** | one who does |
| **pan** | one who causes |
| **no** | negation |
| **ka** | question |
| **ta** | clause marker |`,
            tip: "These particles give you precise control over meaning!"
        }
    ],

    vocabulary: [
        { word: 'la', translation: 'emphasis', phonetic: 'lah' },
        { word: 'je', translation: 'of (genitive)', phonetic: 'jeh' },
        { word: 'lun', translation: 'to make/cause', phonetic: 'loon' },
        { word: 'mu', translation: 'one who does', phonetic: 'moo' },
        { word: 'pan', translation: 'one who causes', phonetic: 'pahn' },
        { word: 'sapole', translation: 'taste', phonetic: 'sah-POH-leh' },
        { word: 'osole', translation: 'afraid', phonetic: 'oh-SOH-leh' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "la" do?',
            options: ['Questions', 'Negation', 'Emphasis', 'Possession'],
            correctAnswer: 'Emphasis',
            hint: 'Like "indeed" or stress'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "pata je mi"',
            correctAnswers: ['my book', 'the book of me'],
            hint: 'je = of (genitive)'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "lun cenpo" mean?',
            options: ['to be big', 'to see big', 'to make big', 'big person'],
            correctAnswer: 'to make big',
            hint: 'lun = to make/cause'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "He makes me happy"',
            correctAnswers: ['ja le lun pasan in mi'],
            hint: 'lun + quality + in + object'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "mu lika" mean?',
            options: ['to write', 'writing', 'writer', 'written'],
            correctAnswer: 'writer',
            hint: 'mu + verb = one who does'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mu kosan le moka"',
            correctAnswers: ['The builder works', 'A builder works'],
            hint: 'mu kosan = builder, moka = work'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi la le makan"',
            correctAnswers: ['I DO eat', 'I indeed eat', 'I really eat'],
            hint: 'la adds emphasis'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between "mu" and "pan"?',
            options: ['Same meaning', 'mu = does, pan = causes', 'mu = past, pan = future', 'mu = big, pan = small'],
            correctAnswer: 'mu = does, pan = causes',
            hint: 'Agent vs causative agent'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "the taste of fruit"',
            correctAnswers: ['sapole je kuwosi'],
            hint: 'je = of'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "o tene in pata ki mi, peko"',
            correctAnswers: ['Please give me the book', 'Give me the book, please'],
            hint: 'peko = please/polite'
        }
    ]
};
