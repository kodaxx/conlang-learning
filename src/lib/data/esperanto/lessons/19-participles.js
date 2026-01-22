export default {
    id: '19-participles',
    name: 'Participles Intro',
    description: 'Introduction to active participles (-anta)',
    icon: '🏃',
    xpReward: 25,
    teaching: [
        {
            title: 'Action Adjectives',
            content: 'You can turn a verb into an adjective that describes someone *doing* that action right now. Use **-anta**.',
            examples: [
                { esperanto: 'Dormanta hundo', english: 'A sleeping dog' },
                { esperanto: 'Birdo fluganta', english: 'A bird flying' }
            ]
        },
        {
            title: 'Breakdown',
            content: 'Verb root + **ant** (active) + **a** (adjective).',
            examples: [
                { esperanto: 'Manĝi (To eat)', english: 'Manĝanta (Eating)' }
            ]
        }
    ],
    vocabulary: [
        { word: 'manĝanta', translation: 'eating (adj)', phonetic: 'man-JAN-tah' },
        { word: 'dormanta', translation: 'sleeping (adj)', phonetic: 'dor-MAN-tah' },
        { word: 'parolanta', translation: 'speaking (adj)', phonetic: 'pah-ro-LAN-tah' },
        { word: 'birdo', translation: 'bird', phonetic: 'BEER-doh' },
        { word: 'fluganta', translation: 'flying (adj)', phonetic: 'floo-GAN-tah' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does the suffix "-ant-" indicate?',
            options: ['Past passive', 'Present active participle', 'Future tense', 'A professional'],
            correctAnswer: 'Present active participle',
            hint: 'Doing action right now (describer)'
        },
        {
            type: 'translation',
            prompt: 'Translate: "La dormanta knabo"',
            correctAnswers: ['The sleeping boy', 'The boy who is sleeping'],
            hint: 'dormi (sleep) + ant (active) + a (adj)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I see a flying bird"',
            words: ['mi', 'vidas', 'flugantan', 'birdon', 'fluganta'],
            correctAnswer: ['mi', 'vidas', 'flugantan', 'birdon'],
            hint: 'Adjective needs -n too!'
        },
        {
            type: 'fill-blank',
            prompt: 'La viro estas ___. (speaking)',
            options: ['parolanta', 'parolas', 'parolanto', 'paroli'],
            correctAnswer: 'parolanta',
            hint: 'Using it as an adjective'
        },
        {
            type: 'matching',
            prompt: 'Match participles',
            leftCards: [
                { id: 'l1', text: 'manĝanta', pairId: 'p1' },
                { id: 'l2', text: 'dormanta', pairId: 'p2' },
                { id: 'l3', text: 'fluganta', pairId: 'p3' },
                { id: 'l4', text: 'kuras', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'eating', pairId: 'p1' },
                { id: 'r2', text: 'sleeping', pairId: 'p2' },
                { id: 'r3', text: 'flying', pairId: 'p3' },
                { id: 'r4', text: 'runs', pairId: 'p4' }
            ]
        }
    ]
};
