export default {
    id: '17-reflexive',
    name: 'Reflexive Pronoun',
    description: 'Understanding "si" (self) and "sia" (one\'s own)',
    icon: '🪞',
    xpReward: 25,
    teaching: [
        {
            title: 'The Mirror Pronoun (Si)',
            content: 'When the subject does something to *themself*, we use **si**. It reflects the action back like a mirror.',
            examples: [
                { esperanto: 'Li lavas sin', english: 'He washes himself (his own body)' },
                { esperanto: 'Li lavas lin', english: 'He washes him (some other guy)' }
            ]
        },
        {
            title: 'Own (Sia)',
            content: 'Similarly, **sia** means "their own". It refers to something belonging to the subject.',
            examples: [
                { esperanto: 'Ŝi manĝas sian panon', english: 'She eats her (own) bread' },
                { esperanto: 'Ŝi manĝas ŝian panon', english: 'She eats her (someone else\'s) bread' }
            ],
            tip: 'If it belongs to the person doing the action, use SIA.'
        }
    ],
    vocabulary: [
        { word: 'si', translation: 'himself/herself/themselves', phonetic: 'see' },
        { word: 'sia', translation: 'his/her/their own', phonetic: 'SEE-ah' },
        { word: 'lavas', translation: 'washes', phonetic: 'LAH-vahs' },
        { word: 'amas', translation: 'loves', phonetic: 'AH-mahs' },
        { word: 'man', translation: 'hand', phonetic: 'mahn' }, // actually 'mano'
        { word: 'mano', translation: 'hand', phonetic: 'MAH-noh' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'Translate: "Li lavas sin"',
            options: ['He washes him (someone else)', 'He washes himself', 'He washes her', 'He is washing'],
            correctAnswer: 'He washes himself',
            hint: 'si refers back to the subject'
        },
        {
            type: 'multiple-choice',
            prompt: 'Translate: "Li lavas lin"',
            options: ['He washes him (someone else)', 'He washes himself', 'He washes her', 'He is washing'],
            correctAnswer: 'He washes him (someone else)',
            hint: 'li (him) means another male person'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "She loves her (own) mother"',
            words: ['ŝi', 'amas', 'sian', 'patrinon', 'ŝian'],
            correctAnswer: ['ŝi', 'amas', 'sian', 'patrinon'],
            hint: 'Use "sian" because it belongs to the subject "ŝi"'
        },
        {
            type: 'fill-blank',
            prompt: 'Ili manĝas en ___ domo. (their own)',
            options: ['ilia', 'sia', 'mia', 'via'],
            correctAnswer: 'sia',
            hint: 'Refers back to "Ili"'
        },
        {
            type: 'translation',
            prompt: 'Translate: "La knabo lavas siajn manojn"',
            correctAnswers: ['The boy washes his hands', 'The boy is washing his hands'],
            hint: 'siajn (his own, plural object)'
        }
    ]
};
