// Unit 5: Tenses & Places - Lesson 5: Rooms in a House
// New words: kokikamer (kitchen), banyokamer (bathroom)

export default {
    id: 'u5-05-house-rooms',
    name: 'Rooms in a House',
    unit: 5,
    unitName: 'Tenses & Places',
    lessonNumber: 5,
    description: 'Learn compound words for rooms in a house',
    icon: '🍳',
    xpReward: 15,

    teaching: [
        {
            title: 'Compound Words in Globasa',
            content: 'Globasa creates new words by combining existing roots. The modifier comes first:',
            examples: [
                { globasa: 'koki (cook) + kamer (room) = kokikamer', english: 'kitchen' },
                { globasa: 'banyo (bath) + kamer (room) = banyokamer', english: 'bathroom' }
            ],
            tip: 'Like Lego blocks - combine roots to build new meanings!'
        },
        {
            title: 'Kitchen',
            content: '**Kokikamer** literally means "cooking room":',
            vocabulary: [
                { word: 'kokikamer', translation: 'kitchen' }
            ],
            examples: [
                { globasa: 'Mi yam in kokikamer', english: 'I eat in the kitchen' },
                { globasa: 'Mama le koki in kokikamer', english: 'Mom cooked in the kitchen' }
            ]
        },
        {
            title: 'Bathroom',
            content: '**Banyokamer** literally means "bathing room":',
            vocabulary: [
                { word: 'banyokamer', translation: 'bathroom' }
            ],
            examples: [
                { globasa: 'Banyokamer sen lil', english: 'The bathroom is small' },
                { globasa: 'Mi sen in banyokamer', english: 'I am in the bathroom' }
            ]
        }
    ],

    vocabulary: [
        { word: 'kokikamer', translation: 'kitchen' },
        { word: 'banyokamer', translation: 'bathroom' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'dom', 'kamer', 'in', 'ex', 'ogar',
        // Earlier
        'yam', 'sen', 'day', 'lil', 'bon', 'le', 'xa'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match room words',
            pairs: [
                { word: 'kokikamer', translation: 'kitchen' },
                { word: 'banyokamer', translation: 'bathroom' },
                { word: 'kamer', translation: 'room' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "kokikamer" literally mean?',
            options: ['Eating room', 'Cooking room', 'Living room'],
            correctAnswer: 'Cooking room',
            hint: 'koki = cook'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I eat in the kitchen"',
            words: ['mi', 'yam', 'in', 'kokikamer', 'banyokamer'],
            correctAnswer: ['mi', 'yam', 'in', 'kokikamer'],
            hint: 'I + eat + in + kitchen'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Banyokamer sen lil"',
            correctAnswers: ['The bathroom is small'],
            hint: 'Bathroom + is + small'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Mom will cook in the kitchen"',
            correctAnswers: ['Mama xa koki in kokikamer'],
            hint: 'Mom + will + cook + in + kitchen'
        },
        {
            type: 'multiple-choice',
            prompt: 'In Globasa compounds, the modifier comes:',
            options: ['After the main word', 'Before the main word', 'In either position'],
            correctAnswer: 'Before the main word',
            hint: 'Like koki-kamer, not kamer-koki'
        }
    ]
};
