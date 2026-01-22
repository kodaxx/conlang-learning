// Unit 7: Possession & Location - Lesson 1: Of & With
// New words: de (of, possession), ton (with)

export default {
    id: 'u7-01-of-with',
    name: 'Of & With',
    unit: 7,
    unitName: 'Possession & Location',
    lessonNumber: 1,
    description: 'Learn to express possession and accompaniment',
    icon: '🤝',
    xpReward: 15,

    teaching: [
        {
            title: 'Of (Possession)',
            content: '**De** expresses possession or relationship (like "of" or "\'s"):',
            vocabulary: [
                { word: 'de', translation: 'of (possession)' }
            ],
            examples: [
                { globasa: 'kitabu de alimyen', english: 'the book of the teacher / the teacher\'s book' },
                { globasa: 'ogar de mi su mama', english: 'my mother\'s house' },
                { globasa: 'nam de te', english: 'his/her name' }
            ],
            tip: 'Word order: THING + de + OWNER (opposite of English "\'s")'
        },
        {
            title: 'With (Accompaniment)',
            content: '**Ton** means "with" (accompaniment or inclusion):',
            vocabulary: [
                { word: 'ton', translation: 'with' }
            ],
            examples: [
                { globasa: 'Mi xa idi ton yu', english: 'I will go with you' },
                { globasa: 'Kafe ton sui', english: 'Coffee with water' },
                { globasa: 'Te le ata ton doste', english: 'He/She came with a friend' }
            ]
        }
    ],

    vocabulary: [
        { word: 'de', translation: 'of (possession)' },
        { word: 'ton', translation: 'with' }
    ],

    reviewVocabulary: [
        // Unit 6 recent
        'kete', 'idi', 'ata', 'alimyen',
        // Earlier
        'kitabu', 'ogar', 'mama', 'doste', 'kafe', 'sui', 'xa', 'le'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match new vocabulary',
            pairs: [
                { word: 'de', translation: 'of (possession)' },
                { word: 'ton', translation: 'with' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "the teacher\'s book"?',
            options: ['alimyen de kitabu', 'kitabu de alimyen', 'kitabu ton alimyen'],
            correctAnswer: 'kitabu de alimyen',
            hint: 'THING + de + OWNER'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I will go with you"',
            words: ['mi', 'xa', 'idi', 'ton', 'yu', 'de'],
            correctAnswer: ['mi', 'xa', 'idi', 'ton', 'yu'],
            hint: 'I + will + go + with + you'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te le ata ton doste"',
            correctAnswers: ['He came with a friend', 'She came with a friend', 'He/She came with a friend'],
            hint: 'He/She + past + come + with + friend'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "My mother\'s house"',
            correctAnswers: ['ogar de mi su mama'],
            hint: 'house + of + my + mother'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the correct word order for possession?',
            options: [
                'OWNER + de + THING',
                'THING + de + OWNER',
                'de + THING + OWNER'
            ],
            correctAnswer: 'THING + de + OWNER',
            hint: 'Book of teacher, not teacher of book'
        }
    ]
};
