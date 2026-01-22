// Unit 5: Tenses & Places - Lesson 2: Future Tense & Quantity
// New words: xa (future tense), multi (many), xosu (few)

export default {
    id: 'u5-02-future-quantity',
    name: 'Future & Quantity',
    unit: 5,
    unitName: 'Tenses & Places',
    lessonNumber: 2,
    description: 'Learn the future tense marker and quantity words',
    icon: '⏭️',
    xpReward: 15,

    teaching: [
        {
            title: 'Future Tense with "xa"',
            content: '**Xa** is placed before the verb to indicate future tense:',
            vocabulary: [
                { word: 'xa', translation: 'future tense marker (will)' }
            ],
            examples: [
                { globasa: 'Mi xa yam pingo', english: 'I will eat an apple' },
                { globasa: 'Te xa doxo kitabu', english: 'He/She will read a book' },
                { globasa: 'Yu xa lubi to', english: 'You will love it' }
            ],
            tip: 'Just like "le" for past, "xa" goes before the verb for future!'
        },
        {
            title: 'Quantity: Many & Few',
            content: 'Express quantity with these useful words:',
            vocabulary: [
                { word: 'multi', translation: 'many, much' },
                { word: 'xosu', translation: 'few, little (amount)' }
            ],
            examples: [
                { globasa: 'Multi bwaw', english: 'Many dogs' },
                { globasa: 'Xosu myaw', english: 'Few cats' },
                { globasa: 'Mi hare multi kitabu', english: 'I have many books' }
            ],
            tip: 'Quantity words go before the noun, just like adjectives.'
        },
        {
            title: 'Combining Tenses & Quantity',
            content: 'You can combine tense markers with quantity words:',
            examples: [
                { globasa: 'Te le yam multi roti', english: 'He ate a lot of bread' },
                { globasa: 'Mi xa glu xosu kafe', english: 'I will drink a little coffee' }
            ]
        }
    ],

    vocabulary: [
        { word: 'xa', translation: 'future tense marker (will)' },
        { word: 'multi', translation: 'many, much' },
        { word: 'xosu', translation: 'few, little (amount)' }
    ],

    reviewVocabulary: [
        // Lesson 5.1 recent
        'mas', 'to', 'le',
        // Earlier units
        'yam', 'glu', 'doxo', 'hare', 'kitabu', 'bwaw', 'myaw', 'pingo'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match new vocabulary',
            pairs: [
                { word: 'xa', translation: 'will (future)' },
                { word: 'multi', translation: 'many/much' },
                { word: 'xosu', translation: 'few/little' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I will eat"?',
            options: ['Mi yam xa', 'Mi xa yam', 'Xa mi yam'],
            correctAnswer: 'Mi xa yam',
            hint: 'Subject + xa + verb'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "She will read many books"',
            words: ['te', 'xa', 'doxo', 'multi', 'kitabu', 'xosu'],
            correctAnswer: ['te', 'xa', 'doxo', 'multi', 'kitabu'],
            hint: 'She + will + read + many + books'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi hare xosu banana"',
            correctAnswers: ['I have few bananas', 'I have a few bananas'],
            hint: 'I + have + few + bananas'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "We will dance"',
            correctAnswers: ['Imi xa danse'],
            hint: 'We + will + dance'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between "le" and "xa"?',
            options: [
                'le = future, xa = past',
                'le = past, xa = future',
                'le = present, xa = past'
            ],
            correctAnswer: 'le = past, xa = future',
            hint: 'Remember: le = already happened'
        }
    ]
};
