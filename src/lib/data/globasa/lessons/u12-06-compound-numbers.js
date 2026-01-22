// Unit 12: Clothing & Numbers - Lesson 6: Compound Numbers 21-99
// New concept: combining tens and units

export default {
    id: 'u12-06-compound-numbers',
    name: 'Numbers 21-99',
    unit: 12,
    unitName: 'Clothing & Numbers',
    lessonNumber: 6,
    description: 'Learn compound numbers like twenty-one',
    icon: '🔢',
    xpReward: 15,

    teaching: [
        {
            title: 'Compound Numbers',
            content: 'Combine tens + units (as one word):',
            examples: [
                { globasa: 'duades un', english: 'twenty-one' },
                { globasa: 'tigades dua', english: 'thirty-two' },
                { globasa: 'carades lima', english: 'forty-five' }
            ],
            tip: 'Pattern: TENS + UNIT (separate words)'
        },
        {
            title: 'More Examples',
            content: 'Practice with more numbers:',
            examples: [
                { globasa: 'limades sisa', english: 'fifty-six' },
                { globasa: 'sabedes oco', english: 'seventy-eight' },
                { globasa: 'nuedes nue', english: 'ninety-nine' }
            ]
        },
        {
            title: 'Full Number System',
            content: 'You can now count from 1 to 99!',
            examples: [
                { globasa: 'des un (11), duades (20), tigades care (34)', english: '11, 20, 34' }
            ]
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        // Tens
        'duades', 'tigades', 'carades', 'limades', 'sisades', 'sabedes', 'ocodes', 'nuedes',
        // Units
        'un', 'dua', 'tiga', 'care', 'lima', 'sisa', 'sabe', 'oco', 'nue'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match compound numbers',
            pairs: [
                { word: 'duades un', translation: '21' },
                { word: 'tigades dua', translation: '32' },
                { word: 'limades sisa', translation: '56' },
                { word: 'nuedes nue', translation: '99' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "45"?',
            options: ['carades lima', 'limades care', 'des carades lima'],
            correctAnswer: 'carades lima',
            hint: 'forty + five'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "78"',
            words: ['sabedes', 'oco', 'sabe', 'ocodes'],
            correctAnswer: ['sabedes', 'oco'],
            hint: 'seventy + eight'
        },
        {
            type: 'translation',
            prompt: 'What number is "sisades tiga"?',
            correctAnswers: ['63', 'sixty-three'],
            hint: 'sixty + three'
        },
        {
            type: 'translation',
            prompt: 'How do you say "27"?',
            correctAnswers: ['duades sabe'],
            hint: 'twenty + seven'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the largest two-digit number?',
            options: ['nuedes', 'nuedes nue', 'des nue'],
            correctAnswer: 'nuedes nue',
            hint: '90 + 9 = 99'
        }
    ]
};
