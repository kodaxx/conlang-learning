// Unit 2: Actions & Food - Lesson 6: Fruits & Vegetables
// New words: pingo, banana, patato (3 words)
// Concept: More food vocabulary
// Reviews: Unit 1-2

export default {
    id: 'u2-06-fruits-vegetables',
    name: 'Fruits & Vegetables',
    unit: 2,
    unitName: 'Actions & Food',
    lessonNumber: 6,
    description: 'Learn healthy food words!',
    icon: '🍎',
    xpReward: 15,

    teaching: [
        {
            title: 'Pingo - Apple',
            content: '**Pingo** means "apple". A common fruit word!',
            examples: [
                { globasa: 'Mi yam pingo', english: 'I eat an apple' },
                { globasa: 'Pingo', english: 'apple / apples' }
            ]
        },
        {
            title: 'Banana - Banana',
            content: '**Banana** means "banana" - same as English!',
            examples: [
                { globasa: 'Nini yam banana', english: 'The child eats a banana' }
            ]
        },
        {
            title: 'Patato - Potato',
            content: '**Patato** means "potato". Another international word!',
            examples: [
                { globasa: 'Yu yam patato', english: 'You eat potato' },
                { globasa: 'Mi yam patato', english: 'I eat potato' }
            ]
        }
    ],

    vocabulary: [
        { word: 'pingo', translation: 'apple', phonetic: 'PING-go' },
        { word: 'banana', translation: 'banana', phonetic: 'ba-NA-na' },
        { word: 'patato', translation: 'potato', phonetic: 'pa-TA-to' }
    ],

    reviewVocabulary: ['supa', 'salada', 'jubin', 'roti', 'risi', 'yam', 'nini', 'mi', 'yu'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "pingo" mean?',
            options: ['orange', 'apple', 'banana', 'grape'],
            correctAnswer: 'apple',
            hint: 'A common red or green fruit'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Nini yam banana"',
            correctAnswers: ['The child eats a banana', 'The child eats banana', 'The kid eats a banana'],
            hint: 'nini = child, yam = eat, banana = banana'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I eat an apple"',
            words: ['mi', 'yam', 'pingo', 'banana', 'yu'],
            correctAnswer: ['mi', 'yam', 'pingo'],
            hint: 'I + eat + apple'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "You eat potato"',
            correctAnswers: ['Yu yam patato', 'yu yam patato'],
            hint: 'You + eat + potato'
        },
        // SRS Review
        {
            type: 'matching',
            prompt: '[Review] Match food words',
            pairs: [
                { word: 'roti', translation: 'bread' },
                { word: 'jubin', translation: 'cheese' },
                { word: 'pingo', translation: 'apple' },
                { word: 'patato', translation: 'potato' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: '[Review] What does "supa" mean?',
            options: ['salad', 'soup', 'sandwich', 'sauce'],
            correctAnswer: 'soup',
            hint: 'From Lesson 2.5'
        }
    ]
};
