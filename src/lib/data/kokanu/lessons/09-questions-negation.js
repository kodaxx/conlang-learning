// Lesson 04: Prepositions
// Covers all 11 prepositions and the imperative

export default {
    id: '04-prepositions',
    name: 'Prepositions',
    description: 'Learn all 11 prepositions and form complex sentences',
    icon: '📍',
    xpReward: 35,

    teaching: [
        {
            title: "What Are Prepositions?",
            content: `Prepositions connect words and show relationships (at, with, for, from...).

Kokanu has **11 prepositions** — and you already know two:
• **in** = direct object marker
• **ki** = to, towards

Let's learn the rest!`,
            vocabulary: [
                { word: 'in', translation: 'direct object marker' },
                { word: 'ki', translation: 'to, towards' }
            ]
        },
        {
            title: "Location Prepositions",
            content: `**pi** = at, during (location/time)
• mi le makan **pi** insu = I eat at the building
• ja le antomi **pi** kenca = He sleeps at present

**kan** = with (accompaniment)
• mi le makan **kan** na = I eat with you

**sun** = from (origin)
• ja le nema **sun** jan = He comes from that place`,
            vocabulary: [
                { word: 'pi', translation: 'at, during' },
                { word: 'kan', translation: 'with' },
                { word: 'sun', translation: 'from' }
            ],
            examples: [
                { kokanu: 'mi le makan pi insu', english: 'I eat at the building' },
                { kokanu: 'mi le kota kan na', english: 'I speak with you' },
                { kokanu: 'ja le nema sun jan', english: 'He comes from that place' }
            ]
        },
        {
            title: "Purpose & Via",
            content: `**po** = for (purpose/benefit)
• mi le moka **po** na = I work for you
• pata **po** ikasi = a book for learning

**wija** = via, through, using
• mi le kota **wija** pata = I communicate via writing
• mi le go **wija** titan = I go via the path`,
            vocabulary: [
                { word: 'po', translation: 'for (purpose)' },
                { word: 'wija', translation: 'via, through, using' },
                { word: 'moka', translation: 'to work' },
                { word: 'titan', translation: 'way, path' }
            ],
            examples: [
                { kokanu: 'mi le moka po na', english: 'I work for you' },
                { kokanu: 'mi le lika wija pata', english: 'I write using a book' }
            ]
        },
        {
            title: "Cause & Context",
            content: `**nenka** = because (reason)
• mi le pasan **nenka** na = I am happy because of you

**hon** = context, if (conditional)
• **hon** pani, mi le makan = If there is water, I eat
• Used for "if...then" sentences!`,
            vocabulary: [
                { word: 'nenka', translation: 'because' },
                { word: 'hon', translation: 'context, if' },
                { word: 'pasan', translation: 'happy' }
            ],
            examples: [
                { kokanu: 'mi le pasan nenka na', english: 'I am happy because of you' },
                { kokanu: 'hon pani, mi le makan', english: 'If there is water, I eat' }
            ]
        },
        {
            title: "Subject & Vocative",
            content: `**men** = subject marker (when not first)
Used when the subject is NOT at the beginning:
• in kuwosi le makan **men** mi = Fruit is eaten by me (passive!)

**he** = vocative marker (addressing someone)
• **he** na, peko! = Hey you, hello!
• **he** pawo! = Hey dog!`,
            vocabulary: [
                { word: 'men', translation: 'subject marker' },
                { word: 'he', translation: 'vocative marker (hey)' }
            ],
            examples: [
                { kokanu: 'in kuwosi le makan men mi', english: 'The fruit is eaten by me' },
                { kokanu: 'he na, peko!', english: 'Hey you, hello!' }
            ],
            tip: "men is only needed when the subject isn't first — it clarifies who does the action"
        },
        {
            title: "The Imperative: o",
            content: `To give commands, use **o** instead of **le**:

• **o** makan! = Eat!
• **o** kota ki mi = Talk to me!
• **o** teka in pata! = Read the book!

Use **he** to specify who you're addressing:
• **he** na, **o** makan! = Hey you, eat!`,
            vocabulary: [
                { word: 'o', translation: 'imperative marker' }
            ],
            examples: [
                { kokanu: 'o makan!', english: 'Eat!' },
                { kokanu: 'o kota ki mi', english: 'Talk to me!' },
                { kokanu: 'he na, o teka in pata', english: 'Hey you, read the book!' }
            ],
            tip: "o replaces le for commands — don't use men (no subject needed)"
        },
        {
            title: "All 11 Prepositions",
            content: `Here's your complete reference:

| Preposition | Meaning |
|-------------|---------|
| **in** | object marker |
| **ki** | to, towards |
| **pi** | at, during |
| **kan** | with |
| **sun** | from |
| **po** | for |
| **wija** | via, using |
| **nenka** | because |
| **hon** | if, context |
| **men** | subject marker |
| **he** | vocative (hey) |`,
            tip: "Each preposition introduces a phrase that relates to the main verb!"
        }
    ],

    vocabulary: [
        { word: 'pi', translation: 'at, during', phonetic: 'pee' },
        { word: 'kan', translation: 'with', phonetic: 'kahn' },
        { word: 'sun', translation: 'from', phonetic: 'soon' },
        { word: 'po', translation: 'for', phonetic: 'poh' },
        { word: 'wija', translation: 'via, using', phonetic: 'WEE-jah' },
        { word: 'nenka', translation: 'because', phonetic: 'NEN-kah' },
        { word: 'hon', translation: 'if, context', phonetic: 'hohn' },
        { word: 'men', translation: 'subject marker', phonetic: 'mehn' },
        { word: 'he', translation: 'vocative (hey)', phonetic: 'heh' },
        { word: 'o', translation: 'imperative marker', phonetic: 'oh' },
        { word: 'moka', translation: 'to work', phonetic: 'MOH-kah' },
        { word: 'pasan', translation: 'happy', phonetic: 'PAH-sahn' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "pi" mean?',
            options: ['with', 'from', 'at/during', 'for'],
            correctAnswer: 'at/during',
            hint: 'Location or time'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le makan kan na"',
            correctAnswers: ['I eat with you', 'we eat with you'],
            hint: 'kan = with'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which preposition means "because"?',
            options: ['hon', 'nenka', 'po', 'wija'],
            correctAnswer: 'nenka',
            hint: 'Expresses reason/cause'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "I work for you"',
            correctAnswers: ['mi le moka po na'],
            hint: 'po = for'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you form a command in Kokanu?',
            options: ['Use le', 'Use o', 'Use men', 'Use in'],
            correctAnswer: 'Use o',
            hint: 'o replaces le for imperatives'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "o makan!"',
            correctAnswers: ['Eat!', 'eat!'],
            hint: 'o = imperative'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "he" do?',
            options: ['Marks the subject', 'Addresses someone (vocative)', 'Marks the object', 'Means "hello"'],
            correctAnswer: 'Addresses someone (vocative)',
            hint: 'Like saying "Hey..."'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "He comes from that place"',
            correctAnswers: ['ja le nema sun jan'],
            hint: 'sun = from'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le pasan nenka na"',
            correctAnswers: ['I am happy because of you', 'we are happy because of you'],
            hint: 'nenka = because'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "Talk to me!"',
            correctAnswers: ['o kota ki mi', 'o kota ki mi!'],
            hint: 'Command + ki (to)'
        }
    ]
};
