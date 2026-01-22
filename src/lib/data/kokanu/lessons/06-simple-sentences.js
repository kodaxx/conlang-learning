// Lesson 06: Simple Sentences
// Practice making simple sentences with more verbs

export default {
    id: '06-simple-sentences',
    name: 'Simple Sentences',
    description: 'Practice making sentences with more verbs',
    icon: '📝',
    xpReward: 25,

    teaching: [
        {
            title: "Building Sentences",
            content: `Now you can make simple sentences!

**Pattern:** Subject + **le** + Verb

The subject can be a pronoun OR a noun:
• **mi le makan** = I eat
• **na le teka** = You see
• **ja le suki** = He/she likes
• **pawo le antomi** = The dog sleeps
• **meja le makan** = The cat eats`,
            examples: [
                { kokanu: 'mi le ikasi', english: 'I learn / We learn' },
                { kokanu: 'meja le antomi', english: 'The cat sleeps' },
                { kokanu: 'ja le pen', english: 'He/she understands' }
            ]
        },
        {
            title: "More Useful Verbs",
            content: `Let's add more verbs to your vocabulary:

**Learning & Thinking:**
• **ikasi** = to learn
• **taliki** = to think, believe

**Movement:**
• **weso** = to come
• **eso** = to go`,
            vocabulary: [
                { word: 'ikasi', translation: 'to learn' },
                { word: 'taliki', translation: 'to think, believe' },
                { word: 'weso', translation: 'to come' },
                { word: 'eso', translation: 'to go' }
            ],
            examples: [
                { kokanu: 'mi le ikasi', english: 'I am learning' },
                { kokanu: 'ja le taliki', english: 'He/she thinks' },
                { kokanu: 'na le weso', english: 'You come' }
            ]
        },
        {
            title: "Actions & Communication",
            content: `A few more essential verbs:

• **peta** = to want
• **kanu** = to speak, talk, say
• **senti** = to feel

Now you have many verbs to work with!`,
            vocabulary: [
                { word: 'peta', translation: 'to want' },
                { word: 'kanu', translation: 'to speak, talk, say' },
                { word: 'senti', translation: 'to feel' }
            ],
            examples: [
                { kokanu: 'mi le peta', english: 'I want' },
                { kokanu: 'na le kanu', english: 'You speak' },
                { kokanu: 'ja le senti', english: 'He/she feels' }
            ]
        }
    ],

    vocabulary: [
        { word: 'ikasi', translation: 'to learn', phonetic: 'ee-KAH-see' },
        { word: 'taliki', translation: 'to think, believe', phonetic: 'tah-LEE-kee' },
        { word: 'weso', translation: 'to come', phonetic: 'WEH-so' },
        { word: 'eso', translation: 'to go', phonetic: 'EH-so' },
        { word: 'peta', translation: 'to want', phonetic: 'PEH-tah' },
        { word: 'kanu', translation: 'to speak, say', phonetic: 'KAH-noo' },
        { word: 'senti', translation: 'to feel', phonetic: 'SEHN-tee' }
    ],

    exercises: [
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le ikasi"',
            correctAnswers: ['I learn', 'we learn', 'I am learning', 'we are learning'],
            hint: 'ikasi = to learn'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "You want"',
            correctAnswers: ['na le peta'],
            hint: 'na = you, peta = want'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ja le kanu"',
            correctAnswers: ['he speaks', 'she speaks', 'they speak', 'he talks', 'she talks', 'they talk', 'he says', 'she says', 'they say'],
            hint: 'kanu = to speak, talk, say'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "I think"',
            correctAnswers: ['mi le taliki'],
            hint: 'taliki = to think'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "nin le weso"',
            correctAnswers: ['the person comes', 'people come', 'a person comes', 'the person is coming'],
            hint: 'nin = person, weso = come'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "The cat goes"',
            correctAnswers: ['meja le eso'],
            hint: 'meja = cat, eso = go'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The dog sleeps"',
            words: ['pawo', 'le', 'antomi', 'meja', 'mi'],
            correctAnswer: ['pawo', 'le', 'antomi'],
            hint: 'Start with the subject'
        },
        {
            prompt: 'Build: "You speak"',
            words: ['na', 'le', 'kanu', 'mi', 'peta'],
            correctAnswer: ['na', 'le', 'kanu'],
            hint: 'you + verb marker + speak'
        },
        {
            type: 'matching',
            prompt: 'Match the verbs',
            pairs: [
                { word: 'ikasi', translation: 'to learn' },
                { word: 'taliki', translation: 'to think' },
                { word: 'weso', translation: 'to come' },
                { word: 'eso', translation: 'to go' },
                { word: 'kanu', translation: 'to speak' }
            ]
        }
    ]
};
