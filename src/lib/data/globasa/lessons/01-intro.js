export default {
    id: '01-intro',
    name: 'Introduction & Pronunciation',
    description: 'Welcome to Globasa! Learn about its design and how to pronounce words.',
    icon: '👋',
    xpReward: 15,
    teaching: [
        {
            title: 'Welcome to Globasa!',
            content: 'Globasa is a modern international auxiliary language created in 2019. It\'s designed to be **easy to learn** by drawing vocabulary from the world\'s major languages.',
            examples: []
        },
        {
            title: 'Simple Grammar',
            content: 'Globasa uses **SVO word order** (Subject-Verb-Object), just like English! And words don\'t change form: no conjugations, no declensions.',
            examples: [
                { globasa: 'Mi yam pingo', english: 'I eat an apple' }
            ]
        },
        {
            title: 'Pronunciation',
            content: 'Pronunciation is consistent. Every letter has one sound. **Stress** almost always falls on the syllable before the last vowel.',
            tip: 'Most letters sound like in Spanish or Italian. "c" = "ch", "j" = "j" in "judge", "x" = "sh".'
        }
    ],
    vocabulary: [
        { word: 'salom', translation: 'hello/peace', phonetic: 'sa-LOM' },
        { word: 'xukra', translation: 'thank you', phonetic: 'SHOO-kra' },
        { word: 'fe lutuf', translation: 'please', phonetic: 'feh loo-TOOF' },
        { word: 'si', translation: 'yes', phonetic: 'see' },
        { word: 'no', translation: 'no', phonetic: 'no' },
        { word: 'weda', translation: 'goodbye', phonetic: 'WEH-da' },
        { word: 'mi', translation: 'I/me', phonetic: 'mee' },
        { word: 'yu', translation: 'you', phonetic: 'yoo' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What is the word order in Globasa?',
            options: ['SOV (Subject-Object-Verb)', 'SVO (Subject-Verb-Object)', 'VSO (Verb-Subject-Object)', 'Free order'],
            correctAnswer: 'SVO (Subject-Verb-Object)',
            hint: 'It\'s the same as English!'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "salom" mean?',
            options: ['goodbye', 'thank you', 'hello/peace', 'please'],
            correctAnswer: 'hello/peace',
            hint: 'A common greeting word from Arabic/Hebrew origins'
        },
        {
            type: 'translation',
            prompt: 'Translate: "xukra"',
            correctAnswers: ['thank you', 'thanks'],
            hint: 'An expression of gratitude'
        },
        {
            type: 'matching',
            prompt: 'Match the words',
            leftCards: [
                { id: 'l1', text: 'salom', pairId: 'p1' },
                { id: 'l2', text: 'xukra', pairId: 'p2' },
                { id: 'l3', text: 'si', pairId: 'p3' },
                { id: 'l4', text: 'no', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'hello', pairId: 'p1' },
                { id: 'r2', text: 'thank you', pairId: 'p2' },
                { id: 'r3', text: 'yes', pairId: 'p3' },
                { id: 'r4', text: 'no', pairId: 'p4' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you pronounce "x" in Globasa?',
            options: ['Like "ks"', 'Like "sh"', 'Like "z"', 'Silent'],
            correctAnswer: 'Like "sh"',
            hint: 'Think of "xukra"'
        }
    ]
};
