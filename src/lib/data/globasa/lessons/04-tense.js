export default {
    id: '04-tense',
    name: 'Tense Markers',
    description: 'Learn how to express past, present, and future.',
    icon: '⏳',
    xpReward: 25,
    teaching: [
        {
            title: 'Tense Particles',
            content: 'Since verbs don\'t change, Globasa uses **particles** before the verb to show tense. The main ones are **le** (past) and **xa** (future).',
            examples: [
                { globasa: 'Mi yam', english: 'I eat (present, default)' },
                { globasa: 'Mi le yam', english: 'I ate (past)' },
                { globasa: 'Mi xa yam', english: 'I will eat (future)' }
            ]
        },
        {
            title: 'Present is the Default',
            content: 'If there\'s no tense marker, the verb is usually present tense. You can optionally use **nun** (now) for emphasis.',
            examples: [
                { globasa: 'Mi nun yam', english: 'I am eating (right now)' }
            ]
        }
    ],
    vocabulary: [
        { word: 'le', translation: '(past tense marker)', phonetic: 'leh' },
        { word: 'xa', translation: '(future tense marker)', phonetic: 'sha' },
        { word: 'nun', translation: 'now', phonetic: 'noon' },
        { word: 'jaldi', translation: 'soon', phonetic: 'JAL-dee' },
        { word: 'prente', translation: 'before', phonetic: 'PREN-teh' },
        { word: 'bada', translation: 'after', phonetic: 'BA-da' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'Which particle marks the past tense?',
            options: ['xa', 'le', 'nun', 'no'],
            correctAnswer: 'le',
            hint: 'It comes before the verb'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which particle marks the future tense?',
            options: ['xa', 'le', 'nun', 'no'],
            correctAnswer: 'xa',
            hint: 'Think of "shall"'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I ate bread"',
            words: ['mi', 'le', 'yam', 'pano', 'xa'],
            correctAnswer: ['mi', 'le', 'yam', 'pano'],
            hint: 'Subject + Past marker + Verb + Object'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "She will see"',
            words: ['te', 'xa', 'oko', 'le', 'mi'],
            correctAnswer: ['te', 'xa', 'oko'],
            hint: 'Subject + Future marker + Verb'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi le amo yu"',
            correctAnswers: ['I loved you'],
            hint: 'le = past'
        },
        {
            type: 'fill-blank',
            prompt: 'Yu ___ na cel dom. (You will go to home)',
            options: ['le', 'xa', 'nun', 'no'],
            correctAnswer: 'xa',
            hint: 'Future action'
        },
        {
            type: 'matching',
            prompt: 'Match tenses',
            leftCards: [
                { id: 'l1', text: 'Mi yam', pairId: 'p1' },
                { id: 'l2', text: 'Mi le yam', pairId: 'p2' },
                { id: 'l3', text: 'Mi xa yam', pairId: 'p3' },
                { id: 'l4', text: 'Mi nun yam', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'I eat', pairId: 'p1' },
                { id: 'r2', text: 'I ate', pairId: 'p2' },
                { id: 'r3', text: 'I will eat', pairId: 'p3' },
                { id: 'r4', text: 'I am eating now', pairId: 'p4' }
            ]
        }
    ]
};
