// Unit 3: Questions & Preferences - Lesson 7: Integration
// New words: bete (1 word - smaller to allow integration practice)
// Concept: Combining questions, wants, likes in conversation
// Reviews: All Unit 3 vocabulary

export default {
    id: 'u3-07-integration',
    name: 'Putting It Together',
    unit: 3,
    unitName: 'Questions & Preferences',
    lessonNumber: 7,
    description: 'Practice combining everything you\'ve learned!',
    icon: '🧩',
    xpReward: 25,

    teaching: [
        {
            title: 'Bete - Child (Son/Daughter)',
            content: '**Bete** means "child" in the sense of son/daughter (your own child). Compare with "nini" (any child/kid).',
            examples: [
                { globasa: 'Mi hare bete', english: 'I have a child (son/daughter)' },
                { globasa: 'Misu bete...', english: 'My child...' }
            ],
            tip: 'bete = your offspring, nini = any young person'
        },
        {
            title: 'Asking About Preferences',
            content: 'Now combine questions with likes and wants!',
            examples: [
                { globasa: 'Kam yu suki kafe?', english: 'Do you like coffee?' },
                { globasa: 'Kam yu vole na glu cay?', english: 'Do you want to drink tea?' },
                { globasa: 'Kam nini vole na yuxi?', english: 'Does the child want to play?' }
            ]
        },
        {
            title: 'Answering with Preferences',
            content: 'Express your preferences fully!',
            examples: [
                { globasa: 'Si, mi suki kafe', english: 'Yes, I like coffee' },
                { globasa: 'No, mi no suki cay', english: 'No, I don\'t like tea' },
                { globasa: 'Mi vole na oko filme', english: 'I want to watch a movie' }
            ]
        }
    ],

    vocabulary: [
        { word: 'bete', translation: 'child (son/daughter)', phonetic: 'BEH-teh' }
    ],

    reviewVocabulary: [
        'kam', 'si', 'no', 'aham', 'suki', 'lubi', 'vole', 'na',
        'oko', 'ore', 'glu', 'sui', 'kafe', 'cay', 'jusu', 'filme', 'musika'
    ],

    exercises: [
        {
            type: 'translation',
            prompt: 'Translate: "Kam yu suki musika?"',
            correctAnswers: ['Do you like music?'],
            hint: 'Question + you + like + music'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Yes, I want to drink juice"',
            words: ['si', 'mi', 'vole', 'na', 'glu', 'jusu', 'no'],
            correctAnswer: ['si', 'mi', 'vole', 'na', 'glu', 'jusu'],
            hint: 'Yes + I + want + to + drink + juice'
        },
        {
            type: 'translation',
            prompt: 'Translate: "No, mi no suki kafe"',
            correctAnswers: ['No, I don\'t like coffee', 'No, I do not like coffee'],
            hint: 'Negative response + I + not + like + coffee'
        },
        {
            type: 'multiple-choice',
            prompt: 'What\'s the difference between "bete" and "nini"?',
            options: ['They are the same', 'bete = any child, nini = your child', 'bete = your child, nini = any child', 'bete = boy, nini = girl'],
            correctAnswer: 'bete = your child, nini = any child',
            hint: 'Think parent-child relationship'
        },
        {
            type: 'translation',
            prompt: 'How would you ask: "Do you understand?"',
            correctAnswers: ['Kam yu aham?', 'kam yu aham'],
            hint: 'Question + you + understand'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I love to listen to music"',
            correctAnswers: ['Mi lubi na ore musika', 'mi lubi na ore musika'],
            hint: 'I + love + to + listen + music'
        }
    ]
};
