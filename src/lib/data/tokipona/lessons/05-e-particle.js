export default {
    id: '05-e-particle',
    name: 'The e Particle',
    description: 'Learn to talk about objects using the e particle',
    icon: '🎯',
    xpReward: 30,

    teaching: [
        {
            title: "Introducing Objects",
            content: `So far we've made simple sentences like "mi moku" (I eat).

But what if you want to say WHAT you eat? 

That's where the **e** particle comes in! It introduces the **direct object** — the thing the action is done to.`,
            vocabulary: [
                { word: 'e', translation: '(introduces direct object)' },
                { word: 'lukin', translation: 'see, look, eye, vision' },
                { word: 'sona', translation: 'know, knowledge, wisdom' },
                { word: 'sitelen', translation: 'picture, write, draw, image' }
            ]
        },
        {
            title: "Using e",
            content: `The pattern is: **Subject (li) Verb e Object**

**e** marks what receives the action:`,
            examples: [
                { tokipona: "mi moku e moku", english: "I eat food", breakdown: "I + eat + e + food" },
                { tokipona: "sina lukin e suno", english: "You see the sun", breakdown: "you + see + e + sun" },
                { tokipona: "ona li moku e telo", english: "He/she drinks water", breakdown: "he/she + li + drink + e + water" }
            ],
            tip: "Think of 'e' as pointing to the object: 'I eat [what?] → e food'"
        },
        {
            title: "See and Look: lukin",
            content: `**lukin** means to see, look at, watch, or read:`,
            examples: [
                { tokipona: "mi lukin e sina", english: "I see you", breakdown: "" },
                { tokipona: "ona li lukin e mun", english: "She looks at the moon", breakdown: "" },
                { tokipona: "jan li lukin e sitelen", english: "The person looks at a picture", breakdown: "" }
            ]
        },
        {
            title: "Know: sona",
            content: `**sona** means to know, understand, or have knowledge:`,
            examples: [
                { tokipona: "mi sona e ni", english: "I know this", breakdown: "" },
                { tokipona: "sina sona e toki pona", english: "You know Toki Pona", breakdown: "" },
                { tokipona: "ona li sona e jan", english: "He/she knows the person", breakdown: "" }
            ]
        },
        {
            title: "Pictures and Writing: sitelen",
            content: `**sitelen** means picture, writing, image, or to draw/write:`,
            examples: [
                { tokipona: "mi sitelen", english: "I write / I draw", breakdown: "As a verb" },
                { tokipona: "sitelen pona", english: "good picture", breakdown: "As a noun" },
                { tokipona: "mi lukin e sitelen", english: "I look at a picture", breakdown: "" }
            ]
        }
    ],

    vocabulary: [
        { word: 'e', translation: '(object marker)', phonetic: 'eh' },
        { word: 'lukin', translation: 'see, look, eye', phonetic: 'LOO-keen' },
        { word: 'sona', translation: 'know, knowledge', phonetic: 'SOH-nah' },
        { word: 'sitelen', translation: 'picture, write, draw', phonetic: 'see-TEH-lehn' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What is the purpose of "e"?',
            options: ['It separates subject from verb', 'It introduces the object', 'It means "and"', 'It makes questions'],
            correctAnswer: 'It introduces the object',
            hint: 'What the action is done to'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "lukin" mean?',
            options: ['eat', 'go', 'see/look', 'know'],
            correctAnswer: 'see/look',
            hint: 'Using your eyes'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "sona" mean?',
            options: ['know', 'see', 'eat', 'speak'],
            correctAnswer: 'know',
            hint: 'Having knowledge'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi moku e moku"',
            correctAnswers: ['I eat food', 'I\'m eating food', 'I eat the food'],
            hint: 'I + eat + e + food'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "sina lukin e mi"',
            correctAnswers: ['you see me', 'you look at me', 'you are looking at me'],
            hint: 'you + see + e + me'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ona li sona e toki pona"',
            correctAnswers: ['he knows toki pona', 'she knows toki pona', 'they know toki pona'],
            hint: 'he/she + li + know + e + toki pona'
        },
        {
            type: 'fill-blank',
            prompt: 'mi lukin ___ sina. (I see you)',
            options: ['e', 'li', 'ni', 'pona'],
            correctAnswer: 'e',
            hint: 'Which particle introduces the object?'
        },
        {
            type: 'fill-blank',
            prompt: 'ona li moku ___ telo. (He drinks water)',
            options: ['li', 'e', 'mi', 'ni'],
            correctAnswer: 'e',
            hint: 'What comes before the object?'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I eat food"',
            words: ['mi', 'moku', 'e', 'moku', 'li'],
            correctAnswer: ['mi', 'moku', 'e', 'moku'],
            hint: 'I + eat + e + food'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "She sees the sun"',
            words: ['ona', 'li', 'lukin', 'e', 'suno', 'mi'],
            correctAnswer: ['ona', 'li', 'lukin', 'e', 'suno'],
            hint: 'she + li + see + e + sun'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "I know Toki Pona"',
            correctAnswers: ['mi sona e toki pona'],
            hint: 'I + know + e + toki pona'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "You see the moon"',
            correctAnswers: ['sina lukin e mun'],
            hint: 'you + see + e + moon'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which sentence means "I want food"?',
            options: ['mi moku e wile', 'mi wile e moku', 'mi wile moku', 'e mi moku wile'],
            correctAnswer: 'mi wile e moku',
            hint: 'I + want + e + food'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "They know the person"',
            words: ['ona', 'li', 'sona', 'e', 'jan', 'toki'],
            correctAnswer: ['ona', 'li', 'sona', 'e', 'jan'],
            hint: 'they + li + know + e + person'
        }
    ]
};
