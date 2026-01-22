// Unit 8: Comparison - Lesson 7: Spouse
// New words: gami (spouse)

export default {
    id: 'u8-07-spouse',
    name: 'Spouse & Family',
    unit: 8,
    unitName: 'Comparison',
    lessonNumber: 7,
    description: 'Learn family vocabulary: spouse',
    icon: '💑',
    xpReward: 15,

    teaching: [
        {
            title: 'Spouse',
            content: '**Gami** means "spouse" (gender-neutral):',
            vocabulary: [
                { word: 'gami', translation: 'spouse' }
            ],
            examples: [
                { globasa: 'Mi su gami sen alimyen', english: 'My spouse is a teacher' },
                { globasa: 'Te lubi te su gami', english: 'He/She loves his/her spouse' }
            ],
            tip: 'Gami is gender-neutral. Use fem-/man- prefixes if needed: femgami (wife), mangami (husband).'
        },
        {
            title: 'Gendered Spouse Terms',
            content: 'You can add prefixes to specify gender:',
            examples: [
                { globasa: 'femgami', english: 'wife (female spouse)' },
                { globasa: 'mangami', english: 'husband (male spouse)' }
            ]
        },
        {
            title: 'Family Review',
            content: 'Remember the family words you\'ve learned:',
            examples: [
                { globasa: 'mama, patre, matre, papa', english: 'Parents' },
                { globasa: 'nini, sodar, bete', english: 'Child, sibling' },
                { globasa: 'gami', english: 'Spouse' }
            ]
        }
    ],

    vocabulary: [
        { word: 'gami', translation: 'spouse' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'hazuni', 'kotor', 'kurto', 'cote',
        // Family
        'mama', 'patre', 'matre', 'papa', 'nini', 'sodar', 'bete',
        // Gender prefixes
        'femixu', 'manixu'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match family words',
            pairs: [
                { word: 'gami', translation: 'spouse' },
                { word: 'femgami', translation: 'wife' },
                { word: 'mangami', translation: 'husband' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "gami" mean?',
            options: ['friend', 'spouse', 'parent'],
            correctAnswer: 'spouse',
            hint: 'Gender-neutral partner'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "My spouse is a teacher"',
            words: ['mi', 'su', 'gami', 'sen', 'alimyen', 'doste'],
            correctAnswer: ['mi', 'su', 'gami', 'sen', 'alimyen'],
            hint: 'My + spouse + is + teacher'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te lubi te su gami"',
            correctAnswers: ['He loves his spouse', 'She loves her spouse'],
            hint: 'He/She + love + his/her + spouse'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "wife"',
            correctAnswers: ['femgami'],
            hint: 'female + spouse'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "husband"?',
            options: ['femgami', 'mangami', 'gami'],
            correctAnswer: 'mangami',
            hint: 'male + spouse'
        }
    ]
};
