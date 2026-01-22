// Unit 1: Foundations - Lesson 8: Unit Test
// No new words - comprehensive review
// Tests all vocabulary and concepts from Unit 1

export default {
    id: 'u1-08-unit-test',
    name: 'Unit 1 Test',
    unit: 1,
    unitName: 'Foundations',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 1: Foundations!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 1 Review',
            content: 'You\'ve learned **20 words** in Unit 1! Let\'s review what you know:',
            vocabulary: [
                { word: 'salom, weda, xanti', translation: 'Greetings' },
                { word: 'bwaw, myaw, piu, uma, mahi', translation: 'Animals' },
                { word: 'doste, nini, sodar', translation: 'People' },
                { word: 'matre, mama, patre, papa', translation: 'Family' },
                { word: 'mi, somno, doxo, danse, lala, yuxi', translation: 'Pronoun + Verbs' }
            ]
        },
        {
            title: 'Key Concepts',
            content: 'You\'ve also learned these important grammar concepts:\n\n• **No plural nouns** - context tells us singular/plural\n• **Gender-neutral words** - most people words don\'t specify gender\n• **No verb conjugation** - verbs never change form\n• **Noun/Verbs** - many words work as both nouns and verbs',
            tip: 'These simple rules make Globasa easy to learn!'
        }
    ],

    vocabulary: [], // No new vocabulary in unit tests

    // All Unit 1 vocabulary for comprehensive review
    reviewVocabulary: [
        'salom', 'weda', 'xanti',
        'bwaw', 'myaw', 'piu', 'uma', 'mahi',
        'doste', 'nini', 'sodar',
        'matre', 'mama', 'patre', 'papa',
        'mi', 'somno', 'doxo', 'danse', 'lala', 'yuxi'
    ],

    exercises: [
        // Greetings
        {
            type: 'matching',
            prompt: 'Match the greetings',
            pairs: [
                { word: 'salom', translation: 'hello' },
                { word: 'weda', translation: 'goodbye' },
                { word: 'xanti', translation: 'peace' }
            ]
        },
        // Animals
        {
            type: 'matching',
            prompt: 'Match the animals',
            pairs: [
                { word: 'bwaw', translation: 'dog' },
                { word: 'myaw', translation: 'cat' },
                { word: 'piu', translation: 'bird' },
                { word: 'uma', translation: 'horse' },
                { word: 'mahi', translation: 'fish' }
            ]
        },
        // Family
        {
            type: 'matching',
            prompt: 'Match the family words',
            pairs: [
                { word: 'matre', translation: 'mother' },
                { word: 'patre', translation: 'father' },
                { word: 'nini', translation: 'child' },
                { word: 'sodar', translation: 'sibling' }
            ]
        },
        // Verbs
        {
            type: 'matching',
            prompt: 'Match the verbs',
            pairs: [
                { word: 'somno', translation: 'sleep' },
                { word: 'doxo', translation: 'read' },
                { word: 'danse', translation: 'dance' },
                { word: 'lala', translation: 'sing' },
                { word: 'yuxi', translation: 'play' }
            ]
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Mi danse"',
            correctAnswers: ['I dance', 'I am dancing', 'I\'m dancing'],
            hint: 'Subject + action verb'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Salom, doste!"',
            correctAnswers: ['Hello, friend!', 'Hi, friend!'],
            hint: 'Greeting + person'
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "The child sings"',
            words: ['nini', 'lala', 'mi', 'somno', 'bwaw'],
            correctAnswer: ['nini', 'lala'],
            hint: 'Subject + verb'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Goodbye, mom!"',
            words: ['weda', 'mama', 'salom', 'papa', 'xanti'],
            correctAnswer: ['weda', 'mama'],
            hint: 'Farewell + parent'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'Does "nini" specify if the child is male or female?',
            options: ['Yes, it means boy', 'Yes, it means girl', 'No, it\'s gender-neutral'],
            correctAnswer: 'No, it\'s gender-neutral',
            hint: 'Most Globasa words for people are gender-neutral'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the plural of "bwaw" (dog)?',
            options: ['bwaws', 'bwawoj', 'bwaw', 'bwawi'],
            correctAnswer: 'bwaw',
            hint: 'Globasa doesn\'t have plural forms!'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "The cat sleeps" in Globasa?',
            options: ['Myaw somno', 'Myaw somnos', 'Mi somno myaw', 'Somno myaw'],
            correctAnswer: 'Myaw somno',
            hint: 'Subject + unchanged verb'
        },
        // Final challenge
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The dog plays"',
            correctAnswers: ['Bwaw yuxi', 'bwaw yuxi'],
            hint: 'Subject (dog) + verb (play)'
        }
    ]
};
