// Lesson 04: Tense System in Una
// Covers pas- (past) and pos- (future) prefixes, and the re particle

export default {
    id: '04-tense-system',
    name: 'Tense System',
    description: 'Learn to express past and future with tense prefixes',
    icon: '⏰',
    xpReward: 35,

    teaching: [
        {
            title: "Tense in Una",
            content: `Una uses **prefixes** attached to verbs to indicate tense.

**The Two Tense Prefixes:**
• **pas-** = past tense (already happened)
• **pos-** = future tense (will happen)

Without a prefix, verbs are in the **present tense** by default.`,
            vocabulary: [
                { word: 'pas-', translation: 'past tense prefix' },
                { word: 'pos-', translation: 'future tense prefix' }
            ]
        },
        {
            title: "Past Tense with pas-",
            content: `Attach **pas-** directly to the verb:

• **mana** (eat) → **pas-mana** (ate)
• **go** (go) → **pas-go** (went)
• **wisa** (see) → **pas-wisa** (saw)

**Examples:**
• **mi pas-mana pomo** = I ate (an) apple
• **li pas-go siti** = He/she went to the city
• **ni pas-wisa piya** = We saw a bird`,
            examples: [
                { una: 'mi pas-mana pomo', english: 'I ate an apple' },
                { una: 'kano pas-lupa', english: 'The dog ran' },
                { una: 'wi pas-pina wata', english: 'You drank water' }
            ]
        },
        {
            title: "Future Tense with pos-",
            content: `Attach **pos-** directly to the verb:

• **mana** (eat) → **pos-mana** (will eat)
• **go** (go) → **pos-go** (will go)
• **wisa** (see) → **pos-wisa** (will see)

**Examples:**
• **mi pos-mana pomo** = I will eat (an) apple
• **li pos-nema** = He/she will come
• **ni pos-meka somo** = We will build a house`,
            examples: [
                { una: 'mi pos-go siti', english: 'I will go to the city' },
                { una: 'li pos-kama', english: 'He/she will speak' },
                { una: 'kano pos-sipa', english: 'The dog will sleep' }
            ]
        },
        {
            title: "The 're' Particle (Again)",
            content: `**re** expresses repetition or "again".

**Important:** Unlike tense prefixes, **re** is a separate **particle** that follows the verb:

• **mi mana re** = I eat again
• **li go re** = He/she goes again
• **wi pas-wisa re** = You saw again

**Re can combine with tense:**
• **mi pos-mana re** = I will eat again`,
            vocabulary: [
                { word: 're', translation: 'again (particle)' }
            ],
            tip: "re comes AFTER the verb, not attached as a prefix",
            examples: [
                { una: 'mi mana re', english: 'I eat again' },
                { una: 'li pas-nema re', english: 'He/she came again' },
                { una: 'wi pos-meka re', english: 'You will do (it) again' }
            ]
        },
        {
            title: "Comparing Present, Past, and Future",
            content: `Let's see all three together:

**Present:** mi mana pomo = I eat an apple
**Past:** mi pas-mana pomo = I ate an apple
**Future:** mi pos-mana pomo = I will eat an apple

**With negation:**
• **mi ne mana** = I do not eat
• **mi ne pas-mana** = I did not eat
• **mi ne pos-mana** = I will not eat

**ne** goes before the verb (including prefix).`,
            examples: [
                { una: 'kano lupa', english: 'The dog runs' },
                { una: 'kano pas-lupa', english: 'The dog ran' },
                { una: 'kano pos-lupa', english: 'The dog will run' }
            ]
        }
    ],

    vocabulary: [
        { word: 'pas-', translation: 'past tense prefix', phonetic: 'pahs' },
        { word: 'pos-', translation: 'future tense prefix', phonetic: 'pohs' },
        { word: 're', translation: 'again (particle)', phonetic: 'reh' },
        { word: 'sipa', translation: 'sleep', phonetic: 'SEE-pah' },
        { word: 'piya', translation: 'bird', phonetic: 'PEE-yah' },
        { word: 'siti', translation: 'city', phonetic: 'SEE-tee' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I ate" in Una?',
            options: ['mi mana', 'mi pas-mana', 'mi pos-mana', 'mana mi'],
            correctAnswer: 'mi pas-mana',
            hint: 'pas- indicates past tense'
        },
        {
            type: 'translation',
            prompt: 'Translate to Una: "The dog will run"',
            correctAnswers: ['kano pos-lupa'],
            hint: 'pos- for future tense'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "pos-" indicate?',
            options: ['past tense', 'present tense', 'future tense', 'negation'],
            correctAnswer: 'future tense',
            hint: 'Will happen'
        },
        {
            type: 'translation',
            prompt: 'Translate to Una: "I eat again"',
            correctAnswers: ['mi mana re'],
            hint: 're comes after the verb as a particle'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "She did not see"?',
            options: ['li ne pas-wisa', 'li pas-ne wisa', 'li pas-wisa ne', 'ne li pas-wisa'],
            correctAnswer: 'li ne pas-wisa',
            hint: 'ne goes before the entire verb phrase'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ni pas-go siti"',
            correctAnswers: ['we went to the city', 'we went to city'],
            hint: 'pas- = past, ni = we'
        },
        {
            type: 'multiple-choice',
            prompt: 'Where does "re" go in a sentence?',
            options: ['Before the verb as a prefix', 'After the verb as a particle', 'At the start of the sentence', 'Attached to the noun'],
            correctAnswer: 'After the verb as a particle',
            hint: 're is not a prefix!'
        },
        {
            type: 'translation',
            prompt: 'Translate to Una: "He will come again"',
            correctAnswers: ['li pos-nema re'],
            hint: 'pos- for future, re after verb for again'
        }
    ]
};
