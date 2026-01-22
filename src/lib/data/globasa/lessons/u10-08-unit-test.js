// Unit 10: Countries & Languages - Lesson 8: Unit Test
// Comprehensive review of all Unit 10 vocabulary and concepts

export default {
    id: 'u10-08-unit-test',
    name: 'Unit 10 Test',
    unit: 10,
    unitName: 'Countries & Languages',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 10: Countries & Languages!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 10 Review',
            content: 'You\'ve learned **12 new words** plus important suffixes in Unit 10!',
            vocabulary: [
                { word: 'or, dexa, basa', translation: 'Or, Country, Language' },
                { word: 'Engli, Espani, Nipon', translation: 'England, Spain, Japan' },
                { word: 'Franse, Turki, Usa', translation: 'France, Turkey, USA' },
                { word: '-sa, -li', translation: 'Language suffix, Adjective suffix' },
                { word: 'pala, yon, dolo', translation: 'Speak, By means of, Street' }
            ]
        },
        {
            title: 'Key Concepts',
            content: '• **-sa** = language (Englisa)\\n• **-li** = adjective (Englili)\\n• **-yen** = nationality (Engliyen)',
            tip: 'Congratulations! You\'ve completed Phase 2 of the curriculum!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        // Unit 10
        'or', 'dexa', 'basa',
        'Engli', 'Espani', 'Nipon', 'Franse', 'Turki', 'Usa',
        '-sa', '-li', 'pala', 'yon', 'dolo',
        // Earlier
        'loga', 'ogar', 'in', 'sen'
    ],

    exercises: [
        // Countries
        {
            type: 'matching',
            prompt: 'Match countries',
            pairs: [
                { word: 'Engli', translation: 'England' },
                { word: 'Espani', translation: 'Spain' },
                { word: 'Nipon', translation: 'Japan' },
                { word: 'Franse', translation: 'France' },
                { word: 'Usa', translation: 'USA' }
            ]
        },
        // Suffixes
        {
            type: 'matching',
            prompt: 'Match suffixes',
            pairs: [
                { word: '-sa', translation: 'language suffix' },
                { word: '-li', translation: 'adjective suffix' },
                { word: '-yen', translation: 'person suffix' }
            ]
        },
        // Languages
        {
            type: 'matching',
            prompt: 'Match languages',
            pairs: [
                { word: 'Englisa', translation: 'English' },
                { word: 'Espanisa', translation: 'Spanish' },
                { word: 'Niponsa', translation: 'Japanese' }
            ]
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "I speak English"',
            words: ['mi', 'pala', 'Englisa', 'Englili', 'loga'],
            correctAnswer: ['mi', 'pala', 'Englisa'],
            hint: 'I + speak + English(language)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "She is Japanese"',
            words: ['te', 'sen', 'Niponiyen', 'Niponsa', 'Nipon'],
            correctAnswer: ['te', 'sen', 'Niponiyen'],
            hint: 'She + is + Japanese(person)'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Mi ogar in Usa"',
            correctAnswers: ['I live in USA'],
            hint: 'I + live + in + USA'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Niponli filme"',
            correctAnswers: ['Japanese movie', 'Japanese film'],
            hint: 'Japanese(adj) + movie'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Do you want coffee or tea?"',
            correctAnswers: ['Yu vole kafe or cay?', 'Kam yu vole kafe or cay?'],
            hint: 'You + want + coffee + or + tea'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Spanish (language)"',
            correctAnswers: ['Espanisa'],
            hint: 'Espani + sa'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between -sa and -li?',
            options: [
                '-sa = language, -li = adjective',
                '-sa = adjective, -li = language',
                '-sa = person, -li = language'
            ],
            correctAnswer: '-sa = language, -li = adjective'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "French person"?',
            options: ['Fransesa', 'Franseli', 'Franseyen'],
            correctAnswer: 'Franseyen',
            hint: 'Country + yen'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "or" mean?',
            options: ['and', 'or', 'but'],
            correctAnswer: 'or'
        }
    ]
};
