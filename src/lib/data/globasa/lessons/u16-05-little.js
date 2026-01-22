// Unit 16: Weather & Degree Adverbs - Lesson 5: Little, Very Little
// New words: lilmo (a little), lil (small)

export default {
    id: 'u16-05-little',
    name: 'A Little',
    unit: 16,
    unitName: 'Weather & Degree Adverbs',
    lessonNumber: 5,
    description: 'Learn degree adverbs: a little',
    icon: '🤏',
    xpReward: 15,

    teaching: [
        {
            title: 'A Little (Adverb)',
            content: '**Lilmo** means "a little" or "slightly":',
            vocabulary: [
                { word: 'lilmo', translation: 'a little, slightly' }
            ],
            examples: [
                { globasa: 'Mi lilmo hox', english: 'I\'m a little hungry' },
                { globasa: 'To sen lilmo bardi', english: 'It\'s a little cold' },
                { globasa: 'Te lilmo aham', english: 'He understands a little' }
            ],
            tip: 'lilmo modifies verbs/adjectives to show small degree.'
        },
        {
            title: 'Compare with daymo',
            content: 'lilmo vs daymo are opposites:',
            examples: [
                { globasa: 'Mi lilmo hox', english: 'I\'m a little hungry' },
                { globasa: 'Mi daymo hox', english: 'I\'m very hungry' }
            ]
        }
    ],

    vocabulary: [
        { word: 'lilmo', translation: 'a little, slightly' }
    ],

    reviewVocabulary: [
        // Recent
        'sol', 'sameni', 'garme', 'bardi',
        // Earlier
        'daymo', 'hox', 'aham'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match degree adverbs',
            pairs: [
                { word: 'lilmo', translation: 'a little' },
                { word: 'daymo', translation: 'very much' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I\'m a little hungry"?',
            options: ['Mi daymo hox', 'Mi lilmo hox', 'Mi lil hox'],
            correctAnswer: 'Mi lilmo hox',
            hint: 'lilmo = a little'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "It\'s a little cold"',
            words: ['to', 'sen', 'lilmo', 'daymo', 'bardi'],
            correctAnswer: ['to', 'sen', 'lilmo', 'bardi'],
            hint: 'It + is + a little + cold'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te lilmo aham"',
            correctAnswers: ['He understands a little', 'She understands a little'],
            hint: 'He/She + a little + understand'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "I\'m a little tired"',
            correctAnswers: ['Mi lilmo telaki', 'Mi sen lilmo telaki'],
            hint: 'I + a little + tired'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of lilmo?',
            options: ['daymo', 'lil', 'maxim'],
            correctAnswer: 'daymo',
            hint: 'A little vs very much'
        }
    ]
};
