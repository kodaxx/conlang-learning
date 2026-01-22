// Unit 6: Communication - Lesson 1: Plural Pronouns
// New words: imi (we), uyu (you all), ete (they), oto (one/people)

export default {
    id: 'u6-01-plural-pronouns',
    name: 'Plural Pronouns',
    unit: 6,
    unitName: 'Communication',
    lessonNumber: 1,
    description: 'Learn the plural pronouns: we, you all, they, and one',
    icon: '👥',
    xpReward: 15,

    teaching: [
        {
            title: 'We & You All',
            content: 'Globasa has distinct plural pronouns:',
            vocabulary: [
                { word: 'imi', translation: 'we, us' },
                { word: 'uyu', translation: 'you all, you (plural)' }
            ],
            examples: [
                { globasa: 'Imi le yam in restoran', english: 'We ate at a restaurant' },
                { globasa: 'Uyu xa xwexi Globasa', english: 'You all will learn Globasa' }
            ],
            tip: 'Remember: mi = I, imi = we! The "i" at the start makes it plural.'
        },
        {
            title: 'They',
            content: '**Ete** is the third-person plural pronoun:',
            vocabulary: [
                { word: 'ete', translation: 'they, them' }
            ],
            examples: [
                { globasa: 'Ete sen in parke', english: 'They are in the park' },
                { globasa: 'Ete le danse ji lala', english: 'They danced and sang' }
            ]
        },
        {
            title: 'One / People (Generic)',
            content: '**Oto** is used for generic "one" or "people in general":',
            vocabulary: [
                { word: 'oto', translation: 'one, people (generic)' }
            ],
            examples: [
                { globasa: 'Oto vole sen hox', english: 'One wants to be happy / People want to be happy' },
                { globasa: 'Oto xa xwexi in eskol', english: 'One learns at school' }
            ],
            tip: 'Use "oto" when you mean "people in general" or the generic "you".'
        }
    ],

    vocabulary: [
        { word: 'imi', translation: 'we, us' },
        { word: 'uyu', translation: 'you all (plural)' },
        { word: 'ete', translation: 'they, them' },
        { word: 'oto', translation: 'one, people (generic)' }
    ],

    reviewVocabulary: [
        // Unit 5 recent
        'le', 'xa', 'in', 'parke', 'restoran', 'eskol',
        // Earlier
        'sen', 'hox', 'danse', 'lala', 'xwexi', 'yam'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match plural pronouns',
            pairs: [
                { word: 'imi', translation: 'we/us' },
                { word: 'uyu', translation: 'you all' },
                { word: 'ete', translation: 'they/them' },
                { word: 'oto', translation: 'one/people' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "they" in Globasa?',
            options: ['imi', 'uyu', 'ete', 'oto'],
            correctAnswer: 'ete',
            hint: 'Third person plural'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "We ate at a restaurant"',
            words: ['imi', 'le', 'yam', 'in', 'restoran', 'ete'],
            correctAnswer: ['imi', 'le', 'yam', 'in', 'restoran'],
            hint: 'We + past + eat + in + restaurant'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Ete sen in parke"',
            correctAnswers: ['They are in the park'],
            hint: 'They + are + in + park'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "You all will learn Globasa"',
            correctAnswers: ['Uyu xa xwexi Globasa'],
            hint: 'You all + will + learn + Globasa'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which pronoun means "people in general"?',
            options: ['imi', 'uyu', 'ete', 'oto'],
            correctAnswer: 'oto',
            hint: 'Generic "one"'
        }
    ]
};
