// Unit 2: Actions & Food - Lesson 8: Unit Test
// No new words - comprehensive review of Unit 2
// Tests all vocabulary and concepts from Unit 2 + some Unit 1 review

export default {
    id: 'u2-08-unit-test',
    name: 'Unit 2 Test',
    unit: 2,
    unitName: 'Actions & Food',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 2: Actions & Food!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 2 Review',
            content: 'You\'ve learned **17 new words** in Unit 2! Here\'s your vocabulary:',
            vocabulary: [
                { word: 'ergo, pawbu, anda, fley, suyon', translation: 'Movement verbs' },
                { word: 'yu, fe lutuf, xukra', translation: 'Pronouns & politeness' },
                { word: 'yam, roti, risi, supa, salada, jubin', translation: 'Food basics' },
                { word: 'pingo, banana, patato', translation: 'Fruits & vegetables' },
                { word: 'kitabu, hare', translation: 'Objects & possession' }
            ]
        },
        {
            title: 'Key Concept: SVO Word Order',
            content: 'You learned that Globasa uses **Subject-Verb-Object** order:\n\n• **Mi** (I) + **yam** (eat) + **pingo** (apple)\n• **Bwaw** (dog) + **hare** (has) + **roti** (bread)',
            tip: 'Same word order as English!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        // Unit 2
        'ergo', 'pawbu', 'anda', 'fley', 'suyon',
        'yu', 'fe lutuf', 'xukra',
        'yam', 'roti', 'risi', 'supa', 'salada', 'jubin',
        'pingo', 'banana', 'patato', 'kitabu', 'hare',
        // Unit 1 review
        'mi', 'salom', 'weda', 'bwaw', 'myaw', 'nini', 'mama', 'papa'
    ],

    exercises: [
        // Movement verbs
        {
            type: 'matching',
            prompt: 'Match movement verbs',
            pairs: [
                { word: 'ergo', translation: 'work' },
                { word: 'pawbu', translation: 'run' },
                { word: 'anda', translation: 'walk' },
                { word: 'fley', translation: 'fly' },
                { word: 'suyon', translation: 'swim' }
            ]
        },
        // Food words
        {
            type: 'matching',
            prompt: 'Match food words',
            pairs: [
                { word: 'roti', translation: 'bread' },
                { word: 'risi', translation: 'rice' },
                { word: 'supa', translation: 'soup' },
                { word: 'jubin', translation: 'cheese' },
                { word: 'pingo', translation: 'apple' }
            ]
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Mi yam banana"',
            correctAnswers: ['I eat a banana', 'I eat banana', 'I am eating a banana'],
            hint: 'SVO: I + eat + banana'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Yu hare kitabu"',
            correctAnswers: ['You have a book', 'You have book', 'You have books'],
            hint: 'SVO: You + have + book'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Piu fley"',
            correctAnswers: ['The bird flies', 'Bird flies', 'The bird is flying'],
            hint: 'Subject + verb'
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "The dog eats cheese"',
            words: ['bwaw', 'yam', 'jubin', 'hare', 'myaw'],
            correctAnswer: ['bwaw', 'yam', 'jubin'],
            hint: 'Dog + eat + cheese'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Mom has bread"',
            words: ['mama', 'hare', 'roti', 'yam', 'papa'],
            correctAnswer: ['mama', 'hare', 'roti'],
            hint: 'Mom + have + bread'
        },
        // Politeness
        {
            type: 'matching',
            prompt: 'Match polite expressions',
            pairs: [
                { word: 'salom', translation: 'hello' },
                { word: 'weda', translation: 'goodbye' },
                { word: 'xukra', translation: 'thank you' },
                { word: 'fe lutuf', translation: 'please' }
            ]
        },
        // Pronouns
        {
            type: 'multiple-choice',
            prompt: 'How do you say "You walk" in Globasa?',
            options: ['Mi anda', 'Yu anda', 'Yu pawbu', 'Mi pawbu'],
            correctAnswer: 'Yu anda',
            hint: 'yu = you, anda = walk'
        },
        // Mixed challenge
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The cat has rice"',
            correctAnswers: ['Myaw hare risi', 'myaw hare risi'],
            hint: 'Cat + have + rice'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The child swims"',
            correctAnswers: ['Nini suyon', 'nini suyon'],
            hint: 'Child + swim'
        },
        // Concept check
        {
            type: 'multiple-choice',
            prompt: 'What is the correct word order for "I eat bread"?',
            options: ['Roti mi yam', 'Yam mi roti', 'Mi yam roti', 'Mi roti yam'],
            correctAnswer: 'Mi yam roti',
            hint: 'Subject-Verb-Object'
        }
    ]
};
