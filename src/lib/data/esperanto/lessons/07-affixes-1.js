export default {
    id: '07-affixes-1',
    name: 'Basic Affixes',
    description: 'Learn mal- (opposites), -in (feminine), and -ej (place)',
    icon: '🧩',
    xpReward: 20,
    teaching: [
        {
            title: 'Building Words with Affixes',
            content: 'One of the best things about Esperanto is that you can triple your vocabulary just by learning a few "affixes" (word parts).',
            examples: []
        },
        {
            title: 'Mal- (Opposites)',
            content: 'The prefix **mal-** gives a word the exact opposite meaning.',
            examples: [
                { esperanto: 'Bona (Good)', english: 'Malbona (Bad)' },
                { esperanto: 'Granda (Big)', english: 'Malgranda (Small)' }
            ]
        },
        {
            title: '-In (Feminine)',
            content: 'The suffix **-in** makes a word feminine.',
            examples: [
                { esperanto: 'Patro (Father)', english: 'Patrino (Mother)' },
                { esperanto: 'Viro (Man)', english: 'Virino (Woman)' }
            ]
        },
        {
            title: '-Ej (Place)',
            content: 'The suffix **-ej** means "place for...".',
            examples: [
                { esperanto: 'Lerni (To learn)', english: 'Lernejo (School)' },
                { esperanto: 'Manĝi (To eat)', english: 'Manĝejo (Cafeteria)' }
            ]
        }
    ],
    vocabulary: [
        { word: 'malbona', translation: 'bad', phonetic: 'mal-BOH-nah' },
        { word: 'malgranda', translation: 'small', phonetic: 'mal-GRAHN-dah' },
        { word: 'rapida', translation: 'fast', phonetic: 'rah-PEE-dah' },
        { word: 'malrapida', translation: 'slow', phonetic: 'mal-rah-PEE-dah' },
        { word: 'patro', translation: 'father', phonetic: 'PAH-troh' },
        { word: 'patrino', translation: 'mother', phonetic: 'pah-TREE-noh' },
        { word: 'lernejo', translation: 'school', phonetic: 'ler-NEH-yoh' },
        { word: 'manĝejo', translation: 'cafeteria/dining room', phonetic: 'man-JEH-yoh' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does the prefix "mal-" do?',
            options: ['Makes the word plural', 'Makes the word feminine', 'Gives the opposite meaning', 'Makes it a verb'],
            correctAnswer: 'Gives the opposite meaning',
            hint: 'bona (good) -> malbona (bad)'
        },
        {
            type: 'translation',
            prompt: 'Translate: "malrapida"',
            correctAnswers: ['slow'],
            hint: 'Opposite of fast (rapida)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The school is big"',
            words: ['la', 'lernejo', 'estas', 'granda', 'manĝejo'],
            correctAnswer: ['la', 'lernejo', 'estas', 'granda'],
            hint: 'lerni (to learn) + ej (place) + o (noun)'
        },
        {
            type: 'fill-blank',
            prompt: 'La ___ estas bona. (The mother is good)',
            options: ['patro', 'patrino', 'viro', 'knabo'],
            correctAnswer: 'patrino',
            hint: 'patro + in'
        },
        {
            type: 'matching',
            prompt: 'Match words',
            leftCards: [
                { id: 'l1', text: 'malbona', pairId: 'p1' },
                { id: 'l2', text: 'malrapida', pairId: 'p2' },
                { id: 'l3', text: 'lernejo', pairId: 'p3' },
                { id: 'l4', text: 'patrino', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'bad', pairId: 'p1' },
                { id: 'r2', text: 'slow', pairId: 'p2' },
                { id: 'r3', text: 'school', pairId: 'p3' },
                { id: 'r4', text: 'mother', pairId: 'p4' }
            ]
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The father eats in the dining room"',
            words: ['la', 'patro', 'manĝas', 'en', 'la', 'manĝejo'],
            correctAnswer: ['la', 'patro', 'manĝas', 'en', 'la', 'manĝejo'],
            hint: 'manĝi + ej = eating place'
        }
    ]
};
