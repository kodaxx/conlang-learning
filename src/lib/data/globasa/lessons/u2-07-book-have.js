// Unit 2: Actions & Food - Lesson 7: Book & Have
// New words: kitabu, hare (2 words)
// Concept: The verb "have", expanding SVO
// Reviews: Unit 1-2

export default {
    id: 'u2-07-book-have',
    name: 'Book & Have',
    unit: 2,
    unitName: 'Actions & Food',
    lessonNumber: 7,
    description: 'Learn a new noun and the verb "have"!',
    icon: '📚',
    xpReward: 20,

    teaching: [
        {
            title: 'Kitabu - Book',
            content: '**Kitabu** means "book". A useful word for learners!',
            examples: [
                { globasa: 'kitabu', english: 'book / books' }
            ]
        },
        {
            title: 'Hare - Have',
            content: '**Hare** means "have" or "has". It follows the same SVO pattern!',
            examples: [
                { globasa: 'Mi hare kitabu', english: 'I have a book' },
                { globasa: 'Yu hare kitabu', english: 'You have a book' }
            ],
            tip: 'Remember: verbs never change form in Globasa!'
        },
        {
            title: 'Combining What You Know',
            content: 'Now you can say what you have and what you eat!',
            examples: [
                { globasa: 'Mi hare pingo', english: 'I have an apple' },
                { globasa: 'Nini hare banana', english: 'The child has a banana' },
                { globasa: 'Bwaw hare roti', english: 'The dog has bread' }
            ]
        }
    ],

    vocabulary: [
        { word: 'kitabu', translation: 'book', phonetic: 'kee-TA-boo' },
        { word: 'hare', translation: 'have, has', phonetic: 'HA-reh' }
    ],

    reviewVocabulary: ['yam', 'pingo', 'banana', 'roti', 'jubin', 'mi', 'yu', 'nini', 'bwaw'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "kitabu" mean?',
            options: ['kitchen', 'book', 'table', 'cat'],
            correctAnswer: 'book',
            hint: 'Something you read'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi hare kitabu"',
            correctAnswers: ['I have a book', 'I have book', 'I have books'],
            hint: 'mi = I, hare = have, kitabu = book'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The child has an apple"',
            words: ['nini', 'hare', 'pingo', 'yam', 'mi'],
            correctAnswer: ['nini', 'hare', 'pingo'],
            hint: 'Child + have + apple'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "You have bread"?',
            options: ['Yu yam roti', 'Mi hare roti', 'Yu hare roti', 'Roti hare yu'],
            correctAnswer: 'Yu hare roti',
            hint: 'Subject + verb + object'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "The dog has cheese"',
            correctAnswers: ['Bwaw hare jubin', 'bwaw hare jubin'],
            hint: 'Dog + have + cheese'
        },
        // SRS Review
        {
            type: 'matching',
            prompt: '[Review] Match verbs',
            pairs: [
                { word: 'yam', translation: 'eat' },
                { word: 'hare', translation: 'have' },
                { word: 'doxo', translation: 'read' },
                { word: 'pawbu', translation: 'run' }
            ]
        }
    ]
};
