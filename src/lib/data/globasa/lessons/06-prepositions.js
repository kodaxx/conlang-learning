export default {
    id: '06-prepositions',
    name: 'Prepositions',
    description: 'Learn location and relationship words.',
    icon: '📍',
    xpReward: 20,
    teaching: [
        {
            title: 'Common Prepositions',
            content: 'Prepositions tell you where or how something relates to something else.',
            vocabulary: [
                { word: 'fe', translation: 'at/in/on' },
                { word: 'cel', translation: 'to (destination)' },
                { word: 'de', translation: 'from / of' },
                { word: 'ji', translation: 'with' }
            ]
        },
        {
            title: 'Using Prepositions',
            content: 'Prepositions come **before** the noun they relate to.',
            examples: [
                { globasa: 'Mi sen fe dom', english: 'I am at home / in the house' },
                { globasa: 'Te na cel eskol', english: 'He/She goes to school' },
                { globasa: 'Kitabu de yu', english: 'Your book (book of you)' }
            ]
        }
    ],
    vocabulary: [
        { word: 'fe', translation: 'at/in/on', phonetic: 'feh' },
        { word: 'cel', translation: 'to (destination)', phonetic: 'chel' },
        { word: 'de', translation: 'from/of', phonetic: 'deh' },
        { word: 'ji', translation: 'with', phonetic: 'jee' },
        { word: 'in', translation: 'inside', phonetic: 'in' },
        { word: 'ex', translation: 'outside', phonetic: 'eks' },
        { word: 'sur', translation: 'on top of', phonetic: 'soor' },
        { word: 'sub', translation: 'under', phonetic: 'soob' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "fe" mean?',
            options: ['from', 'at/in/on', 'with', 'to'],
            correctAnswer: 'at/in/on',
            hint: 'A general locative preposition'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I am at home"',
            words: ['mi', 'sen', 'fe', 'dom', 'cel'],
            correctAnswer: ['mi', 'sen', 'fe', 'dom'],
            hint: 'Subject + sen + fe + place'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te na cel eskol"',
            correctAnswers: ['He goes to school', 'She goes to school', 'He/She goes to school'],
            hint: 'cel = to (destination)'
        },
        {
            type: 'fill-blank',
            prompt: 'Kitabu ___ mi. (My book / Book of me)',
            options: ['de', 'fe', 'cel', 'ji'],
            correctAnswer: 'de',
            hint: 'Shows possession'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "She eats with me"',
            words: ['te', 'yam', 'ji', 'mi', 'fe'],
            correctAnswer: ['te', 'yam', 'ji', 'mi'],
            hint: 'ji = with'
        },
        {
            type: 'matching',
            prompt: 'Match prepositions',
            leftCards: [
                { id: 'l1', text: 'fe', pairId: 'p1' },
                { id: 'l2', text: 'cel', pairId: 'p2' },
                { id: 'l3', text: 'de', pairId: 'p3' },
                { id: 'l4', text: 'ji', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'at/in/on', pairId: 'p1' },
                { id: 'r2', text: 'to', pairId: 'p2' },
                { id: 'r3', text: 'from/of', pairId: 'p3' },
                { id: 'r4', text: 'with', pairId: 'p4' }
            ]
        }
    ]
};
