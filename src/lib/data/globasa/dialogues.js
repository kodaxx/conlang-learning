// Globasa dialogue scenarios for the Dialogue Completion game
// Each dialogue is associated with a unit and uses vocabulary from that unit
// Dialogues unlock as users complete units

export const dialogues = [
    // Unit 1: Foundations - Greetings, animals, family, first verbs
    {
        id: 'greeting-1',
        title: 'A Friendly Greeting',
        unit: 1,
        difficulty: 'easy',
        context: 'You meet someone on the street.',
        conversation: [
            { speaker: 'jan', text: 'Salom!', translation: 'Hello!' },
            { speaker: 'you', text: '', translation: 'Hello! Peace!' }
        ],
        acceptedAnswers: ['salom! xanti', 'salom xanti', 'salom', 'xanti'],
        hint: 'Greet them with salom (hello) or xanti (peace)'
    },

    // Unit 2: Actions & Food - Movement verbs, food, SVO
    {
        id: 'want-food',
        title: 'Hungry?',
        unit: 2,
        difficulty: 'easy',
        context: 'Someone offers you food.',
        conversation: [
            { speaker: 'jan', text: 'Kam yu vole yam?', translation: 'Do you want to eat?' },
            { speaker: 'you', text: '', translation: 'Yes, I want to eat.' }
        ],
        acceptedAnswers: ['si, mi vole yam', 'mi vole yam', 'si mi vole yam', 'si'],
        hint: 'Say that you want to eat (mi vole yam)'
    },

    // Unit 3: Questions & Preferences - Yes/no questions, likes
    {
        id: 'like-food',
        title: 'Food Preference',
        unit: 3,
        difficulty: 'easy',
        context: 'Discussing food.',
        conversation: [
            { speaker: 'jan', text: 'Kam yu suki kafe?', translation: 'Do you like coffee?' },
            { speaker: 'you', text: '', translation: 'Yes, I like coffee.' }
        ],
        acceptedAnswers: ['si, mi suki kafe', 'mi suki kafe', 'si mi suki kafe', 'si'],
        hint: 'Say that you like coffee (mi suki kafe)'
    },

    // Unit 4: Descriptions - Adjectives, sen, demonstratives
    {
        id: 'describe-thing',
        title: 'Describing Things',
        unit: 4,
        difficulty: 'easy',
        context: 'Commenting on something.',
        conversation: [
            { speaker: 'jan', text: 'Hin kitabu sen bon!', translation: 'This book is good!' },
            { speaker: 'you', text: '', translation: 'Yes, it is very good!' }
        ],
        acceptedAnswers: ['si, to sen daymo bon', 'si to sen bon', 'to sen bon', 'si'],
        hint: 'Agree that it is good (to sen bon = it is good)'
    },

    // Unit 5: Tenses & Places - Past/future, prepositions
    {
        id: 'go-home',
        title: 'Going Home',
        unit: 5,
        difficulty: 'medium',
        context: 'Time to leave.',
        conversation: [
            { speaker: 'jan', text: 'Keloka yu xa idi?', translation: 'Where will you go?' },
            { speaker: 'you', text: '', translation: 'I will go home.' }
        ],
        acceptedAnswers: ['mi xa idi cel ogar', 'mi xa idi ogar', 'cel ogar', 'mi xa idi'],
        hint: 'Say you will go home (mi xa idi cel ogar)'
    },

    // Unit 6: Communication - Plural pronouns, question words, occupations
    {
        id: 'who-is-that',
        title: 'Meeting Someone',
        unit: 6,
        difficulty: 'medium',
        context: 'Asking about a person.',
        conversation: [
            { speaker: 'you', text: 'Kete sen den yen?', translation: 'Who is that person?' },
            { speaker: 'jan', text: 'Te sen mi su alimyen.', translation: 'He is my teacher.' },
            { speaker: 'you', text: '', translation: 'Oh, I understand!' }
        ],
        acceptedAnswers: ['mi aham', 'a, mi aham', 'bon'],
        hint: 'Say you understand (mi aham)'
    },

    // Unit 7: Possession & Location - Ownership, here/there
    {
        id: 'where-book',
        title: 'Finding a Book',
        unit: 7,
        difficulty: 'medium',
        context: 'Looking for something.',
        conversation: [
            { speaker: 'you', text: 'Keloka sen mi su kitabu?', translation: 'Where is my book?' },
            { speaker: 'jan', text: 'To sen per meza.', translation: 'It is on the table.' },
            { speaker: 'you', text: '', translation: 'Thank you!' }
        ],
        acceptedAnswers: ['xukra', 'xukra!', 'bon'],
        hint: 'Thank them (xukra = thank you)'
    },

    // Unit 8: Comparison - Comparatives, opposites
    {
        id: 'compare-things',
        title: 'Comparing',
        unit: 8,
        difficulty: 'medium',
        context: 'Comparing two things.',
        conversation: [
            { speaker: 'jan', text: 'Hin sen maxmo bon kom den.', translation: 'This is better than that.' },
            { speaker: 'you', text: '', translation: 'Yes, this is good!' }
        ],
        acceptedAnswers: ['si, hin sen bon', 'hin sen bon', 'si'],
        hint: 'Agree that this one is good'
    },

    // Unit 9: Numbers & Quantifiers - Numbers 1-10
    {
        id: 'how-many',
        title: 'Counting',
        unit: 9,
        difficulty: 'medium',
        context: 'Asking about quantity.',
        conversation: [
            { speaker: 'jan', text: 'Kekuya kitabu yu hare?', translation: 'How many books do you have?' },
            { speaker: 'you', text: '', translation: 'I have three books.' }
        ],
        acceptedAnswers: ['mi hare tiga kitabu', 'tiga kitabu', 'tiga'],
        hint: 'Say you have three (tiga) books'
    },

    // Unit 10: Countries & Languages
    {
        id: 'speak-language',
        title: 'Speaking Languages',
        unit: 10,
        difficulty: 'medium',
        context: 'Talking about languages.',
        conversation: [
            { speaker: 'jan', text: 'Kam yu loga Globasa?', translation: 'Do you speak Globasa?' },
            { speaker: 'you', text: '', translation: 'Yes, I speak Globasa!' }
        ],
        acceptedAnswers: ['si, mi loga globasa', 'mi loga globasa', 'si mi loga', 'si'],
        hint: 'Say you speak Globasa (mi loga Globasa)'
    },

    // Unit 11: Shopping & Quantities
    {
        id: 'buy-something',
        title: 'Shopping',
        unit: 11,
        difficulty: 'medium',
        context: 'In a store.',
        conversation: [
            { speaker: 'jan', text: 'Kam yu vole kari hin?', translation: 'Do you want to buy this?' },
            { speaker: 'you', text: '', translation: 'Yes, how much is it?' }
        ],
        acceptedAnswers: ['si, kekuya pesa', 'kekuya pesa', 'si'],
        hint: 'Ask how much it costs (kekuya pesa?)'
    },

    // Unit 12: Clothing & Numbers 11-99
    {
        id: 'clothing-color',
        title: 'Nice Clothes',
        unit: 12,
        difficulty: 'medium',
        context: 'Complimenting someone.',
        conversation: [
            { speaker: 'you', text: 'Yu su kamisa sen meli!', translation: 'Your shirt is beautiful!' },
            { speaker: 'jan', text: 'Xukra! Mi le kari to predin.', translation: 'Thanks! I bought it yesterday.' },
            { speaker: 'you', text: '', translation: 'It is very nice!' }
        ],
        acceptedAnswers: ['to sen daymo meli', 'to sen bon', 'meli'],
        hint: 'Say it is very nice (to sen daymo meli)'
    },

    // Unit 13: Modals & Superlatives
    {
        id: 'can-do',
        title: 'Abilities',
        unit: 13,
        difficulty: 'medium',
        context: 'Discussing what you can do.',
        conversation: [
            { speaker: 'jan', text: 'Kam yu abil suyon?', translation: 'Can you swim?' },
            { speaker: 'you', text: '', translation: 'Yes, I can swim.' }
        ],
        acceptedAnswers: ['si, mi abil suyon', 'mi abil suyon', 'si mi abil', 'si'],
        hint: 'Say you can swim (mi abil suyon)'
    },

    // Unit 14: Commands & Positions
    {
        id: 'directions',
        title: 'Giving Directions',
        unit: 14,
        difficulty: 'hard',
        context: 'Someone asks for help.',
        conversation: [
            { speaker: 'jan', text: 'Keloka sen bazar?', translation: 'Where is the market?' },
            { speaker: 'you', text: '', translation: 'Go left, then go straight.' }
        ],
        acceptedAnswers: ['am idi ruke, ger am idi fronta', 'idi ruke', 'ruke'],
        hint: 'Give directions: go left (idi ruke)'
    },

    // Unit 15: Conditionals & Colors
    {
        id: 'if-rain',
        title: 'Making Plans',
        unit: 15,
        difficulty: 'hard',
        context: 'Planning for weather.',
        conversation: [
            { speaker: 'jan', text: 'Eger hay barix, keto imi xa ergo?', translation: 'If it rains, what will we do?' },
            { speaker: 'you', text: '', translation: 'If it rains, we will stay home.' }
        ],
        acceptedAnswers: ['eger hay barix, imi xa ogar in', 'imi xa ogar', 'ogar in'],
        hint: 'Say we will stay home (imi xa ogar in)'
    },

    // Unit 16: Weather & Degree
    {
        id: 'weather-chat',
        title: 'Weather Talk',
        unit: 16,
        difficulty: 'easy',
        context: 'Commenting on the weather.',
        conversation: [
            { speaker: 'jan', text: 'Hay sol! Nundin sen garme.', translation: 'It\'s sunny! Today is hot.' },
            { speaker: 'you', text: '', translation: 'Yes! It is a little hot.' }
        ],
        acceptedAnswers: ['si! to sen lilmo garme', 'si, lilmo garme', 'garme', 'si'],
        hint: 'Agree it is a little hot (lilmo garme)'
    },

    // Unit 17: Recipients & Clauses
    {
        id: 'i-know-that',
        title: 'Sharing Knowledge',
        unit: 17,
        difficulty: 'hard',
        context: 'Discussing something you know.',
        conversation: [
            { speaker: 'jan', text: 'Te xa ata posdin.', translation: 'He will come tomorrow.' },
            { speaker: 'you', text: '', translation: 'I know that he will come.' }
        ],
        acceptedAnswers: ['mi xana ki te xa ata', 'mi xana', 'xana'],
        hint: 'Say you know that (mi xana ki...)'
    },

    // Unit 18: Time Expressions
    {
        id: 'time-talk',
        title: 'Time Talk',
        unit: 18,
        difficulty: 'medium',
        context: 'Discussing when to meet.',
        conversation: [
            { speaker: 'jan', text: 'Kewatu yu xa ata?', translation: 'When will you come?' },
            { speaker: 'you', text: '', translation: 'I will come tomorrow.' }
        ],
        acceptedAnswers: ['mi xa ata posdin', 'posdin', 'mi xa ata'],
        hint: 'Say you will come tomorrow (mi xa ata posdin)'
    },

    // Unit 19: Reasons & Equality
    {
        id: 'why-late',
        title: 'Explaining Why',
        unit: 19,
        difficulty: 'hard',
        context: 'Explaining a situation.',
        conversation: [
            { speaker: 'jan', text: 'Keseba yu sen tardi?', translation: 'Why are you late?' },
            { speaker: 'you', text: '', translation: 'Because there was traffic.' }
        ],
        acceptedAnswers: ['koski hay multi moyil', 'koski', 'mi no xana'],
        hint: 'Give a reason starting with koski (because)'
    },

    // Unit 20: Final Review
    {
        id: 'goodbye-friend',
        title: 'Farewell',
        unit: 20,
        difficulty: 'easy',
        context: 'Saying goodbye to a friend.',
        conversation: [
            { speaker: 'jan', text: 'Mi xa idi nun. Xanti ji bon!', translation: 'I will go now. Peace and good!' },
            { speaker: 'you', text: '', translation: 'Goodbye! See you soon!' }
        ],
        acceptedAnswers: ['xanti! mi xa oko yu xosu', 'xanti', 'bon', 'xanti ji bon'],
        hint: 'Wish them peace (xanti) or say goodbye'
    }
];

export default dialogues;
