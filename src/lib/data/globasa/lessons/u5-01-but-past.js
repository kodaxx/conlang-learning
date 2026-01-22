// Unit 5: Tenses & Places - Lesson 1: But & Past Tense
// New words: mas (but), to (it, impersonal), le (past tense marker)

export default {
    id: 'u5-01-but-past',
    name: 'But & Past Tense',
    unit: 5,
    unitName: 'Tenses & Places',
    lessonNumber: 1,
    description: 'Learn "but", the impersonal pronoun, and the past tense marker',
    icon: '⏮️',
    xpReward: 15,

    teaching: [
        {
            title: 'The Word "But"',
            content: '**Mas** means "but" - used to contrast ideas:',
            vocabulary: [
                { word: 'mas', translation: 'but' }
            ],
            examples: [
                { globasa: 'Mi suki kafe, mas yu suki cay', english: 'I like coffee, but you like tea' },
                { globasa: 'Te sen juni, mas te sen bala', english: 'He is young, but he is strong' }
            ]
        },
        {
            title: 'The Impersonal "It"',
            content: '**To** is used for "it" when referring to non-specific things or ideas:',
            vocabulary: [
                { word: 'to', translation: 'it (impersonal)' }
            ],
            examples: [
                { globasa: 'To sen bon', english: 'It is good' },
                { globasa: 'To sen day kitabu', english: 'It is a big book' }
            ],
            tip: 'Use "te" for a specific "he/she/it", use "to" for impersonal or general "it".'
        },
        {
            title: 'Past Tense with "le"',
            content: '**Le** is placed before the verb to indicate past tense:',
            vocabulary: [
                { word: 'le', translation: 'past tense marker' }
            ],
            examples: [
                { globasa: 'Mi le yam roti', english: 'I ate bread' },
                { globasa: 'Te le doxo kitabu', english: 'He/She read a book' },
                { globasa: 'Imi le danse', english: 'We danced' }
            ],
            tip: 'Globasa verbs never change form - just add "le" before the verb for past!'
        }
    ],

    vocabulary: [
        { word: 'mas', translation: 'but' },
        { word: 'to', translation: 'it (impersonal)' },
        { word: 'le', translation: 'past tense marker' }
    ],

    reviewVocabulary: [
        // Unit 4 recent
        'sen', 'bon', 'day', 'juni', 'bala',
        // Earlier units
        'yam', 'doxo', 'kafe', 'cay', 'kitabu', 'danse'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match new vocabulary',
            pairs: [
                { word: 'mas', translation: 'but' },
                { word: 'to', translation: 'it (impersonal)' },
                { word: 'le', translation: 'past tense marker' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I ate bread"?',
            options: ['Mi yam le roti', 'Mi le yam roti', 'Le mi yam roti'],
            correctAnswer: 'Mi le yam roti',
            hint: 'Subject + le + verb + object'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "He read a book"',
            words: ['te', 'le', 'doxo', 'kitabu', 'sen'],
            correctAnswer: ['te', 'le', 'doxo', 'kitabu'],
            hint: 'He/She + past + read + book'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi suki roti, mas yu suki risi"',
            correctAnswers: ['I like bread, but you like rice'],
            hint: 'I + like + bread + but + you + like + rice'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "We danced"',
            correctAnswers: ['Imi le danse'],
            hint: 'We + past + dance'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "To sen bon" mean?',
            options: ['He is good', 'She is good', 'It is good', 'They are good'],
            correctAnswer: 'It is good',
            hint: '"To" is the impersonal "it"'
        }
    ]
};
