// Unit 8: Comparison - Lesson 8: Unit Test
// Comprehensive review of all Unit 8 vocabulary and concepts

export default {
    id: 'u8-08-unit-test',
    name: 'Unit 8 Test',
    unit: 8,
    unitName: 'Comparison',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 8: Comparison!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 8 Review',
            content: 'You\'ve learned **17 new words** in Unit 8! Key vocabulary:',
            vocabulary: [
                { word: '-su, se', translation: 'Possessive suffix, Reflexive' },
                { word: 'max, min, kom', translation: 'More, Less, Than' },
                { word: 'maxmo, minmo', translation: 'More/Less (adjectives)' },
                { word: 'bur, lil, colo', translation: 'Bad, Small, Ugly' },
                { word: 'hanman, lama, lao', translation: 'Slow, Old (thing), Old (person)' },
                { word: 'hazuni, kotor, kurto, cote', translation: 'Sad, Dirty, Short (time/height)' },
                { word: 'gami', translation: 'Spouse' }
            ]
        },
        {
            title: 'Key Concepts',
            content: '• **-su** = possessive (mi su = my)\\n• **se** = reflexive (oneself)\\n• **maxmo/minmo** + adj + kom = comparative\\n• Opposite pairs learned!',
            tip: 'You now know how to compare things and describe with opposites!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        // Unit 8
        '-su', 'se', 'max', 'min', 'kom', 'maxmo', 'minmo',
        'bur', 'lil', 'colo', 'hanman', 'lama', 'lao',
        'hazuni', 'kotor', 'kurto', 'cote', 'gami',
        // Earlier adjectives for comparison
        'bon', 'day', 'meli', 'velosi', 'neo', 'juni', 'hox', 'safe', 'lungo', 'gao'
    ],

    exercises: [
        // Possessives
        {
            type: 'matching',
            prompt: 'Match possessive pronouns',
            pairs: [
                { word: 'mi su', translation: 'my' },
                { word: 'yu su', translation: 'your' },
                { word: 'te su', translation: 'his/her' },
                { word: 'imi su', translation: 'our' }
            ]
        },
        // Comparison words
        {
            type: 'matching',
            prompt: 'Match comparison words',
            pairs: [
                { word: 'max', translation: 'more (quantity)' },
                { word: 'maxmo', translation: 'more (adjective)' },
                { word: 'min', translation: 'less' },
                { word: 'kom', translation: 'than' }
            ]
        },
        // Opposites
        {
            type: 'matching',
            prompt: 'Match opposites',
            pairs: [
                { word: 'bur', translation: 'bad (opp. bon)' },
                { word: 'lil', translation: 'small (opp. day)' },
                { word: 'hazuni', translation: 'sad (opp. hox)' },
                { word: 'kotor', translation: 'dirty (opp. safe)' }
            ]
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "I see myself"',
            words: ['mi', 'oko', 'se', 'te', 'yu'],
            correctAnswer: ['mi', 'oko', 'se'],
            hint: 'I + see + myself'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "He is stronger than me"',
            words: ['te', 'sen', 'maxmo', 'bala', 'kom', 'mi'],
            correctAnswer: ['te', 'sen', 'maxmo', 'bala', 'kom', 'mi'],
            hint: 'He + is + more + strong + than + me'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Hin kitabu sen lama"',
            correctAnswers: ['This book is old'],
            hint: 'This + book + is + old (thing)'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te sen hazuni"',
            correctAnswers: ['He is sad', 'She is sad'],
            hint: 'He/She + is + sad'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "My spouse is a teacher"',
            correctAnswers: ['Mi su gami sen alimyen'],
            hint: 'My + spouse + is + teacher'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The dog is slow"',
            correctAnswers: ['Bwaw sen hanman'],
            hint: 'Dog + is + slow'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between "lama" and "lao"?',
            options: [
                'lama = old (things), lao = old (people)',
                'lama = old (people), lao = old (things)',
                'They mean the same'
            ],
            correctAnswer: 'lama = old (things), lao = old (people)',
            hint: 'Old book vs old person'
        },
        {
            type: 'multiple-choice',
            prompt: 'When do you use "se"?',
            options: [
                'For possession',
                'When subject = object (reflexive)',
                'For comparisons'
            ],
            correctAnswer: 'When subject = object (reflexive)',
            hint: 'I see myself'
        }
    ]
};
