// Lesson 13: Numbers & Amounts
// Covers numbers 0-10, larger numbers, and abstract amounts

export default {
    id: '13-numbers',
    name: 'Numbers & Amounts',
    description: 'Learn to count and express quantities',
    icon: '🔢',
    xpReward: 40,

    teaching: [
        {
            title: "Basic Numbers 0-10",
            content: `Kokanu has 12 basic number words:

| Number | Kokanu |
|--------|--------|
| 0 | **nul** |
| 1 | **wan** |
| 2 | **tu** |
| 3 | **ti** |
| 4 | **po** |
| 5 | **pa** |
| 6 | **sik** |
| 7 | **sep** |
| 8 | **ok** |
| 9 | **naw** |
| 10 | **tiju** |`,
            vocabulary: [
                { word: 'nul', translation: '0, zero' },
                { word: 'wan', translation: '1, one' },
                { word: 'tu', translation: '2, two' },
                { word: 'ti', translation: '3, three' },
                { word: 'po', translation: '4, four' },
                { word: 'pa', translation: '5, five' }
            ]
        },
        {
            title: "Numbers 6-10",
            content: `| Number | Kokanu |
|--------|--------|
| 6 | **sik** |
| 7 | **sep** |
| 8 | **ok** |
| 9 | **naw** |
| 10 | **tiju** |

Plus special multipliers:
• **sijen** = 100 (hundred)
• **con** = 1000 (thousand)`,
            vocabulary: [
                { word: 'sik', translation: '6, six' },
                { word: 'sep', translation: '7, seven' },
                { word: 'ok', translation: '8, eight' },
                { word: 'naw', translation: '9, nine' },
                { word: 'tiju', translation: '10, ten' },
                { word: 'sijen', translation: '100, hundred' },
                { word: 'con', translation: '1000, thousand' }
            ]
        },
        {
            title: "Forming Larger Numbers",
            content: `**Multiply** by putting a digit BEFORE:
• **tu** tiju = 2 × 10 = 20
• **ti** sijen = 3 × 100 = 300
• **pa** con = 5 × 1000 = 5000

**Add** by putting a digit AFTER:
• tiju **wan** = 10 + 1 = 11
• tiju **pa** = 10 + 5 = 15`,
            examples: [
                { kokanu: 'tu tiju', english: '20 (two tens)' },
                { kokanu: 'tu tiju pa', english: '25 (two tens + five)' },
                { kokanu: 'ti sijen tu tiju wan', english: '321' }
            ]
        },
        {
            title: "Using Numbers",
            content: `Numbers go **BEFORE** nouns (like English):

• **wan** pawo = one dog
• **tu** meja = two cats
• **pa** kuwosi = five fruits
• **tiju** nin = ten people`,
            examples: [
                { kokanu: 'mi le teka in tu pawo', english: 'I see two dogs' },
                { kokanu: 'ti nin le makan', english: 'Three people eat' },
                { kokanu: 'mi le ju in pa kuwosi', english: 'I want five fruits' }
            ],
            tip: "Cardinal numbers (amounts) go BEFORE the noun"
        },
        {
            title: "Ordinal Numbers",
            content: `For ordinal numbers (1st, 2nd...), put the number **AFTER**:

• pawo **wan** = first dog
• meja **tu** = second cat
• pata **ti** = third book

Position determines meaning!`,
            examples: [
                { kokanu: 'pawo wan', english: 'first dog' },
                { kokanu: 'nin tu', english: 'second person' },
                { kokanu: 'kuwosi ti', english: 'third fruit' }
            ]
        },
        {
            title: "Abstract Amounts",
            content: `For non-specific quantities:

• **sata** = few, some
• **kali** = much, many
• **nu** = none, no

These also go BEFORE nouns:
• **sata** nin = few people
• **kali** kuwosi = many fruits
• **nu** pani = no water`,
            vocabulary: [
                { word: 'sata', translation: 'few, some' },
                { word: 'kali', translation: 'much, many' },
                { word: 'nu', translation: 'none, no' }
            ],
            examples: [
                { kokanu: 'sata nin le makan', english: 'Few people eat' },
                { kokanu: 'mi le ju in kali mani', english: 'I want much money' },
                { kokanu: 'nu pawo le pi jan', english: 'No dogs are at the place' }
            ]
        },
        {
            title: "Amounts as Modifiers",
            content: `After a word, these become **intensity modifiers**:

• cenpo **kali** = very big (much big)
• cina **sata** = somewhat small
• tope **kali** = very good

Position changes meaning!`,
            examples: [
                { kokanu: 'pawo le cenpo kali', english: 'The dog is very big' },
                { kokanu: 'kuwosi le tope kali', english: 'The fruit is very good' },
                { kokanu: 'ja le pasan sata', english: 'He is somewhat happy' }
            ]
        }
    ],

    vocabulary: [
        { word: 'nul', translation: 'zero', phonetic: 'nool' },
        { word: 'wan', translation: 'one', phonetic: 'wahn' },
        { word: 'tu', translation: 'two', phonetic: 'too' },
        { word: 'ti', translation: 'three', phonetic: 'tee' },
        { word: 'po', translation: 'four', phonetic: 'poh' },
        { word: 'pa', translation: 'five', phonetic: 'pah' },
        { word: 'sik', translation: 'six', phonetic: 'seek' },
        { word: 'sep', translation: 'seven', phonetic: 'sehp' },
        { word: 'ok', translation: 'eight', phonetic: 'ohk' },
        { word: 'naw', translation: 'nine', phonetic: 'now' },
        { word: 'tiju', translation: 'ten', phonetic: 'TEE-joo' },
        { word: 'sata', translation: 'few, some', phonetic: 'SAH-tah' },
        { word: 'kali', translation: 'much, many', phonetic: 'KAH-lee' },
        { word: 'nu', translation: 'none, no', phonetic: 'noo' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What is "5" in Kokanu?',
            options: ['po', 'pa', 'ti', 'tu'],
            correctAnswer: 'pa',
            hint: '1=wan, 2=tu, 3=ti, 4=po, 5=?'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ti pawo"',
            correctAnswers: ['three dogs', '3 dogs'],
            hint: 'ti = 3'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "two cats"',
            correctAnswers: ['tu meja'],
            hint: 'tu = 2'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "20" in Kokanu?',
            options: ['tu tiju', 'tiju tu', 'tu sijen', 'tiju tiju'],
            correctAnswer: 'tu tiju',
            hint: 'Number before = multiply'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "pawo wan"',
            correctAnswers: ['first dog', 'the first dog'],
            hint: 'Number after noun = ordinal'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "kali" mean?',
            options: ['few', 'none', 'much/many', 'first'],
            correctAnswer: 'much/many',
            hint: 'A large quantity'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi le ju in kali mani"',
            correctAnswers: ['I want much money', 'I want a lot of money', 'we want much money'],
            hint: 'kali = much/many'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "ten people"',
            correctAnswers: ['tiju nin'],
            hint: 'tiju = 10'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "pawo le cenpo kali"',
            correctAnswers: ['The dog is very big', 'dog is very big'],
            hint: 'kali after modifier = very'
        },
        {
            type: 'translation',
            prompt: 'Translate to Kokanu: "no water"',
            correctAnswers: ['nu pani'],
            hint: 'nu = none/no'
        }
    ]
};
