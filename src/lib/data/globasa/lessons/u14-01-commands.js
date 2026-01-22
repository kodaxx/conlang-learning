// Unit 14: Commands & Positions - Lesson 1: Commands (Imperative)
// New concept: am (imperative marker)

export default {
    id: 'u14-01-commands',
    name: 'Commands (Imperative)',
    unit: 14,
    unitName: 'Commands & Positions',
    lessonNumber: 1,
    description: 'Learn to give commands with the imperative',
    icon: '🗣️',
    xpReward: 15,

    teaching: [
        {
            title: 'Commands',
            content: 'To give commands, simply use the verb (imperative is unmarked, or use **am** for emphasis):',
            vocabulary: [
                { word: 'am', translation: 'imperative marker (let\'s, do!)' }
            ],
            examples: [
                { globasa: 'Idi!', english: 'Go!' },
                { globasa: 'Yam!', english: 'Eat!' },
                { globasa: 'Am idi!', english: 'Let\'s go! / Do go!' }
            ],
            tip: 'Simple commands don\'t need a subject. "Am" adds emphasis or means "let\'s".'
        },
        {
            title: 'Commands with Subject',
            content: 'You can include the subject for clarity:',
            examples: [
                { globasa: 'Yu idi!', english: '(You) Go!' },
                { globasa: 'Imi am yam!', english: 'Let\'s eat!' }
            ]
        }
    ],

    vocabulary: [
        { word: 'am', translation: 'imperative marker' }
    ],

    reviewVocabulary: [
        // Unit 13 recent
        'daymo', 'ingay', 'musi',
        // Verbs
        'idi', 'yam', 'ata', 'somno', 'xwexi'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match commands',
            pairs: [
                { word: 'Idi!', translation: 'Go!' },
                { word: 'Yam!', translation: 'Eat!' },
                { word: 'Am idi!', translation: 'Let\'s go!' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "Let\'s eat!"?',
            options: ['Yam!', 'Am yam!', 'Imi yam!'],
            correctAnswer: 'Am yam!',
            hint: 'Am adds emphasis or "let\'s"'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Go!"',
            words: ['idi', 'am', 'yu', 'ata'],
            correctAnswer: ['idi'],
            hint: 'Simple command'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Ata hinloka!"',
            correctAnswers: ['Come here!'],
            hint: 'Come + here'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Let\'s go!"',
            correctAnswers: ['Am idi!', 'Imi am idi!'],
            hint: 'am + go'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "am" do?',
            options: [
                'Makes commands emphatic or means "let\'s"',
                'Makes past tense',
                'Makes questions'
            ],
            correctAnswer: 'Makes commands emphatic or means "let\'s"'
        }
    ]
};
