export default {
    id: '02-basics-2',
    name: 'Basics 2',
    description: 'Nouns ending in -o and Plurals ending in -oj',
    icon: '🍎',
    xpReward: 20,
    teaching: [
        {
            title: 'All Nouns end in -O',
            content: 'In Esperanto, you can instantly tell what part of speech a word is by its ending. **All nouns** (names of things, people, animals) end in **-o**.',
            examples: [
                { esperanto: 'Viro', english: 'Man' },
                { esperanto: 'Virino', english: 'Woman' },
                { esperanto: 'Amiko', english: 'Friend' }
            ]
        },
        {
            title: 'Plurals with -J',
            content: 'To make a noun plural (more than one), just add **-j** to the end. It sounds like the "y" in "boy".',
            examples: [
                { esperanto: 'Viroj', english: 'Men', breakdown: 'viro + j' },
                { esperanto: 'Amikoj', english: 'Friends' }
            ],
            tip: 'The letter "j" is pronounced like "y" in English!'
        }
    ],
    vocabulary: [
        { word: 'viro', translation: 'man', phonetic: 'VEE-roh' },
        { word: 'virino', translation: 'woman', phonetic: 'vee-REE-noh' },
        { word: 'knabo', translation: 'boy', phonetic: 'KNAH-boh' },
        { word: 'knabino', translation: 'girl', phonetic: 'knah-BEE-noh' },
        { word: 'pomo', translation: 'apple', phonetic: 'POH-moh' },
        { word: 'kuko', translation: 'cake', phonetic: 'KOO-koh' },
        { word: 'la', translation: 'the', phonetic: 'lah' },
        { word: 'manĝas', translation: 'eats/is eating', phonetic: 'MAHN-jas' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "viro" mean?',
            options: ['woman', 'man', 'boy', 'girl'],
            correctAnswer: 'man',
            hint: 'Ends in -o (noun)'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "La knabo manĝas"',
            correctAnswers: ['The boy eats', 'The boy is eating'],
            hint: 'knabo = boy, manĝas = eats'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The woman eats an apple"',
            words: ['la', 'virino', 'manĝas', 'pomon', 'pomo', 'kuko'],
            correctAnswer: ['la', 'virino', 'manĝas', 'pomo'],
            hint: 'Subject (la virino) + Verb (manĝas) + Object (pomo - wait, accusative comes later, letting slide for now or introduce basic nouns first)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The boy is good"',
            words: ['la', 'knabo', 'estas', 'bona', 'viro'],
            correctAnswer: ['la', 'knabo', 'estas', 'bona'],
            hint: 'knabo = boy'
        },
        {
            type: 'fill-blank',
            prompt: 'La ___ estas bona. (The cake is good)',
            options: ['pomo', 'kuko', 'viro', 'knabino'],
            correctAnswer: 'kuko',
            hint: 'Sweet dessert'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the plural of "viro" (man)?',
            options: ['viroj', 'viros', 'vir', 'viroc'],
            correctAnswer: 'viroj',
            hint: 'Plurals add -j'
        },
        {
            type: 'translation',
            prompt: 'Translate: "La viroj"',
            correctAnswers: ['The men'],
            hint: 'Plural of man'
        },
        {
            type: 'matching',
            prompt: 'Match words',
            leftCards: [
                { id: 'l1', text: 'viro', pairId: 'p1' },
                { id: 'l2', text: 'virino', pairId: 'p2' },
                { id: 'l3', text: 'pomo', pairId: 'p3' },
                { id: 'l4', text: 'kuko', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'man', pairId: 'p1' },
                { id: 'r2', text: 'woman', pairId: 'p2' },
                { id: 'r3', text: 'apple', pairId: 'p3' },
                { id: 'r4', text: 'cake', pairId: 'p4' }
            ]
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The apples are good"',
            words: ['la', 'pomoj', 'estas', 'bonaj', 'pomo', 'bona'],
            correctAnswer: ['la', 'pomoj', 'estas', 'bonaj'],
            hint: 'Adjectives must match plurals! (Preview for next lessons)'
        }
    ]
};
