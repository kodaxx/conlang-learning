// Lesson 08: Tense
// Covers tense modifiers (matin, kenca, melon) and pi time expressions

export default {
    id: '08-tense',
    name: 'Tense',
    description: 'Learn to express past, present, and future',
    icon: '⏰',
    xpReward: 35,

    teaching: [
        {
            title: "Tense is Optional!",
            content: `In Kokanu, verbs have **no built-in tense**.

• mi le makan = I eat / I ate / I will eat

Context usually tells you when something happens. But when you need to be explicit, use **tense modifiers**!`,
            tip: "Many languages (like Chinese) work this way — context is king!"
        },
        {
            title: "The Three Tenses",
            content: `Kokanu has three **tense modifiers**:

| Modifier | Meaning | Example |
|----------|---------|---------|
| **matin** | past | mi le makan matin = I ate |
| **kenca** | present | mi le makan kenca = I eat (now) |
| **melon** | future | mi le makan melon = I will eat |

They work like regular modifiers — after the verb!`,
            vocabulary: [
                { word: 'matin', translation: 'past' },
                { word: 'kenca', translation: 'present' },
                { word: 'melon', translation: 'future' }
            ]
        },
        {
            title: "Past Tense: matin",
            content: `**matin** = past

• mi le makan **matin** = I ate
• ja le teka **matin** in mi = He/she saw me
• pawo le antomi **matin** = The dog slept
• mi le kota **matin** kan na = I spoke with you`,
            examples: [
                { kokanu: 'mi le makan matin', english: 'I ate' },
                { kokanu: 'ja le teka matin in mi', english: 'He/she saw me' },
                { kokanu: 'mi le pen matin', english: 'I understood' }
            ]
        },
        {
            title: "Future Tense: melon",
            content: `**melon** = future

• mi le makan **melon** = I will eat
• ja le nema **melon** = He/she will come
• mi le tene **melon** in mani = I will give money
• na le teka **melon** in pata = You will see the book`,
            vocabulary: [
                { word: 'nema', translation: 'to come' }
            ],
            examples: [
                { kokanu: 'mi le makan melon', english: 'I will eat' },
                { kokanu: 'ja le nema melon', english: 'He/she will come' },
                { kokanu: 'na le pen melon', english: 'You will understand' }
            ]
        },
        {
            title: "Present Tense: kenca",
            content: `**kenca** = present (right now)

Usually unnecessary, but useful for emphasis:

• mi le makan **kenca** = I am eating (right now!)
• ja le kota **kenca** = He/she is speaking (at this moment)

Use **kenca** when you want to stress the "now-ness"!`,
            examples: [
                { kokanu: 'mi le makan kenca', english: 'I am eating (right now)' },
                { kokanu: 'ja le antomi kenca', english: 'He/she is sleeping (now)' }
            ]
        },
        {
            title: "Using pi for Time",
            content: `You can also use **pi** (at/during) to express time:

• mi le makan **pi matin** = I eat in the past = I ate
• ja le nema **pi melon** = He comes in the future = He will come

Both forms work:
• le makan matin = le makan pi matin`,
            examples: [
                { kokanu: 'mi le teka in na pi matin', english: 'I saw you (at past)' },
                { kokanu: 'ja le kota pi melon', english: 'He/she will speak (at future)' }
            ],
            tip: "pi emphasizes the time reference more explicitly"
        },
        {
            title: "When to Use Tense",
            content: `Use tense when:
• The time isn't clear from context
• You want to emphasize when something happened
• You're telling a story and switching between times

Skip tense when:
• Context is clear (yesterday, tomorrow, etc.)
• General statements (Dogs eat meat)
• The time doesn't matter`,
            examples: [
                { kokanu: 'pawo le makan in niku', english: 'Dogs eat meat (general truth)' },
                { kokanu: 'mi le makan matin in kuwosi', english: 'I ate fruit (past specific)' }
            ]
        }
    ],

    vocabulary: [
        { word: 'matin', translation: 'past', phonetic: 'MAH-teen' },
        { word: 'kenca', translation: 'present', phonetic: 'KEN-chah' },
        { word: 'melon', translation: 'future', phonetic: 'MEH-lon' },
        { word: 'nema', translation: 'to come', phonetic: 'NEH-mah' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'How do you express past tense in Kokanu?',
            options: ['Change the verb', 'Add "matin"', 'Add "melon"', 'Add "le"'],
            correctAnswer: 'Add "matin"',
            hint: 'Tense is shown with modifiers'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le makan matin"',
            correctAnswers: ['I ate', 'We ate', 'I did eat'],
            hint: 'matin = past'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "He will see"',
            correctAnswers: ['ja le teka melon'],
            hint: 'melon = future'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "melon" indicate?',
            options: ['Past', 'Present', 'Future', 'Ongoing'],
            correctAnswer: 'Future',
            hint: 'Something that will happen'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ja le nema melon"',
            correctAnswers: ['He will come', 'She will come', 'They will come'],
            hint: 'nema = come, melon = future'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "I spoke"',
            correctAnswers: ['mi le kota matin'],
            hint: 'kota = speak, matin = past'
        },
        {
            type: 'multiple-choice',
            prompt: 'When is tense marking optional in Kokanu?',
            options: ['Never', 'Always', 'When context is clear', 'Only in questions'],
            correctAnswer: 'When context is clear',
            hint: 'Context often tells you the time'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le makan kenca"',
            correctAnswers: ['I am eating right now', 'I eat now', 'I am eating'],
            hint: 'kenca = present (emphasis)'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "The dog slept"',
            correctAnswers: ['pawo le antomi matin'],
            hint: 'antomi = sleep, matin = past'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le pen matin"',
            correctAnswers: ['I understood', 'We understood'],
            hint: 'pen = understand, matin = past'
        }
    ]
};
