// Lesson 15: Review & Practice
// Comprehensive review of all Kokanu concepts

export default {
    id: '15-review',
    name: 'Review & Practice',
    description: 'Comprehensive review of all Kokanu concepts',
    icon: '🎓',
    xpReward: 50,

    teaching: [
        {
            title: "Congratulations!",
            content: `You've completed the Kokanu course! 🎉

You now know:
• 380+ vocabulary words
• All grammar particles
• Tense and aspect
• Questions and clauses
• Numbers and directions

Let's review the key concepts!`,
            tip: "This lesson tests everything you've learned!"
        },
        {
            title: "Sentence Structure Review",
            content: `**Basic pattern:** Subject + **le** + Verb + **in** + Object

• mi **le** makan **in** kuwosi = I eat fruit

**Key particles:**
• **le** = verb marker
• **in** = object marker
• **ki** = to/towards
• **pi** = at/during
• **kan** = with`,
            examples: [
                { kokanu: 'mi le makan in kuwosi kan na', english: 'I eat fruit with you' },
                { kokanu: 'ja le kota ki mi pi insu', english: 'He speaks to me at the building' }
            ]
        },
        {
            title: "Word Derivations Review",
            content: `Words change meaning based on position:

| Position | Becomes |
|----------|---------|
| After le | Verb ("to be...") |
| After in | Noun (object) |
| After noun | Modifier |
| After verb | Adverb |

• cenpo = big (modifier)
• le cenpo = to be big (verb)
• [noun] cenpo = big [noun]`,
            examples: [
                { kokanu: 'pawo cenpo', english: 'big dog' },
                { kokanu: 'pawo le cenpo', english: 'The dog is big' },
                { kokanu: 'ja le makan wiki', english: 'He eats fast' }
            ]
        },
        {
            title: "Tense & Aspect Review",
            content: `**Tense:** When it happens
• **matin** = past
• **kenca** = present
• **melon** = future

**Aspect:** How it unfolds
• **tepu** = starting
• **konje** = ending
• **conca** = ongoing
• **mulu** = complete`,
            examples: [
                { kokanu: 'mi le makan matin', english: 'I ate' },
                { kokanu: 'ja le kota melon tepu', english: 'He will start speaking' },
                { kokanu: 'mi le pen mulu', english: 'I have understood' }
            ]
        },
        {
            title: "Questions Review",
            content: `**Yes/No questions:** Add **ka**
• **ka** na le pasan? = Are you happy?

**WH-questions:** Use **ci**
• **ci nin** le kota? = Who is speaking?
• na le teka in **ci**? = What do you see?

**Negation:** Use **no**
• mi le **no** makan = I don't eat`,
            examples: [
                { kokanu: 'ka ja le makan matin?', english: 'Did he eat?' },
                { kokanu: 'ci nin le pi ci jan?', english: 'Who is where?' }
            ]
        },
        {
            title: "Clauses Review",
            content: `**ta** = clause marker ("that")
• mi le nasi **ta** ja le makan = I know that he eats

**te** = light clause ("to")
• mi le suki **te** makan = I like to eat

**Conditionals:**
• **hon ta** na le nema... = If you come...`,
            examples: [
                { kokanu: 'mi le nasi ta ja le pasan', english: 'I know that he is happy' },
                { kokanu: 'hon ta mi le nan, mi le nema', english: 'If I can, I will come' }
            ]
        },
        {
            title: "Numbers Review",
            content: `**0-10:** nul, wan, tu, ti, po, pa, sik, sep, ok, naw, tiju

**Forming numbers:**
• [digit] + tiju = multiply (tu tiju = 20)
• tiju + [digit] = add (tiju pa = 15)

**Position:**
• tu pawo = two dogs (cardinal)
• pawo tu = second dog (ordinal)`,
            examples: [
                { kokanu: 'mi le ju in ti kuwosi', english: 'I want three fruits' },
                { kokanu: 'pata wan', english: 'first book' }
            ]
        },
        {
            title: "Final Tips",
            content: `**Keep practicing!**

1. **Read Kokanu texts** at en.kokanu.com/texts/
2. **Join the Discord** community
3. **Use the dictionary** at dictionary.kokanu.com
4. **Practice daily** with flashcards and exercises

peko! Good luck with your Kokanu journey! 🌏`,
            tip: "The best way to learn is to use the language every day!"
        }
    ],

    vocabulary: [
        { word: 'peko', translation: 'hello, bye, please, thanks, sorry', phonetic: 'PEH-ko' },
        { word: 'le', translation: 'verb marker', phonetic: 'leh' },
        { word: 'in', translation: 'object marker', phonetic: 'een' },
        { word: 'ta', translation: 'clause marker', phonetic: 'tah' },
        { word: 'ka', translation: 'question marker', phonetic: 'kah' },
        { word: 'no', translation: 'negation', phonetic: 'noh' },
        { word: 'ci', translation: 'what/which', phonetic: 'chee' }
    ],

    exercises: [
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "I ate fruit yesterday"',
            correctAnswers: ['mi le makan matin in kuwosi', 'mi le makan in kuwosi matin'],
            hint: 'matin = past'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ka na le nasi ta mi le amo in na?"',
            correctAnswers: ['Do you know that I love you?', 'do you know that I love you'],
            hint: 'ka = question, ta = that'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "The big dog eats fast"',
            correctAnswers: ['pawo cenpo le makan wiki'],
            hint: 'cenpo = big, wiki = fast'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ci nin le pi polan je na?"',
            correctAnswers: ['Who is in front of you?', 'who is in front of you'],
            hint: 'ci nin = who, polan = front'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "If you come, I will be happy"',
            correctAnswers: ['hon ta na le nema, mi le pasan melon'],
            hint: 'hon ta = if, melon = future'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mu lika le lika in ti pata"',
            correctAnswers: ['The writer writes three books', 'a writer writes three books'],
            hint: 'mu lika = writer, ti = 3'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "I don\'t know who is speaking"',
            correctAnswers: ['mi le no nasi ta ci nin le kota'],
            hint: 'no nasi = don\'t know, ta ci nin = who'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "o lun pasan in mi, peko"',
            correctAnswers: ['Please make me happy', 'make me happy please'],
            hint: 'lun pasan = make happy, peko = please'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "I have finished eating"',
            correctAnswers: ['mi le makan konje mulu', 'mi le makan mulu'],
            hint: 'konje = ending, mulu = complete'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "kali nin le makan in makan tope pi insu cenpo"',
            correctAnswers: ['Many people eat good food at the big building', 'many people eat good food in a big building'],
            hint: 'kali = many, makan (noun) = food'
        }
    ]
};
