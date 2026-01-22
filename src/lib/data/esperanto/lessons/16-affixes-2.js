export default {
    id: '16-affixes-2',
    name: 'Advanced Affixes',
    description: 'Learn -il (tool), -ist (prof), -ar (group), -et/-eg (size)',
    icon: '🔧',
    xpReward: 25,
    teaching: [
        {
            title: 'Word Builders',
            content: 'Let\'s supercharge your vocabulary with four more useful suffixes.',
            examples: []
        },
        {
            title: '-Il (Tool) & -Ist (Professional)',
            content: '**-Il** is used for a tool or instrument. **-Ist** is used for a professional or person constantly occupied with something.',
            examples: [
                { esperanto: 'Manĝi (Eat)', english: 'Manĝilo (Cutlery/Fork)' },
                { esperanto: 'Instrui (Teach)', english: 'Instruisto (Teacher)' }
            ]
        },
        {
            title: '-Ar (Collection) & -Eg/Et (Size)',
            content: '**-Ar** is a group of things. **-Eg** makes something huge. **-Et** makes something tiny.',
            examples: [
                { esperanto: 'Arbo (Tree)', english: 'Arbaro (Forest)' },
                { esperanto: 'Domo (House)', english: 'Domego (Mansion) / Dometo (Cottage)' }
            ]
        }
    ],
    vocabulary: [
        { word: 'manĝilo', translation: 'cutlery/tool for eating', phonetic: 'man-JEE-loh' },
        { word: 'instruisto', translation: 'teacher', phonetic: 'in-stru-EES-toh' },
        { word: 'vortaro', translation: 'dictionary', phonetic: 'vor-TAH-roh' },
        { word: 'dometo', translation: 'cottage', phonetic: 'doh-MEH-toh' },
        { word: 'domego', translation: 'mansion', phonetic: 'doh-MEH-goh' },
        { word: 'varma', translation: 'warm', phonetic: 'VAR-mah' },
        { word: 'varmega', translation: 'hot', phonetic: 'var-MEH-gah' },
        { word: 'arbaro', translation: 'forest', phonetic: 'ar-BAH-roh' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does the suffix "-ist" denote?',
            options: ['A tool', 'A professional/person', 'A place', 'A group'],
            correctAnswer: 'A professional/person',
            hint: 'instruisto = teacher'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The teacher has a dictionary"',
            words: ['la', 'instruisto', 'havas', 'vortaron', 'vortaro'],
            correctAnswer: ['la', 'instruisto', 'havas', 'vortaron'],
            hint: 'vort (word) + ar (group of) -> vocabulary/dictionary'
        },
        {
            type: 'fill-blank',
            prompt: 'La supo estas ___. (hot)',
            options: ['varma', 'varmega', 'malvarma', 'bela'],
            correctAnswer: 'varmega',
            hint: 'varm (warm) + eg (augmentative) -> hot'
        },
        {
            type: 'matching',
            prompt: 'Match affixes',
            leftCards: [
                { id: 'l1', text: 'arbaro', pairId: 'p1' },
                { id: 'l2', text: 'dometo', pairId: 'p2' },
                { id: 'l3', text: 'manĝilo', pairId: 'p3' },
                { id: 'l4', text: 'instruisto', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'forest', pairId: 'p1' },
                { id: 'r2', text: 'cottage', pairId: 'p2' },
                { id: 'r3', text: 'eating tool', pairId: 'p3' },
                { id: 'r4', text: 'teacher', pairId: 'p4' }
            ]
        },
        {
            type: 'translation',
            prompt: 'Translate: "Li loĝas en domego"',
            correctAnswers: ['He lives in a mansion', 'He lives in a big house'],
            hint: 'domo (house) + eg (big)'
        }
    ]
};
