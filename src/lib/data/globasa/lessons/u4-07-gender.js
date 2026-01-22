// Unit 4: Descriptions - Lesson 7: Gender
// New words: femixu, manixu, ixu (3 words)
// Concept: Gender prefixes fem-/man-, adult word
// Reviews: Units 1-4

export default {
    id: 'u4-07-gender',
    name: 'Gender Words',
    unit: 4,
    unitName: 'Descriptions',
    lessonNumber: 7,
    description: 'Learn woman, man, and adult!',
    icon: '👫',
    xpReward: 25,

    teaching: [
        {
            title: 'Ixu - Adult',
            content: '**Ixu** means "adult". It\'s gender-neutral!',
            examples: [
                { globasa: 'ixu', english: 'adult' },
                { globasa: 'Te sen ixu', english: 'He/She is an adult' }
            ]
        },
        {
            title: 'Femixu - Woman',
            content: '**Femixu** means "woman". Notice the prefix **fem-** (female) + ixu!',
            examples: [
                { globasa: 'femixu', english: 'woman' },
                { globasa: 'meli femixu', english: 'beautiful woman' }
            ],
            tip: 'fem- can be added to other words too: femnini = girl'
        },
        {
            title: 'Manixu - Man',
            content: '**Manixu** means "man". The prefix **man-** (male) + ixu!',
            examples: [
                { globasa: 'manixu', english: 'man' },
                { globasa: 'gao manixu', english: 'tall man' }
            ],
            tip: 'man- prefix: mannini = boy'
        }
    ],

    vocabulary: [
        { word: 'ixu', translation: 'adult', phonetic: 'EE-shoo' },
        { word: 'femixu', translation: 'woman', phonetic: 'feh-MEE-shoo' },
        { word: 'manixu', translation: 'man', phonetic: 'mah-NEE-shoo' }
    ],

    reviewVocabulary: ['nini', 'gao', 'meli', 'bala', 'te', 'sen'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "femixu" mean?',
            options: ['girl', 'woman', 'mother', 'sister'],
            correctAnswer: 'woman',
            hint: 'Adult female'
        },
        {
            type: 'translation',
            prompt: 'Translate: "gao manixu"',
            correctAnswers: ['tall man', 'a tall man'],
            hint: 'gao = tall, manixu = man'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "beautiful woman"',
            words: ['meli', 'femixu', 'manixu', 'gao'],
            correctAnswer: ['meli', 'femixu'],
            hint: 'Beautiful + woman'
        },
        {
            type: 'multiple-choice',
            prompt: 'What prefix makes a word female?',
            options: ['man-', 'fem-', 'ixu-', 'te-'],
            correctAnswer: 'fem-',
            hint: 'fem + ixu = woman'
        },
        {
            type: 'translation',
            prompt: 'How would you say "boy" using what you learned?',
            correctAnswers: ['mannini'],
            hint: 'Male prefix + child'
        },
        // SRS Review
        {
            type: 'matching',
            prompt: 'Match people words',
            pairs: [
                { word: 'nini', translation: 'child' },
                { word: 'ixu', translation: 'adult' },
                { word: 'femixu', translation: 'woman' },
                { word: 'manixu', translation: 'man' }
            ]
        }
    ]
};
