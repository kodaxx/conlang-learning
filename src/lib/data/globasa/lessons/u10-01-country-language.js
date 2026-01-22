// Unit 10: Countries & Languages - Lesson 1: Or, Country, Language
// New words: or (or), dexa (country), basa (language)

export default {
    id: 'u10-01-country-language',
    name: 'Or, Country & Language',
    unit: 10,
    unitName: 'Countries & Languages',
    lessonNumber: 1,
    description: 'Learn basic words for countries and languages',
    icon: '🌍',
    xpReward: 15,

    teaching: [
        {
            title: 'Or',
            content: '**Or** means "or":',
            vocabulary: [
                { word: 'or', translation: 'or' }
            ],
            examples: [
                { globasa: 'Yu vole kafe or cay?', english: 'Do you want coffee or tea?' },
                { globasa: 'Un or dua?', english: 'One or two?' }
            ]
        },
        {
            title: 'Country',
            content: '**Dexa** means "country" or "nation":',
            vocabulary: [
                { word: 'dexa', translation: 'country, nation' }
            ],
            examples: [
                { globasa: 'Usa sen day dexa', english: 'USA is a big country' },
                { globasa: 'Keloka sen yu su dexa?', english: 'Where is your country?' }
            ]
        },
        {
            title: 'Language',
            content: '**Basa** means "language":',
            vocabulary: [
                { word: 'basa', translation: 'language' }
            ],
            examples: [
                { globasa: 'Mi xwexi neo basa', english: 'I\'m learning a new language' },
                { globasa: 'Globasa sen basa', english: 'Globasa is a language' }
            ],
            tip: 'Basa is used to create language names with the -sa suffix!'
        }
    ],

    vocabulary: [
        { word: 'or', translation: 'or' },
        { word: 'dexa', translation: 'country, nation' },
        { word: 'basa', translation: 'language' }
    ],

    reviewVocabulary: [
        // Unit 9 recent
        'kenumer', 'moyloka', 'nilte',
        // Earlier
        'vole', 'kafe', 'cay', 'xwexi', 'neo', 'day', 'keloka'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match new vocabulary',
            pairs: [
                { word: 'or', translation: 'or' },
                { word: 'dexa', translation: 'country' },
                { word: 'basa', translation: 'language' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "coffee or tea"?',
            options: ['kafe ji cay', 'kafe or cay', 'kafe mas cay'],
            correctAnswer: 'kafe or cay',
            hint: 'or = or'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I\'m learning a new language"',
            words: ['mi', 'xwexi', 'neo', 'basa', 'dexa'],
            correctAnswer: ['mi', 'xwexi', 'neo', 'basa'],
            hint: 'I + learn + new + language'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Usa sen day dexa"',
            correctAnswers: ['USA is a big country'],
            hint: 'USA + is + big + country'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Do you want coffee or tea?"',
            correctAnswers: ['Yu vole kafe or cay?', 'Kam yu vole kafe or cay?'],
            hint: 'You + want + coffee + or + tea'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "basa" mean?',
            options: ['country', 'language', 'nation'],
            correctAnswer: 'language'
        }
    ]
};
