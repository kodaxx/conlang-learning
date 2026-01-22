export default {
    id: '01-first-words',
    name: 'First Words',
    description: 'Learn your first Toki Pona words and build simple sentences',
    icon: '🌱',
    xpReward: 25,

    // Teaching content shown BEFORE exercises
    teaching: [
        {
            title: "toki pona!",
            content: `Welcome to **Toki Pona** — the language of simplicity!

Toki Pona has only about **120 words**, making it one of the smallest languages ever created. It was designed to focus on what really matters.

The name itself tells you everything: **toki** means "language" or "to speak", and **pona** means "good" or "simple".

So "Toki Pona" literally means "good language" or "simple speech".`,
            tip: "In Toki Pona, 'toki!' by itself is how you say hello — you're literally just saying 'speak!' or 'language!'"
        },
        {
            title: "Your First Words",
            content: `Let's learn the most important words first. In Toki Pona, every word can be a noun, verb, or adjective depending on context.`,
            vocabulary: [
                { word: 'mi', translation: 'I, me, we, us' },
                { word: 'sina', translation: 'you' },
                { word: 'pona', translation: 'good, simple, positive' },
                { word: 'ike', translation: 'bad, negative, complex' },
                { word: 'toki', translation: 'language, speak, hello' }
            ],
            tip: "'mi' can mean 'I', 'me', 'we', or 'us' — context tells you which one!"
        },
        {
            title: "No Verb 'To Be'",
            content: `Here's something amazing: Toki Pona has **no word for 'is', 'am', or 'are'**!

To say "I am good", you just put the words together:`,
            examples: [
                { tokipona: "mi pona", english: "I am good", breakdown: "mi (I) + pona (good)" },
                { tokipona: "sina pona", english: "You are good", breakdown: "sina (you) + pona (good)" },
                { tokipona: "mi ike", english: "I am bad", breakdown: "mi (I) + ike (bad)" }
            ],
            tip: "Just put the subject and the description together — no extra words needed!"
        },
        {
            title: "Saying Hello",
            content: `The word **toki** does triple duty:
- As a greeting: "toki!" = Hello!  
- As a noun: "toki" = language, speech, words
- As a verb: "toki" = to speak, to talk

You can combine it with other words:`,
            examples: [
                { tokipona: "toki!", english: "Hello!", breakdown: "A friendly greeting" },
                { tokipona: "mi toki", english: "I speak / I am speaking", breakdown: "mi (I) + toki (speak)" },
                { tokipona: "toki pona", english: "Good language / simple speech", breakdown: "toki (language) + pona (good)" }
            ]
        },
        {
            title: "Ready to Practice!",
            content: `You now know **5 words** and can already make sentences!

Let's practice what you've learned. Remember:
- **mi** = I, me, we
- **sina** = you  
- **pona** = good
- **ike** = bad
- **toki** = language, speak, hello

No verb "to be" — just put words together!`,
            tip: "Don't worry about mistakes — that's how we learn. pona!"
        }
    ],

    vocabulary: [
        { word: 'mi', translation: 'I, me, we, us', phonetic: 'mee' },
        { word: 'sina', translation: 'you', phonetic: 'SEE-nah' },
        { word: 'pona', translation: 'good, simple, positive', phonetic: 'POH-nah' },
        { word: 'ike', translation: 'bad, negative, complex', phonetic: 'EE-keh' },
        { word: 'toki', translation: 'language, speak, hello', phonetic: 'TOH-kee' }
    ],

    exercises: [
        // Recognition exercises
        {
            type: 'multiple-choice',
            prompt: 'What does "pona" mean?',
            options: ['bad', 'good', 'you', 'speak'],
            correctAnswer: 'good',
            hint: 'It\'s in the language name: Toki Pona!'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "ike" mean?',
            options: ['good', 'bad', 'I', 'hello'],
            correctAnswer: 'bad',
            hint: 'The opposite of pona'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "hello" in Toki Pona?',
            options: ['pona', 'mi', 'toki', 'sina'],
            correctAnswer: 'toki',
            hint: 'This word also means "language" and "speak"'
        },

        // Recall exercises  
        {
            type: 'multiple-choice',
            prompt: 'Which word means "I" or "me"?',
            options: ['sina', 'mi', 'pona', 'toki'],
            correctAnswer: 'mi',
            hint: 'Sounds like "me" in English!'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which word means "you"?',
            options: ['mi', 'sina', 'ike', 'toki'],
            correctAnswer: 'sina',
            hint: 'Starts with "s"'
        },

        // Translation exercises
        {
            type: 'translation',
            prompt: 'Translate to English: "mi pona"',
            correctAnswers: ['I am good', 'I\'m good', 'we are good', 'I am well'],
            hint: 'Remember: no verb "to be" — mi = I, pona = good'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "sina ike"',
            correctAnswers: ['you are bad', 'you\'re bad'],
            hint: 'sina = you, ike = bad'
        },

        // Fill-blank exercises
        {
            type: 'fill-blank',
            prompt: 'mi ___. (I am good)',
            options: ['pona', 'ike', 'sina', 'toki'],
            correctAnswer: 'pona',
            hint: 'Which word means "good"?'
        },
        {
            type: 'fill-blank',
            prompt: '___ pona. (You are good)',
            options: ['mi', 'sina', 'toki', 'ike'],
            correctAnswer: 'sina',
            hint: 'Which word means "you"?'
        },

        // Word-bank exercises
        {
            type: 'word-bank',
            prompt: 'Build: "I am bad"',
            words: ['mi', 'sina', 'ike', 'pona'],
            correctAnswer: ['mi', 'ike'],
            hint: 'Start with "I", then "bad"'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Hello! I am good"',
            words: ['toki', 'mi', 'pona', 'sina', 'ike'],
            correctAnswer: ['toki', 'mi', 'pona'],
            hint: 'Greeting first, then say you are good'
        },

        // Challenge exercises (variations)
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "You are good"',
            correctAnswers: ['sina pona'],
            hint: 'you + good (no verb "to be"!)'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "I speak" or "I am speaking"',
            correctAnswers: ['mi toki'],
            hint: 'I + speak'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "toki pona" literally mean?',
            options: ['Hello friend', 'Good language', 'I speak', 'You are good'],
            correctAnswer: 'Good language',
            hint: 'toki = language, pona = good'
        }
    ]
};
