// Lesson 01: First Words in Una
// Introduces basic nouns, pronouns, adjectives, and the zero copula

export default {
    id: '01-first-words',
    name: 'First Words',
    description: 'Learn basic nouns, pronouns, and how to describe things',
    icon: '👋',
    xpReward: 25,

    teaching: [
        {
            title: "Welcome to Una!",
            content: `Una is a **minimalist constructed language** designed for simplicity and clarity.

In this first lesson, you'll learn some basic words and how to describe things.

**Key features of Una:**
• Strict **SVO** word order (Subject - Verb - Object)
• No verb "to be" - descriptions use **zero copula**
• Simple pronunciation with pure vowels`,
            vocabulary: [
                { word: 'mi', translation: 'I, me' },
                { word: 'wi', translation: 'you' },
                { word: 'li', translation: 'he, she, they (animate)' }
            ]
        },
        {
            title: "Basic Nouns",
            content: `Let's learn some essential nouns in Una:

• **somo** = house
• **pomo** = apple
• **kano** = dog
• **wata** = water
• **oni** = person

These words form the foundation of your vocabulary!`,
            vocabulary: [
                { word: 'somo', translation: 'house' },
                { word: 'pomo', translation: 'apple' },
                { word: 'kano', translation: 'dog' },
                { word: 'wata', translation: 'water' },
                { word: 'oni', translation: 'person' }
            ],
            examples: [
                { una: 'somo', english: 'house' },
                { una: 'kano', english: 'dog' },
                { una: 'wata', english: 'water' }
            ]
        },
        {
            title: "Basic Adjectives",
            content: `In Una, adjectives **always follow** the noun they describe:

• **bona** = good
• **kuna** = big

**Structure:** NOUN + ADJECTIVE

For opposites, use the **mal-** prefix:
• **malbona** = bad (opposite of good)
• **malkuna** = small (opposite of big)

Examples:
• **somo kuna** = big house
• **kano bona** = good dog
• **pomo malkuna** = small apple`,
            vocabulary: [
                { word: 'bona', translation: 'good' },
                { word: 'kuna', translation: 'big' },
                { word: 'malkuna', translation: 'small (mal- + kuna)' }
            ],
            examples: [
                { una: 'somo kuna', english: 'big house' },
                { una: 'kano bona', english: 'good dog' },
                { una: 'pomo malkuna', english: 'small apple' }
            ]
        },
        {
            title: "The Zero Copula",
            content: `Una has **no verb for "to be"** (am/is/are).

To say something IS something, just place them together:

• **mi bona** = I [am] good
• **somo kuna** = The house [is] big
• **kano bona** = The dog [is] good

The meaning "is/are" is understood from context!`,
            tip: "Think of it like texting: 'House big' is understood as 'The house is big'",
            examples: [
                { una: 'mi bona', english: 'I am good' },
                { una: 'somo kuna', english: 'The house is big' },
                { una: 'wi bona', english: 'You are good' }
            ]
        },
        {
            title: "Possession with 'se'",
            content: `To show possession, use **se** (of) between the thing and owner:

**Structure:** THING + **se** + OWNER

Examples:
• **somo se mi** = my house (house of me)
• **kano se wi** = your dog (dog of you)
• **pomo se li** = his/her apple (apple of him/her)`,
            vocabulary: [
                { word: 'se', translation: 'of (possession)' }
            ],
            examples: [
                { una: 'somo se mi', english: 'my house' },
                { una: 'kano se wi', english: 'your dog' },
                { una: 'pomo se li', english: 'his/her apple' }
            ]
        }
    ],

    vocabulary: [
        { word: 'mi', translation: 'I, me', phonetic: 'mee' },
        { word: 'wi', translation: 'you', phonetic: 'wee' },
        { word: 'li', translation: 'he, she, they', phonetic: 'lee' },
        { word: 'somo', translation: 'house', phonetic: 'SOH-moh' },
        { word: 'pomo', translation: 'apple', phonetic: 'POH-moh' },
        { word: 'kano', translation: 'dog', phonetic: 'KAH-noh' },
        { word: 'wata', translation: 'water', phonetic: 'WAH-tah' },
        { word: 'oni', translation: 'person', phonetic: 'OH-nee' },
        { word: 'bona', translation: 'good', phonetic: 'BOH-nah' },
        { word: 'kuna', translation: 'big', phonetic: 'KOO-nah' },
        { word: 'malkuna', translation: 'small', phonetic: 'mal-KOO-nah' },
        { word: 'se', translation: 'of (possession)', phonetic: 'seh' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "somo" mean?',
            options: ['dog', 'house', 'water', 'person'],
            correctAnswer: 'house',
            hint: 'It\'s a building you live in'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "big dog" in Una?',
            options: ['kuna kano', 'kano kuna', 'bona kano', 'kano bona'],
            correctAnswer: 'kano kuna',
            hint: 'Adjectives follow the noun'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "mi bona" mean?',
            options: ['I eat', 'I am good', 'I see', 'good me'],
            correctAnswer: 'I am good',
            hint: 'Zero copula - no verb "to be" needed'
        },
        {
            type: 'translation',
            prompt: 'Translate to Una: "my house"',
            correctAnswers: ['somo se mi'],
            hint: 'Use "se" for possession: THING se OWNER'
        },
        {
            type: 'multiple-choice',
            prompt: 'In Una, adjectives go:',
            options: ['before the noun', 'after the noun', 'anywhere', 'at the end of sentence'],
            correctAnswer: 'after the noun',
            hint: 'The opposite of English!'
        },
        {
            type: 'translation',
            prompt: 'Translate to Una: "small apple"',
            correctAnswers: ['pomo malkuna'],
            hint: 'mal- + kuna = small'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "kano se wi" mean?',
            options: ['the dog is good', 'your dog', 'big dog', 'the dog sees you'],
            correctAnswer: 'your dog',
            hint: 'se = of (possession)'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "somo kuna"',
            correctAnswers: ['big house', 'the house is big', 'large house', 'a big house'],
            hint: 'Noun + adjective'
        }
    ]
};
