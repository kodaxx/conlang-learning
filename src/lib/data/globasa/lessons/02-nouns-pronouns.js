export default {
    id: '02-nouns-pronouns',
    name: 'Nouns & Pronouns',
    description: 'Learn basic nouns and personal pronouns.',
    icon: '👤',
    xpReward: 20,
    teaching: [
        {
            title: 'Nouns Don\'t Change',
            content: 'In Globasa, nouns **never change form**. There are no special endings for plural, gender, or case. If you want to be specific about plurality, you can use **plu** (few/some).',
            examples: [
                { globasa: 'insan', english: 'person (or people)' },
                { globasa: 'plu insan', english: 'people (explicitly plural)' }
            ]
        },
        {
            title: 'Personal Pronouns',
            content: 'Here are the personal pronouns:',
            vocabulary: [
                { word: 'mi', translation: 'I/me' },
                { word: 'yu', translation: 'you' },
                { word: 'te', translation: 'he/she/it' },
                { word: 'imi', translation: 'we' },
                { word: 'uyu', translation: 'you (plural)' },
                { word: 'ete', translation: 'they' }
            ]
        },
        {
            title: 'No Gender!',
            content: 'The pronoun **te** is gender-neutral. If you need to specify, use **femte** (she) or **mante** (he).',
            examples: []
        }
    ],
    vocabulary: [
        { word: 'mi', translation: 'I/me', phonetic: 'mee' },
        { word: 'yu', translation: 'you', phonetic: 'yoo' },
        { word: 'te', translation: 'he/she/it', phonetic: 'teh' },
        { word: 'imi', translation: 'we', phonetic: 'ee-mee' },
        { word: 'insan', translation: 'person', phonetic: 'in-SAN' },
        { word: 'femixu', translation: 'woman', phonetic: 'feh-mee-SHOO' },
        { word: 'manixu', translation: 'man', phonetic: 'mah-nee-SHOO' },
        { word: 'bete', translation: 'child', phonetic: 'BEH-teh' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I" in Globasa?',
            options: ['yu', 'mi', 'te', 'imi'],
            correctAnswer: 'mi',
            hint: 'Similar to Spanish "mi"'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "te" mean?',
            options: ['I', 'you', 'he/she/it', 'we'],
            correctAnswer: 'he/she/it',
            hint: 'It\'s the 3rd person singular, gender-neutral'
        },
        {
            type: 'translation',
            prompt: 'Translate: "insan"',
            correctAnswers: ['person', 'human', 'people'],
            hint: 'A basic noun for a human being'
        },
        {
            type: 'matching',
            prompt: 'Match pronouns',
            leftCards: [
                { id: 'l1', text: 'mi', pairId: 'p1' },
                { id: 'l2', text: 'yu', pairId: 'p2' },
                { id: 'l3', text: 'te', pairId: 'p3' },
                { id: 'l4', text: 'imi', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'I/me', pairId: 'p1' },
                { id: 'r2', text: 'you', pairId: 'p2' },
                { id: 'r3', text: 'he/she/it', pairId: 'p3' },
                { id: 'r4', text: 'we', pairId: 'p4' }
            ]
        },
        {
            type: 'fill-blank',
            prompt: '___ sen insan. (I am a person)',
            options: ['mi', 'yu', 'te', 'imi'],
            correctAnswer: 'mi',
            hint: 'First person singular'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you make a noun plural in Globasa?',
            options: ['Add -s', 'Add -j', 'Use "plu"', 'Nouns don\'t change'],
            correctAnswer: 'Use "plu"',
            hint: 'It\'s optional, and it comes before the noun'
        }
    ]
};
