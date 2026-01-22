export default {
    id: '05-questions-negation',
    name: 'Questions & Negation',
    description: 'Asking yes/no questions (ĉu) and saying no (ne)',
    icon: '❓',
    xpReward: 20,
    teaching: [
        {
            title: 'Yes/No Questions with Ĉu',
            content: 'To ask a yes/no question in Esperanto, just add the word **Ĉu** to the beginning of a statement. It works like a question mark you can hear!',
            examples: [
                { esperanto: 'Vi estas bona', english: 'You are good (Statement)' },
                { esperanto: 'Ĉu vi estas bona?', english: 'Are you good? (Question)' }
            ]
        },
        {
            title: 'Negation with Ne',
            content: 'To say "no" or "not", use **ne**. To make a sentence negative, put **ne** directly before the verb.',
            examples: [
                { esperanto: 'Mi ne estas feliĉa', english: 'I am not happy' },
                { esperanto: 'Kio estas tio?', english: 'What is that?' },
                { esperanto: 'Tio ne estas pomo', english: 'That is not an apple' }
            ]
        }
    ],
    vocabulary: [
        { word: 'ĉu', translation: 'whether/do/is?', phonetic: 'choo' },
        { word: 'kio', translation: 'what', phonetic: 'KEE-oh' },
        { word: 'ne', translation: 'no/not', phonetic: 'neh' },
        { word: 'dormas', translation: 'sleeps', phonetic: 'DOR-mahs' },
        { word: 'bela', translation: 'beautiful', phonetic: 'BEH-lah' },
        { word: 'tio', translation: 'that (thing)', phonetic: 'TEE-oh' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What word turns a sentence into a yes/no question?',
            options: ['kiu', 'ĉu', 'kio', 'ne'],
            correctAnswer: 'ĉu',
            hint: 'Placed at the start of the sentence'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Ĉu vi dormas?"',
            correctAnswers: ['Are you sleeping?', 'Do you sleep?'],
            hint: 'Ĉu = question marker'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Does the boy sleep?"',
            words: ['ĉu', 'la', 'knabo', 'dormas', 'ne'],
            correctAnswer: ['ĉu', 'la', 'knabo', 'dormas'],
            hint: 'Start with Ĉu'
        },
        {
            type: 'fill-blank',
            prompt: 'Li ___ dormas. (He is not sleeping)',
            options: ['ĉu', 'kio', 'ne', 'jes'],
            correctAnswer: 'ne',
            hint: 'Word for "not"'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Tio estas bela"',
            correctAnswers: ['That is beautiful'],
            hint: 'Tio = that'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "What is that?"',
            words: ['kio', 'estas', 'tio', 'ĉu'],
            correctAnswer: ['kio', 'estas', 'tio'],
            hint: 'Kio = what'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you answer "Ĉu vi estas feliĉa?" positively?',
            options: ['Ne, mi ne estas', 'Jes, mi estas feliĉa', 'Kio estas feliĉa', 'Dankon'],
            correctAnswer: 'Jes, mi estas feliĉa',
            hint: 'Jes = yes'
        },
        {
            type: 'matching',
            prompt: 'Match words',
            leftCards: [
                { id: 'l1', text: 'ĉu', pairId: 'p1' },
                { id: 'l2', text: 'kio', pairId: 'p2' },
                { id: 'l3', text: 'tio', pairId: 'p3' },
                { id: 'l4', text: 'ne', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'Is it true that...?', pairId: 'p1' },
                { id: 'r2', text: 'what', pairId: 'p2' },
                { id: 'r3', text: 'that', pairId: 'p3' },
                { id: 'r4', text: 'no/not', pairId: 'p4' }
            ]
        }
    ]
};
