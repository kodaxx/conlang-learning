export default {
    id: '10-review',
    name: 'Review & Practice',
    description: 'Review everything you learned!',
    icon: '🏆',
    xpReward: 30,
    teaching: [
        {
            title: 'Congratulations!',
            content: 'You have learned the basics of Globasa!',
            examples: []
        },
        {
            title: 'Key Points',
            content: '**SVO order**, **le/xa** for tense, **no** for negation, **kam** for questions.',
            examples: []
        }
    ],
    vocabulary: [],
    exercises: [
        {
            type: 'translation',
            prompt: 'Translate: "Mi le yam pano"',
            correctAnswers: ['I ate bread'],
            hint: 'le = past'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "She will see"',
            words: ['te', 'xa', 'oko', 'le'],
            correctAnswer: ['te', 'xa', 'oko'],
            hint: 'Future tense'
        },
        {
            type: 'matching',
            prompt: 'Match grammar',
            leftCards: [
                { id: 'l1', text: 'le', pairId: 'p1' },
                { id: 'l2', text: 'xa', pairId: 'p2' },
                { id: 'l3', text: 'no', pairId: 'p3' },
                { id: 'l4', text: 'kam', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'past', pairId: 'p1' },
                { id: 'r2', text: 'future', pairId: 'p2' },
                { id: 'r3', text: 'negation', pairId: 'p3' },
                { id: 'r4', text: 'question', pairId: 'p4' }
            ]
        }
    ]
};
