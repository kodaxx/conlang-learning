// Unit 4: Descriptions - Lesson 3: Adjectives 1
// New words: bon, day, bala (3 words)
// Concept: Adjective placement (before nouns)
// Reviews: Units 1-4

export default {
    id: 'u4-03-adjectives-1',
    name: 'Adjectives 1',
    unit: 4,
    unitName: 'Descriptions',
    lessonNumber: 3,
    description: 'Learn your first adjectives: good, big, strong!',
    icon: '💪',
    xpReward: 20,

    teaching: [
        {
            title: 'Adjectives Come Before Nouns',
            content: 'In Globasa, adjectives go **before** the noun they describe, just like in English!',
            examples: [
                { globasa: 'bon kitabu', english: 'good book' },
                { globasa: 'day bwaw', english: 'big dog' }
            ]
        },
        {
            title: 'Bon - Good',
            content: '**Bon** means "good". A very useful adjective!',
            examples: [
                { globasa: 'bon yam', english: 'good meal/food' },
                { globasa: 'Hin sen bon', english: 'This is good' }
            ]
        },
        {
            title: 'Day - Big',
            content: '**Day** means "big" or "large".',
            examples: [
                { globasa: 'day uma', english: 'big horse' },
                { globasa: 'Den uma sen day', english: 'That horse is big' }
            ]
        },
        {
            title: 'Bala - Strong',
            content: '**Bala** means "strong".',
            examples: [
                { globasa: 'bala uma', english: 'strong horse' },
                { globasa: 'Te sen bala', english: 'He/She is strong' }
            ]
        }
    ],

    vocabulary: [
        { word: 'bon', translation: 'good', phonetic: 'bon' },
        { word: 'day', translation: 'big, large', phonetic: 'day' },
        { word: 'bala', translation: 'strong', phonetic: 'BA-la' }
    ],

    reviewVocabulary: ['hin', 'den', 'sen', 'kitabu', 'uma', 'bwaw', 'te'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'Where do adjectives go in Globasa?',
            options: ['After the noun', 'Before the noun', 'Either position', 'At the end of the sentence'],
            correctAnswer: 'Before the noun',
            hint: 'Same as English'
        },
        {
            type: 'translation',
            prompt: 'Translate: "bon kitabu"',
            correctAnswers: ['good book', 'a good book'],
            hint: 'bon = good, kitabu = book'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "big dog"',
            words: ['day', 'bwaw', 'bon', 'myaw'],
            correctAnswer: ['day', 'bwaw'],
            hint: 'Big + dog'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Den uma sen bala"',
            correctAnswers: ['That horse is strong', 'Those horses are strong'],
            hint: 'That + horse + is + strong'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "good meal" in Globasa?',
            options: ['yam bon', 'bon yam', 'yam sen bon', 'bon sen yam'],
            correctAnswer: 'bon yam',
            hint: 'Adjective before noun'
        },
        // SRS Review
        {
            type: 'matching',
            prompt: 'Match adjectives',
            pairs: [
                { word: 'bon', translation: 'good' },
                { word: 'day', translation: 'big' },
                { word: 'bala', translation: 'strong' }
            ]
        }
    ]
};
