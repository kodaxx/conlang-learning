// Unit 11: Shopping & Quantities - Lesson 6: Poultry & Fish Meat
// New words: kokokimaso (chicken meat), mahimaso (fish meat)

export default {
    id: 'u11-06-poultry-fish',
    name: 'Poultry & Fish',
    unit: 11,
    unitName: 'Shopping & Quantities',
    lessonNumber: 6,
    description: 'Learn more meat vocabulary',
    icon: '🍗',
    xpReward: 15,

    teaching: [
        {
            title: 'Chicken (meat)',
            content: '**Kokokimaso** means "chicken meat" (kokoki = chicken + maso):',
            vocabulary: [
                { word: 'kokokimaso', translation: 'chicken (meat)' }
            ],
            examples: [
                { globasa: 'Mi suki kokokimaso', english: 'I like chicken' },
                { globasa: 'Kokokimaso sen bon', english: 'Chicken is good' }
            ]
        },
        {
            title: 'Fish (as food)',
            content: '**Mahimaso** means "fish meat" or fish as food:',
            vocabulary: [
                { word: 'mahimaso', translation: 'fish (meat/food)' }
            ],
            examples: [
                { globasa: 'Yu yam mahimaso?', english: 'Do you eat fish?' },
                { globasa: 'Mahimaso sen safe', english: 'Fish is healthy' }
            ],
            tip: 'mahi = fish (the animal), mahimaso = fish (as food)'
        }
    ],

    vocabulary: [
        { word: 'kokokimaso', translation: 'chicken (meat)' },
        { word: 'mahimaso', translation: 'fish (meat/food)' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'maso', 'gosomaso', 'swinmaso',
        // Earlier
        'mahi', 'suki', 'yam', 'bon', 'safe'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match meat vocabulary',
            pairs: [
                { word: 'kokokimaso', translation: 'chicken meat' },
                { word: 'mahimaso', translation: 'fish meat' },
                { word: 'mahi', translation: 'fish (animal)' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between "mahi" and "mahimaso"?',
            options: [
                'mahi = fish (animal), mahimaso = fish (food)',
                'mahi = fish (food), mahimaso = fish (animal)',
                'They are the same'
            ],
            correctAnswer: 'mahi = fish (animal), mahimaso = fish (food)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I like chicken"',
            words: ['mi', 'suki', 'kokokimaso', 'mahimaso', 'yam'],
            correctAnswer: ['mi', 'suki', 'kokokimaso'],
            hint: 'I + like + chicken'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Yu yam mahimaso?"',
            correctAnswers: ['Do you eat fish?'],
            hint: 'You + eat + fish'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Chicken is good"',
            correctAnswers: ['Kokokimaso sen bon'],
            hint: 'Chicken + is + good'
        },
        {
            type: 'multiple-choice',
            prompt: 'All meat words use what suffix?',
            options: ['-maso', '-yam', '-kari'],
            correctAnswer: '-maso'
        }
    ]
};
