// Lesson 07: Advanced Derivations
// Covers Verb→Modifier, Modifier→Noun, and the derivation table

export default {
    id: '07-advanced-derivations',
    name: 'Advanced Derivations',
    description: 'Master all word derivation patterns',
    icon: '🧬',
    xpReward: 40,

    teaching: [
        {
            title: "Derivation Review",
            content: `In the last lesson, we learned:
• Modifier → Verb: "to be [modifier]"
• Noun → Verb: "to be [noun]"
• Verb → Noun: generic object
• Noun → Modifier: "[noun]-related"

Now let's complete the picture!`,
            tip: "Understanding derivations unlocks creative vocabulary!"
        },
        {
            title: "Modifier → Noun",
            content: `A modifier used as a noun becomes the **abstract concept** of "[modifier]-ness":

• **pilu** (victorious) → victory, success
• **pasan** (happy) → happiness
• **tonko** (suffering) → pain, suffering

Examples:
• mi le suki in **pilu** = I like victory
• **tonko** le loso = Pain is bad`,
            vocabulary: [
                { word: 'pilu', translation: 'victorious, successful' },
                { word: 'tonko', translation: 'hurting, suffering' }
            ],
            examples: [
                { kokanu: 'mi le suki in pilu', english: 'I like victory/success' },
                { kokanu: 'pasan le tope', english: 'Happiness is good' },
                { kokanu: 'tonko le loso', english: 'Pain/suffering is bad' }
            ]
        },
        {
            title: "Verb → Modifier",
            content: `A verb as a modifier means "**-able**" or "[verb]-like":

• **makan** (to eat) as modifier → edible
• **solu** (to ask) as modifier → askable, question-worthy
• **pen** (to understand) as modifier → understandable

Examples:
• kuwosi **makan** = edible fruit
• kota **pen** = understandable speech`,
            vocabulary: [
                { word: 'solu', translation: 'to ask (a question)' }
            ],
            examples: [
                { kokanu: 'kuwosi makan', english: 'edible fruit' },
                { kokanu: 'pata pen', english: 'understandable book' },
                { kokanu: 'kota solu', english: 'questionable speech' }
            ]
        },
        {
            title: "The Complete Table",
            content: `Here's the full derivation reference:

| From | To | Meaning |
|------|-----|---------|
| Modifier | Verb | to be [mod] |
| Noun | Verb | to be [noun] |
| Verb | Noun | generic object |
| Modifier | Noun | [mod]-ness |
| Noun | Modifier | [noun]-related |
| Verb | Modifier | [verb]-able |

This is the heart of Kokanu vocabulary!`,
            tip: "With ~380 base words + derivations, you can express thousands of concepts!"
        },
        {
            title: "Modifiers as Adverbs",
            content: `When modifiers follow a **verb**, they work as adverbs:

• ja le makan **wiki** = He/she eats FAST
• mi le kota **tope** = I speak WELL (good)
• pawo le lupa **wiki** = The dog runs fast

Same word, different position = different function!`,
            vocabulary: [
                { word: 'lupa', translation: 'to run' }
            ],
            examples: [
                { kokanu: 'ja le makan wiki', english: 'He/she eats fast' },
                { kokanu: 'mi le kota tope', english: 'I speak well' },
                { kokanu: 'mi le lika wiki', english: 'I write fast' }
            ]
        },
        {
            title: "More Useful Modifiers",
            content: `Expand your modifier vocabulary:

**States:**
• **antomi** = asleep
• **okutu** = hidden, covered
• **polota** = exposed, naked
• **panta** = closed
• **kula** = open

**Qualities:**
• **puka** = heavy
• **haluko** = light (weight)
• **hakiki** = authentic, real
• **pasu** = false, fake`,
            vocabulary: [
                { word: 'okutu', translation: 'hidden, covered' },
                { word: 'polota', translation: 'exposed, naked' },
                { word: 'puka', translation: 'heavy' },
                { word: 'haluko', translation: 'light (weight)' },
                { word: 'hakiki', translation: 'authentic, real' },
                { word: 'pasu', translation: 'false, fake' }
            ]
        },
        {
            title: "Chaining Modifiers",
            content: `Multiple modifiers can chain together:

• pawo **cenpo wiki** = big fast dog
• pata **tope cina** = good small book

All modifiers collectively describe the preceding word!`,
            examples: [
                { kokanu: 'pawo cenpo wiki', english: 'big fast dog' },
                { kokanu: 'meja cina tope', english: 'small good cat' },
                { kokanu: 'pata mi cenpo', english: 'my big book' }
            ]
        }
    ],

    vocabulary: [
        { word: 'pilu', translation: 'victorious, successful', phonetic: 'PEE-loo' },
        { word: 'tonko', translation: 'suffering, pain', phonetic: 'TOHN-ko' },
        { word: 'solu', translation: 'to ask', phonetic: 'SOH-loo' },
        { word: 'lupa', translation: 'to run', phonetic: 'LOO-pah' },
        { word: 'okutu', translation: 'hidden', phonetic: 'oh-KOO-too' },
        { word: 'puka', translation: 'heavy', phonetic: 'POO-kah' },
        { word: 'haluko', translation: 'light (weight)', phonetic: 'hah-LOO-ko' },
        { word: 'hakiki', translation: 'authentic, real', phonetic: 'hah-KEE-kee' },
        { word: 'pasu', translation: 'false, fake', phonetic: 'PAH-soo' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does a modifier become when used as a noun?',
            options: ['An action', 'An abstract concept (-ness)', 'A place', 'A verb'],
            correctAnswer: 'An abstract concept (-ness)',
            hint: 'pasan (happy) → happiness'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "pasan le tope"',
            correctAnswers: ['Happiness is good', 'happiness is good'],
            hint: 'pasan as noun = happiness'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does a verb mean when used as a modifier?',
            options: ['Past action', '-able / [verb]-like', 'Future action', 'Location'],
            correctAnswer: '-able / [verb]-like',
            hint: 'makan → edible'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "kuwosi makan"',
            correctAnswers: ['edible fruit', 'eatable fruit', 'food fruit'],
            hint: 'makan as modifier = edible'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ja le makan wiki"',
            correctAnswers: ['He eats fast', 'She eats fast', 'He/she eats quickly'],
            hint: 'wiki after verb = adverb'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "I speak well"',
            correctAnswers: ['mi le kota tope'],
            hint: 'tope = good (as adverb = well)'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "hakiki" mean?',
            options: ['fake', 'hidden', 'authentic/real', 'heavy'],
            correctAnswer: 'authentic/real',
            hint: 'Opposite of pasu (false)'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "pata mi cenpo"',
            correctAnswers: ['my big book', 'my large book'],
            hint: 'pata + mi + cenpo = book + my + big'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "The dog runs fast"',
            correctAnswers: ['pawo le lupa wiki'],
            hint: 'lupa = run, wiki = fast'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of "puka" (heavy)?',
            options: ['cenpo', 'haluko', 'cina', 'tope'],
            correctAnswer: 'haluko',
            hint: 'Light in weight'
        }
    ]
};
