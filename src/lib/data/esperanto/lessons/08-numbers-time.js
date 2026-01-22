export default {
    id: '08-numbers-time',
    name: 'Numbers & Time',
    description: 'Count to 100 and tell time',
    icon: '⏰',
    xpReward: 25,
    teaching: [
        {
            title: 'Counting 1-10',
            content: 'Counting in Esperanto is logical. Here are the first few numbers:',
            vocabulary: [
                { word: 'unu', translation: '1' },
                { word: 'du', translation: '2' },
                { word: 'tri', translation: '3' },
                { word: 'kvar', translation: '4' },
                { word: 'kvin', translation: '5' }
            ]
        },
        {
            title: 'Big Numbers',
            content: 'To make tens, you just combine the number with **dek** (ten).',
            examples: [
                { esperanto: 'Dek du', english: 'Twelve (Ten Two)' },
                { esperanto: 'Du', english: 'Two' },
                { esperanto: 'Dudek', english: 'Twenty (Two tens)' },
                { esperanto: 'Dudek kvin', english: 'Twenty-five' }
            ]
        }
    ],
    vocabulary: [
        { word: 'unu', translation: '1 (one)', phonetic: 'OO-noo' },
        { word: 'du', translation: '2 (two)', phonetic: 'doo' },
        { word: 'dek', translation: '10 (ten)', phonetic: 'dek' },
        { word: 'dek unu', translation: '11', phonetic: 'dek OO-noo' },
        { word: 'dudek', translation: '20', phonetic: 'DOO-dek' },
        { word: 'tridek', translation: '30', phonetic: 'TREE-dek' },
        { word: 'cent', translation: '100', phonetic: 'tsent' },
        { word: 'horo', translation: 'hour/time', phonetic: 'HOH-roh' },
        { word: 'estas la dua', translation: 'it is two o\'clock', phonetic: 'ES-tahs lah DOO-ah' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'How do you say "twenty"?',
            options: ['dek du', 'dudek', 'du', 'cent'],
            correctAnswer: 'dudek',
            hint: '2 (du) tens (dek) -> dudek'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "twelve"?',
            options: ['dek du', 'dudek', 'dek', 'du'],
            correctAnswer: 'dek du',
            hint: '10 (dek) plus 2 (du) -> dek du'
        },
        {
            type: 'translation',
            prompt: 'Translate: "dek kvin"',
            correctAnswers: ['15', 'fifteen'],
            hint: '10 + 5'
        },
        {
            type: 'fill-blank',
            prompt: 'Tridek = 30; Kvardek = ___',
            options: ['40', '14', '400', '4'],
            correctAnswer: '40',
            hint: '4 tens'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "It is two o\'clock"',
            words: ['estas', 'la', 'dua', 'du', 'horo'],
            correctAnswer: ['estas', 'la', 'dua'],
            hint: 'Use the ordinal number (dua = second)'
        },
        {
            type: 'matching',
            prompt: 'Match numbers',
            leftCards: [
                { id: 'l1', text: 'dudek', pairId: 'p1' },
                { id: 'l2', text: 'dek du', pairId: 'p2' },
                { id: 'l3', text: 'tridek kvin', pairId: 'p3' },
                { id: 'l4', text: 'cent', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: '20', pairId: 'p1' },
                { id: 'r2', text: '12', pairId: 'p2' },
                { id: 'r3', text: '35', pairId: 'p3' },
                { id: 'r4', text: '100', pairId: 'p4' }
            ]
        },
        {
            type: 'translation',
            prompt: 'Translate: "Estas la tria"',
            correctAnswers: ['It is three o\'clock', 'It\'s three o\'clock'],
            hint: 'Or literally "It is the third (hour)"'
        }
    ]
};
