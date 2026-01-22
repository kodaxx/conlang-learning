export default {
    id: '09-commands',
    name: 'Commands & Address',
    description: 'Learn to give commands and address people directly',
    icon: '📢',
    xpReward: 25,

    teaching: [
        {
            title: "The o Particle",
            content: `The particle **o** is used for two things:
1. **Commands** (telling someone to do something)
2. **Addressing someone** (calling out to them)`,
            vocabulary: [
                { word: 'o', translation: '(command/vocative particle)' },
                { word: 'pilin', translation: 'feel, heart, emotion' },
                { word: 'pakala', translation: 'break, damage, mistake' },
                { word: 'lape', translation: 'sleep, rest' }
            ]
        },
        {
            title: "Giving Commands",
            content: `To give a command, use **o** instead of li:`,
            examples: [
                { tokipona: "o moku!", english: "Eat!", breakdown: "o + eat = command to eat" },
                { tokipona: "o toki!", english: "Speak! / Hello!", breakdown: "o + speak = command to speak" },
                { tokipona: "o pona!", english: "Be good! / Fix it!", breakdown: "o + good = command to be good" },
                { tokipona: "o kama!", english: "Come!", breakdown: "o + come = command to come" }
            ],
            tip: "'o toki!' is another way to say hello — you're commanding someone to speak!"
        },
        {
            title: "Addressing Someone",
            content: `Use **o** after a person's name or title to address them:`,
            examples: [
                { tokipona: "jan o!", english: "Hey person! / Excuse me!", breakdown: "person + o!" },
                { tokipona: "jan pona o!", english: "Hey friend!", breakdown: "friend + o!" },
                { tokipona: "sina o toki", english: "You, speak!", breakdown: "you + o + speak" }
            ]
        },
        {
            title: "Feelings: pilin",
            content: `**pilin** means feeling, heart, or to feel:`,
            examples: [
                { tokipona: "mi pilin pona", english: "I feel good", breakdown: "I + feel + good" },
                { tokipona: "sina pilin ike", english: "You feel bad", breakdown: "you + feel + bad" },
                { tokipona: "pilin sina li seme?", english: "How do you feel?", breakdown: "feeling + your + li + what?" }
            ]
        },
        {
            title: "More Useful Words",
            content: `**pakala** = break, damage, mistake (also an expletive!)
**lape** = sleep, rest`,
            examples: [
                { tokipona: "mi pakala", english: "I made a mistake / I broke it", breakdown: "" },
                { tokipona: "pakala!", english: "Darn! / Oops!", breakdown: "As an exclamation" },
                { tokipona: "mi wile lape", english: "I want to sleep", breakdown: "" },
                { tokipona: "o lape pona!", english: "Sleep well!", breakdown: "o + sleep + good" }
            ]
        }
    ],

    vocabulary: [
        { word: 'o', translation: '(command/vocative)', phonetic: 'oh' },
        { word: 'pilin', translation: 'feel, emotion, heart', phonetic: 'PEE-leen' },
        { word: 'pakala', translation: 'break, damage, mistake', phonetic: 'pah-KAH-lah' },
        { word: 'lape', translation: 'sleep, rest', phonetic: 'LAH-peh' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What is "o" used for?',
            options: ['Negation', 'Questions', 'Commands and addressing', 'Objects'],
            correctAnswer: 'Commands and addressing',
            hint: 'Telling someone to do something'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "pilin" mean?',
            options: ['think', 'feel', 'speak', 'go'],
            correctAnswer: 'feel',
            hint: 'Emotions and sensations'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "o moku!"',
            correctAnswers: ['eat!', 'go eat!', 'please eat'],
            hint: 'A command to eat'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi pilin pona"',
            correctAnswers: ['I feel good', 'I\'m feeling good', 'I feel well', 'I feel fine'],
            hint: 'I + feel + good'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "o lape pona!"',
            correctAnswers: ['sleep well!', 'rest well!', 'good night!'],
            hint: 'o + sleep + good'
        },
        {
            type: 'fill-blank',
            prompt: '___ moku! (Eat!)',
            options: ['li', 'e', 'o', 'mi'],
            correctAnswer: 'o',
            hint: 'Command particle'
        },
        {
            type: 'fill-blank',
            prompt: 'mi ___ pona. (I feel good)',
            options: ['pilin', 'pakala', 'lape', 'pali'],
            correctAnswer: 'pilin',
            hint: 'Which word means to feel?'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Come!"',
            words: ['o', 'kama', 'li', 'mi', 'tawa'],
            correctAnswer: ['o', 'kama'],
            hint: 'o + come'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I want to sleep"',
            words: ['mi', 'wile', 'lape', 'o', 'pilin'],
            correctAnswer: ['mi', 'wile', 'lape'],
            hint: 'I + want + sleep'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "Speak!"',
            correctAnswers: ['o toki!', 'o toki'],
            hint: 'o + speak'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "I feel bad"',
            correctAnswers: ['mi pilin ike'],
            hint: 'I + feel + bad'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "pakala" mean?',
            options: ['sleep', 'feel', 'break/mistake', 'speak'],
            correctAnswer: 'break/mistake',
            hint: 'Something going wrong'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "Hey friend!"?',
            options: ['jan pona li', 'o jan pona', 'jan pona o!', 'jan o pona'],
            correctAnswer: 'jan pona o!',
            hint: 'Address them with o after their title'
        }
    ]
};
