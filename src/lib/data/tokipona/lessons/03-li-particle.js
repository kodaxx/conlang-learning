export default {
    id: '03-li-particle',
    name: 'The li Particle',
    description: 'Master the most important grammar rule in Toki Pona',
    icon: '🔗',
    xpReward: 30,

    teaching: [
        {
            title: "The li Particle",
            content: `Now for the **most important grammar rule** in Toki Pona!

When your subject is NOT "mi" or "sina", you need the particle **li** between the subject and the predicate (verb/description).

Think of **li** as a marker that says "here comes what the subject does or is."`,
            vocabulary: [
                { word: 'li', translation: '(separates subject from verb), is, are' },
                { word: 'ona', translation: 'he, she, it, they' },
                { word: 'ni', translation: 'this, that' }
            ]
        },
        {
            title: "When to Use li",
            content: `**Use li** when the subject is ona, ni, jan, or any noun.
**Skip li** when the subject is mi or sina.`,
            examples: [
                { tokipona: "mi pona", english: "I am good", breakdown: "No li needed after mi" },
                { tokipona: "sina pona", english: "You are good", breakdown: "No li needed after sina" },
                { tokipona: "ona li pona", english: "He/she/they is/are good", breakdown: "li needed after ona!" },
                { tokipona: "jan li moku", english: "The person eats", breakdown: "li needed after jan!" }
            ],
            tip: "mi and sina are special — they NEVER use li!"
        },
        {
            title: "Third Person: ona",
            content: `The word **ona** means "he", "she", "it", or "they" — Toki Pona doesn't distinguish gender or number!`,
            examples: [
                { tokipona: "ona li pona", english: "He/she/it/they is/are good", breakdown: "" },
                { tokipona: "ona li moku", english: "He/she eats / They eat", breakdown: "" },
                { tokipona: "ona li toki", english: "He/she speaks / They speak", breakdown: "" }
            ]
        },
        {
            title: "This and That: ni",
            content: `The word **ni** means "this" or "that":`,
            examples: [
                { tokipona: "ni li pona", english: "This is good / That is good", breakdown: "" },
                { tokipona: "ni li ike", english: "This is bad / That is bad", breakdown: "" },
                { tokipona: "ni li moku", english: "This is food", breakdown: "" }
            ]
        },
        {
            title: "Practice Time!",
            content: `The key rule to remember:

✅ **mi/sina** → NO li
✅ **ona/ni/jan/everything else** → YES li

Examples:
- mi toki ✓
- sina moku ✓  
- ona li toki ✓
- jan li moku ✓
- ❌ ona toki (WRONG!)
- ❌ mi li toki (WRONG!)`,
            tip: "When in doubt with a third-person subject, use li!"
        }
    ],

    vocabulary: [
        { word: 'li', translation: 'is, are, (subject/verb separator)', phonetic: 'lee' },
        { word: 'ona', translation: 'he, she, it, they', phonetic: 'OH-nah' },
        { word: 'ni', translation: 'this, that', phonetic: 'nee' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What is the purpose of "li"?',
            options: ['It means "and"', 'It separates subject from verb', 'It means "is"', 'It makes questions'],
            correctAnswer: 'It separates subject from verb',
            hint: 'It\'s a grammatical marker, not a word with meaning'
        },
        {
            type: 'multiple-choice',
            prompt: 'When do you NOT use "li"?',
            options: ['After jan', 'After ona', 'After mi or sina', 'After ni'],
            correctAnswer: 'After mi or sina',
            hint: 'First and second person are special!'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "ona" mean?',
            options: ['this', 'I', 'he/she/it/they', 'you'],
            correctAnswer: 'he/she/it/they',
            hint: 'Third person pronoun — any gender!'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ona li pona"',
            correctAnswers: ['he is good', 'she is good', 'it is good', 'they are good', 'he\'s good', 'she\'s good'],
            hint: 'ona = he/she/it/they, li = (marker), pona = good'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "jan li moku"',
            correctAnswers: ['the person eats', 'a person eats', 'the person is eating', 'people eat', 'someone eats'],
            hint: 'jan = person, li = (marker), moku = eat'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ni li ike"',
            correctAnswers: ['this is bad', 'that is bad', 'this is wrong', 'that\'s bad'],
            hint: 'ni = this/that, li = (marker), ike = bad'
        },
        {
            type: 'fill-blank',
            prompt: 'ona ___ pona. (He/she is good)',
            options: ['li', 'mi', 'e', 'ni'],
            correctAnswer: 'li',
            hint: 'What particle separates subject from verb?'
        },
        {
            type: 'fill-blank',
            prompt: 'jan ___ toki. (The person speaks)',
            options: ['mi', 'li', 'sina', 'e'],
            correctAnswer: 'li',
            hint: 'jan is not mi or sina, so we need...'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "They eat"',
            words: ['ona', 'li', 'moku', 'mi', 'pona'],
            correctAnswer: ['ona', 'li', 'moku'],
            hint: 'they + li + eat'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "This is good"',
            words: ['ni', 'li', 'pona', 'ike', 'mi'],
            correctAnswer: ['ni', 'li', 'pona'],
            hint: 'this + li + good'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "She speaks"',
            correctAnswers: ['ona li toki'],
            hint: 'she + li + speak'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "That is bad"',
            correctAnswers: ['ni li ike'],
            hint: 'that + li + bad'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which sentence is CORRECT?',
            options: ['mi li pona', 'mi pona', 'pona mi', 'li mi pona'],
            correctAnswer: 'mi pona',
            hint: 'mi never uses li!'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which sentence is CORRECT?',
            options: ['ona pona', 'ona li pona', 'li ona pona', 'pona ona li'],
            correctAnswer: 'ona li pona',
            hint: 'ona needs li before the verb!'
        }
    ]
};
