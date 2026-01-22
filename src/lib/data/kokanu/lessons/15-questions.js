// Lesson 10: Questions
// Covers ka (yes/no), ci (wh-questions), and demonstratives

export default {
    id: '10-questions',
    name: 'Questions',
    description: 'Learn to ask yes/no and wh-questions',
    icon: '❓',
    xpReward: 35,

    teaching: [
        {
            title: "Yes/No Questions: ka",
            content: `To form a **yes/no question**, add **ka**.

**ka** can go at the start, end, or both:

• **ka** mi le makan? = Do I eat?
• mi le makan **ka**? = Do I eat?
• **ka** ja le pasan **ka**? = Is he happy?

All forms are correct!`,
            vocabulary: [
                { word: 'ka', translation: 'question marker' }
            ],
            examples: [
                { kokanu: 'ka na le suki in mi?', english: 'Do you like me?' },
                { kokanu: 'ja le antomi ka?', english: 'Is he/she asleep?' },
                { kokanu: 'ka pawo le cenpo?', english: 'Is the dog big?' }
            ],
            tip: "ka is very flexible — put it where it feels natural!"
        },
        {
            title: "Answering Yes/No",
            content: `To answer yes/no questions:

**Yes:** Repeat the statement (or use an affirmation word)
**No:** Use **no** to negate

Q: **ka na le pasan?** (Are you happy?)
A: **mi le pasan** (Yes, I'm happy)
A: **mi le no pasan** (No, I'm not happy)`,
            examples: [
                { kokanu: 'ka na le makan?', english: 'Do you eat?' },
                { kokanu: 'mi le makan', english: 'Yes, I eat' },
                { kokanu: 'mi le no makan', english: 'No, I don\'t eat' }
            ]
        },
        {
            title: "Negation: no",
            content: `**no** negates things. It goes BEFORE what it negates:

• mi le **no** makan = I don't eat
• **no** mi le makan = NOT I eat (someone else)
• mi le makan in **no** kuwosi = I eat NOT fruit

Position changes meaning!`,
            vocabulary: [
                { word: 'no', translation: 'not, negation' }
            ],
            examples: [
                { kokanu: 'mi le no makan', english: 'I don\'t eat' },
                { kokanu: 'ja le no teka in mi', english: 'He/she doesn\'t see me' },
                { kokanu: 'pawo le no antomi', english: 'The dog is not asleep' }
            ]
        },
        {
            title: "WH-Questions: ci",
            content: `**ci** is used to form wh-questions (what, who, where...).

Replace the unknown element with **ci**:

• **ci** le makan? = What/Who eats?
• mi le makan in **ci**? = I eat what?
• na le teka in **ci**? = What do you see?`,
            vocabulary: [
                { word: 'ci', translation: 'what, which (question word)' }
            ],
            examples: [
                { kokanu: 'ci le makan in kuwosi?', english: 'What/Who eats fruit?' },
                { kokanu: 'na le teka in ci?', english: 'What do you see?' },
                { kokanu: 'na le suki in ci?', english: 'What do you like?' }
            ]
        },
        {
            title: "Common Question Words",
            content: `Combine **ci** with nouns for specific questions:

• **ci nin** = who (what person)
• **ci jan** = where (what place)
• **ci ten** = when (what time)
• **ci canwa** = what animal

Examples:
• **ci nin** le makan? = Who eats?
• na le pi **ci jan**? = Where are you?`,
            vocabulary: [
                { word: 'ten', translation: 'time' }
            ],
            examples: [
                { kokanu: 'ci nin le kota?', english: 'Who is talking?' },
                { kokanu: 'na le pi ci jan?', english: 'Where are you?' },
                { kokanu: 'ja le nema pi ci ten?', english: 'When does he/she come?' }
            ]
        },
        {
            title: "Demonstratives: ne, na",
            content: `Kokanu has two demonstratives:

• **ne** = this (near the speaker)
• **na** = that (away from speaker)

**Note:** "na" as demonstrative is different from "na" the pronoun!

Examples:
• **ne** pawo = this dog
• **na** meja = that cat`,
            vocabulary: [
                { word: 'ne', translation: 'this' },
                { word: 'na', translation: 'that (demonstrative)' }
            ],
            examples: [
                { kokanu: 'mi le suki in ne pawo', english: 'I like this dog' },
                { kokanu: 'na meja le cenpo', english: 'That cat is big' }
            ],
            tip: "Demonstratives go BEFORE the noun: ne pawo, not pawo ne"
        },
        {
            title: "Asking 'Why'",
            content: `To ask "why", use **ci** with **nenka** (because):

• **nenka ci** ja le makan? = Why does he eat?
(Because of what does he eat?)

Or use a question order:
• ja le makan **nenka ci**? = He eats because of what? (Why?)`,
            examples: [
                { kokanu: 'nenka ci ja le pasan?', english: 'Why is he happy?' },
                { kokanu: 'na le makan nenka ci?', english: 'Why do you eat?' }
            ]
        }
    ],

    vocabulary: [
        { word: 'ka', translation: 'question marker', phonetic: 'kah' },
        { word: 'no', translation: 'not', phonetic: 'noh' },
        { word: 'ci', translation: 'what, which', phonetic: 'chee' },
        { word: 'ne', translation: 'this', phonetic: 'neh' },
        { word: 'ten', translation: 'time', phonetic: 'tehn' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'How do you form a yes/no question?',
            options: ['Add "no"', 'Add "ka"', 'Add "ci"', 'Change word order'],
            correctAnswer: 'Add "ka"',
            hint: 'Can go at start, end, or both'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "Do you like me?"',
            correctAnswers: ['ka na le suki in mi', 'na le suki in mi ka', 'ka na le suki in mi ka'],
            hint: 'Add ka for yes/no question'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "no" do?',
            options: ['Asks a question', 'Shows emphasis', 'Negates', 'Marks the subject'],
            correctAnswer: 'Negates',
            hint: 'It means "not"'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le no makan"',
            correctAnswers: ['I don\'t eat', 'I do not eat', 'We don\'t eat'],
            hint: 'no + verb = negated verb'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "who" in Kokanu?',
            options: ['ci', 'ci nin', 'ka nin', 'no nin'],
            correctAnswer: 'ci nin',
            hint: 'ci + person'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "na le teka in ci?"',
            correctAnswers: ['What do you see?', 'What are you seeing?'],
            hint: 'ci = what'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "The dog is not big"',
            correctAnswers: ['pawo le no cenpo'],
            hint: 'Subject + le + no + modifier'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ci nin le kota?"',
            correctAnswers: ['Who is talking?', 'Who speaks?', 'Who is speaking?'],
            hint: 'ci nin = who'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "ne" mean?',
            options: ['that', 'this', 'what', 'not'],
            correctAnswer: 'this',
            hint: 'Near the speaker'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "I like this dog"',
            correctAnswers: ['mi le suki in ne pawo'],
            hint: 'ne = this (before the noun)'
        }
    ]
};
