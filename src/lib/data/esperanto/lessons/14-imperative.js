export default {
    id: '14-imperative',
    name: 'The Imperative',
    description: 'Giving commands and making requests (-u)',
    icon: '🗣️',
    xpReward: 20,
    teaching: [
        {
            title: 'Give Orders (-u)',
            content: 'To give a command or make a strong request in Esperanto, end the verb with **-u**.',
            examples: [
                { esperanto: 'Venu!', english: 'Come!' },
                { esperanto: 'Manĝu!', english: 'Eat!' },
                { esperanto: 'Estu bona!', english: 'Be good!' }
            ]
        },
        {
            title: 'Please (Bonvolu)',
            content: 'To say "please", we use **Bonvolu** (literally "good will"). It is also a command form: "Have the good will to..."',
            examples: [
                { esperanto: 'Bonvolu helpi min', english: 'Please help me' }
            ]
        }
    ],
    vocabulary: [
        { word: 'venu', translation: 'come!', phonetic: 'VEH-noo' },
        { word: 'iru', translation: 'go!', phonetic: 'EE-roo' },
        { word: 'manĝu', translation: 'eat!', phonetic: 'MAHN-joo' },
        { word: 'sidigu', translation: 'sit down!', phonetic: 'see-DEE-goo' },
        { word: 'bonvolu', translation: 'please', phonetic: 'bohn-VOH-loo' },
        { word: 'helpu', translation: 'help!', phonetic: 'HEL-poo' },
        { word: 'diru', translation: 'say/tell', phonetic: 'DEE-roo' },
        { word: 'paŭzu', translation: 'pause/stop', phonetic: 'POW-zoo' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'Which ending is used for commands?',
            options: ['-as', '-is', '-os', '-u'],
            correctAnswer: '-u',
            hint: 'Example: Venu! (Come!)'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Bonvolu helpi min"',
            correctAnswers: ['Please help me'],
            hint: 'bonvolu = please, helpi = to help'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Eat the cake!"',
            words: ['manĝu', 'la', 'kukon', 'kuko', 'manĝas'],
            correctAnswer: ['manĝu', 'la', 'kukon'],
            hint: 'Use the command form'
        },
        {
            type: 'fill-blank',
            prompt: '___ al mi! (Come to me!)',
            options: ['venu', 'venas', 'venos', 'iris'],
            correctAnswer: 'venu',
            hint: 'Command form of "to come"'
        },
        {
            type: 'matching',
            prompt: 'Match commands',
            leftCards: [
                { id: 'l1', text: 'iru', pairId: 'p1' },
                { id: 'l2', text: 'helpu', pairId: 'p2' },
                { id: 'l3', text: 'diru', pairId: 'p3' },
                { id: 'l4', text: 'sidigu', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'go', pairId: 'p1' },
                { id: 'r2', text: 'help', pairId: 'p2' },
                { id: 'r3', text: 'say', pairId: 'p3' },
                { id: 'r4', text: 'sit down', pairId: 'p4' }
            ]
        },
        {
            type: 'translation',
            prompt: 'Translate: "Ne manĝu tion!"',
            correctAnswers: ['Do not eat that!', 'Don\'t eat that!'],
            hint: 'Negative command'
        }
    ]
};
