export default {
    id: '09-prepositions',
    name: 'Prepositions',
    description: 'Learn location and relationship words like en, sur, al',
    icon: '📍',
    xpReward: 20,
    teaching: [
        {
            title: 'Little Connection Words',
            content: 'Prepositions are small words that tell you where or how something is.',
            examples: [
                { esperanto: 'En (In)', english: 'En la domo (In the house)' },
                { esperanto: 'Sur (On)', english: 'Sur la tablo (On the table)' },
                { esperanto: 'Al (To)', english: 'Mi iras al la urbo (I go to the city)' }
            ]
        },
        {
            title: 'Possession with De',
            content: 'Esperanto usually uses **de** (of) to show possession, like saying "The book of the teacher" instead of "The teacher\'s book".',
            examples: [
                { esperanto: 'La kuko de la viro', english: 'The man\'s cake (The cake of the man)' }
            ]
        }
    ],
    vocabulary: [
        { word: 'en', translation: 'in', phonetic: 'en' },
        { word: 'sur', translation: 'on', phonetic: 'soor' },
        { word: 'al', translation: 'to/towards', phonetic: 'ahl' },
        { word: 'kun', translation: 'with', phonetic: 'koon' },
        { word: 'per', translation: 'by means of/with', phonetic: 'per' },
        { word: 'de', translation: 'of/from', phonetic: 'deh' },
        { word: 'tablo', translation: 'table', phonetic: 'TAH-bloh' },
        { word: 'domo', translation: 'house', phonetic: 'DOH-moh' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'Translate: "The apple is on the table"',
            options: ['La pomo estas en la tablo', 'La pomo estas sur la tablo', 'La pomo estas al la tablo', 'La pomo estas kun la tablo'],
            correctAnswer: 'La pomo estas sur la tablo',
            hint: 'sur = on'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi iras al la domo"',
            correctAnswers: ['I go to the house', 'I am going to the house'],
            hint: 'iras = go, al = to'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "He eats with me"',
            words: ['li', 'manĝas', 'kun', 'mi', 'per'],
            correctAnswer: ['li', 'manĝas', 'kun', 'mi'],
            hint: 'kun = with (accompaniment)'
        },
        {
            type: 'fill-blank',
            prompt: 'Ŝi estas ___ la domo. (in)',
            options: ['en', 'sur', 'al', 'de'],
            correctAnswer: 'en',
            hint: 'Inside'
        },
        {
            type: 'matching',
            prompt: 'Match prepositions',
            leftCards: [
                { id: 'l1', text: 'en', pairId: 'p1' },
                { id: 'l2', text: 'sur', pairId: 'p2' },
                { id: 'l3', text: 'kun', pairId: 'p3' },
                { id: 'l4', text: 'de', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'in', pairId: 'p1' },
                { id: 'r2', text: 'on', pairId: 'p2' },
                { id: 'r3', text: 'with', pairId: 'p3' },
                { id: 'r4', text: 'of/from', pairId: 'p4' }
            ]
        },
        {
            type: 'translation',
            prompt: 'Translate: "La kuko de la viro"',
            correctAnswers: ['The man\'s cake', 'The cake of the man'],
            hint: 'de shows possession'
        }
    ]
};
