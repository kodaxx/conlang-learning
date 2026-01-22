export default {
    id: '03-verbs-svo',
    name: 'Verbs & Word Order',
    description: 'Learn verbs and the SVO sentence structure.',
    icon: '🏃',
    xpReward: 25,
    teaching: [
        {
            title: 'Verbs Don\'t Conjugate!',
            content: 'Globasa verbs **never change form**. "Yam" means "eat" whether it\'s I, you, or they doing it. This is a huge simplification!',
            examples: [
                { globasa: 'Mi yam', english: 'I eat' },
                { globasa: 'Yu yam', english: 'You eat' },
                { globasa: 'Te yam', english: 'He/She eats' }
            ]
        },
        {
            title: 'SVO Order',
            content: 'Globasa uses strict **Subject-Verb-Object** order, just like English.',
            examples: [
                { globasa: 'Mi yam pingo', english: 'I eat an apple' },
                { globasa: 'Te oko mi', english: 'He/She sees me' }
            ]
        },
        {
            title: 'The Verb "Sen" (To Be)',
            content: '**Sen** is the verb "to be". It links the subject to a description.',
            examples: [
                { globasa: 'Mi sen felixi', english: 'I am happy' },
                { globasa: 'Te sen doste', english: 'He/She is a friend' }
            ]
        }
    ],
    vocabulary: [
        { word: 'sen', translation: 'to be', phonetic: 'sen' },
        { word: 'hare', translation: 'to have', phonetic: 'HA-reh' },
        { word: 'yam', translation: 'to eat', phonetic: 'yam' },
        { word: 'pije', translation: 'to drink', phonetic: 'PEE-jeh' },
        { word: 'oko', translation: 'to see', phonetic: 'O-ko' },
        { word: 'suki', translation: 'to like', phonetic: 'SOO-kee' },
        { word: 'amo', translation: 'to love', phonetic: 'A-mo' },
        { word: 'na', translation: 'to go', phonetic: 'na' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'Do verbs in Globasa change based on the subject?',
            options: ['Yes, always', 'Sometimes', 'No, never', 'Only for past tense'],
            correctAnswer: 'No, never',
            hint: 'This is one of Globasa\'s key simplifications'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I eat bread"',
            words: ['mi', 'yam', 'pano', 'yu', 'pije'],
            correctAnswer: ['mi', 'yam', 'pano'],
            hint: 'Subject + Verb + Object'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi sen felixi"',
            correctAnswers: ['I am happy'],
            hint: 'sen = to be'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "She sees the child"',
            words: ['te', 'oko', 'bete', 'mi', 'yam'],
            correctAnswer: ['te', 'oko', 'bete'],
            hint: 'SVO order: Subject (te) + Verb (oko) + Object (bete)'
        },
        {
            type: 'fill-blank',
            prompt: 'Mi ___ aqua. (I drink water)',
            options: ['yam', 'pije', 'sen', 'oko'],
            correctAnswer: 'pije',
            hint: 'The verb for drinking'
        },
        {
            type: 'matching',
            prompt: 'Match verbs',
            leftCards: [
                { id: 'l1', text: 'sen', pairId: 'p1' },
                { id: 'l2', text: 'yam', pairId: 'p2' },
                { id: 'l3', text: 'oko', pairId: 'p3' },
                { id: 'l4', text: 'amo', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'to be', pairId: 'p1' },
                { id: 'r2', text: 'to eat', pairId: 'p2' },
                { id: 'r3', text: 'to see', pairId: 'p3' },
                { id: 'r4', text: 'to love', pairId: 'p4' }
            ]
        }
    ]
};
