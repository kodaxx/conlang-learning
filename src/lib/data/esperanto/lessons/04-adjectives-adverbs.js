export default {
    id: '04-adjectives-adverbs',
    name: 'Adjectives & Adverbs',
    description: 'Describing things (-a) and actions (-e)',
    icon: '🎨',
    xpReward: 20,
    teaching: [
        {
            title: 'Adjectives end in -A',
            content: 'Words that describe **things** (nouns) are called Adjectives. In Esperanto, they always end in **-a**.',
            examples: [
                { esperanto: 'La granda viro', english: 'The big man' },
                { esperanto: 'Mi estas feliĉa', english: 'I am happy' }
            ]
        },
        {
            title: 'Adverbs end in -E',
            content: 'Words that describe **actions** (verbs) are called Adverbs. In Esperanto, they always end in **-e**.',
            examples: [
                { esperanto: 'Li kuras rapide', english: 'He runs quickly (fast)' },
                { esperanto: 'Ŝi kantas bone', english: 'She sings well' }
            ],
            tip: 'Remember: Nouns -O, Adjectives -A, Adverbs -E!'
        }
    ],
    vocabulary: [
        { word: 'granda', translation: 'big', phonetic: 'GRAHN-dah' },
        { word: 'malgranda', translation: 'small', phonetic: 'mal-GRAHN-dah' },
        { word: 'rapida', translation: 'fast', phonetic: 'rah-PEE-dah' },
        { word: 'rapide', translation: 'fast/quickly', phonetic: 'rah-PEE-deh' },
        { word: 'bone', translation: 'well', phonetic: 'BOH-neh' },
        { word: 'kantas', translation: 'sings', phonetic: 'KAHN-tahs' },
        { word: 'kuras', translation: 'runs', phonetic: 'KOO-rahs' },
        { word: 'feliĉa', translation: 'happy', phonetic: 'feh-LEE-chah' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What ending do adjectives have?',
            options: ['-o', '-a', '-e', '-i'],
            correctAnswer: '-a',
            hint: 'Example: granda (big)'
        },
        {
            type: 'multiple-choice',
            prompt: 'What ending do adverbs have?',
            options: ['-o', '-a', '-e', '-n'],
            correctAnswer: '-e',
            hint: 'Example: rapide (quickly)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The big boy runs fast"',
            words: ['la', 'granda', 'knabo', 'kuras', 'rapide', 'rapida'],
            correctAnswer: ['la', 'granda', 'knabo', 'kuras', 'rapide'],
            hint: 'Adjective modifies noun (granda knabo), Adverb modifies verb (kuras rapide)'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Li kantas bone"',
            correctAnswers: ['He sings well'],
            hint: 'bone = well (adverb of bona)'
        },
        {
            type: 'fill-blank',
            prompt: 'La virino estas ___. (The woman is happy)',
            options: ['feliĉa', 'feliĉe', 'feliĉo', 'feliĉas'],
            correctAnswer: 'feliĉa',
            hint: 'Adjective describing a noun'
        },
        {
            type: 'matching',
            prompt: 'Match opposites/pairs',
            leftCards: [
                { id: 'l1', text: 'granda', pairId: 'p1' },
                { id: 'l2', text: 'malgranda', pairId: 'p2' },
                { id: 'l3', text: 'rapida', pairId: 'p3' },
                { id: 'l4', text: 'rapide', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'big', pairId: 'p1' },
                { id: 'r2', text: 'small', pairId: 'p2' },
                { id: 'r3', text: 'fast (adj)', pairId: 'p3' },
                { id: 'r4', text: 'quickly (adv)', pairId: 'p4' }
            ]
        },
        {
            type: 'word-bank',
            prompt: 'Build: "A happy man sings"',
            words: ['feliĉa', 'viro', 'kantas', 'feliĉe'],
            correctAnswer: ['feliĉa', 'viro', 'kantas'],
            hint: 'Adjective + Noun + Verb'
        }
    ]
};
