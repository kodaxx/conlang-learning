export default {
    id: '06-verb-tenses',
    name: 'Verb Tenses',
    description: 'Past (-is), Future (-os), and time words',
    icon: '⏳',
    xpReward: 20,
    teaching: [
        {
            title: 'Past, Present, and Future',
            content: 'Changing the time of a verb in Esperanto is wonderfully simple. You just change the last letter!',
            examples: [
                { esperanto: 'Mi manĝas', english: 'I eat / I see (Present -as)' },
                { esperanto: 'Mi manĝis', english: 'I ate (Past -is)' },
                { esperanto: 'Mi manĝos', english: 'I will eat (Future -os)' }
            ],
            tip: 'Think: p"A"st? No wait. AS is Present. IS is Past. OS is Future.'
        },
        {
            title: 'Time Words',
            content: 'We often use time words to be specific.',
            examples: [
                { esperanto: 'Hieraŭ mi manĝis', english: 'Yesterday I ate' },
                { esperanto: 'Hodiaŭ mi manĝas', english: 'Today I eat' },
                { esperanto: 'Morgaŭ mi manĝos', english: 'Tomorrow I will eat' }
            ]
        }
    ],
    vocabulary: [
        { word: 'manĝis', translation: 'ate', phonetic: 'MAHN-jis' },
        { word: 'manĝos', translation: 'will eat', phonetic: 'MAHN-jos' },
        { word: 'iris', translation: 'went', phonetic: 'EE-ris' },
        { word: 'iros', translation: 'will go', phonetic: 'EE-ros' },
        { word: 'hieraŭ', translation: 'yesterday', phonetic: 'hee-EH-row' },
        { word: 'hodiaŭ', translation: 'today', phonetic: 'ho-DEE-ow' },
        { word: 'morgaŭ', translation: 'tomorrow', phonetic: 'MOR-gow' },
        { word: 'nun', translation: 'now', phonetic: 'noon' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'Which ending marks the past tense?',
            options: ['-as', '-is', '-os', '-us'],
            correctAnswer: '-is',
            hint: 'Example: manĝis (ate)'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which ending marks the future tense?',
            options: ['-as', '-is', '-os', '-us'],
            correctAnswer: '-os',
            hint: 'Example: manĝos (will eat)'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Yesterday I went"',
            words: ['hieraŭ', 'mi', 'iris', 'iros', 'hodiaŭ'],
            correctAnswer: ['hieraŭ', 'mi', 'iris'],
            hint: 'Hieraŭ = yesterday'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Li manĝos morgaŭ"',
            correctAnswers: ['He will eat tomorrow'],
            hint: 'manĝos = will eat'
        },
        {
            type: 'fill-blank',
            prompt: 'Mi ___ nun. (I eat now)',
            options: ['manĝas', 'manĝis', 'manĝos'],
            correctAnswer: 'manĝas',
            hint: 'Present tense (-as) for "now"'
        },
        {
            type: 'matching',
            prompt: 'Match time words',
            leftCards: [
                { id: 'l1', text: 'hieraŭ', pairId: 'p1' },
                { id: 'l2', text: 'hodiaŭ', pairId: 'p2' },
                { id: 'l3', text: 'morgaŭ', pairId: 'p3' },
                { id: 'l4', text: 'nun', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'yesterday', pairId: 'p1' },
                { id: 'r2', text: 'today', pairId: 'p2' },
                { id: 'r3', text: 'tomorrow', pairId: 'p3' },
                { id: 'r4', text: 'now', pairId: 'p4' }
            ]
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Today I see, tomorrow I will see"',
            words: ['hodiaŭ', 'mi', 'vidas', 'morgaŭ', 'mi', 'vidos', 'vidis'],
            correctAnswer: ['hodiaŭ', 'mi', 'vidas', 'morgaŭ', 'mi', 'vidos'],
            hint: 'Use the correct tense for each time'
        }
    ]
};
