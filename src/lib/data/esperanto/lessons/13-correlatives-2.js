export default {
    id: '13-correlatives-2',
    name: 'Correlatives 2',
    description: 'Universal (Ĉi-), Negative (Neni-), and Indefinite (I-)',
    icon: '🌐',
    xpReward: 25,
    teaching: [
        {
            title: 'More Table Words',
            content: 'We can also make words for "Everything", "Nothing", and "Something".',
            examples: []
        },
        {
            title: 'The Prefixes',
            content: '**Ĉi-** = Every/All. **Neni-** = No/None. **I-** = Some/Any.',
            examples: [
                { esperanto: 'Ĉio', english: 'Everything' },
                { esperanto: 'Nenio', english: 'Nothing' },
                { esperanto: 'Io', english: 'Something' }
            ]
        },
        {
            title: 'Examples',
            content: 'Combining prefixes with **-u** (person/individual):',
            examples: [
                { esperanto: 'Ĉiu', english: 'Everyone / Each one' },
                { esperanto: 'Neniu', english: 'No one / Nobody' },
                { esperanto: 'Iu', english: 'Someone' }
            ]
        }
    ],
    vocabulary: [
        { word: 'ĉio', translation: 'everything', phonetic: 'CHEE-oh' },
        { word: 'nenio', translation: 'nothing', phonetic: 'neh-NEE-oh' },
        { word: 'io', translation: 'something', phonetic: 'EE-oh' },
        { word: 'ĉiu', translation: 'everyone/each', phonetic: 'CHEE-oo' },
        { word: 'neniu', translation: 'no one', phonetic: 'neh-NEE-oo' },
        { word: 'iu', translation: 'someone', phonetic: 'EE-oo' },
        { word: 'ĉiam', translation: 'always', phonetic: 'CHEE-ahm' },
        { word: 'neniam', translation: 'never', phonetic: 'neh-NEE-ahm' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "nenio" mean?',
            options: ['everything', 'something', 'nothing', 'anything'],
            correctAnswer: 'nothing',
            hint: 'Neni- means none'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "everyone"?',
            options: ['ĉiu', 'ĉio', 'neniu', 'iu'],
            correctAnswer: 'ĉiu',
            hint: '-u for people'
        },
        {
            type: 'matching',
            prompt: 'Match words',
            leftCards: [
                { id: 'l1', text: 'ĉiam', pairId: 'p1' },
                { id: 'l2', text: 'neniam', pairId: 'p2' },
                { id: 'l3', text: 'io', pairId: 'p3' },
                { id: 'l4', text: 'ĉio', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'always', pairId: 'p1' },
                { id: 'r2', text: 'never', pairId: 'p2' },
                { id: 'r3', text: 'something', pairId: 'p3' },
                { id: 'r4', text: 'everything', pairId: 'p4' }
            ]
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi scias nenion"',
            correctAnswers: ['I know nothing', 'I don\'t know anything'],
            hint: 'scias = know'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Everyone sees everything"',
            words: ['ĉiu', 'vidas', 'ĉion', 'ĉio', 'nenio'],
            correctAnswer: ['ĉiu', 'vidas', 'ĉion'],
            hint: 'Don\'t forget the accusative -n on the object!'
        },
        {
            type: 'fill-blank',
            prompt: 'Li ___ manĝas. (never)',
            options: ['neniam', 'ĉiam', 'iam', 'tiam'],
            correctAnswer: 'neniam',
            hint: 'Starts with nen-'
        }
    ]
};
