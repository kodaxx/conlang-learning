export default {
    id: '11-pi',
    name: 'Grouping with pi',
    description: 'Learn to group modifiers for complex descriptions',
    icon: '🔀',
    xpReward: 30,

    teaching: [
        {
            title: "The pi Particle",
            content: `When you have multiple modifiers, they stack one after another. But what if you want to group them differently?

That's what **pi** is for — it regroups modifiers.`,
            vocabulary: [
                { word: 'pi', translation: '(modifier grouper)' },
                { word: 'tomo', translation: 'building, room, house' },
                { word: 'ijo', translation: 'thing, something' },
                { word: 'kalama', translation: 'sound, noise, voice' }
            ]
        },
        {
            title: "Why We Need pi",
            content: `Consider "jan pona mute":
- jan pona = good person / friend
- jan pona mute = **many** friends (mute modifies jan pona)

But what if you want to say "very good person"? You need **pi**:`,
            examples: [
                { tokipona: "jan pona mute", english: "many friends", breakdown: "(jan pona) mute = many (good people)" },
                { tokipona: "jan pi pona mute", english: "very good person", breakdown: "jan (pi pona mute) = person of (much goodness)" }
            ],
            tip: "pi lets you say 'thing OF [modifier phrase]' instead of just stacking modifiers"
        },
        {
            title: "Using pi",
            content: `**pi** creates a modifier phrase. Everything after pi describes what comes before:`,
            examples: [
                { tokipona: "tomo pi telo nasa", english: "bar / pub (building of crazy water)", breakdown: "tomo + pi + telo nasa" },
                { tokipona: "jan pi sona mute", english: "wise person / expert", breakdown: "person + of + much knowledge" },
                { tokipona: "ijo pi pona ale", english: "thing of all goodness", breakdown: "" }
            ]
        },
        {
            title: "tomo - Buildings",
            content: `**tomo** means building, room, house, or indoor space:`,
            examples: [
                { tokipona: "tomo", english: "building, house, room", breakdown: "" },
                { tokipona: "tomo tawa", english: "vehicle (moving building)", breakdown: "building + moving" },
                { tokipona: "tomo moku", english: "restaurant (food building)", breakdown: "building + food" }
            ]
        },
        {
            title: "ijo and kalama",
            content: `**ijo** = thing, something, stuff
**kalama** = sound, noise, to make sound`,
            examples: [
                { tokipona: "ijo ni", english: "this thing", breakdown: "" },
                { tokipona: "kalama musi", english: "music (fun sound)", breakdown: "sound + fun" },
                { tokipona: "mi kalama", english: "I make noise", breakdown: "" }
            ]
        }
    ],

    vocabulary: [
        { word: 'pi', translation: '(modifier grouper)', phonetic: 'pee' },
        { word: 'tomo', translation: 'building, room, house', phonetic: 'TOH-moh' },
        { word: 'ijo', translation: 'thing, something', phonetic: 'EE-yoh' },
        { word: 'kalama', translation: 'sound, noise', phonetic: 'kah-LAH-mah' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What is "pi" used for?',
            options: ['Commands', 'Grouping modifiers', 'Objects', 'Questions'],
            correctAnswer: 'Grouping modifiers',
            hint: 'Reorganizing how modifiers work'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "tomo" mean?',
            options: ['food', 'building/house', 'sound', 'thing'],
            correctAnswer: 'building/house',
            hint: 'Indoor structures'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "jan pona mute"',
            correctAnswers: ['many friends', 'many good people', 'a lot of friends'],
            hint: '(jan pona) + mute = many (friends)'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "jan pi pona mute"',
            correctAnswers: ['very good person', 'person of much good', 'extremely good person'],
            hint: 'jan + pi + (pona mute) = person of (much goodness)'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "tomo moku"',
            correctAnswers: ['restaurant', 'dining room', 'eating place', 'food building'],
            hint: 'building + food'
        },
        {
            type: 'fill-blank',
            prompt: 'jan ___ sona mute. (wise person / expert)',
            options: ['li', 'pi', 'e', 'o'],
            correctAnswer: 'pi',
            hint: 'Person OF much knowledge'
        },
        {
            type: 'fill-blank',
            prompt: 'tomo ___. (restaurant)',
            options: ['lape', 'moku', 'toki', 'pali'],
            correctAnswer: 'moku',
            hint: 'food building = restaurant'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "vehicle" (lit. moving building)',
            words: ['tomo', 'tawa', 'pi', 'moku'],
            correctAnswer: ['tomo', 'tawa'],
            hint: 'building + moving'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "wise person"',
            words: ['jan', 'pi', 'sona', 'mute', 'pona'],
            correctAnswer: ['jan', 'pi', 'sona', 'mute'],
            hint: 'person + pi + knowledge + much'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "this thing"',
            correctAnswers: ['ijo ni', 'ni'],
            hint: 'thing + this'
        },
        {
            type: 'translation',
            prompt: 'Translate to Toki Pona: "I make noise"',
            correctAnswers: ['mi kalama'],
            hint: 'I + sound/noise'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "kalama" mean?',
            options: ['building', 'thing', 'sound/noise', 'time'],
            correctAnswer: 'sound/noise',
            hint: 'What you hear'
        }
    ]
};
