export default {
    id: '01-basics-1',
    name: 'Basics 1',
    description: 'Learn essential words: greetings, pronouns, and basic verbs',
    icon: '👋',
    xpReward: 20,
    teaching: [
        {
            title: 'Welcome to Esperanto!',
            content: 'Esperanto is designed to be easy to learn. The spelling is perfectly phonetic: every letter has only **one sound**, and every sound is written with only **one letter**.',
            tip: 'The stress always falls on the second-to-last syllable (e.g., sa-LU-ton).'
        },
        {
            title: 'I and You',
            content: 'The most basic words are **mi** (I) and **vi** (you). To say "I am", you combine the pronoun with the verb **estas** (is/am/are).',
            examples: [
                { esperanto: 'Mi estas', english: 'I am' },
                { esperanto: 'Vi estas', english: 'You are' }
            ]
        },
        {
            title: 'Simple Descriptions',
            content: 'Adjectives in Esperanto always end in **-a**. Use them to describe people or things.',
            examples: [
                { esperanto: 'Mi estas bona', english: 'I am good' },
                { esperanto: 'Vi estas feliĉa', english: 'You are happy' }
            ]
        }
    ],
    vocabulary: [
        { word: 'saluton', translation: 'hello', phonetic: 'sah-LOO-tohn' },
        { word: 'mi', translation: 'I', phonetic: 'mee' },
        { word: 'vi', translation: 'you', phonetic: 'vee' },
        { word: 'estas', translation: 'is/am/are', phonetic: 'ES-tahs' },
        { word: 'bona', translation: 'good', phonetic: 'BOH-nah' },
        { word: 'jes', translation: 'yes', phonetic: 'yes' },
        { word: 'ne', translation: 'no', phonetic: 'neh' },
        { word: 'kaj', translation: 'and', phonetic: 'kai' },
        { word: 'dankon', translation: 'thank you', phonetic: 'DAHN-kohn' },
        { word: 'ĝis', translation: 'bye (casual)', phonetic: 'jees' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "saluton" mean?',
            options: ['goodbye', 'hello', 'thank you', 'please'],
            correctAnswer: 'hello',
            hint: 'This is how you greet someone'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I" in Esperanto?',
            options: ['vi', 'mi', 'ni', 'li'],
            correctAnswer: 'mi',
            hint: 'It sounds similar to "me"'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "Mi estas bona"',
            correctAnswers: ['I am good', 'I\'m good'],
            hint: 'mi = I, estas = am, bona = good'
        },
        {
            type: 'word-bank',
            prompt: 'Build the sentence: "You are good"',
            words: ['estas', 'bona', 'vi', 'mi', 'kaj'],
            correctAnswer: ['vi', 'estas', 'bona'],
            hint: 'Start with the pronoun for "you"'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "jes" mean?',
            options: ['no', 'yes', 'maybe', 'hello'],
            correctAnswer: 'yes',
            hint: 'It sounds like the English word'
        },
        {
            type: 'translation',
            prompt: 'Translate to Esperanto: "hello"',
            correctAnswers: ['saluton'],
            hint: 'This is the first word you learned'
        },
        {
            type: 'fill-blank',
            prompt: 'Mi ___ bona. (I am good)',
            options: ['estas', 'jes', 'ne', 'kaj'],
            correctAnswer: 'estas',
            hint: 'The verb "to be"'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "and" in Esperanto?',
            options: ['jes', 'ne', 'kaj', 'bona'],
            correctAnswer: 'kaj',
            hint: 'Pronounced like "kai"'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "Saluton, mi estas bona"',
            correctAnswers: ['Hello, I am good', 'Hello, I\'m good'],
            hint: 'A complete greeting'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I am good and you are good"',
            words: ['mi', 'estas', 'bona', 'kaj', 'vi', 'estas', 'bona'],
            correctAnswer: ['mi', 'estas', 'bona', 'kaj', 'vi', 'estas', 'bona'],
            hint: 'Use "kaj" to connect the two parts'
        }
    ]
};
