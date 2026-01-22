export default {
    id: '20-review',
    name: 'Comprehensive Review',
    description: 'Review everything from Basics to Participles',
    icon: '🏆',
    xpReward: 50,
    teaching: [
        {
            title: 'Congratulations!',
            content: 'You have covered the core of Esperanto grammar. Let\'s review the key endings.',
            examples: []
        },
        {
            title: 'Parts of Speech',
            content: '**-o** Noun (Thing). **-a** Adjective (Description). **-e** Adverb (Action description). **-j** Plural.',
            examples: []
        },
        {
            title: 'Verbs',
            content: '**-as** Present. **-is** Past. **-os** Future. **-u** Command. **-us** Conditional.',
            examples: []
        },
        {
            title: 'Special',
            content: '**-n** Accusative (Direct Object). **Si** Reflexive (Self).',
            examples: []
        }
    ],
    vocabulary: [], // No new vocab
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What is the accusative ending?',
            options: ['-o', '-n', '-j', '-e'],
            correctAnswer: '-n',
            hint: 'Used for direct objects'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi amas vin"',
            correctAnswers: ['I love you'],
            hint: 'Basic sentence structure'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Eat your bread"',
            words: ['manĝu', 'vian', 'panon', 'sian', 'pano'],
            correctAnswer: ['manĝu', 'vian', 'panon'],
            hint: 'Imperative + Possessive'
        },
        {
            type: 'fill-blank',
            prompt: 'Hieraŭ mi ___. (slept)',
            options: ['dormis', 'dormas', 'dormos', 'dormus'],
            correctAnswer: 'dormis',
            hint: 'Past tense (-is)'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Kiu vi estas?"',
            correctAnswers: ['Who are you?'],
            hint: 'Correlative question'
        },
        {
            type: 'matching',
            prompt: 'Match grammar',
            leftCards: [
                { id: 'l1', text: '-as', pairId: 'p1' },
                { id: 'l2', text: '-is', pairId: 'p2' },
                { id: 'l3', text: '-os', pairId: 'p3' },
                { id: 'l4', text: '-us', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'present', pairId: 'p1' },
                { id: 'r2', text: 'past', pairId: 'p2' },
                { id: 'r3', text: 'future', pairId: 'p3' },
                { id: 'r4', text: 'conditional', pairId: 'p4' }
            ]
        },
        {
            type: 'translation',
            prompt: 'Translate: "La plej granda domo"',
            correctAnswers: ['The biggest house', 'The most big house'],
            hint: 'Superlative'
        }
    ]
};
