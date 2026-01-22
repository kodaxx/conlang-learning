// Lesson 08: Giving & Wanting
// Learn to give, take, want, and use indirect objects

export default {
    id: '08-giving-wanting',
    name: 'Giving & Wanting',
    description: 'Learn to give, take, want, and use indirect objects',
    icon: '🎁',
    xpReward: 25,

    teaching: [
        {
            title: "Verbs of Exchange",
            content: `Three key verbs for exchanging things:

• **tene** = to give
• **napa** = to take
• **ju** = to want

• **mi le napa in kuwosi** = I take the fruit
• **ja le ju in pani** = He/she wants water`,
            vocabulary: [
                { word: 'tene', translation: 'to give' },
                { word: 'napa', translation: 'to take' },
                { word: 'ju', translation: 'to want' }
            ]
        },
        {
            title: "Giving With 'ki'",
            content: `For verbs with **two objects** (like "give"), use **ki** for the recipient:

**ki** = to, towards (recipient marker)

Structure: give + **in** [thing] + **ki** [person]

• **mi le tene in mani ki na** = I give money to you
• **ja le tene in kuwosi ki mi** = He gives fruit to me`,
            vocabulary: [
                { word: 'ki', translation: 'to, towards' },
                { word: 'mani', translation: 'money' }
            ],
            examples: [
                { kokanu: 'mi le tene in mani ki na', english: 'I give money to you' },
                { kokanu: 'ja le tene in pata ki mi', english: 'He gives a book to me' }
            ]
        },
        {
            title: "Practice: Wanting",
            content: `**ju** = to want

Use **in** to mark what you want:

• **mi le ju in pani** = I want water
• **ja le ju in kuwosi** = He wants fruit
• **na le ju in mani** = You want money`,
            examples: [
                { kokanu: 'mi le ju in pani', english: 'I want water' },
                { kokanu: 'na le ju in makan', english: 'You want food' }
            ],
            tip: "Use ju for anything you desire!"
        }
    ],

    vocabulary: [
        { word: 'ki', translation: 'to, towards', phonetic: 'kee' },
        { word: 'tene', translation: 'to give', phonetic: 'TEH-neh' },
        { word: 'napa', translation: 'to take', phonetic: 'NAH-pah' },
        { word: 'ju', translation: 'to want', phonetic: 'joo' },
        { word: 'mani', translation: 'money', phonetic: 'MAH-nee' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'How do you mark the recipient (to whom) in Kokanu?',
            options: ['in', 'le', 'ki', 'men'],
            correctAnswer: 'ki',
            hint: '"to" or "towards"'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le ju in pani"',
            correctAnswers: ['I want water', 'We want water'],
            hint: 'ju = want, pani = water'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "I give money to you"',
            correctAnswers: ['mi le tene in mani ki na'],
            hint: 'tene = give, mani = money, ki = to'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "ju" mean?',
            options: ['to give', 'to take', 'to want', 'to see'],
            correctAnswer: 'to want',
            hint: 'Expressing desire'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ja le napa in kuwosi"',
            correctAnswers: ['he takes fruit', 'she takes fruit', 'he takes the fruit', 'she takes the fruit'],
            hint: 'napa = to take'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "You want money"',
            correctAnswers: ['na le ju in mani'],
            hint: 'mani = money'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I give money to you"',
            words: ['mi', 'le', 'tene', 'in', 'mani', 'ki', 'na'],
            correctAnswer: ['mi', 'le', 'tene', 'in', 'mani', 'ki', 'na'],
            hint: 'Recall the recipient marker ki'
        },
        {
            prompt: 'Build: "He wants water"',
            words: ['ja', 'le', 'ju', 'in', 'pani', 'ki'],
            correctAnswer: ['ja', 'le', 'ju', 'in', 'pani'],
            hint: 'ju = want'
        },
        {
            type: 'matching',
            prompt: 'Match the words',
            pairs: [
                { word: 'ki', translation: 'to / towards' },
                { word: 'tene', translation: 'to give' },
                { word: 'napa', translation: 'to take' },
                { word: 'ju', translation: 'to want' },
                { word: 'mani', translation: 'money' }
            ]
        }
    ]
};
