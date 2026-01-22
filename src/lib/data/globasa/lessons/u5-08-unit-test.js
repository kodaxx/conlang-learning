// Unit 5: Tenses & Places - Lesson 8: Unit Test
// Comprehensive review of all Unit 5 vocabulary and concepts

export default {
    id: 'u5-08-unit-test',
    name: 'Unit 5 Test',
    unit: 5,
    unitName: 'Tenses & Places',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 5: Tenses & Places!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 5 Review',
            content: 'You\'ve learned **17 new words** in Unit 5! Key vocabulary:',
            vocabulary: [
                { word: 'le, xa', translation: 'Past, Future tense markers' },
                { word: 'mas, to, multi, xosu', translation: 'But, It, Many, Few' },
                { word: 'in, ex', translation: 'In/into, Out/from' },
                { word: 'ogar, dom, kamer', translation: 'Home, Building, Room' },
                { word: 'kokikamer, banyokamer', translation: 'Kitchen, Bathroom' },
                { word: 'parke, hotel, banko', translation: 'Park, Hotel, Bank' },
                { word: 'eskol, restoran, xwexi', translation: 'School, Restaurant, Learn' }
            ]
        },
        {
            title: 'Key Concepts',
            content: '• **le** + verb = past tense\\n• **xa** + verb = future tense\\n• **in/ex** = prepositions of location\\n• Compound words: modifier first (kokikamer)',
            tip: 'You can now talk about where you went, where you are, and where you\'re going!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        // Unit 5
        'mas', 'to', 'le', 'xa', 'multi', 'xosu',
        'in', 'ex', 'ogar', 'dom', 'kamer',
        'kokikamer', 'banyokamer',
        'parke', 'hotel', 'banko', 'eskol', 'restoran', 'xwexi',
        // Earlier units
        'mi', 'te', 'idi', 'cel', 'yam', 'nini', 'bon', 'day', 'meli'
    ],

    exercises: [
        // Tense markers
        {
            type: 'matching',
            prompt: 'Match tense markers',
            pairs: [
                { word: 'le', translation: 'past tense' },
                { word: 'xa', translation: 'future tense' },
                { word: 'no', translation: 'negation' }
            ]
        },
        // Quantity words
        {
            type: 'matching',
            prompt: 'Match quantity words',
            pairs: [
                { word: 'multi', translation: 'many/much' },
                { word: 'xosu', translation: 'few/little' }
            ]
        },
        // Prepositions
        {
            type: 'matching',
            prompt: 'Match prepositions',
            pairs: [
                { word: 'in', translation: 'in/into' },
                { word: 'ex', translation: 'out/from' },
                { word: 'cel', translation: 'to (goal)' }
            ]
        },
        // Places
        {
            type: 'matching',
            prompt: 'Match places',
            pairs: [
                { word: 'ogar', translation: 'home' },
                { word: 'parke', translation: 'park' },
                { word: 'eskol', translation: 'school' },
                { word: 'restoran', translation: 'restaurant' },
                { word: 'banko', translation: 'bank' }
            ]
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "I went to the park"',
            words: ['mi', 'le', 'idi', 'cel', 'parke', 'xa'],
            correctAnswer: ['mi', 'le', 'idi', 'cel', 'parke'],
            hint: 'I + past + go + to + park'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "She will learn at school"',
            words: ['te', 'xa', 'xwexi', 'in', 'eskol', 'le'],
            correctAnswer: ['te', 'xa', 'xwexi', 'in', 'eskol'],
            hint: 'She + will + learn + in + school'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Mi le yam in restoran"',
            correctAnswers: ['I ate at a restaurant', 'I ate in the restaurant'],
            hint: 'I + past + eat + in + restaurant'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Nini xa yuxi in parke"',
            correctAnswers: ['The children will play in the park', 'Children will play in the park'],
            hint: 'Children + will + play + in + park'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "We have many books"',
            correctAnswers: ['Imi hare multi kitabu'],
            hint: 'We + have + many + books'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The kitchen is big"',
            correctAnswers: ['Kokikamer sen day'],
            hint: 'Kitchen + is + big'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'What is the correct past tense of "Mi yam"?',
            options: ['Mi yam le', 'Mi le yam', 'Le mi yam'],
            correctAnswer: 'Mi le yam',
            hint: 'Subject + le + verb'
        },
        {
            type: 'multiple-choice',
            prompt: 'In compound words, the modifier comes:',
            options: ['Before the main word', 'After the main word', 'Either position'],
            correctAnswer: 'Before the main word',
            hint: 'Like koki-kamer'
        }
    ]
};
