export default {
    id: '12-body',
    name: 'Body & Senses',
    description: 'Learn words for body parts and sensory experiences',
    icon: '🫀',
    xpReward: 25,

    teaching: [
        {
            title: "The Body",
            content: `Let's learn words for the body and senses. In Toki Pona, body parts often have extended meanings.`,
            vocabulary: [
                { word: 'lawa', translation: 'head, mind, lead, control' },
                { word: 'oko', translation: 'eye' },
                { word: 'uta', translation: 'mouth, lips, oral' },
                { word: 'luka', translation: 'hand, arm (5)' },
                { word: 'noka', translation: 'foot, leg, bottom' }
            ]
        },
        {
            title: "Head and Mind: lawa",
            content: `**lawa** means head, but also mind, to lead, or to control:`,
            examples: [
                { tokipona: "lawa mi", english: "my head / my mind", breakdown: "" },
                { tokipona: "jan lawa", english: "leader / boss", breakdown: "person + head/leading" },
                { tokipona: "sina lawa e jan", english: "you lead the people", breakdown: "" }
            ],
            tip: "The head leads the body, so lawa also means 'to lead'"
        },
        {
            title: "Eyes and Looking",
            content: `**oko** means eye. Remember **lukin** means to see/look:`,
            examples: [
                { tokipona: "oko mi", english: "my eyes", breakdown: "" },
                { tokipona: "oko pona", english: "good eyes", breakdown: "" },
                { tokipona: "mi lukin kepeken oko", english: "I see using eyes", breakdown: "" }
            ]
        },
        {
            title: "Mouth and Hands",
            content: `**uta** = mouth, lips
**luka** = hand, arm (also the number 5!)`,
            examples: [
                { tokipona: "uta", english: "mouth", breakdown: "" },
                { tokipona: "mi moku kepeken uta", english: "I eat using my mouth", breakdown: "" },
                { tokipona: "luka mi", english: "my hands", breakdown: "" },
                { tokipona: "luka tu", english: "two hands / ten", breakdown: "5 + 2 = ten (two fives)" }
            ]
        },
        {
            title: "Feet and Legs",
            content: `**noka** means foot, leg, or the bottom of something:`,
            examples: [
                { tokipona: "noka mi", english: "my feet / my legs", breakdown: "" },
                { tokipona: "mi tawa kepeken noka", english: "I go using legs / I walk", breakdown: "" },
                { tokipona: "noka tomo", english: "bottom of the building / foundation", breakdown: "" }
            ]
        }
    ],

    vocabulary: [
        { word: 'lawa', translation: 'head, mind, lead', phonetic: 'LAH-wah' },
        { word: 'oko', translation: 'eye', phonetic: 'OH-koh' },
        { word: 'uta', translation: 'mouth, lips', phonetic: 'OO-tah' },
        { word: 'luka', translation: 'hand, arm, 5', phonetic: 'LOO-kah' },
        { word: 'noka', translation: 'foot, leg, bottom', phonetic: 'NOH-kah' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "lawa" mean?',
            options: ['hand', 'head/mind', 'foot', 'eye'],
            correctAnswer: 'head/mind',
            hint: 'At the top of your body'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "luka" mean?',
            options: ['head', 'foot', 'hand/arm', 'mouth'],
            correctAnswer: 'hand/arm',
            hint: 'You use it to grab things'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "noka" mean?',
            options: ['hand', 'eye', 'mouth', 'foot/leg'],
            correctAnswer: 'foot/leg',
            hint: 'At the bottom of your body'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "jan lawa"',
            correctAnswers: ['leader', 'boss', 'head person', 'person who leads'],
            hint: 'person + head/lead'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "luka mi"',
            correctAnswers: ['my hand', 'my hands', 'my arm', 'my arms'],
            hint: 'hand + my'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi tawa kepeken noka"',
            correctAnswers: ['I walk', 'I go by foot', 'I go using legs', 'I go by walking'],
            hint: 'I + go + using + foot/leg'
        },
        {
            type: 'fill-blank',
            prompt: '___ mi li pona. (My head/mind is good)',
            options: ['luka', 'noka', 'lawa', 'uta'],
            correctAnswer: 'lawa',
            hint: 'Head or mind'
        },
        {
            type: 'fill-blank',
            prompt: 'mi moku kepeken ___. (I eat using [mouth])',
            options: ['luka', 'noka', 'oko', 'uta'],
            correctAnswer: 'uta',
            hint: 'What you eat with'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "my eyes"',
            words: ['oko', 'mi', 'sina', 'luka'],
            correctAnswer: ['oko', 'mi'],
            hint: 'eye + my'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "leader" / "boss"',
            words: ['jan', 'lawa', 'pona', 'luka'],
            correctAnswer: ['jan', 'lawa'],
            hint: 'person + head/lead'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "my hands"',
            correctAnswers: ['luka mi'],
            hint: 'hand + my'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "good eyes"',
            correctAnswers: ['oko pona'],
            hint: 'eye + good'
        }
    ]
};
