// Unit 18: Time Expressions - Lesson 3: Before & After
// New words: lefe (before), xafe (after)

export default {
    id: 'u18-03-before-after',
    name: 'Before & After',
    unit: 18,
    unitName: 'Time Expressions',
    lessonNumber: 3,
    description: 'Learn before and after',
    icon: '⏭️',
    xpReward: 15,

    teaching: [
        {
            title: 'Before',
            content: '**Lefe** means "before":',
            vocabulary: [
                { word: 'lefe', translation: 'before' }
            ],
            examples: [
                { globasa: 'Lefe yam, mi xwexi', english: 'Before eating, I study' },
                { globasa: 'Te le ata lefe mi', english: 'He came before me' }
            ]
        },
        {
            title: 'After',
            content: '**Xafe** means "after":',
            vocabulary: [
                { word: 'xafe', translation: 'after' }
            ],
            examples: [
                { globasa: 'Xafe yam, mi somno', english: 'After eating, I sleep' },
                { globasa: 'Mi xa ata xafe te', english: 'I will come after him' }
            ],
            tip: 'lefe and xafe are temporal opposites!'
        }
    ],

    vocabulary: [
        { word: 'lefe', translation: 'before' },
        { word: 'xafe', translation: 'after' }
    ],

    reviewVocabulary: [
        // Recent
        'nun', 'nundin', 'watu',
        // Earlier
        'yam', 'xwexi', 'somno', 'ata'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match time words',
            pairs: [
                { word: 'lefe', translation: 'before' },
                { word: 'xafe', translation: 'after' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the opposite of "lefe"?',
            options: ['nun', 'xafe', 'watu'],
            correctAnswer: 'xafe',
            hint: 'before vs after'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "After eating, I sleep"',
            words: ['xafe', 'lefe', 'yam', 'mi', 'somno'],
            correctAnswer: ['xafe', 'yam', 'mi', 'somno'],
            hint: 'After + eat + I + sleep'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Lefe yam, mi xwexi"',
            correctAnswers: ['Before eating, I study'],
            hint: 'Before + eat + I + study'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "He came before me"',
            correctAnswers: ['Te le ata lefe mi'],
            hint: 'He + past + come + before + me'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "lefe" mean?',
            options: ['after', 'before', 'during'],
            correctAnswer: 'before'
        }
    ]
};
