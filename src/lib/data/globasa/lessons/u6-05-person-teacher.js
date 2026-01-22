// Unit 6: Communication - Lesson 5: Person & Teacher
// New words: yen (person), alimyen (teacher) - introducing -yen suffix

export default {
    id: 'u6-05-person-teacher',
    name: 'Person & Teacher',
    unit: 6,
    unitName: 'Communication',
    lessonNumber: 5,
    description: 'Learn "person" and start building occupation words with -yen',
    icon: '👨‍🏫',
    xpReward: 15,

    teaching: [
        {
            title: 'Person',
            content: '**Yen** means "person":',
            vocabulary: [
                { word: 'yen', translation: 'person' }
            ],
            examples: [
                { globasa: 'Te sen bon yen', english: 'He/She is a good person' },
                { globasa: 'Multi yen le ata', english: 'Many people came' }
            ]
        },
        {
            title: 'The -yen Suffix',
            content: 'Add **-yen** to create words for people who do something:',
            examples: [
                { globasa: 'alim (teach) + yen = alimyen', english: 'teacher (teaching-person)' }
            ],
            tip: 'Like English "-er" or "-ist": teach → teacher, art → artist'
        },
        {
            title: 'Teacher',
            content: '**Alimyen** means "teacher":',
            vocabulary: [
                { word: 'alimyen', translation: 'teacher' }
            ],
            examples: [
                { globasa: 'Alimyen loga Globasa', english: 'The teacher speaks Globasa' },
                { globasa: 'Mi su alimyen sen bon', english: 'My teacher is good' }
            ]
        }
    ],

    vocabulary: [
        { word: 'yen', translation: 'person' },
        { word: 'alimyen', translation: 'teacher' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'idi', 'ata', 'cel', 'loga', 'cudu',
        // Earlier
        'sen', 'bon', 'multi', 'le', 'eskol', 'xwexi'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match new vocabulary',
            pairs: [
                { word: 'yen', translation: 'person' },
                { word: 'alimyen', translation: 'teacher' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What does the -yen suffix mean?',
            options: ['Place', 'Person who does', 'Thing'],
            correctAnswer: 'Person who does',
            hint: 'alim (teach) + yen = teacher'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The teacher speaks Globasa"',
            words: ['alimyen', 'loga', 'Globasa', 'xwexi', 'yen'],
            correctAnswer: ['alimyen', 'loga', 'Globasa'],
            hint: 'Teacher + speak + Globasa'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Multi yen le ata"',
            correctAnswers: ['Many people came'],
            hint: 'Many + person + past + come'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "My teacher is good"',
            correctAnswers: ['Mi su alimyen sen bon'],
            hint: 'My + teacher + is + good'
        },
        {
            type: 'multiple-choice',
            prompt: 'How is "alimyen" formed?',
            options: [
                'alim (teach) + dom (place)',
                'alim (teach) + yen (person)',
                'ali (all) + myen (person)'
            ],
            correctAnswer: 'alim (teach) + yen (person)',
            hint: '-yen creates people words'
        }
    ]
};
