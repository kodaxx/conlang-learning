export default {
    id: '07-questions',
    name: 'Questions & Negation',
    description: 'Learn to ask questions and say no in Toki Pona',
    icon: '❓',
    xpReward: 30,

    teaching: [
        {
            title: "Saying No: ala",
            content: `The word **ala** means "no", "not", "nothing", or "zero".

To negate something, put **ala** right after the word you want to negate:`,
            vocabulary: [
                { word: 'ala', translation: 'no, not, nothing, zero' },
                { word: 'seme', translation: 'what? which? (question word)' },
                { word: 'anu', translation: 'or' }
            ],
            examples: [
                { tokipona: "mi pona ala", english: "I am not good", breakdown: "I + good + not" },
                { tokipona: "ona li moku ala", english: "He/she doesn't eat", breakdown: "he/she + li + eat + not" },
                { tokipona: "ni li pona ala", english: "This is not good", breakdown: "this + li + good + not" }
            ]
        },
        {
            title: "Yes/No Questions",
            content: `To ask a yes/no question, repeat the verb with ala in between:

**verb ala verb?**`,
            examples: [
                { tokipona: "sina pona ala pona?", english: "Are you good? (Are you okay?)", breakdown: "you + good-not-good?" },
                { tokipona: "ona li moku ala moku?", english: "Does he/she eat?", breakdown: "he/she + li + eat-not-eat?" },
                { tokipona: "ni li pona ala pona?", english: "Is this good?", breakdown: "this + li + good-not-good?" }
            ],
            tip: "To answer: repeat the verb for 'yes', say 'ala' for 'no'"
        },
        {
            title: "Answering Yes/No",
            content: `To answer yes/no questions:
- **Yes** → repeat the verb
- **No** → say the verb with ala, or just ala`,
            examples: [
                { tokipona: "sina pona ala pona?", english: "Are you good?", breakdown: "Question" },
                { tokipona: "pona!", english: "Yes! (Good!)", breakdown: "Answer: Yes" },
                { tokipona: "pona ala / ala", english: "No (Not good / No)", breakdown: "Answer: No" }
            ]
        },
        {
            title: "What and Which: seme",
            content: `**seme** is the question word — it means "what?", "which?", or "who?"

Put seme where the answer would go:`,
            examples: [
                { tokipona: "ni li seme?", english: "What is this?", breakdown: "this + li + what?" },
                { tokipona: "sina moku e seme?", english: "What do you eat?", breakdown: "you + eat + e + what?" },
                { tokipona: "jan seme li toki?", english: "Who speaks? / Which person speaks?", breakdown: "person + which + li + speak?" }
            ],
            tip: "seme goes exactly where the unknown thing would be in the answer!"
        },
        {
            title: "Or: anu",
            content: `**anu** means "or" — use it to give choices:`,
            examples: [
                { tokipona: "sina wile moku anu telo?", english: "Do you want food or water?", breakdown: "" },
                { tokipona: "ni li pona anu ike?", english: "Is this good or bad?", breakdown: "" },
                { tokipona: "ona li jan anu seme?", english: "Is he/she a person or what?", breakdown: "" }
            ]
        }
    ],

    vocabulary: [
        { word: 'ala', translation: 'no, not, nothing, zero', phonetic: 'AH-lah' },
        { word: 'seme', translation: 'what? which?', phonetic: 'SEH-meh' },
        { word: 'anu', translation: 'or', phonetic: 'AH-noo' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "ala" mean?',
            options: ['yes', 'no/not', 'what', 'or'],
            correctAnswer: 'no/not',
            hint: 'Negation'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you form a yes/no question?',
            options: ['Add seme', 'Add anu', 'Repeat verb with ala: verb ala verb', 'Add li'],
            correctAnswer: 'Repeat verb with ala: verb ala verb',
            hint: 'The question pattern'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi pona ala"',
            correctAnswers: ['I am not good', 'I\'m not good', 'I am not okay', 'we are not good'],
            hint: 'I + good + not'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "sina pona ala pona?"',
            correctAnswers: ['are you good?', 'are you okay?', 'are you well?'],
            hint: 'you + good-not-good?'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ni li seme?"',
            correctAnswers: ['what is this?', 'what\'s this?', 'what is that?'],
            hint: 'this + li + what?'
        },
        {
            type: 'fill-blank',
            prompt: 'mi pona ___. (I am NOT good)',
            options: ['pona', 'ala', 'seme', 'anu'],
            correctAnswer: 'ala',
            hint: 'Negation word'
        },
        {
            type: 'fill-blank',
            prompt: 'ni li ___? (What is this?)',
            options: ['ala', 'seme', 'anu', 'pona'],
            correctAnswer: 'seme',
            hint: 'Question word'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Are you good?" (yes/no question)',
            words: ['sina', 'pona', 'ala', 'pona', 'mi'],
            correctAnswer: ['sina', 'pona', 'ala', 'pona'],
            hint: 'you + good + ala + good?'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I don\'t eat"',
            words: ['mi', 'moku', 'ala', 'pona', 'li'],
            correctAnswer: ['mi', 'moku', 'ala'],
            hint: 'I + eat + not'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "He doesn\'t speak"',
            correctAnswers: ['ona li toki ala'],
            hint: 'he + li + speak + not'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "What is this?"',
            correctAnswers: ['ni li seme?', 'ni li seme'],
            hint: 'this + li + what?'
        },
        {
            type: 'multiple-choice',
            prompt: 'How would you answer "yes" to "sina pona ala pona?"',
            options: ['ala', 'pona', 'sina', 'seme'],
            correctAnswer: 'pona',
            hint: 'Repeat the verb for yes'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "anu" mean?',
            options: ['and', 'or', 'not', 'what'],
            correctAnswer: 'or',
            hint: 'Giving alternatives'
        }
    ]
};
