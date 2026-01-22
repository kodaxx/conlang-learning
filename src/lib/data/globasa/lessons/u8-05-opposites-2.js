// Unit 8: Comparison - Lesson 5: Opposites 2
// New words: hanman (slow), lama (old thing), lao (old person)

export default {
    id: 'u8-05-opposites-2',
    name: 'Opposites 2',
    unit: 8,
    unitName: 'Comparison',
    lessonNumber: 5,
    description: 'Learn opposite adjectives: slow, old',
    icon: '🐢',
    xpReward: 15,

    teaching: [
        {
            title: 'Slow (opposite of fast)',
            content: '**Hanman** means "slow":',
            vocabulary: [
                { word: 'hanman', translation: 'slow' }
            ],
            examples: [
                { globasa: 'Bwaw sen hanman', english: 'The dog is slow' },
                { globasa: 'Te anda hanman', english: 'He/She walks slowly' }
            ],
            tip: 'velosi = fast, hanman = slow'
        },
        {
            title: 'Old (things)',
            content: '**Lama** means "old" for things and objects:',
            vocabulary: [
                { word: 'lama', translation: 'old (for things)' }
            ],
            examples: [
                { globasa: 'Hin kitabu sen lama', english: 'This book is old' },
                { globasa: 'Mi hare lama kursi', english: 'I have an old chair' }
            ],
            tip: 'neo = new, lama = old (things)'
        },
        {
            title: 'Old (people)',
            content: '**Lao** means "old" for people (elderly):',
            vocabulary: [
                { word: 'lao', translation: 'old (for people), elderly' }
            ],
            examples: [
                { globasa: 'Lao yen ogar hinloka', english: 'An elderly person lives here' },
                { globasa: 'Mi su patre sen lao', english: 'My father is old' }
            ],
            tip: 'juni = young, lao = old (people). Use lama for old things!'
        }
    ],

    vocabulary: [
        { word: 'hanman', translation: 'slow' },
        { word: 'lama', translation: 'old (things)' },
        { word: 'lao', translation: 'old (people), elderly' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'bur', 'lil', 'colo',
        // Opposite adjectives
        'velosi', 'neo', 'juni', 'bon', 'day', 'meli'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match opposites',
            pairs: [
                { word: 'hanman', translation: 'slow (opp. of velosi)' },
                { word: 'lama', translation: 'old thing (opp. of neo)' },
                { word: 'lao', translation: 'elderly (opp. of juni)' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of "velosi" (fast)?',
            options: ['lama', 'lao', 'hanman'],
            correctAnswer: 'hanman',
            hint: 'slow'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "This book is old"',
            words: ['hin', 'kitabu', 'sen', 'lama', 'lao'],
            correctAnswer: ['hin', 'kitabu', 'sen', 'lama'],
            hint: 'This + book + is + old (thing)'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi su patre sen lao"',
            correctAnswers: ['My father is old'],
            hint: 'My + father + is + old (person)'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The dog is slow"',
            correctAnswers: ['Bwaw sen hanman'],
            hint: 'Dog + is + slow'
        },
        {
            type: 'multiple-choice',
            prompt: 'When do you use "lao" vs "lama"?',
            options: [
                'lao = people, lama = things',
                'lao = things, lama = people',
                'They are the same'
            ],
            correctAnswer: 'lao = people, lama = things',
            hint: 'Old person vs old book'
        }
    ]
};
