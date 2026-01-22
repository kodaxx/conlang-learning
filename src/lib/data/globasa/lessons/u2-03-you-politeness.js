// Unit 2: Actions & Food - Lesson 3: You & Politeness
// New words: yu, fe lutuf, xukra (3 words/phrases)
// Concept: Second person pronoun, polite expressions
// Reviews: Unit 1-2

export default {
    id: 'u2-03-you-politeness',
    name: 'You & Politeness',
    unit: 2,
    unitName: 'Actions & Food',
    lessonNumber: 3,
    description: 'Learn to say "you" and be polite!',
    icon: '🙏',
    xpReward: 20,

    teaching: [
        {
            title: 'Yu - You',
            content: '**Yu** means "you". Just like **mi** (I), it never changes form!',
            examples: [
                { globasa: 'Yu danse', english: 'You dance' },
                { globasa: 'Yu pawbu', english: 'You run' }
            ],
            tip: 'Yu works for both "you" (subject) and "you" (object)'
        },
        {
            title: 'Fe Lutuf - Please',
            content: '**Fe lutuf** means "please". Literally it means "in kindness".',
            examples: [
                { globasa: 'Fe lutuf', english: 'Please' }
            ],
            tip: 'fe = a preposition, lutuf = kindness'
        },
        {
            title: 'Xukra - Thank You',
            content: '**Xukra** means "thank you" or "thanks". It can also mean "thank" as a verb!',
            examples: [
                { globasa: 'Xukra!', english: 'Thank you! / Thanks!' },
                { globasa: 'Mi xukra', english: 'I thank' }
            ]
        }
    ],

    vocabulary: [
        { word: 'yu', translation: 'you', phonetic: 'yoo' },
        { word: 'fe lutuf', translation: 'please', phonetic: 'feh loo-TOOF' },
        { word: 'xukra', translation: 'thank you / thanks', phonetic: 'SHOO-kra' }
    ],

    reviewVocabulary: ['mi', 'danse', 'lala', 'pawbu', 'anda', 'salom', 'weda'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'How do you say "you" in Globasa?',
            options: ['mi', 'yu', 'te', 'imi'],
            correctAnswer: 'yu',
            hint: 'The second-person pronoun'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Yu danse"',
            correctAnswers: ['You dance', 'You are dancing'],
            hint: 'yu = you, danse = dance'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "xukra" mean?',
            options: ['please', 'sorry', 'thank you', 'hello'],
            correctAnswer: 'thank you',
            hint: 'You say this to show gratitude'
        },
        {
            type: 'translation',
            prompt: 'How do you say "please" in Globasa?',
            correctAnswers: ['Fe lutuf', 'fe lutuf'],
            hint: 'Two words meaning "in kindness"'
        },
        // SRS Review
        {
            type: 'word-bank',
            prompt: 'Build: "I run"',
            words: ['mi', 'pawbu', 'yu', 'anda'],
            correctAnswer: ['mi', 'pawbu'],
            hint: 'First person + run'
        },
        {
            type: 'matching',
            prompt: 'Match polite words',
            pairs: [
                { word: 'salom', translation: 'hello' },
                { word: 'weda', translation: 'goodbye' },
                { word: 'xukra', translation: 'thank you' },
                { word: 'fe lutuf', translation: 'please' }
            ]
        }
    ]
};
