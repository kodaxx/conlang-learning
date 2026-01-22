// Unit 8: Comparison - Lesson 6: Opposites 3
// New words: hazuni (sad), kotor (dirty), kurto (short time), cote (short height)

export default {
    id: 'u8-06-opposites-3',
    name: 'Opposites 3',
    unit: 8,
    unitName: 'Comparison',
    lessonNumber: 6,
    description: 'Learn opposite adjectives: sad, dirty, short',
    icon: '😢',
    xpReward: 15,

    teaching: [
        {
            title: 'Sad (opposite of happy)',
            content: '**Hazuni** means "sad":',
            vocabulary: [
                { word: 'hazuni', translation: 'sad' }
            ],
            examples: [
                { globasa: 'Te sen hazuni', english: 'He/She is sad' },
                { globasa: 'Hin filme sen hazuni', english: 'This movie is sad' }
            ],
            tip: 'hox = happy, hazuni = sad'
        },
        {
            title: 'Dirty (opposite of clean)',
            content: '**Kotor** means "dirty":',
            vocabulary: [
                { word: 'kotor', translation: 'dirty' }
            ],
            examples: [
                { globasa: 'Bwaw sen kotor', english: 'The dog is dirty' },
                { globasa: 'Kotor kursi sen fe exya', english: 'The dirty chair is outside' }
            ],
            tip: 'safe = clean, kotor = dirty'
        },
        {
            title: 'Short (two types)',
            content: 'Globasa has two words for "short":',
            vocabulary: [
                { word: 'kurto', translation: 'short (time/duration)' },
                { word: 'cote', translation: 'short (height)' }
            ],
            examples: [
                { globasa: 'Filme sen kurto', english: 'The movie is short (duration)' },
                { globasa: 'Nini sen cote', english: 'The child is short (height)' }
            ],
            tip: 'lungo = long (time), gao = tall → kurto = short (time), cote = short (height)'
        }
    ],

    vocabulary: [
        { word: 'hazuni', translation: 'sad' },
        { word: 'kotor', translation: 'dirty' },
        { word: 'kurto', translation: 'short (time)' },
        { word: 'cote', translation: 'short (height)' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'hanman', 'lama', 'lao',
        // Opposite adjectives
        'hox', 'safe', 'lungo', 'gao'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match opposites',
            pairs: [
                { word: 'hazuni', translation: 'sad (opp. of hox)' },
                { word: 'kotor', translation: 'dirty (opp. of safe)' },
                { word: 'kurto', translation: 'short time (opp. of lungo)' },
                { word: 'cote', translation: 'short height (opp. of gao)' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of "hox" (happy)?',
            options: ['kotor', 'hazuni', 'kurto'],
            correctAnswer: 'hazuni',
            hint: 'sad'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The child is short"',
            words: ['nini', 'sen', 'cote', 'kurto', 'lil'],
            correctAnswer: ['nini', 'sen', 'cote'],
            hint: 'Child + is + short (height)'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Bwaw sen kotor"',
            correctAnswers: ['The dog is dirty'],
            hint: 'Dog + is + dirty'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The movie is short"',
            correctAnswers: ['Filme sen kurto'],
            hint: 'Movie + is + short (duration)'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which word means "short in height"?',
            options: ['kurto', 'cote', 'lil'],
            correctAnswer: 'cote',
            hint: 'For people and objects'
        }
    ]
};
