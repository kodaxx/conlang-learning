// Lesson 05: The Verb Marker
// Learn how to mark verbs with le

export default {
    id: '05-verb-marker',
    name: 'The Verb Marker',
    description: 'Learn how to use le to mark verbs',
    icon: '🔵',
    xpReward: 25,

    teaching: [
        {
            title: "The Verb Marker: le",
            content: `In Kokanu, the main verb is marked with **le**.

**Structure:** Subject + **le** + Verb

This is how Kokanu knows what the verb is!

• **mi le makan** = I eat
• **ja le teka** = He/she sees
• **na le suki** = You like`,
            vocabulary: [
                { word: 'le', translation: 'verb marker' }
            ],
            tip: "le is NOT 'to be' — it just marks what follows as the verb!"
        },
        {
            title: "Your First Verbs",
            content: `Let's learn some basic verbs:

**Actions:**
• **makan** = to eat
• **teka** = to see
• **suki** = to like

Now combine with pronouns:
• **mi le makan** = I eat
• **ja le teka** = He/she sees
• **na le suki** = You like`,
            vocabulary: [
                { word: 'makan', translation: 'to eat' },
                { word: 'teka', translation: 'to see' },
                { word: 'suki', translation: 'to like' }
            ],
            examples: [
                { kokanu: 'mi le makan', english: 'I eat' },
                { kokanu: 'ja le teka', english: 'He/she sees' },
                { kokanu: 'na le suki', english: 'You like' }
            ]
        },
        {
            title: "More Basic Verbs",
            content: `A few more essential verbs:

• **amo** = to love
• **antomi** = to sleep
• **pen** = to understand

Try making sentences:
• **mi le amo** = I love
• **pawo le antomi** = The dog sleeps
• **mi le pen** = I understand`,
            vocabulary: [
                { word: 'amo', translation: 'to love' },
                { word: 'antomi', translation: 'to sleep' },
                { word: 'pen', translation: 'to understand' }
            ],
            examples: [
                { kokanu: 'mi le amo', english: 'I love' },
                { kokanu: 'pawo le antomi', english: 'The dog sleeps' },
                { kokanu: 'mi le pen', english: 'I understand' }
            ]
        }
    ],

    vocabulary: [
        { word: 'le', translation: 'verb marker', phonetic: 'leh' },
        { word: 'makan', translation: 'to eat', phonetic: 'MAH-kahn' },
        { word: 'teka', translation: 'to see', phonetic: 'TEH-kah' },
        { word: 'suki', translation: 'to like', phonetic: 'SOO-kee' },
        { word: 'amo', translation: 'to love', phonetic: 'AH-mo' },
        { word: 'antomi', translation: 'to sleep', phonetic: 'ahn-TOH-mee' },
        { word: 'pen', translation: 'to understand', phonetic: 'pehn' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "le" do in Kokanu?',
            options: ['It means "the"', 'It marks the verb', 'It means "is"', 'It marks the subject'],
            correctAnswer: 'It marks the verb',
            hint: 'The main verb follows le'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le makan"',
            correctAnswers: ['I eat', 'we eat', 'I am eating', 'we are eating'],
            hint: 'mi = I/we, le = verb marker, makan = eat'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "He sees"',
            correctAnswers: ['ja le teka'],
            hint: 'Subject + le + verb'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ja le amo"',
            correctAnswers: ['he loves', 'she loves', 'they love', 'it loves'],
            hint: 'ja = he/she/it/they, amo = love'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "The dog sleeps"',
            correctAnswers: ['pawo le antomi'],
            hint: 'pawo = dog, antomi = sleep'
        },
        {
            prompt: 'Translate to English: "mi le pen"',
            correctAnswers: ['I understand', 'we understand', 'I am understanding', 'we are understanding'],
            hint: 'pen = to understand'
        },
        {
            type: 'matching',
            prompt: 'Match the verbs',
            pairs: [
                { word: 'makan', translation: 'to eat' },
                { word: 'teka', translation: 'to see' },
                { word: 'suki', translation: 'to like' },
                { word: 'amo', translation: 'to love' },
                { word: 'antomi', translation: 'to sleep' }
            ]
        }
    ]
};
