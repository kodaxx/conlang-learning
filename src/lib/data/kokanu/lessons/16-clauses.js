// Lesson 11: Clauses
// Covers ta, te clause markers and subordinate clauses

export default {
    id: '11-clauses',
    name: 'Clauses',
    description: 'Learn to build complex sentences with subclauses',
    icon: '🔀',
    xpReward: 40,

    teaching: [
        {
            title: "What Are Clauses?",
            content: `A **clause** is a sentence within a sentence.

English examples:
• "I know **that he eats**" (noun clause)
• "The dog **that I saw**..." (relative clause)
• "**When he comes**, I'll eat" (adverbial clause)

Kokanu uses **ta** and **te** to introduce subclauses.`,
            tip: "Clauses let you express complex ideas in one sentence!"
        },
        {
            title: "The Clause Marker: ta",
            content: `**ta** introduces a subclause — like "that" in English:

• mi le nasi **ta** ja le makan
  = I know **that** he eats

• ja le saya **ta** pawo le cenpo
  = He says **that** the dog is big`,
            vocabulary: [
                { word: 'ta', translation: 'clause marker (that)' },
                { word: 'nasi', translation: 'to know' },
                { word: 'saya', translation: 'to say' }
            ],
            examples: [
                { kokanu: 'mi le nasi ta ja le makan', english: 'I know that he eats' },
                { kokanu: 'ja le saya ta pawo le cenpo', english: 'He says that the dog is big' }
            ]
        },
        {
            title: "Adverbial Clauses",
            content: `Use ta with prepositions for adverbial clauses:

**nenka ta** = because (that)
• mi le pasan **nenka ta** na le nema
  = I'm happy **because** you come

**hon ta** = if/when (that)
• **hon ta** na le nema, mi le pasan
  = **If** you come, I'm happy`,
            examples: [
                { kokanu: 'mi le pasan nenka ta na le nema', english: 'I\'m happy because you come' },
                { kokanu: 'hon ta na le nema, mi le pasan', english: 'If you come, I\'m happy' }
            ]
        },
        {
            title: "Relative Clauses",
            content: `To describe a noun with a clause — "the dog **that I saw**":

• pawo **ta mi le teka** = the dog **that I saw**
• nin **ta le kota** = the person **who speaks**

The clause follows the noun it describes!`,
            examples: [
                { kokanu: 'pawo ta mi le teka', english: 'the dog that I saw' },
                { kokanu: 'nin ta le kota', english: 'the person who speaks' },
                { kokanu: 'pata ta na le pata', english: 'the book that you read' }
            ]
        },
        {
            title: "The Light Clause: te",
            content: `**te** is a "light" clause marker for simpler structures:

• mi le suki **te** makan = I like to eat
• ja le nan **te** kota = He can speak

**te** is often used for infinitive-like constructions.`,
            vocabulary: [
                { word: 'te', translation: 'light clause marker' },
                { word: 'nan', translation: 'to be able' }
            ],
            examples: [
                { kokanu: 'mi le suki te makan', english: 'I like to eat' },
                { kokanu: 'ja le nan te kota', english: 'He/she can speak' },
                { kokanu: 'mi le ju te ikasi', english: 'I want to learn' }
            ],
            tip: "te is lighter than ta — for simpler embedded verbs"
        },
        {
            title: "Indirect Questions",
            content: `For indirect questions, combine **ta** with **ci**:

• mi le solu **ta ci** le makan
  = I ask **what** eats

• ja le nasi **ta ci nin** le kota
  = He knows **who** is speaking`,
            examples: [
                { kokanu: 'mi le solu ta ci le makan', english: 'I ask what eats' },
                { kokanu: 'ja le nasi ta ci nin le kota', english: 'He knows who is speaking' },
                { kokanu: 'mi le no nasi ta ja le pi ci jan', english: 'I don\'t know where he is' }
            ]
        },
        {
            title: "Complex Sentences",
            content: `Now you can build sophisticated sentences:

• mi le nasi **ta** ja le makan **nenka ta** ja le pasan
  = I know **that** he eats **because** he's happy

• **hon ta** na le nema, mi le tene in pata **ta** na le suki
  = **If** you come, I'll give you a book **that** you like`,
            examples: [
                { kokanu: 'mi le nasi ta ja le makan matin', english: 'I know that he ate' },
                { kokanu: 'hon ta mi le nan te nema, mi le nema', english: 'If I can come, I will come' }
            ]
        }
    ],

    vocabulary: [
        { word: 'ta', translation: 'clause marker', phonetic: 'tah' },
        { word: 'te', translation: 'light clause marker', phonetic: 'teh' },
        { word: 'nasi', translation: 'to know', phonetic: 'NAH-see' },
        { word: 'saya', translation: 'to say', phonetic: 'SAH-yah' },
        { word: 'nan', translation: 'to be able', phonetic: 'nahn' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "ta" do in Kokanu?',
            options: ['Marks verbs', 'Introduces clauses', 'Asks questions', 'Negates'],
            correctAnswer: 'Introduces clauses',
            hint: 'Like "that" in English'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le nasi ta ja le makan"',
            correctAnswers: ['I know that he eats', 'I know that she eats', 'We know that he eats'],
            hint: 'nasi = know, ta = that'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "I like to eat"',
            correctAnswers: ['mi le suki te makan'],
            hint: 'te for simple infinitive-like clauses'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "pawo ta mi le teka"',
            correctAnswers: ['the dog that I saw', 'a dog that I saw', 'dog that I saw'],
            hint: 'Relative clause: noun + ta + clause'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is "te" used for?',
            options: ['Questions', 'Light/simple clauses', 'Negation', 'Tense'],
            correctAnswer: 'Light/simple clauses',
            hint: 'Simpler than ta'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ja le nan te kota"',
            correctAnswers: ['He can speak', 'She can speak', 'They can speak', 'He/she is able to speak'],
            hint: 'nan = can/able, te = to'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "If you come, I\'m happy"',
            correctAnswers: ['hon ta na le nema, mi le pasan'],
            hint: 'hon ta = if'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le pasan nenka ta na le nema"',
            correctAnswers: ['I\'m happy because you come', 'I am happy because you come'],
            hint: 'nenka ta = because'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "nin ta le kota"',
            correctAnswers: ['the person who speaks', 'a person who speaks', 'person who speaks'],
            hint: 'Relative clause describing nin'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "He says that the dog is big"',
            correctAnswers: ['ja le saya ta pawo le cenpo'],
            hint: 'saya = say, ta = that'
        }
    ]
};
