// Unit 19: Reasons & Equality - Lesson 6: Again & Once More
// New words: baki (again)

export default {
    id: 'u19-06-again',
    name: 'Again',
    unit: 19,
    unitName: 'Reasons & Equality',
    lessonNumber: 6,
    description: 'Learn to say "again"',
    icon: '🔄',
    xpReward: 15,

    teaching: [
        {
            title: 'Again',
            content: '**Baki** means "again" or "once more":',
            vocabulary: [
                { word: 'baki', translation: 'again' }
            ],
            examples: [
                { globasa: 'Am loga baki!', english: 'Say it again!' },
                { globasa: 'Mi xa idi baki posdin', english: 'I will go again tomorrow' },
                { globasa: 'Te le ata baki', english: 'He came again' }
            ]
        },
        {
            title: 'Position of baki',
            content: 'baki usually comes after the verb:',
            examples: [
                { globasa: 'Am yam baki!', english: 'Eat again!' },
                { globasa: 'Mi xa doxo baki', english: 'I will read again' }
            ]
        }
    ],

    vocabulary: [
        { word: 'baki', translation: 'again' }
    ],

    reviewVocabulary: [
        // Recent
        'haya', 'ija',
        // Earlier
        'loga', 'idi', 'ata', 'yam', 'doxo', 'posdin'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match adverbs',
            pairs: [
                { word: 'baki', translation: 'again' },
                { word: 'haya', translation: 'still' },
                { word: 'ija', translation: 'already' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "Say it again!"?',
            options: ['Am baki loga!', 'Am loga baki!', 'Baki am loga!'],
            correctAnswer: 'Am loga baki!',
            hint: 'Say + again'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "He came again"',
            words: ['te', 'le', 'ata', 'baki', 'haya'],
            correctAnswer: ['te', 'le', 'ata', 'baki'],
            hint: 'He + past + come + again'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi xa idi baki posdin"',
            correctAnswers: ['I will go again tomorrow'],
            hint: 'I + will + go + again + tomorrow'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Read again!"',
            correctAnswers: ['Am doxo baki!', 'Doxo baki!'],
            hint: 'Read + again'
        },
        {
            type: 'multiple-choice',
            prompt: 'Where does "baki" usually go?',
            options: ['Before the verb', 'After the verb', 'At the start'],
            correctAnswer: 'After the verb'
        }
    ]
};
