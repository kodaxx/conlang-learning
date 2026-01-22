// Unit 7: Possession & Location - Lesson 8: Unit Test
// Comprehensive review of all Unit 7 vocabulary and concepts

export default {
    id: 'u7-08-unit-test',
    name: 'Unit 7 Test',
    unit: 7,
    unitName: 'Possession & Location',
    lessonNumber: 8,
    description: 'Test your knowledge of Unit 7: Possession & Location!',
    icon: '📝',
    xpReward: 50,
    isUnitTest: true,

    teaching: [
        {
            title: 'Unit 7 Review',
            content: 'You\'ve learned **17 new words** in Unit 7! Key vocabulary:',
            vocabulary: [
                { word: 'de, ton', translation: 'Of (possession), With' },
                { word: 'loka, keloka', translation: 'Location, Where' },
                { word: 'hinloka, denloka', translation: 'Here, There' },
                { word: 'per, bax', translation: 'On, Under' },
                { word: 'fe, fe inya, fe exya', translation: 'At, Inside, Outside' },
                { word: 'mesa, kursi, bistar', translation: 'Table, Chair, Bed' },
                { word: 'drevo, jabal, bahari, nahir', translation: 'Tree, Mountain, Sea, River' }
            ]
        },
        {
            title: 'Key Concepts',
            content: '• **de** = possession (kitabu de alimyen)\\n• **ton** = with (accompaniment)\\n• **ke-** compounds: keloka (where), kete (who), keto (what)\\n• **hin-/den-** compounds: hinloka (here), denloka (there)',
            tip: 'You can now describe where everything is!'
        }
    ],

    vocabulary: [],

    reviewVocabulary: [
        // Unit 7
        'de', 'ton', 'loka', 'keloka', 'hinloka', 'denloka',
        'per', 'bax', 'fe', 'fe inya', 'fe exya',
        'mesa', 'kursi', 'bistar',
        'drevo', 'jabal', 'bahari', 'nahir',
        // Earlier units
        'in', 'sen', 'kitabu', 'myaw', 'bwaw', 'piu', 'mahi'
    ],

    exercises: [
        // Possession
        {
            type: 'matching',
            prompt: 'Match possession words',
            pairs: [
                { word: 'de', translation: 'of (possession)' },
                { word: 'ton', translation: 'with' }
            ]
        },
        // Location words
        {
            type: 'matching',
            prompt: 'Match location words',
            pairs: [
                { word: 'loka', translation: 'location' },
                { word: 'keloka', translation: 'where' },
                { word: 'hinloka', translation: 'here' },
                { word: 'denloka', translation: 'there' }
            ]
        },
        // Prepositions
        {
            type: 'matching',
            prompt: 'Match prepositions',
            pairs: [
                { word: 'per', translation: 'on' },
                { word: 'bax', translation: 'under' },
                { word: 'fe', translation: 'at' },
                { word: 'in', translation: 'in' }
            ]
        },
        // Furniture and Nature
        {
            type: 'matching',
            prompt: 'Match furniture & nature',
            pairs: [
                { word: 'mesa', translation: 'table' },
                { word: 'drevo', translation: 'tree' },
                { word: 'bahari', translation: 'sea' },
                { word: 'nahir', translation: 'river' }
            ]
        },
        // Sentence building
        {
            type: 'word-bank',
            prompt: 'Build: "The teacher\'s book"',
            words: ['kitabu', 'de', 'alimyen', 'ton', 'sen'],
            correctAnswer: ['kitabu', 'de', 'alimyen'],
            hint: 'Book + of + teacher'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Where do you live?"',
            words: ['keloka', 'keto', 'yu', 'ogar', 'sen'],
            correctAnswer: ['keloka', 'yu', 'ogar'],
            hint: 'Where + you + live'
        },
        // Translations
        {
            type: 'translation',
            prompt: 'Translate: "Myaw sen per mesa"',
            correctAnswers: ['The cat is on the table'],
            hint: 'Cat + is + on + table'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Piu sen in drevo"',
            correctAnswers: ['The bird is in the tree'],
            hint: 'Bird + is + in + tree'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Come here!"',
            correctAnswers: ['Ata hinloka!'],
            hint: 'Come + here'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Fish live in the sea"',
            correctAnswers: ['Mahi ogar in bahari'],
            hint: 'Fish + live + in + sea'
        },
        // Concept checks
        {
            type: 'multiple-choice',
            prompt: 'How do you express possession in Globasa?',
            options: [
                'OWNER + de + THING',
                'THING + de + OWNER',
                'de + THING + OWNER'
            ],
            correctAnswer: 'THING + de + OWNER',
            hint: 'book of teacher'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is "keloka" formed from?',
            options: [
                'ke + loka (which + place)',
                'kel + oka (question + location)',
                'ke + loga (which + speak)'
            ],
            correctAnswer: 'ke + loka (which + place)',
            hint: 'Same pattern as kete, keto'
        }
    ]
};
