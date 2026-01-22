// Unit 5: Tenses & Places - Lesson 7: Public Places 2
// New words: eskol (school), restoran (restaurant), xwexi (learn)

export default {
    id: 'u5-07-public-places-2',
    name: 'Public Places 2',
    unit: 5,
    unitName: 'Tenses & Places',
    lessonNumber: 7,
    description: 'Learn more public places and the verb "to learn"',
    icon: '🏫',
    xpReward: 15,

    teaching: [
        {
            title: 'School',
            content: '**Eskol** means "school":',
            vocabulary: [
                { word: 'eskol', translation: 'school' }
            ],
            examples: [
                { globasa: 'Nini xa idi cel eskol', english: 'The children will go to school' },
                { globasa: 'Mi le xwexi in eskol', english: 'I learned at school' }
            ]
        },
        {
            title: 'Restaurant',
            content: '**Restoran** means "restaurant":',
            vocabulary: [
                { word: 'restoran', translation: 'restaurant' }
            ],
            examples: [
                { globasa: 'Imi xa yam in restoran', english: 'We will eat at a restaurant' },
                { globasa: 'Den restoran hare bon supa', english: 'That restaurant has good soup' }
            ]
        },
        {
            title: 'Learn',
            content: '**Xwexi** means "to learn":',
            vocabulary: [
                { word: 'xwexi', translation: 'learn, study' }
            ],
            examples: [
                { globasa: 'Mi xwexi Globasa', english: 'I am learning Globasa' },
                { globasa: 'Uyu xa xwexi multi', english: 'You (all) will learn a lot' }
            ],
            tip: 'Xwexi is the root of xwexi.globasa.net - the official Globasa learning site!'
        }
    ],

    vocabulary: [
        { word: 'eskol', translation: 'school' },
        { word: 'restoran', translation: 'restaurant' },
        { word: 'xwexi', translation: 'learn, study' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'parke', 'hotel', 'banko', 'dom', 'in',
        // Earlier
        'idi', 'cel', 'le', 'xa', 'yam', 'nini', 'bon', 'supa', 'multi'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match vocabulary',
            pairs: [
                { word: 'eskol', translation: 'school' },
                { word: 'restoran', translation: 'restaurant' },
                { word: 'xwexi', translation: 'learn' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I am learning Globasa"?',
            options: ['Mi xwexi Globasa', 'Mi le xwexi Globasa', 'Mi xa xwexi Globasa'],
            correctAnswer: 'Mi xwexi Globasa',
            hint: 'Present tense - no marker needed'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "We will eat at a restaurant"',
            words: ['imi', 'xa', 'yam', 'in', 'restoran', 'eskol'],
            correctAnswer: ['imi', 'xa', 'yam', 'in', 'restoran'],
            hint: 'We + will + eat + in + restaurant'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Nini xa idi cel eskol"',
            correctAnswers: ['The children will go to school', 'Children will go to school'],
            hint: 'Children + will + go + to + school'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I learned at school"',
            correctAnswers: ['Mi le xwexi in eskol'],
            hint: 'I + past + learn + in + school'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which place is for eating?',
            options: ['eskol', 'restoran', 'banko'],
            correctAnswer: 'restoran',
            hint: 'Think about what you do there'
        }
    ]
};
