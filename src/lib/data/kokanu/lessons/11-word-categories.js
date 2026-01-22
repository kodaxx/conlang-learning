// Lesson 06: Word Categories
// Covers how words change between Noun, Verb, and Modifier categories

export default {
    id: '06-word-categories',
    name: 'Word Categories',
    description: 'Learn how words flexibly change categories',
    icon: '🔄',
    xpReward: 40,

    teaching: [
        {
            title: "Three Word Types",
            content: `In Kokanu, all content words are one of three types:

1. **Nouns** — things, people, places
2. **Verbs** — actions, states
3. **Modifiers** — describe nouns or verbs (adjectives/adverbs)

The dictionary shows the BASE form of each word, but words can **change categories** based on how they're used!`,
            tip: "Unlike English, Kokanu words can shift between categories without changing form!"
        },
        {
            title: "Modifiers",
            content: `**Modifiers** describe other words. They go AFTER what they modify:

• pawo **cenpo** = big dog
• meja **cina** = small cat
• kuwosi **tope** = good fruit

Key modifiers:
• **cenpo** = big
• **cina** = small
• **tope** = good
• **loso** = bad
• **wiki** = fast`,
            vocabulary: [
                { word: 'cenpo', translation: 'big' },
                { word: 'cina', translation: 'small' },
                { word: 'tope', translation: 'good' },
                { word: 'loso', translation: 'bad' },
                { word: 'wiki', translation: 'fast' }
            ],
            examples: [
                { kokanu: 'pawo cenpo', english: 'big dog' },
                { kokanu: 'meja cina', english: 'small cat' },
                { kokanu: 'pani tope', english: 'good water' }
            ]
        },
        {
            title: "Modifier → Verb",
            content: `When a modifier follows **le**, it becomes a verb meaning "to be [modifier]":

• ja **le cenpo** = He/she IS BIG
• pawo **le cina** = The dog IS SMALL
• kuwosi **le tope** = The fruit IS GOOD

**Important:** le is NOT "to be" — the modifier itself becomes the verb!`,
            examples: [
                { kokanu: 'ja le cenpo', english: 'He/she is big' },
                { kokanu: 'pawo le cina', english: 'The dog is small' },
                { kokanu: 'mi le pasan', english: 'I am happy' }
            ],
            tip: "The modifier transforms into a verb when used with le!"
        },
        {
            title: "Noun → Verb",
            content: `When a noun follows **le**, it means "to be [noun]":

• ja **le pawo** = He/she IS A DOG
• mi **le nin** = I AM A PERSON
• to **le canwa** = It IS AN ANIMAL

This lets you identify things!`,
            vocabulary: [
                { word: 'to', translation: 'it (inanimate)' }
            ],
            examples: [
                { kokanu: 'ja le pawo', english: 'He/she is a dog' },
                { kokanu: 'mi le nin', english: 'I am a person' },
                { kokanu: 'to le kuwosi', english: 'It is a fruit' }
            ]
        },
        {
            title: "Verb → Noun",
            content: `A verb used as a noun becomes its **generic object** (what you typically do with that verb):

• **makan** (to eat) → food
• **lika** (to write) → text, writing
• **pata** (to read) → book, document
• **kota** (to speak) → speech, talk

• mi le suki in **makan** = I like food
• **pata** le cenpo = The book is big`,
            examples: [
                { kokanu: 'mi le suki in makan', english: 'I like food' },
                { kokanu: 'pata le cenpo', english: 'The book is big' },
                { kokanu: 'lika le tope', english: 'The writing is good' }
            ],
            tip: "The noun form is 'what you typically [verb]'"
        },
        {
            title: "Noun → Modifier",
            content: `A noun used as a modifier means "[noun]-related":

• onton **makan** = food-related clothing (like an apron!)
• pawo as modifier → dog-related

• **meja** pawo = dog-like cat? / cat-dog?
• pata **makan** = food book (cookbook)`,
            vocabulary: [
                { word: 'onton', translation: 'to wear; clothing' }
            ],
            examples: [
                { kokanu: 'pata makan', english: 'food book (cookbook)' },
                { kokanu: 'nin pawo', english: 'dog person (dog lover)' }
            ]
        },
        {
            title: "Possessive Pronouns",
            content: `Pronouns as modifiers become **possessive**:

• pawo **mi** = MY dog
• meja **na** = YOUR cat
• pata **ja** = HIS/HER/THEIR book
• insu **mi** = OUR building

The pronoun follows the noun it possesses!`,
            examples: [
                { kokanu: 'pawo mi', english: 'my dog' },
                { kokanu: 'meja na', english: 'your cat' },
                { kokanu: 'pata ja', english: 'his/her/their book' },
                { kokanu: 'mani mi', english: 'my money' }
            ]
        }
    ],

    vocabulary: [
        { word: 'cenpo', translation: 'big', phonetic: 'CHEN-po' },
        { word: 'cina', translation: 'small', phonetic: 'CHEE-nah' },
        { word: 'tope', translation: 'good', phonetic: 'TOH-peh' },
        { word: 'loso', translation: 'bad', phonetic: 'LOH-so' },
        { word: 'wiki', translation: 'fast', phonetic: 'WEE-kee' },
        { word: 'pasan', translation: 'happy', phonetic: 'PAH-sahn' },
        { word: 'onton', translation: 'to wear; clothing', phonetic: 'OHN-tohn' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'Where do modifiers go in Kokanu?',
            options: ['Before the word', 'After the word', 'Anywhere', 'At the start of sentence'],
            correctAnswer: 'After the word',
            hint: 'pawo cenpo, not cenpo pawo'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "pawo cenpo"',
            correctAnswers: ['big dog', 'a big dog', 'the big dog'],
            hint: 'cenpo = big'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "small cat"',
            correctAnswers: ['meja cina'],
            hint: 'Noun first, then modifier'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "ja le cenpo" mean?',
            options: ['He is eating', 'She is happy', 'He/she is big', 'They are going'],
            correctAnswer: 'He/she is big',
            hint: 'Modifier after le = "to be [modifier]"'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "my dog"',
            correctAnswers: ['pawo mi'],
            hint: 'Pronoun as modifier = possessive'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ja le pawo"',
            correctAnswers: ['He is a dog', 'She is a dog', 'It is a dog', 'They are dogs'],
            hint: 'Noun after le = "to be [noun]"'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "makan" mean as a noun?',
            options: ['eating', 'food', 'hunger', 'mouth'],
            correctAnswer: 'food',
            hint: 'The thing you typically eat'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le suki in makan"',
            correctAnswers: ['I like food', 'we like food'],
            hint: 'makan (noun) = food'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "The dog is small"',
            correctAnswers: ['pawo le cina'],
            hint: 'Subject + le + modifier'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "pata ja"',
            correctAnswers: ['his book', 'her book', 'their book', 'its book'],
            hint: 'Possessive: pata (book) + ja (his/her/their)'
        }
    ]
};
