export default {
    id: '05-adjectives',
    name: 'Adjectives',
    description: 'Learn how adjectives work and how to compare things.',
    icon: '🎨',
    xpReward: 20,
    teaching: [
        {
            title: 'Adjectives Before Nouns',
            content: 'In Globasa, adjectives come **before** the noun they describe, just like in English.',
            examples: [
                { globasa: 'day dom', english: 'big house' },
                { globasa: 'bon insan', english: 'good person' }
            ]
        },
        {
            title: 'Adjectives After "Sen"',
            content: 'Adjectives can also come after the verb **sen** (to be).',
            examples: [
                { globasa: 'Dom sen day', english: 'The house is big' },
                { globasa: 'Te sen felixi', english: 'He/She is happy' }
            ]
        },
        {
            title: 'Comparison with "Mas" and "Maxmo"',
            content: 'To say "more", use **mas**. "Most" is **maxmo**.',
            examples: [
                { globasa: 'Hin sen mas day', english: 'This is bigger (more big)' },
                { globasa: 'Te sen maxmo velosi', english: 'He/She is the fastest' }
            ]
        }
    ],
    vocabulary: [
        { word: 'bon', translation: 'good', phonetic: 'bon' },
        { word: 'mal', translation: 'bad', phonetic: 'mal' },
        { word: 'day', translation: 'big', phonetic: 'dai' },
        { word: 'lil', translation: 'small', phonetic: 'lil' },
        { word: 'neo', translation: 'new', phonetic: 'NEH-o' },
        { word: 'lao', translation: 'old', phonetic: 'lao' },
        { word: 'felixi', translation: 'happy', phonetic: 'feh-LEE-shee' },
        { word: 'mas', translation: 'more', phonetic: 'mas' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'Where do adjectives go in Globasa?',
            options: ['After the noun', 'Before the noun', 'Either is fine', 'Nowhere, use adverbs'],
            correctAnswer: 'Before the noun',
            hint: 'Like English'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "big house"',
            words: ['day', 'dom', 'lil', 'bon'],
            correctAnswer: ['day', 'dom'],
            hint: 'Adjective before noun'
        },
        {
            type: 'translation',
            prompt: 'Translate: "bon insan"',
            correctAnswers: ['good person', 'a good person'],
            hint: 'Adjective + Noun'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The child is small"',
            words: ['bete', 'sen', 'lil', 'day', 'bon'],
            correctAnswer: ['bete', 'sen', 'lil'],
            hint: 'Subject + sen + Adjective'
        },
        {
            type: 'fill-blank',
            prompt: 'Hin dom sen ___ day. (This house is bigger)',
            options: ['mas', 'maxmo', 'muy', 'no'],
            correctAnswer: 'mas',
            hint: 'Comparative'
        },
        {
            type: 'matching',
            prompt: 'Match adjectives',
            leftCards: [
                { id: 'l1', text: 'bon', pairId: 'p1' },
                { id: 'l2', text: 'mal', pairId: 'p2' },
                { id: 'l3', text: 'day', pairId: 'p3' },
                { id: 'l4', text: 'lil', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'good', pairId: 'p1' },
                { id: 'r2', text: 'bad', pairId: 'p2' },
                { id: 'r3', text: 'big', pairId: 'p3' },
                { id: 'r4', text: 'small', pairId: 'p4' }
            ]
        }
    ]
};
