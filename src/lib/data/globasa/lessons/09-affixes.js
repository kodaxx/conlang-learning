export default {
    id: '09-affixes',
    name: 'Word-Building',
    description: 'Learn how to build new words using affixes.',
    icon: '🧩',
    xpReward: 25,
    teaching: [
        {
            title: 'Building Words',
            content: 'Globasa uses affixes to create new words from roots.',
            examples: [
                { globasa: 'loka (place)', english: 'eskol + loka = eskolloka (school)' },
                { globasa: 'dom (house)', english: 'yam + dom = yamdom (restaurant)' }
            ]
        },
        {
            title: 'Common Suffixes',
            content: '**-li** (like), **-do** (way/manner), **-gi** (causative).',
            examples: [
                { globasa: 'felixi-li', english: 'happily' }
            ]
        }
    ],
    vocabulary: [
        { word: 'loka', translation: 'place', phonetic: 'LO-ka' },
        { word: 'gi', translation: '(causative)', phonetic: 'gee' },
        { word: 'cu', translation: '(inchoative)', phonetic: 'choo' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "eskolloka" mean?',
            options: ['school building', 'teacher', 'student', 'classroom'],
            correctAnswer: 'school building',
            hint: 'eskol (learn) + loka (place)'
        },
        {
            type: 'translation',
            prompt: 'Translate: "yamdom"',
            correctAnswers: ['restaurant', 'dining house'],
            hint: 'yam (eat) + dom (house)'
        }
    ]
};
