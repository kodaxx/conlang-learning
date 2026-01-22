// Lesson 03: Things & Places
// Learn basic nouns for things and places

export default {
    id: '03-things-places',
    name: 'Things & Places',
    description: 'Learn words for everyday things and places',
    icon: '🏠',
    xpReward: 20,

    teaching: [
        {
            title: "Everyday Things",
            content: `Now let's learn some useful nouns for things around you:

• **pani** = water, liquid
• **kuwosi** = fruit
• **sito** = bread

These are words you'll use every day!`,
            vocabulary: [
                { word: 'pani', translation: 'water, liquid' },
                { word: 'kuwosi', translation: 'fruit' },
                { word: 'sito', translation: 'bread' }
            ]
        },
        {
            title: "People",
            content: `Words for people:

• **nin** = person, people
• **menwo** = child
• **matuwa** = parent

Notice that **nin** can mean one person or multiple people - context tells you!`,
            vocabulary: [
                { word: 'nin', translation: 'person, people' },
                { word: 'menwo', translation: 'child' },
                { word: 'matuwa', translation: 'parent' }
            ],
            tip: "Like English 'sheep', nin works for singular and plural!"
        },
        {
            title: "Places",
            content: `Where things are:

• **jan** = place, location
• **insu** = building
• **sinsi** = city

These words help you talk about where things happen!`,
            vocabulary: [
                { word: 'jan', translation: 'place' },
                { word: 'insu', translation: 'building' },
                { word: 'sinsi', translation: 'city' }
            ]
        }
    ],

    vocabulary: [
        { word: 'pani', translation: 'water, liquid', phonetic: 'PAH-nee' },
        { word: 'kuwosi', translation: 'fruit', phonetic: 'koo-WOH-see' },
        { word: 'sito', translation: 'bread', phonetic: 'SEE-toh' },
        { word: 'nin', translation: 'person, people', phonetic: 'neen' },
        { word: 'menwo', translation: 'child', phonetic: 'MEHN-wo' },
        { word: 'matuwa', translation: 'parent', phonetic: 'mah-TOO-wah' },
        { word: 'jan', translation: 'place', phonetic: 'jahn' },
        { word: 'insu', translation: 'building', phonetic: 'EEN-soo' },
        { word: 'sinsi', translation: 'city', phonetic: 'SEEN-see' }
    ],

    exercises: [
        {
            type: 'translation',
            prompt: 'Translate to English: "pani"',
            correctAnswers: ['water', 'liquid'],
            hint: 'Something you drink'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "nin"',
            correctAnswers: ['person', 'people', 'human'],
            hint: 'A human being'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "insu" mean?',
            options: ['water', 'person', 'building', 'city'],
            correctAnswer: 'building',
            hint: 'A structure with walls and a roof'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "child"',
            correctAnswers: ['menwo'],
            hint: 'A young person'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "sinsi" mean?',
            options: ['place', 'building', 'city', 'person'],
            correctAnswer: 'city',
            hint: 'A large urban area'
        },
        {
            prompt: 'Translate to English: "kuwosi"',
            correctAnswers: ['fruit'],
            hint: 'Apples, bananas, oranges...'
        },
        {
            type: 'matching',
            prompt: 'Match the words',
            pairs: [
                { word: 'pani', translation: 'water' },
                { word: 'sito', translation: 'bread' },
                { word: 'insu', translation: 'building' },
                { word: 'sinsi', translation: 'city' },
                { word: 'menwo', translation: 'child' }
            ]
        }
    ]
};
