export default {
    id: '02-things-people',
    name: 'Things & People',
    description: 'Learn words for people, food, water, and the world around you',
    icon: '👥',
    xpReward: 25,

    teaching: [
        {
            title: "The World Around You",
            content: `Now let's learn words for **things and people** in the world around you.

In Toki Pona, words are broad. One word covers many related concepts. This keeps the language simple!`,
            vocabulary: [
                { word: 'jan', translation: 'person, people, human' },
                { word: 'moku', translation: 'food, eat, drink' },
                { word: 'telo', translation: 'water, liquid, drink' },
                { word: 'suno', translation: 'sun, light, bright' },
                { word: 'mun', translation: 'moon, star, night sky' }
            ]
        },
        {
            title: "Words as Nouns",
            content: `These words can be **nouns** (things) or **verbs** (actions):`,
            examples: [
                { tokipona: "moku", english: "food (noun) or eat (verb)", breakdown: "Context tells you which!" },
                { tokipona: "mi moku", english: "I eat / I am eating", breakdown: "mi (I) + moku (eat)" },
                { tokipona: "moku pona", english: "good food", breakdown: "moku (food) + pona (good)" }
            ],
            tip: "When a word comes after mi/sina, it usually acts as a verb!"
        },
        {
            title: "Describing Things",
            content: `In Toki Pona, **modifiers come AFTER** the word they describe.

This is opposite to English!`,
            examples: [
                { tokipona: "jan pona", english: "good person / friend", breakdown: "jan (person) + pona (good)" },
                { tokipona: "telo ike", english: "bad water", breakdown: "telo (water) + ike (bad)" },
                { tokipona: "suno pona", english: "good sun / nice day", breakdown: "suno (sun) + pona (good)" }
            ],
            tip: "jan pona literally means 'person good' — a good person, or simply: a friend!"
        },
        {
            title: "People",
            content: `The word **jan** means any person or people.

Combined with other words, you can describe different people:`,
            examples: [
                { tokipona: "jan", english: "person, people, somebody", breakdown: "" },
                { tokipona: "jan pona", english: "good person, friend", breakdown: "jan (person) + pona (good)" },
                { tokipona: "jan ike", english: "bad person, enemy", breakdown: "jan (person) + ike (bad)" }
            ]
        },
        {
            title: "Let's Practice!",
            content: `You now know **10 words**! You can talk about:
- Yourself: **mi**, **sina** 
- Qualities: **pona**, **ike**
- Communication: **toki**
- People: **jan**
- Food & drink: **moku**, **telo**
- Sky: **suno**, **mun**

Remember: modifiers come AFTER the word they describe!`
        }
    ],

    vocabulary: [
        { word: 'jan', translation: 'person, people, human', phonetic: 'yahn' },
        { word: 'moku', translation: 'food, eat, drink', phonetic: 'MOH-koo' },
        { word: 'telo', translation: 'water, liquid, drink', phonetic: 'TEH-loh' },
        { word: 'suno', translation: 'sun, light, bright', phonetic: 'SOO-noh' },
        { word: 'mun', translation: 'moon, star, night sky', phonetic: 'moon' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "jan" mean?',
            options: ['food', 'water', 'person', 'sun'],
            correctAnswer: 'person',
            hint: 'Think of people'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "moku" mean?',
            options: ['water', 'food/eat', 'moon', 'person'],
            correctAnswer: 'food/eat',
            hint: 'Something you do at meals'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "telo" mean?',
            options: ['sun', 'food', 'water', 'person'],
            correctAnswer: 'water',
            hint: 'A liquid you drink'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "friend" in Toki Pona?',
            options: ['jan ike', 'jan pona', 'pona jan', 'mi jan'],
            correctAnswer: 'jan pona',
            hint: 'A "good person" = a friend. Remember modifier order!'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi moku"',
            correctAnswers: ['I eat', 'I am eating', 'I drink', 'we eat'],
            hint: 'mi = I, moku = eat'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "jan pona"',
            correctAnswers: ['good person', 'friend', 'a friend', 'friends'],
            hint: 'jan = person, pona = good'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "telo pona"',
            correctAnswers: ['good water', 'clean water', 'nice water'],
            hint: 'telo = water, pona = good'
        },
        {
            type: 'fill-blank',
            prompt: 'mi ___. (I eat)',
            options: ['moku', 'telo', 'jan', 'suno'],
            correctAnswer: 'moku',
            hint: 'Which word means to eat?'
        },
        {
            type: 'fill-blank',
            prompt: '___ pona. (Good person / friend)',
            options: ['moku', 'jan', 'telo', 'suno'],
            correctAnswer: 'jan',
            hint: 'Which word means person?'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "good food"',
            words: ['moku', 'pona', 'ike', 'jan'],
            correctAnswer: ['moku', 'pona'],
            hint: 'food + good (modifier after!)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I drink water"',
            words: ['mi', 'telo', 'moku', 'sina'],
            correctAnswer: ['mi', 'moku', 'telo'],
            hint: 'I + eat/drink + water'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "bad person"',
            correctAnswers: ['jan ike'],
            hint: 'person + bad (modifier after!)'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is "suno"?',
            options: ['moon', 'sun', 'water', 'food'],
            correctAnswer: 'sun',
            hint: 'Bright thing in the daytime sky'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is "mun"?',
            options: ['sun', 'moon', 'star', 'moon/star'],
            correctAnswer: 'moon/star',
            hint: 'Things you see in the night sky'
        }
    ]
};
