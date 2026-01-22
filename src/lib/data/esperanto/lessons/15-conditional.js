export default {
    id: '15-conditional',
    name: 'The Conditional',
    description: 'Hypothetical actions (-us) and usages with "se" (if)',
    icon: '🤔',
    xpReward: 20,
    teaching: [
        {
            title: 'The Imaginary Mood (-us)',
            content: 'The conditional ending **-us** is used for things that are hypothetical or imaginary ("would").',
            examples: [
                { esperanto: 'Se mi estus riĉa...', english: 'If I were rich...' },
                { esperanto: 'Mi aĉetus domon.', english: 'I would buy a house.' }
            ]
        },
        {
            title: 'Using "Se" (If)',
            content: 'We often use the word **se** (if) paired with **-us** to describe conditions.',
            examples: [
                { esperanto: 'Se mi havus tempon, mi dormus.', english: 'If I had time, I would sleep.' }
            ]
        }
    ],
    vocabulary: [
        { word: 'se', translation: 'if', phonetic: 'seh' },
        { word: 'estus', translation: 'would be', phonetic: 'ES-toos' },
        { word: 'havus', translation: 'would have', phonetic: 'HAH-voos' },
        { word: 'farus', translation: 'would do/make', phonetic: 'FAH-roos' },
        { word: 'povus', translation: 'could/would be able to', phonetic: 'POH-voos' },
        { word: 'volus', translation: 'would want/like', phonetic: 'VOH-loos' },
        { word: 'aĉetus', translation: 'would buy', phonetic: 'ah-CHEH-toos' },
        { word: 'riĉa', translation: 'rich', phonetic: 'REE-chah' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'Which ending is used for hypothetical situations ("would")?',
            options: ['-us', '-is', '-os', '-u'],
            correctAnswer: '-us',
            hint: 'Think: "us" implies "if..."'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Se mi estus riĉa"',
            correctAnswers: ['If I were rich', 'If I was rich'],
            hint: 'se = if'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I would buy a house"',
            words: ['mi', 'aĉetus', 'domon', 'domo', 'aĉetas'],
            correctAnswer: ['mi', 'aĉetus', 'domon'],
            hint: 'Use the -us form'
        },
        {
            type: 'fill-blank',
            prompt: 'Mi ___ helpi vin, se mi povus. (would want)',
            options: ['volus', 'volas', 'havus', 'estus'],
            correctAnswer: 'volus',
            hint: 'To wish/want conditionally'
        },
        {
            type: 'matching',
            prompt: 'Match forms',
            leftCards: [
                { id: 'l1', text: 'estus', pairId: 'p1' },
                { id: 'l2', text: 'havus', pairId: 'p2' },
                { id: 'l3', text: 'povus', pairId: 'p3' },
                { id: 'l4', text: 'farus', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'would be', pairId: 'p1' },
                { id: 'r2', text: 'would have', pairId: 'p2' },
                { id: 'r3', text: 'could', pairId: 'p3' },
                { id: 'r4', text: 'would do', pairId: 'p4' }
            ]
        },
        {
            type: 'translation',
            prompt: 'Translate: "Kion vi farus?"',
            correctAnswers: ['What would you do?'],
            hint: 'A common question'
        }
    ]
};
