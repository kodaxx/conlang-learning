export default {
    id: '18-comparison',
    name: 'Comparison',
    description: 'More than (pli... ol) and The most (plej)',
    icon: '🐘',
    xpReward: 25,
    teaching: [
        {
            title: 'Comparing Things',
            content: 'To compare two things, we use the structure **pli ... ol** (more ... than).',
            examples: [
                { esperanto: 'La domo estas pli granda ol la hundo', english: 'The house is bigger than the dog' }
            ]
        },
        {
            title: 'The Superlative',
            content: 'To say something is the "most" or "best", use **plej**.',
            examples: [
                { esperanto: 'La plej rapida', english: 'The fastest (The most fast)' },
                { esperanto: 'Plej bona', english: 'Best' }
            ]
        }
    ],
    vocabulary: [
        { word: 'pli', translation: 'more', phonetic: 'plee' },
        { word: 'ol', translation: 'than', phonetic: 'ohl' },
        { word: 'plej', translation: 'most', phonetic: 'play' },
        { word: 'interesa', translation: 'interesting', phonetic: 'in-teh-REH-sah' },
        { word: 'alta', translation: 'tall/high', phonetic: 'AHL-tah' },
        { word: 'inteligenta', translation: 'intelligent', phonetic: 'in-teh-lee-GEN-tah' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'Translate: "pli granda ol"',
            options: ['bigger than', 'biggest', 'very big', 'big'],
            correctAnswer: 'bigger than',
            hint: 'pli = more'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "He is taller than she"',
            words: ['li', 'estas', 'pli', 'alta', 'ol', 'ŝi'],
            correctAnswer: ['li', 'estas', 'pli', 'alta', 'ol', 'ŝi'],
            hint: 'Literal: He is more tall than she'
        },
        {
            type: 'fill-blank',
            prompt: 'Ŝi estas la ___ inteligenta. (most)',
            options: ['plej', 'pli', 'tre', 'malpli'],
            correctAnswer: 'plej',
            hint: 'Superlative'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Tio estas la plej bona"',
            correctAnswers: ['That is the best', 'That thing is the best'],
            hint: 'plej bona = most good'
        },
        {
            type: 'matching',
            prompt: 'Match words',
            leftCards: [
                { id: 'l1', text: 'pli', pairId: 'p1' },
                { id: 'l2', text: 'ol', pairId: 'p2' },
                { id: 'l3', text: 'plej', pairId: 'p3' },
                { id: 'l4', text: 'alta', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'more', pairId: 'p1' },
                { id: 'r2', text: 'than', pairId: 'p2' },
                { id: 'r3', text: 'most', pairId: 'p3' },
                { id: 'r4', text: 'tall', pairId: 'p4' }
            ]
        }
    ]
};
