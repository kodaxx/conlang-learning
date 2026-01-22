// Unit 7: Possession & Location - Lesson 3: Here & There
// New words: hinloka (here), denloka (there)

export default {
    id: 'u7-03-here-there',
    name: 'Here & There',
    unit: 7,
    unitName: 'Possession & Location',
    lessonNumber: 3,
    description: 'Learn to say "here" and "there"',
    icon: '👉',
    xpReward: 15,

    teaching: [
        {
            title: 'Here',
            content: '**Hinloka** means "here" (hin + loka = this place):',
            vocabulary: [
                { word: 'hinloka', translation: 'here' }
            ],
            examples: [
                { globasa: 'Ata hinloka!', english: 'Come here!' },
                { globasa: 'Mi ogar hinloka', english: 'I live here' },
                { globasa: 'Hinloka sen bon', english: 'It\'s good here / Here is good' }
            ]
        },
        {
            title: 'There',
            content: '**Denloka** means "there" (den + loka = that place):',
            vocabulary: [
                { word: 'denloka', translation: 'there' }
            ],
            examples: [
                { globasa: 'Te ogar denloka', english: 'He/She lives there' },
                { globasa: 'Idi denloka!', english: 'Go there!' },
                { globasa: 'Keto sen denloka?', english: 'What is there?' }
            ],
            tip: 'Notice the pattern: hin (this) + loka = here, den (that) + loka = there'
        }
    ],

    vocabulary: [
        { word: 'hinloka', translation: 'here' },
        { word: 'denloka', translation: 'there' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'loka', 'keloka', 'de', 'ton',
        // Earlier
        'hin', 'den', 'ata', 'idi', 'ogar', 'sen', 'bon'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match location words',
            pairs: [
                { word: 'hinloka', translation: 'here' },
                { word: 'denloka', translation: 'there' },
                { word: 'keloka', translation: 'where' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "Come here!"?',
            options: ['Ata denloka!', 'Ata hinloka!', 'Idi hinloka!'],
            correctAnswer: 'Ata hinloka!',
            hint: 'Come + here'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "He lives there"',
            words: ['te', 'ogar', 'denloka', 'hinloka', 'sen'],
            correctAnswer: ['te', 'ogar', 'denloka'],
            hint: 'He + live + there'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi ogar hinloka"',
            correctAnswers: ['I live here'],
            hint: 'I + live + here'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Go there!"',
            correctAnswers: ['Idi denloka!'],
            hint: 'Go + there'
        },
        {
            type: 'multiple-choice',
            prompt: 'How is "denloka" formed?',
            options: [
                'hin + loka (this + place)',
                'den + loka (that + place)',
                'de + loka (of + place)'
            ],
            correctAnswer: 'den + loka (that + place)',
            hint: 'den = that'
        }
    ]
};
