// Unit 10: Countries & Languages - Lesson 4: The -sa Suffix (Languages)
// New concept: -sa suffix for language names

export default {
    id: 'u10-04-language-suffix',
    name: 'Language Names (-sa)',
    unit: 10,
    unitName: 'Countries & Languages',
    lessonNumber: 4,
    description: 'Learn to form language names with the -sa suffix',
    icon: '🗣️',
    xpReward: 15,

    teaching: [
        {
            title: 'The -sa Suffix',
            content: 'Add **-sa** to country names to create language names:',
            vocabulary: [
                { word: '-sa', translation: 'language suffix' }
            ],
            examples: [
                { globasa: 'Engli + -sa = Englisa', english: 'English (language)' },
                { globasa: 'Espani + -sa = Espanisa', english: 'Spanish (language)' },
                { globasa: 'Nipon + -sa = Niponsa', english: 'Japanese (language)' }
            ],
            tip: 'Country + sa = the language of that country!'
        },
        {
            title: 'More Languages',
            content: 'Apply the pattern to other countries:',
            examples: [
                { globasa: 'Fransesa', english: 'French (language)' },
                { globasa: 'Turkisa', english: 'Turkish (language)' }
            ]
        },
        {
            title: 'Using Languages',
            content: 'Use language names in sentences:',
            examples: [
                { globasa: 'Mi loga Englisa', english: 'I speak English' },
                { globasa: 'Te xwexi Niponsa', english: 'He/She is learning Japanese' }
            ]
        }
    ],

    vocabulary: [
        { word: '-sa', translation: 'language suffix' }
    ],

    reviewVocabulary: [
        // Countries
        'Engli', 'Espani', 'Nipon', 'Franse', 'Turki', 'Usa',
        // Earlier
        'basa', 'loga', 'xwexi'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match languages',
            pairs: [
                { word: 'Englisa', translation: 'English' },
                { word: 'Espanisa', translation: 'Spanish' },
                { word: 'Niponsa', translation: 'Japanese' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "French" (language)?',
            options: ['Franse', 'Fransesa', 'Franseli'],
            correctAnswer: 'Fransesa',
            hint: 'Country + sa'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I speak English"',
            words: ['mi', 'loga', 'Englisa', 'Engli', 'xwexi'],
            correctAnswer: ['mi', 'loga', 'Englisa'],
            hint: 'I + speak + English'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Te xwexi Niponsa"',
            correctAnswers: ['He is learning Japanese', 'She is learning Japanese'],
            hint: 'He/She + learn + Japanese'
        },
        {
            type: 'translation',
            prompt: 'How do you say "Turkish" (language)?',
            correctAnswers: ['Turkisa'],
            hint: 'Turki + sa'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does the -sa suffix create?',
            options: ['Country names', 'Language names', 'Person names'],
            correctAnswer: 'Language names',
            hint: 'Englisa, Espanisa...'
        }
    ]
};
