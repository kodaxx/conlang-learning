// Lesson 02: Animals
// Learn basic animal vocabulary

export default {
    id: '02-animals',
    name: 'Animals',
    description: 'Learn words for common animals',
    icon: '🐕',
    xpReward: 20,

    teaching: [
        {
            title: "Animal Words",
            content: `Let's learn some animal words in Kokanu!

Notice how each word follows the phonology rules you learned:
• Stress on first syllable
• Simple consonant-vowel patterns
• Easy to pronounce!`,
            tip: "All Kokanu words follow the same pronunciation rules!"
        },
        {
            title: "Pets & Farm Animals",
            content: `Common animals you'll use often:

• **pawo** = dog
• **meja** = cat  
• **neje** = horse
• **momu** = cow

These are some of the most common animals in everyday conversation!`,
            vocabulary: [
                { word: 'pawo', translation: 'dog' },
                { word: 'meja', translation: 'cat' },
                { word: 'neje', translation: 'horse' },
                { word: 'momu', translation: 'cow' }
            ]
        },
        {
            title: "More Animals",
            content: `A few more useful animal words:

• **kuku** = bird
• **micin** = fish
• **canwa** = animal (general term)

Use **canwa** when you don't know the specific animal word!`,
            vocabulary: [
                { word: 'kuku', translation: 'bird' },
                { word: 'micin', translation: 'fish' },
                { word: 'canwa', translation: 'animal' }
            ],
            tip: "canwa is handy when you don't know the specific word!"
        }
    ],

    vocabulary: [
        { word: 'pawo', translation: 'dog', phonetic: 'PAH-wo' },
        { word: 'meja', translation: 'cat', phonetic: 'MEH-jah' },
        { word: 'kuku', translation: 'bird', phonetic: 'KOO-koo' },
        { word: 'neje', translation: 'horse', phonetic: 'NEH-jeh' },
        { word: 'momu', translation: 'cow', phonetic: 'MOH-moo' },
        { word: 'micin', translation: 'fish', phonetic: 'MEE-chin' },
        { word: 'canwa', translation: 'animal', phonetic: 'CHAHN-wah' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "pawo" mean?',
            options: ['cat', 'bird', 'dog', 'horse'],
            correctAnswer: 'dog',
            hint: 'Man\'s best friend'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "meja" mean?',
            options: ['dog', 'cat', 'bird', 'fish'],
            correctAnswer: 'cat',
            hint: 'A furry pet that meows'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "kuku"',
            correctAnswers: ['bird'],
            hint: 'It flies!'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "horse"',
            correctAnswers: ['neje'],
            hint: 'You can ride this animal'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which word means "animal" in general?',
            options: ['pawo', 'meja', 'canwa', 'kuku'],
            correctAnswer: 'canwa',
            hint: 'Use this when you don\'t know the specific animal'
        },
        {
            prompt: 'Translate to English: "micin"',
            correctAnswers: ['fish'],
            hint: 'It swims in water'
        },
        {
            type: 'matching',
            prompt: 'Match the animals to their names',
            pairs: [
                { word: 'pawo', translation: 'dog' },
                { word: 'meja', translation: 'cat' },
                { word: 'kuku', translation: 'bird' },
                { word: 'neje', translation: 'horse' },
                { word: 'momu', translation: 'cow' }
            ]
        }
    ]
};
