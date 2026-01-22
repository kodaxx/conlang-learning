// Unit 6: Communication - Lesson 8: Unit Test
// Comprehensive review of all Unit 6 vocabulary and concepts

export default {
    id: 'u6-08-unit-test',
    name: 'Unit 6 Test',
    unit: 6,
    unitName: 'Communication',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 6: Communication!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 6 Review',
            content: 'You\'ve learned **16 new words** in Unit 6! Key vocabulary:',
            vocabulary: [
                { word: 'imi, uyu, ete, oto', translation: 'Plural pronouns' },
                { word: 'ke, kete, keto', translation: 'Which, Who, What' },
                { word: 'loga, cudu', translation: 'Speak, Get/Take' },
                { word: 'idi, ata, cel', translation: 'Go, Come, To/Toward' },
                { word: 'yen, alimyen', translation: 'Person, Teacher' },
                { word: 'medisyen, polisiyen', translation: 'Doctor, Police officer' },
                { word: 'medisdom', translation: 'Clinic/Hospital' }
            ]
        },
        {
            title: 'Key Concepts',
            content: '• **Plural pronouns**: imi (we), uyu (you all), ete (they)\\n• **ke questions**: ke (which), kete (who), keto (what)\\n• **-yen suffix**: creates "person who does X"\\n• **-dom suffix**: creates "place of X"',
            tip: 'You can now ask questions and talk about people and places!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        // Unit 6
        'imi', 'uyu', 'ete', 'oto',
        'ke', 'kete', 'keto',
        'loga', 'cudu',
        'idi', 'ata', 'cel',
        'yen', 'alimyen', 'medisyen', 'polisiyen',
        'medisdom',
        // Earlier units
        'mi', 'yu', 'te', 'sen', 'le', 'xa', 'parke', 'eskol'
    ],

    exercises: [
        // Plural pronouns
        {
            type: 'matching',
            prompt: 'Match plural pronouns',
            pairs: [
                { word: 'imi', translation: 'we' },
                { word: 'uyu', translation: 'you all' },
                { word: 'ete', translation: 'they' },
                { word: 'oto', translation: 'one/people' }
            ]
        },
        // Question words
        {
            type: 'matching',
            prompt: 'Match question words',
            pairs: [
                { word: 'ke', translation: 'which' },
                { word: 'kete', translation: 'who' },
                { word: 'keto', translation: 'what' }
            ]
        },
        // Movement verbs
        {
            type: 'matching',
            prompt: 'Match movement words',
            pairs: [
                { word: 'idi', translation: 'go' },
                { word: 'ata', translation: 'come' },
                { word: 'cel', translation: 'to/toward' }
            ]
        },
        // Occupations
        {
            type: 'matching',
            prompt: 'Match occupations',
            pairs: [
                { word: 'alimyen', translation: 'teacher' },
                { word: 'medisyen', translation: 'doctor' },
                { word: 'polisiyen', translation: 'police officer' }
            ]
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "Who is he?"',
            words: ['kete', 'keto', 'sen', 'te', 'mi'],
            correctAnswer: ['kete', 'sen', 'te'],
            hint: 'Who + is + he'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "We will go to school"',
            words: ['imi', 'xa', 'idi', 'cel', 'eskol', 'le'],
            correctAnswer: ['imi', 'xa', 'idi', 'cel', 'eskol'],
            hint: 'We + will + go + to + school'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Kete loga Globasa?"',
            correctAnswers: ['Who speaks Globasa?'],
            hint: 'Who + speak + Globasa'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Medisyen ergo in medisdom"',
            correctAnswers: ['The doctor works in the clinic', 'The doctor works in the hospital'],
            hint: 'Doctor + work + in + clinic'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "They came to the park"',
            correctAnswers: ['Ete le ata cel parke'],
            hint: 'They + past + come + to + park'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "What is that?"',
            correctAnswers: ['Keto sen den?'],
            hint: 'What + is + that'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'What does -yen create?',
            options: ['Place words', 'Person words', 'Action words'],
            correctAnswer: 'Person words',
            hint: 'alimyen = teacher'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does -dom create?',
            options: ['Place words', 'Person words', 'Action words'],
            correctAnswer: 'Place words',
            hint: 'medisdom = clinic'
        }
    ]
};
