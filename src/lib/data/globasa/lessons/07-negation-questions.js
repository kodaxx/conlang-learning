export default {
    id: '07-negation-questions',
    name: 'Negation & Questions',
    description: 'Learn how to say no and ask questions.',
    icon: '❓',
    xpReward: 20,
    teaching: [
        {
            title: 'Negation with "No"',
            content: 'To make a sentence negative, put **no** before the verb.',
            examples: [
                { globasa: 'Mi no yam', english: 'I don\'t eat' },
                { globasa: 'Te no sen felixi', english: 'He/She is not happy' }
            ]
        },
        {
            title: 'Yes/No Questions',
            content: 'For yes/no questions, add **kam** at the beginning of the sentence.',
            examples: [
                { globasa: 'Kam yu yam?', english: 'Do you eat? / Are you eating?' },
                { globasa: 'Kam te sen bon?', english: 'Is he/she good?' }
            ]
        },
        {
            title: 'Question Words',
            content: 'Use question words to ask for specific information.',
            vocabulary: [
                { word: 'ke', translation: 'what' },
                { word: 'hu', translation: 'who' },
                { word: 'keloka', translation: 'where' },
                { word: 'kewatu', translation: 'when' }
            ]
        }
    ],
    vocabulary: [
        { word: 'no', translation: 'no/not', phonetic: 'no' },
        { word: 'kam', translation: '(question marker)', phonetic: 'kam' },
        { word: 'ke', translation: 'what', phonetic: 'keh' },
        { word: 'hu', translation: 'who', phonetic: 'hoo' },
        { word: 'keloka', translation: 'where', phonetic: 'keh-LO-ka' },
        { word: 'kewatu', translation: 'when', phonetic: 'keh-WA-too' },
        { word: 'kesu', translation: 'why', phonetic: 'KEH-soo' },
        { word: 'kemaner', translation: 'how', phonetic: 'keh-ma-NER' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'How do you negate a sentence in Globasa?',
            options: ['Add "no" after the verb', 'Add "no" before the verb', 'Change the verb ending', 'Use a special conjugation'],
            correctAnswer: 'Add "no" before the verb',
            hint: 'Simple and consistent'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I don\'t eat"',
            words: ['mi', 'no', 'yam', 'yu', 'sen'],
            correctAnswer: ['mi', 'no', 'yam'],
            hint: 'Subject + no + Verb'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Do you see?"',
            words: ['kam', 'yu', 'oko', 'no', 'mi'],
            correctAnswer: ['kam', 'yu', 'oko'],
            hint: 'kam + Subject + Verb'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Ke yu yam?"',
            correctAnswers: ['What do you eat?', 'What are you eating?'],
            hint: 'ke = what'
        },
        {
            type: 'fill-blank',
            prompt: '___ yu sen? (Who are you?)',
            options: ['ke', 'hu', 'keloka', 'kam'],
            correctAnswer: 'hu',
            hint: 'Asking about identity'
        },
        {
            type: 'matching',
            prompt: 'Match question words',
            leftCards: [
                { id: 'l1', text: 'ke', pairId: 'p1' },
                { id: 'l2', text: 'hu', pairId: 'p2' },
                { id: 'l3', text: 'keloka', pairId: 'p3' },
                { id: 'l4', text: 'kewatu', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'what', pairId: 'p1' },
                { id: 'r2', text: 'who', pairId: 'p2' },
                { id: 'r3', text: 'where', pairId: 'p3' },
                { id: 'r4', text: 'when', pairId: 'p4' }
            ]
        }
    ]
};
