// Toki Pona dialogue scenarios for the Dialogue Completion game
// Each dialogue is a conversation with a final response the user must provide

export const dialogues = [
    {
        id: 'greeting-1',
        title: 'A Friendly Greeting',
        difficulty: 'easy',
        context: 'You meet someone on the street.',
        conversation: [
            { speaker: 'jan', text: 'toki!', translation: 'Hello!' },
            { speaker: 'you', text: '', translation: 'Hello! I am good.' }
        ],
        acceptedAnswers: ['toki! mi pona', 'toki mi pona', 'toki! mi pona.', 'mi pona'],
        hint: 'Greet them back and say you are good'
    },
    {
        id: 'greeting-2',
        title: 'How Are You?',
        difficulty: 'easy',
        context: 'A friend asks how you are doing.',
        conversation: [
            { speaker: 'jan', text: 'sina pona ala pona?', translation: 'Are you good?' },
            { speaker: 'you', text: '', translation: 'Yes, I am good.' }
        ],
        acceptedAnswers: ['mi pona', 'pona', 'mi pona!', 'pona!'],
        hint: 'Confirm that you are good'
    },
    {
        id: 'name-1',
        title: 'What Is Your Name?',
        difficulty: 'easy',
        context: 'Someone wants to know your name.',
        conversation: [
            { speaker: 'jan', text: 'nimi sina li seme?', translation: 'What is your name?' },
            { speaker: 'you', text: '', translation: 'My name is [any name].' }
        ],
        acceptedAnswers: ['nimi mi li', 'mi jan', 'nimi mi'],
        hint: 'Start with "nimi mi li" followed by your name'
    },
    {
        id: 'want-food',
        title: 'Hungry?',
        difficulty: 'medium',
        context: 'Someone offers you food.',
        conversation: [
            { speaker: 'jan', text: 'sina wile ala wile moku?', translation: 'Do you want food?' },
            { speaker: 'you', text: '', translation: 'Yes, I want food.' }
        ],
        acceptedAnswers: ['mi wile moku', 'wile', 'mi wile', 'mi wile moku!'],
        hint: 'Say that you want food'
    },
    {
        id: 'thanks-1',
        title: 'Saying Thanks',
        difficulty: 'easy',
        context: 'Someone helps you.',
        conversation: [
            { speaker: 'jan', text: 'ni li pona tawa sina.', translation: 'This is good for you.' },
            { speaker: 'you', text: '', translation: 'Good! / Thank you!' }
        ],
        acceptedAnswers: ['pona', 'pona!', 'pona mute', 'pona mute!', 'sina pona'],
        hint: 'Express gratitude in Toki Pona style'
    },
    {
        id: 'where-water',
        title: 'Finding Water',
        difficulty: 'medium',
        context: 'You need to find water.',
        conversation: [
            { speaker: 'you', text: 'telo li lon seme?', translation: 'Where is the water?' },
            { speaker: 'jan', text: 'telo li lon tomo.', translation: 'The water is in the building.' },
            { speaker: 'you', text: '', translation: 'Good! / Thanks!' }
        ],
        acceptedAnswers: ['pona', 'pona!', 'pona mute'],
        hint: 'Thank them for the information'
    },
    {
        id: 'what-doing',
        title: 'What Are You Doing?',
        difficulty: 'medium',
        context: 'Someone asks about your activity.',
        conversation: [
            { speaker: 'jan', text: 'sina pali e seme?', translation: 'What are you doing?' },
            { speaker: 'you', text: '', translation: 'I am learning.' }
        ],
        acceptedAnswers: ['mi kama sona', 'mi pali', 'mi musi', 'mi lukin'],
        hint: 'Describe what you are doing'
    },
    {
        id: 'goodbye-1',
        title: 'Saying Goodbye',
        difficulty: 'easy',
        context: 'Time to leave.',
        conversation: [
            { speaker: 'jan', text: 'mi tawa!', translation: 'I am going! / Goodbye!' },
            { speaker: 'you', text: '', translation: 'Go well! / Goodbye!' }
        ],
        acceptedAnswers: ['tawa pona', 'tawa pona!', 'mi tawa', 'pona'],
        hint: 'Wish them a good journey'
    },
    {
        id: 'like-food',
        title: 'Food Preference',
        difficulty: 'medium',
        context: 'Discussing food.',
        conversation: [
            { speaker: 'jan', text: 'kili li pona tawa sina ala sina?', translation: 'Do you like fruit?' },
            { speaker: 'you', text: '', translation: 'Yes, fruit is good to me.' }
        ],
        acceptedAnswers: ['kili li pona tawa mi', 'pona', 'kili li pona', 'mi pona'],
        hint: 'Say that fruit is good to you'
    },
    {
        id: 'weather-sun',
        title: 'Nice Weather',
        difficulty: 'easy',
        context: 'Commenting on the weather.',
        conversation: [
            { speaker: 'jan', text: 'suno li pona!', translation: 'The sun is good! / Nice day!' },
            { speaker: 'you', text: '', translation: 'Yes! The sun is very good.' }
        ],
        acceptedAnswers: ['pona', 'suno li pona', 'suno li pona mute', 'pona mute'],
        hint: 'Agree about the nice weather'
    },
    {
        id: 'friend-1',
        title: 'My Friend',
        difficulty: 'medium',
        context: 'Introducing someone.',
        conversation: [
            { speaker: 'jan', text: 'ni li jan seme?', translation: 'Who is this person?' },
            { speaker: 'you', text: '', translation: 'This is my friend.' }
        ],
        acceptedAnswers: ['ni li jan pona mi', 'ona li jan pona mi', 'jan pona mi'],
        hint: 'Say this is your friend (jan pona)'
    },
    {
        id: 'sleep-time',
        title: 'Bedtime',
        difficulty: 'easy',
        context: 'Getting ready for sleep.',
        conversation: [
            { speaker: 'jan', text: 'tenpo lape li kama.', translation: 'Sleep time is coming.' },
            { speaker: 'you', text: '', translation: 'Good night! / Sleep well!' }
        ],
        acceptedAnswers: ['lape pona', 'lape pona!', 'pona', 'mi lape'],
        hint: 'Wish them good sleep'
    }
];

export default dialogues;
