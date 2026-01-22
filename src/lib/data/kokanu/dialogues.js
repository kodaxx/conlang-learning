// Kokanu dialogue scenarios for the Dialogue Completion game
// Vocabulary based on Units 1-3 (Lessons 01-08)

export const dialogues = [
    {
        id: 'greeting-1',
        title: 'Polite Greeting',
        difficulty: 'easy',
        context: 'You meet someone.',
        conversation: [
            { speaker: 'jan', text: 'peko!', translation: 'Hello!' },
            { speaker: 'you', text: '', translation: 'Hello! (Polite response)' }
        ],
        acceptedAnswers: ['peko', 'peko!', 'peko mi', 'mi peko'],
        hint: 'Use the universal polite word'
    },
    {
        id: 'want-water',
        title: 'Thirsty?',
        difficulty: 'easy',
        context: 'Someone offers you a drink.',
        conversation: [
            { speaker: 'jan', text: 'na le ju in pani?', translation: 'Do you want water?' },
            { speaker: 'you', text: '', translation: 'Yes, I want water.' }
        ],
        acceptedAnswers: ['peko mi le ju in pani', 'mi le ju in pani', 'peko mi le ju'],
        hint: 'Start with peko (please/yes) and say "I want water"'
    },
    {
        id: 'giving-book',
        title: 'Receiving a Gift',
        difficulty: 'medium',
        context: 'Someone hands you a book.',
        conversation: [
            { speaker: 'jan', text: 'mi le tene in pata ki na.', translation: 'I give the book to you.' },
            { speaker: 'you', text: '', translation: 'Thank you!' }
        ],
        acceptedAnswers: ['peko', 'peko!', 'peko na'],
        hint: 'Say thank you using peko'
    },
    {
        id: 'liking-cats',
        title: 'Do You Like Cats?',
        difficulty: 'medium',
        context: 'Talking about pets.',
        conversation: [
            { speaker: 'jan', text: 'na le suki in meja?', translation: 'Do you like cats?' },
            { speaker: 'you', text: '', translation: 'I like cats.' }
        ],
        acceptedAnswers: ['mi le suki in meja', 'mi le suki', 'mi suki'],
        hint: 'Use suki (like)'
    },
    {
        id: 'farewell',
        title: 'Saying Goodbye',
        difficulty: 'easy',
        context: 'Leaving a conversation.',
        conversation: [
            { speaker: 'jan', text: 'peko! na le eso.', translation: 'Bye! You go.' },
            { speaker: 'you', text: '', translation: 'Goodbye!' }
        ],
        acceptedAnswers: ['peko', 'peko!'],
        hint: 'peko works for goodbye too'
    }
];

export default dialogues;
