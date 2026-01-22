// Lesson 09: Aspect & Mood
// Covers aspect markers and mood particles

export default {
    id: '09-aspect-mood',
    name: 'Aspect & Mood',
    description: 'Express how actions unfold and your attitude',
    icon: '🎭',
    xpReward: 40,

    teaching: [
        {
            title: "Tense vs. Aspect",
            content: `**Tense** = WHEN something happens (past/present/future)
**Aspect** = HOW an action unfolds over time

English examples:
• "I ate" vs "I was eating" vs "I had eaten"
These have the same tense (past) but different aspects!

Kokanu separates these concepts clearly.`,
            tip: "Tense and aspect are independent — you can combine them!"
        },
        {
            title: "Starting & Ending",
            content: `**tepu** = starting (beginning)
• mi le makan **tepu** = I START eating

**konje** = ending (finishing)
• mi le makan **konje** = I FINISH eating

These describe the phase of an action!`,
            vocabulary: [
                { word: 'tepu', translation: 'starting' },
                { word: 'konje', translation: 'ending' }
            ],
            examples: [
                { kokanu: 'mi le makan tepu', english: 'I start eating' },
                { kokanu: 'ja le kota konje', english: 'He/she finishes speaking' },
                { kokanu: 'mi le ikasi tepu', english: 'I start learning' }
            ]
        },
        {
            title: "Ongoing & Repeating",
            content: `**conca** = ongoing (continuing)
• mi le ikasi **conca** = I AM learning (ongoing)

**conpu** = repeating
• ja le nema **conpu** = He/she KEEPS coming

These describe the duration or frequency!`,
            vocabulary: [
                { word: 'conca', translation: 'ongoing' },
                { word: 'conpu', translation: 'repeating' }
            ],
            examples: [
                { kokanu: 'mi le ikasi conca', english: 'I am learning (ongoing)' },
                { kokanu: 'pawo le lupa conpu', english: 'The dog runs repeatedly' },
                { kokanu: 'ja le kota conca', english: 'He/she keeps talking' }
            ]
        },
        {
            title: "Complete & Unstarted",
            content: `**mulu** = complete, perfect (finished)
• mi le pen **mulu** = I HAVE understood

**lito** = unstarted, prospective
• mi le makan **lito** = I'm ABOUT TO eat

**luka** = interrupted
• mi le makan **luka** = I STOPPED eating (mid-action)`,
            vocabulary: [
                { word: 'mulu', translation: 'complete, perfect' },
                { word: 'lito', translation: 'unstarted, prospective' },
                { word: 'luka', translation: 'interrupted' }
            ],
            examples: [
                { kokanu: 'mi le pen mulu', english: 'I have understood' },
                { kokanu: 'mi le makan lito', english: 'I\'m about to eat' },
                { kokanu: 'ja le kota luka', english: 'He/she stopped speaking' }
            ]
        },
        {
            title: "Combining Tense & Aspect",
            content: `Tense and aspect can work together:

• mi le makan **matin mulu** = I HAD eaten (past + complete)
• ja le kota **melon tepu** = He WILL START speaking
• mi le ikasi **matin conca** = I WAS learning (past + ongoing)

Stack modifiers as needed!`,
            examples: [
                { kokanu: 'mi le pen matin mulu', english: 'I had understood' },
                { kokanu: 'ja le makan melon tepu', english: 'He/she will start eating' },
                { kokanu: 'mi le kota matin konje', english: 'I finished speaking' }
            ],
            tip: "Order: verb → [tense] → [aspect]"
        },
        {
            title: "The Imperative: o",
            content: `We've seen **o** for commands. It's also used for:

**Suggestions:** Let's do X
• **o** makan! = Let's eat!

**Wishes:** May X happen
• **o** na le pasan! = May you be happy!

The context determines the meaning.`,
            examples: [
                { kokanu: 'o makan!', english: 'Eat! / Let\'s eat!' },
                { kokanu: 'o mi le pilu!', english: 'May I be victorious!' }
            ]
        },
        {
            title: "Mood: kate and hakiki",
            content: `**kate** = hypothetical ("as if", counterfactual)
• ja le makan **kate** = He eats AS IF... / He would eat

**hakiki** = authentic, realis ("indeed, actually")
• mi le teka **hakiki** = I actually see / I indeed see

These express the speaker's attitude!`,
            vocabulary: [
                { word: 'kate', translation: 'hypothetical (as if)' },
                { word: 'hakiki', translation: 'authentic, indeed' }
            ],
            examples: [
                { kokanu: 'ja le makan kate', english: 'He would eat (hypothetical)' },
                { kokanu: 'mi le teka hakiki', english: 'I actually see' }
            ]
        }
    ],

    vocabulary: [
        { word: 'tepu', translation: 'starting', phonetic: 'TEH-poo' },
        { word: 'konje', translation: 'ending', phonetic: 'KON-jeh' },
        { word: 'conca', translation: 'ongoing', phonetic: 'CHON-chah' },
        { word: 'conpu', translation: 'repeating', phonetic: 'CHON-poo' },
        { word: 'mulu', translation: 'complete', phonetic: 'MOO-loo' },
        { word: 'lito', translation: 'unstarted', phonetic: 'LEE-toh' },
        { word: 'luka', translation: 'interrupted', phonetic: 'LOO-kah' },
        { word: 'kate', translation: 'hypothetical', phonetic: 'KAH-teh' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "conca" mean?',
            options: ['starting', 'ending', 'ongoing', 'complete'],
            correctAnswer: 'ongoing',
            hint: 'A continuing action'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le makan tepu"',
            correctAnswers: ['I start eating', 'I begin eating', 'We start eating'],
            hint: 'tepu = starting'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "He finishes speaking"',
            correctAnswers: ['ja le kota konje'],
            hint: 'konje = ending'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "mulu" indicate?',
            options: ['Starting', 'Ongoing', 'Complete/finished', 'Repeating'],
            correctAnswer: 'Complete/finished',
            hint: 'Like perfect aspect'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le ikasi conca"',
            correctAnswers: ['I am learning', 'I keep learning', 'We are learning'],
            hint: 'conca = ongoing'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "I have understood"',
            correctAnswers: ['mi le pen mulu'],
            hint: 'mulu = complete/perfect'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ja le makan melon tepu"',
            correctAnswers: ['He will start eating', 'She will start eating', 'They will begin eating'],
            hint: 'melon = future, tepu = starting'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "kate" express?',
            options: ['Certainty', 'Hypothetical situation', 'Past tense', 'Question'],
            correctAnswer: 'Hypothetical situation',
            hint: '"as if", counterfactual'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "The dog runs repeatedly"',
            correctAnswers: ['pawo le lupa conpu'],
            hint: 'conpu = repeating'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le makan lito"',
            correctAnswers: ['I\'m about to eat', 'I am about to eat', 'We\'re about to eat'],
            hint: 'lito = unstarted, prospective'
        }
    ]
};
