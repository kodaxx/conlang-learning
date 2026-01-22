export default {
    id: '03-accusative',
    name: 'The Accusative',
    description: 'Learn the direct object marker (-n) usage',
    icon: '🎯',
    xpReward: 25,
    teaching: [
        {
            title: 'The Direct Object (-or)',
            content: 'When someone does an action to something (e.g., "I eat the apple"), that thing is the **Direct Object**. In Esperanto, we mark the direct object by adding **-n**.',
            examples: [
                { esperanto: 'La knabo manĝas pomon', english: 'The boy eats an apple' },
                { esperanto: 'Mi amas vin', english: 'I love you' }
            ]
        },
        {
            title: 'Flexible Word Order',
            content: 'Because the **-n** tells us who is receiving the action, we can change the word order without changing the meaning!',
            examples: [
                { esperanto: 'La knabo manĝas kukon', english: 'The boy eats cake' },
                { esperanto: 'Kukon manĝas la knabo', english: 'The boy eats cake (The cake, the boy eats)' }
            ],
            tip: 'The -n is the key! It acts like an arrow pointing to the "receiver" of the action.'
        }
    ],
    vocabulary: [
        { word: 'havas', translation: 'have/has', phonetic: 'HAH-vahs' },
        { word: 'amas', translation: 'love/loves', phonetic: 'AH-mahs' },
        { word: 'vidas', translation: 'see/sees', phonetic: 'VEE-dahs' },
        { word: 'trinkas', translation: 'drink/drinks', phonetic: 'TRIN-kahs' },
        { word: 'akvo', translation: 'water', phonetic: 'AHK-voh' },
        { word: 'lakto', translation: 'milk', phonetic: 'LAHK-toh' },
        { word: 'pomon', translation: 'apple (obj)', phonetic: 'POH-mohn' },
        { word: 'kukon', translation: 'cake (obj)', phonetic: 'KOO-kohn' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'When do you add "-n" to a word?',
            options: ['When it is the subject', 'When it is the direct object', 'When it is a verb', 'Always'],
            correctAnswer: 'When it is the direct object',
            hint: 'The thing receiving the action gets the -n'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Mi havas pomon" (I have an apple)',
            words: ['mi', 'havas', 'pomon', 'pomo', 'estas'],
            correctAnswer: ['mi', 'havas', 'pomon'],
            hint: 'Subject (Mi) + Verb (havas) + Object (pomon)'
        },
        {
            type: 'fill-blank',
            prompt: 'La viro amas la ___ (woman).',
            options: ['virino', 'virinon', 'virinoj', 'virinojn'],
            correctAnswer: 'virinon',
            hint: 'The woman is being loved, so she needs -n'
        },
        {
            type: 'translation',
            prompt: 'Translate: "La knabo trinkas lakton"',
            correctAnswers: ['The boy drinks milk', 'The boy is drinking milk'],
            hint: 'lakto -> lakton because it is being drunk'
        },
        {
            type: 'matching',
            prompt: 'Match words',
            leftCards: [
                { id: 'l1', text: 'vidas', pairId: 'p1' },
                { id: 'l2', text: 'trinkas', pairId: 'p2' },
                { id: 'l3', text: 'akvo', pairId: 'p3' },
                { id: 'l4', text: 'havas', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'sees', pairId: 'p1' },
                { id: 'r2', text: 'drinks', pairId: 'p2' },
                { id: 'r3', text: 'water', pairId: 'p3' },
                { id: 'r4', text: 'has', pairId: 'p4' }
            ]
        },
        {
            type: 'word-bank',
            prompt: 'Build: "She sees the cake"',
            words: ['ŝi', 'vidas', 'la', 'kukon', 'kuko'],
            correctAnswer: ['ŝi', 'vidas', 'la', 'kukon'],
            hint: 'ŝi = she (introducing pronoun implicitly or via word bank)'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi amas vin"',
            correctAnswers: ['I love you'],
            hint: 'vi -> vin because "you" are the object'
        },
        {
            type: 'fill-blank',
            prompt: 'Li ___ akvon. (He drinks water)',
            options: ['trinkas', 'havas', 'amas', 'vidas'],
            correctAnswer: 'trinkas',
            hint: 'Action for liquids'
        }
    ]
};
