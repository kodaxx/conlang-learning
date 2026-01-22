// Unit 4: Descriptions - Lesson 1: And, Be, He/She
// New words: ji, sen, te (3 words)
// Concept: The verb "sen" (to be), third person pronoun
// Reviews: Units 1-3

export default {
    id: 'u4-01-and-be',
    name: 'And, Be, He/She',
    unit: 4,
    unitName: 'Descriptions',
    lessonNumber: 1,
    description: 'Learn essential connector "and", the verb "be", and third person!',
    icon: '🔗',
    xpReward: 25,

    teaching: [
        {
            title: 'Ji - And',
            content: '**Ji** means "and". Use it to connect words, phrases, or sentences!',
            examples: [
                { globasa: 'mi ji yu', english: 'me and you' },
                { globasa: 'roti ji jubin', english: 'bread and cheese' },
                { globasa: 'Mi danse ji yu lala', english: 'I dance and you sing' }
            ]
        },
        {
            title: 'Sen - Be (am/is/are)',
            content: '**Sen** means "be" - equivalent to am, is, are in English. Use it to describe things!',
            examples: [
                { globasa: 'Mi sen...', english: 'I am...' },
                { globasa: 'Yu sen...', english: 'You are...' }
            ],
            tip: 'Sen never changes form - no conjugation!'
        },
        {
            title: 'Te - He/She/It',
            content: '**Te** is a gender-neutral pronoun for any person or animal. It can mean "he", "she", or "it".',
            examples: [
                { globasa: 'Te danse', english: 'He/She dances' },
                { globasa: 'Te sen doste', english: 'He/She is a friend' }
            ],
            tip: 'te is gender-neutral - perfect for when gender doesn\'t matter'
        }
    ],

    vocabulary: [
        { word: 'ji', translation: 'and', phonetic: 'jee' },
        { word: 'sen', translation: 'be (am/is/are)', phonetic: 'sen' },
        { word: 'te', translation: 'he/she/it (animate)', phonetic: 'teh' }
    ],

    reviewVocabulary: ['mi', 'yu', 'doste', 'danse', 'lala', 'roti', 'jubin'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "ji" mean?',
            options: ['or', 'but', 'and', 'with'],
            correctAnswer: 'and',
            hint: 'Connects two things'
        },
        {
            type: 'translation',
            prompt: 'Translate: "mi ji yu"',
            correctAnswers: ['me and you', 'I and you'],
            hint: 'First person + connector + second person'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "bread and cheese"',
            words: ['roti', 'ji', 'jubin', 'sen', 'te'],
            correctAnswer: ['roti', 'ji', 'jubin'],
            hint: 'Bread + and + cheese'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "te" mean?',
            options: ['I', 'you', 'he/she/it', 'we'],
            correctAnswer: 'he/she/it',
            hint: 'Third person singular pronoun'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te sen doste"',
            correctAnswers: ['He is a friend', 'She is a friend', 'He/she is a friend', 'It is a friend'],
            hint: 'te = he/she, sen = is, doste = friend'
        },
        // SRS Review
        {
            type: 'matching',
            prompt: '[Review] Match pronouns',
            pairs: [
                { word: 'mi', translation: 'I/me' },
                { word: 'yu', translation: 'you' },
                { word: 'te', translation: 'he/she/it' }
            ]
        }
    ]
};
