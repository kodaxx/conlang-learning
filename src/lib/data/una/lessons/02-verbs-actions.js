// Lesson 02: Verbs & Actions in Una
// Introduces core verbs and SVO word order

export default {
    id: '02-verbs-actions',
    name: 'Verbs & Actions',
    description: 'Learn core verbs and how to build basic sentences',
    icon: '🏃',
    xpReward: 30,

    teaching: [
        {
            title: "Verb Basics",
            content: `In Una, verbs have **no conjugation** - they stay the same regardless of who does the action.

**Core Verbs:**
• **mana** = eat
• **pina** = drink
• **go** = go
• **nema** = come
• **wisa** = see
• **meka** = do, make

The subject comes before the verb, the object after.`,
            vocabulary: [
                { word: 'mana', translation: 'eat' },
                { word: 'pina', translation: 'drink' },
                { word: 'go', translation: 'go' },
                { word: 'nema', translation: 'come' },
                { word: 'wisa', translation: 'see' },
                { word: 'meka', translation: 'do, make' }
            ]
        },
        {
            title: "SVO Word Order",
            content: `Una uses strict **Subject - Verb - Object** order:

**S** (who) + **V** (action) + **O** (what)

Examples:
• **mi mana pomo** = I eat apple
• **li pina wata** = He/she drinks water
• **wi wisa kano** = You see dog`,
            tip: "Word order is fixed! Subject MUST come first, then verb, then object.",
            examples: [
                { una: 'mi mana pomo', english: 'I eat (an) apple' },
                { una: 'li pina wata', english: 'He/she drinks water' },
                { una: 'kano wisa misu', english: 'The dog sees the cat' }
            ]
        },
        {
            title: "More Action Verbs",
            content: `Let's learn more useful verbs:

**Movement:**
• **waka** = walk
• **lupa** = run
• **sita** = sit
• **sata** = stand

**Examples:**
• **mi waka** = I walk
• **kano lupa** = The dog runs
• **li sita** = He/she sits`,
            vocabulary: [
                { word: 'waka', translation: 'walk' },
                { word: 'lupa', translation: 'run' },
                { word: 'sita', translation: 'sit' },
                { word: 'sata', translation: 'stand' }
            ],
            examples: [
                { una: 'mi waka', english: 'I walk' },
                { una: 'kano lupa', english: 'The dog runs' },
                { una: 'wi sata', english: 'You stand' }
            ]
        },
        {
            title: "Communication Verbs",
            content: `Verbs for speaking and understanding:

• **kama** = speak, call
• **saya** = say
• **nasi** = know
• **tana** = understand

**Examples:**
• **mi kama** = I speak
• **li saya wola** = He/she says (a) word
• **wi tana ma?** = Do you understand?`,
            vocabulary: [
                { word: 'kama', translation: 'speak, call' },
                { word: 'saya', translation: 'say' },
                { word: 'nasi', translation: 'know' },
                { word: 'tana', translation: 'understand' }
            ],
            examples: [
                { una: 'mi nasi', english: 'I know' },
                { una: 'li kama', english: 'He/she speaks' },
                { una: 'wi tana', english: 'You understand' }
            ]
        },
        {
            title: "Love and Like",
            content: `Expressing feelings:

• **ama** = love
• **laka** = like

**Examples:**
• **mi ama wi** = I love you
• **li laka pomo** = He/she likes apples
• **mi laka kano** = I like dogs`,
            vocabulary: [
                { word: 'ama', translation: 'love' },
                { word: 'laka', translation: 'like' }
            ],
            examples: [
                { una: 'mi ama wi', english: 'I love you' },
                { una: 'li laka pomo', english: 'He/she likes apples' },
                { una: 'ni ama somo se ni', english: 'We love our house' }
            ]
        }
    ],

    vocabulary: [
        { word: 'mana', translation: 'eat', phonetic: 'MAH-nah' },
        { word: 'pina', translation: 'drink', phonetic: 'PEE-nah' },
        { word: 'go', translation: 'go', phonetic: 'goh' },
        { word: 'nema', translation: 'come', phonetic: 'NEH-mah' },
        { word: 'wisa', translation: 'see', phonetic: 'WEE-sah' },
        { word: 'meka', translation: 'do, make', phonetic: 'MEH-kah' },
        { word: 'waka', translation: 'walk', phonetic: 'WAH-kah' },
        { word: 'lupa', translation: 'run', phonetic: 'LOO-pah' },
        { word: 'sita', translation: 'sit', phonetic: 'SEE-tah' },
        { word: 'sata', translation: 'stand', phonetic: 'SAH-tah' },
        { word: 'kama', translation: 'speak, call', phonetic: 'KAH-mah' },
        { word: 'saya', translation: 'say', phonetic: 'SAH-yah' },
        { word: 'nasi', translation: 'know', phonetic: 'NAH-see' },
        { word: 'tana', translation: 'understand', phonetic: 'TAH-nah' },
        { word: 'ama', translation: 'love', phonetic: 'AH-mah' },
        { word: 'laka', translation: 'like', phonetic: 'LAH-kah' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What is the word order in Una?',
            options: ['VSO', 'SVO', 'OVS', 'SOV'],
            correctAnswer: 'SVO',
            hint: 'Subject - Verb - Object'
        },
        {
            type: 'translation',
            prompt: 'Translate to Una: "I eat apple"',
            correctAnswers: ['mi mana pomo'],
            hint: 'Subject + verb + object'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "wisa" mean?',
            options: ['walk', 'run', 'see', 'go'],
            correctAnswer: 'see',
            hint: 'It\'s about vision'
        },
        {
            type: 'translation',
            prompt: 'Translate to Una: "The dog runs"',
            correctAnswers: ['kano lupa'],
            hint: 'Subject + verb'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I love you" in Una?',
            options: ['mi laka wi', 'mi ama wi', 'ama mi wi', 'wi ama mi'],
            correctAnswer: 'mi ama wi',
            hint: 'ama = love'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "li pina wata"',
            correctAnswers: ['he drinks water', 'she drinks water', 'they drink water', 'he/she drinks water'],
            hint: 'li = he/she/they'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "nasi" mean?',
            options: ['speak', 'understand', 'know', 'say'],
            correctAnswer: 'know',
            hint: 'About having knowledge'
        },
        {
            type: 'translation',
            prompt: 'Translate to Una: "You understand"',
            correctAnswers: ['wi tana'],
            hint: 'Subject + verb (no object needed)'
        }
    ]
};
