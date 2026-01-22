// Lesson 05: Conjunctions & Word Order
// Covers 4 conjunctions, flexible word order, and passive voice

export default {
    id: '05-conjunctions-word-order',
    name: 'Conjunctions & Word Order',
    description: 'Connect ideas and explore flexible sentence structure',
    icon: '🔗',
    xpReward: 35,

    teaching: [
        {
            title: "The 4 Conjunctions",
            content: `Kokanu has **4 conjunctions** to connect words, phrases, or sentences:

| Conjunction | Meaning |
|-------------|---------|
| **un** | and |
| **ili** | or |
| **tan** | then |
| **lekin** | but |`,
            vocabulary: [
                { word: 'un', translation: 'and' },
                { word: 'ili', translation: 'or' },
                { word: 'tan', translation: 'then' },
                { word: 'lekin', translation: 'but' }
            ]
        },
        {
            title: "un: And",
            content: `**un** = and

Connects words:
• pawo **un** meja = dog and cat
• mi **un** na = me and you

Connects sentences:
• mi le makan **un** ja le pata = I eat and he reads`,
            examples: [
                { kokanu: 'pawo un meja', english: 'dog and cat' },
                { kokanu: 'mi un na', english: 'me and you' },
                { kokanu: 'mi le makan un ja le antomi', english: 'I eat and he sleeps' }
            ]
        },
        {
            title: "ili: Or",
            content: `**ili** = or

For choices and alternatives:
• pawo **ili** meja = dog or cat
• na le makan **ili** na le antomi? = Do you eat or do you sleep?`,
            examples: [
                { kokanu: 'pawo ili meja', english: 'dog or cat' },
                { kokanu: 'mi le ju in pani ili kuwosi', english: 'I want water or fruit' }
            ]
        },
        {
            title: "tan and lekin",
            content: `**tan** = then (sequence)
• mi le makan **tan** mi le antomi = I eat then I sleep

**lekin** = but (contrast)
• mi le suki in meja **lekin** ja le cina = I like the cat but it's small`,
            vocabulary: [
                { word: 'cina', translation: 'small' }
            ],
            examples: [
                { kokanu: 'mi le makan tan mi le antomi', english: 'I eat then I sleep' },
                { kokanu: 'pawo le cenpo lekin meja le cina', english: 'The dog is big but the cat is small' }
            ]
        },
        {
            title: "Flexible Word Order",
            content: `SVO is default, but Kokanu allows **flexible word order**!

When the subject is NOT first, use **men** to mark it:

• **mi** le makan in kuwosi (normal)
• in kuwosi le makan **men mi** (object first)
• le makan **men mi** in kuwosi (verb first)

All mean: "I eat fruit"`,
            examples: [
                { kokanu: 'mi le makan in kuwosi', english: 'I eat fruit (normal order)' },
                { kokanu: 'in kuwosi le makan men mi', english: 'Fruit, I eat (emphasis on fruit)' },
                { kokanu: 'le makan men mi in kuwosi', english: 'Eat — I do — fruit (emphasis on action)' }
            ],
            tip: "Word order is a rhetorical choice — use it to emphasize different parts!"
        },
        {
            title: "Passive Voice",
            content: `When there's NO subject marker, the sentence becomes **passive**:

• le makan in kuwosi = The fruit is eaten (by someone)
• in kuwosi le makan = The fruit gets eaten

This is how you express passive without changing the verb!`,
            examples: [
                { kokanu: 'le makan in kuwosi', english: 'The fruit is eaten (passive)' },
                { kokanu: 'in pata le pata', english: 'The book is read' },
                { kokanu: 'in insu le kosan', english: 'The building is built' }
            ],
            vocabulary: [
                { word: 'kosan', translation: 'to build' }
            ]
        },
        {
            title: "Combining Everything",
            content: `Now you can make sophisticated sentences:

• mi le makan in kuwosi **un** ja le pata = I eat fruit and he reads
• pawo le cenpo **lekin** meja le cina = The dog is big but the cat is small
• **hon** na le nema, **tan** mi le pasan = If you come, then I'll be happy

You've mastered complex sentences!`,
            examples: [
                { kokanu: 'hon na le nema, tan mi le pasan', english: 'If you come, then I\'ll be happy' },
                { kokanu: 'mi le ju in pawo ili meja', english: 'I want a dog or a cat' }
            ]
        }
    ],

    vocabulary: [
        { word: 'un', translation: 'and', phonetic: 'oon' },
        { word: 'ili', translation: 'or', phonetic: 'EE-lee' },
        { word: 'tan', translation: 'then', phonetic: 'tahn' },
        { word: 'lekin', translation: 'but', phonetic: 'LEH-keen' },
        { word: 'cina', translation: 'small', phonetic: 'CHEE-nah' },
        { word: 'kosan', translation: 'to build', phonetic: 'KOH-sahn' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "un" mean?',
            options: ['or', 'but', 'and', 'then'],
            correctAnswer: 'and',
            hint: 'Connects things together'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "pawo un meja"',
            correctAnswers: ['dog and cat', 'a dog and a cat'],
            hint: 'un = and'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "lekin" mean?',
            options: ['and', 'or', 'then', 'but'],
            correctAnswer: 'but',
            hint: 'Shows contrast'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "dog or cat"',
            correctAnswers: ['pawo ili meja'],
            hint: 'ili = or'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le makan tan mi le antomi"',
            correctAnswers: ['I eat then I sleep', 'we eat then we sleep'],
            hint: 'tan = then (sequence)'
        },
        {
            type: 'multiple-choice',
            prompt: 'When is "men" used?',
            options: ['Always', 'When subject is not first', 'For questions', 'For objects'],
            correctAnswer: 'When subject is not first',
            hint: 'Marks the subject in non-standard order'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "le makan in kuwosi"',
            correctAnswers: ['The fruit is eaten', 'Fruit is eaten', 'The fruit gets eaten'],
            hint: 'No subject = passive voice'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "The dog is big but the cat is small"',
            correctAnswers: ['pawo le cenpo lekin meja le cina'],
            hint: 'lekin = but'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "pawo le cenpo lekin ja le cina"',
            correctAnswers: ['The dog is big but it is small', 'dog is big but it is small'],
            hint: 'lekin = but'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "I eat and he sleeps"',
            correctAnswers: ['mi le makan un ja le antomi'],
            hint: 'un = and'
        }
    ]
};
