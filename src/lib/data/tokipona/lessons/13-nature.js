export default {
    id: '13-nature',
    name: 'Nature & Places',
    description: 'Learn words for the natural world and locations',
    icon: '🌍',
    xpReward: 25,

    teaching: [
        {
            title: "The Natural World",
            content: `Let's learn words for nature, places, and directions.`,
            vocabulary: [
                { word: 'ma', translation: 'land, earth, country, place' },
                { word: 'sewi', translation: 'up, above, sky, divine' },
                { word: 'anpa', translation: 'down, below, ground' },
                { word: 'nasin', translation: 'way, path, road, method' },
                { word: 'kasi', translation: 'plant, vegetation, leaf' }
            ]
        },
        {
            title: "Land and Places: ma",
            content: `**ma** covers land, earth, country, place, or outdoors:`,
            examples: [
                { tokipona: "ma", english: "land, place, country", breakdown: "" },
                { tokipona: "ma tomo", english: "city / town", breakdown: "land + buildings" },
                { tokipona: "ma kasi", english: "forest / garden", breakdown: "land + plants" },
                { tokipona: "ma telo", english: "lake / wetland / mud", breakdown: "land + water" }
            ]
        },
        {
            title: "Up and Down",
            content: `**sewi** = up, above, sky, divine, sacred
**anpa** = down, below, ground, humble`,
            examples: [
                { tokipona: "sewi", english: "up, sky, above", breakdown: "" },
                { tokipona: "anpa", english: "down, below, ground", breakdown: "" },
                { tokipona: "jan sewi", english: "divine being / god", breakdown: "person + above/divine" },
                { tokipona: "mi lon anpa tomo", english: "I am below the building", breakdown: "" }
            ]
        },
        {
            title: "Paths and Ways: nasin",
            content: `**nasin** means way, path, road, or method of doing something:`,
            examples: [
                { tokipona: "nasin", english: "path, road, way", breakdown: "" },
                { tokipona: "nasin tawa", english: "road / travel route", breakdown: "way + going" },
                { tokipona: "nasin pona", english: "good method / good way", breakdown: "way + good" }
            ]
        },
        {
            title: "Plants: kasi",
            content: `**kasi** covers all plants, vegetation, leaves:`,
            examples: [
                { tokipona: "kasi", english: "plant, tree, vegetation", breakdown: "" },
                { tokipona: "kasi suli", english: "tree (big plant)", breakdown: "plant + big" },
                { tokipona: "kasi lili", english: "flower / small plant", breakdown: "plant + small" }
            ]
        }
    ],

    vocabulary: [
        { word: 'ma', translation: 'land, country, place', phonetic: 'mah' },
        { word: 'sewi', translation: 'up, above, sky', phonetic: 'SEH-wee' },
        { word: 'anpa', translation: 'down, below, ground', phonetic: 'AHN-pah' },
        { word: 'nasin', translation: 'way, path, method', phonetic: 'NAH-seen' },
        { word: 'kasi', translation: 'plant, vegetation', phonetic: 'KAH-see' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "ma" mean?',
            options: ['water', 'land/country', 'sky', 'building'],
            correctAnswer: 'land/country',
            hint: 'The ground, places, countries'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "sewi" mean?',
            options: ['down', 'up/above/sky', 'path', 'plant'],
            correctAnswer: 'up/above/sky',
            hint: 'Looking upward'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "nasin" mean?',
            options: ['land', 'path/way', 'plant', 'down'],
            correctAnswer: 'path/way',
            hint: 'Road or method'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "ma tomo"',
            correctAnswers: ['city', 'town', 'urban area', 'city/town'],
            hint: 'land + buildings'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "kasi suli"',
            correctAnswers: ['tree', 'big plant', 'large tree'],
            hint: 'plant + big'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "nasin pona"',
            correctAnswers: ['good way', 'good path', 'good method', 'the right way'],
            hint: 'way + good'
        },
        {
            type: 'fill-blank',
            prompt: 'ma ___. (city / town)',
            options: ['kasi', 'telo', 'tomo', 'suli'],
            correctAnswer: 'tomo',
            hint: 'land of buildings'
        },
        {
            type: 'fill-blank',
            prompt: '___ suli. (tree / big plant)',
            options: ['ma', 'kasi', 'nasin', 'tomo'],
            correctAnswer: 'kasi',
            hint: 'What word means plant?'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "forest" (plant land)',
            words: ['ma', 'kasi', 'tomo', 'telo'],
            correctAnswer: ['ma', 'kasi'],
            hint: 'land + plant'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I am above"',
            words: ['mi', 'lon', 'sewi', 'anpa', 'li'],
            correctAnswer: ['mi', 'lon', 'sewi'],
            hint: 'I + at + above'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "down" or "below"',
            correctAnswers: ['anpa'],
            hint: 'The opposite of sewi'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "good place"',
            correctAnswers: ['ma pona'],
            hint: 'land/place + good'
        }
    ]
};
