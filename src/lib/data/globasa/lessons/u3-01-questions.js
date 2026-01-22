// Unit 3: Questions & Preferences - Lesson 1: Yes/No Questions
// New words: kam, si, no (3 words)
// Concept: Forming yes/no questions, affirmative and negative responses
// Reviews: Units 1-2

export default {
    id: 'u3-01-questions',
    name: 'Yes/No Questions',
    unit: 3,
    unitName: 'Questions & Preferences',
    lessonNumber: 1,
    description: 'Learn to ask and answer yes/no questions!',
    icon: '❓',
    xpReward: 25,

    teaching: [
        {
            title: 'Kam - Question Particle',
            content: '**Kam** turns any statement into a yes/no question. Just put it at the beginning!',
            examples: [
                { globasa: 'Yu yam roti', english: 'You eat bread' },
                { globasa: 'Kam yu yam roti?', english: 'Do you eat bread?' }
            ],
            tip: 'Kam works like adding "Do/Does...?" in English'
        },
        {
            title: 'Si - Yes',
            content: '**Si** means "yes". Simple and universal!',
            examples: [
                { globasa: 'Kam yu yam roti? Si!', english: 'Do you eat bread? Yes!' }
            ]
        },
        {
            title: 'No - No/Not',
            content: '**No** means "no" or "not". When used with verbs, it creates negation.',
            examples: [
                { globasa: 'Kam yu yam roti? No.', english: 'Do you eat bread? No.' },
                { globasa: 'Mi no yam roti', english: 'I don\'t eat bread' }
            ],
            tip: 'Put "no" before the verb to negate it'
        }
    ],

    vocabulary: [
        { word: 'kam', translation: 'question particle (makes yes/no questions)', phonetic: 'kam' },
        { word: 'si', translation: 'yes', phonetic: 'see' },
        { word: 'no', translation: 'no, not', phonetic: 'no' }
    ],

    reviewVocabulary: ['yu', 'mi', 'yam', 'roti', 'hare', 'kitabu', 'danse', 'bwaw'],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'How do you turn a statement into a question?',
            options: ['Add "si" at the end', 'Add "kam" at the beginning', 'Add "no" at the end', 'Change the verb'],
            correctAnswer: 'Add "kam" at the beginning',
            hint: 'This particle starts the question'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Kam yu hare kitabu?"',
            correctAnswers: ['Do you have a book?', 'Do you have book?', 'Do you have books?'],
            hint: 'kam = question, yu = you, hare = have, kitabu = book'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Do you eat rice?"',
            words: ['kam', 'yu', 'yam', 'risi', 'si', 'no'],
            correctAnswer: ['kam', 'yu', 'yam', 'risi'],
            hint: 'Question word + subject + verb + object'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I don\'t dance"?',
            options: ['Mi danse no', 'No mi danse', 'Mi no danse', 'Kam mi danse'],
            correctAnswer: 'Mi no danse',
            hint: 'Put "no" before the verb'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Does the dog run?"',
            correctAnswers: ['Kam bwaw pawbu?', 'kam bwaw pawbu'],
            hint: 'Question + dog + run'
        },
        // SRS Review
        {
            type: 'matching',
            prompt: '[Review] Match words from earlier lessons',
            pairs: [
                { word: 'si', translation: 'yes' },
                { word: 'no', translation: 'no/not' },
                { word: 'xukra', translation: 'thank you' },
                { word: 'fe lutuf', translation: 'please' }
            ]
        }
    ]
};
