export default {
    id: '11-food-drink',
    name: 'Food & Drink',
    description: 'Learn essential food vocabulary and dining phrases',
    icon: '🍎',
    xpReward: 25,
    teaching: [
        {
            title: 'Eating and Drinking',
            content: 'Two very common verbs are **manĝi** (to eat) and **trinki** (to drink).',
            examples: [
                { esperanto: 'Mi manĝas panon', english: 'I eat bread' },
                { esperanto: 'Li trinkas akvon', english: 'He drinks water' }
            ]
        },
        {
            title: 'Common Foods',
            content: 'Let\'s learn some basics to order in a restaurant!',
            vocabulary: [
                { word: 'pano', translation: 'bread' },
                { word: 'kafo', translation: 'coffee' },
                { word: 'fromaĝo', translation: 'cheese' }
            ]
        }
    ],
    vocabulary: [
        { word: 'pano', translation: 'bread', phonetic: 'PAH-noh' },
        { word: 'akvo', translation: 'water', phonetic: 'AHK-voh' },
        { word: 'lakto', translation: 'milk', phonetic: 'LAHK-toh' },
        { word: 'kafo', translation: 'coffee', phonetic: 'KAH-foh' },
        { word: 'teo', translation: 'tea', phonetic: 'TEH-oh' },
        { word: 'pomo', translation: 'apple', phonetic: 'POH-moh' },
        { word: 'fromaĝo', translation: 'cheese', phonetic: 'froh-MAH-joh' },
        { word: 'manĝi', translation: 'to eat', phonetic: 'MAHN-jee' },
        { word: 'trinki', translation: 'to drink', phonetic: 'TREEN-kee' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "pano" mean?',
            options: ['apple', 'bread', 'cheese', 'water'],
            correctAnswer: 'bread',
            hint: 'Think of the French word "pain"'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "Mi trinkas akvon"',
            correctAnswers: ['I drink water', 'I am drinking water'],
            hint: 'trinkas = drink, akvon = water (accusative)'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "coffee" in Esperanto?',
            options: ['teo', 'lakto', 'kafo', 'akvo'],
            correctAnswer: 'kafo',
            hint: 'Sounds very similar to the English word'
        },
        {
            type: 'fill-blank',
            prompt: 'Mi ___ pomon. (I eat an apple.)',
            options: ['trinkas', 'manĝas', 'estas', 'havas'],
            correctAnswer: 'manĝas',
            hint: 'The verb for eating'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "I drink milk"',
            words: ['mi', 'trinkas', 'manĝas', 'lakton', 'akvon'],
            correctAnswer: ['mi', 'trinkas', 'lakton'],
            hint: 'Use the drinking verb with milk'
        },
        {
            type: 'translation',
            prompt: 'Translate to Esperanto: "cheese"',
            correctAnswers: ['fromaĝo'],
            hint: 'Notice the special character ĝ (sounds like "j" in "judge")'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "manĝi" mean?',
            options: ['to drink', 'to eat', 'to cook', 'to buy'],
            correctAnswer: 'to eat',
            hint: 'Related to the French "manger"'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "La pomo estas bona"',
            correctAnswers: ['The apple is good'],
            hint: 'la = the, pomo = apple, estas = is, bona = good'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "He drinks tea and eats bread"',
            words: ['li', 'trinkas', 'teon', 'kaj', 'manĝas', 'panon', 'ŝi'],
            correctAnswer: ['li', 'trinkas', 'teon', 'kaj', 'manĝas', 'panon'],
            hint: 'Combine both actions with "kaj"'
        },
        {
            type: 'fill-blank',
            prompt: 'Ŝi trinkas ___ kaj ___. (She drinks coffee and tea.)',
            options: ['kafon, teon', 'pomon, panon', 'akvon, lakton', 'fromaĝon, panon'],
            correctAnswer: 'kafon, teon',
            hint: 'Two common hot beverages'
        }
    ]
};
