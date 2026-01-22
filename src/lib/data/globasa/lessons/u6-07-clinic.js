// Unit 6: Communication - Lesson 7: Clinic & The -dom Suffix
// New words: medisdom (clinic/hospital)

export default {
    id: 'u6-07-clinic',
    name: 'Clinic & Places',
    unit: 6,
    unitName: 'Communication',
    lessonNumber: 7,
    description: 'Learn the -dom suffix for creating place words',
    icon: '🏥',
    xpReward: 15,

    teaching: [
        {
            title: 'The -dom Suffix',
            content: 'Add **-dom** to create words for places:',
            examples: [
                { globasa: 'medis (medicine) + dom = medisdom', english: 'clinic/hospital' }
            ],
            tip: 'Compare: -yen = person, -dom = place. medisyen = doctor, medisdom = clinic'
        },
        {
            title: 'Clinic / Hospital',
            content: '**Medisdom** means "clinic" or "hospital":',
            vocabulary: [
                { word: 'medisdom', translation: 'clinic, hospital' }
            ],
            examples: [
                { globasa: 'Medisyen ergo in medisdom', english: 'The doctor works in the clinic' },
                { globasa: 'Mi xa idi cel medisdom', english: 'I will go to the hospital' }
            ]
        },
        {
            title: 'Comparing -yen and -dom',
            content: 'These suffixes help you build a rich vocabulary:',
            examples: [
                { globasa: 'medisyen', english: 'doctor (medicine-person)' },
                { globasa: 'medisdom', english: 'clinic (medicine-place)' },
                { globasa: 'alimyen', english: 'teacher (teaching-person)' }
            ],
            tip: 'You already know eskol (school). This is the place where alimyen (teachers) work!'
        }
    ],

    vocabulary: [
        { word: 'medisdom', translation: 'clinic, hospital' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'medisyen', 'polisiyen', 'alimyen', 'yen',
        // Earlier
        'dom', 'ergo', 'in', 'idi', 'cel', 'xa', 'eskol'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match vocabulary',
            pairs: [
                { word: 'medisdom', translation: 'clinic/hospital' },
                { word: 'medisyen', translation: 'doctor' },
                { word: 'eskol', translation: 'school' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What does the -dom suffix create?',
            options: ['Words for people', 'Words for places', 'Words for actions'],
            correctAnswer: 'Words for places',
            hint: '-yen = person, -dom = place'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The doctor works in the clinic"',
            words: ['medisyen', 'ergo', 'in', 'medisdom', 'eskol'],
            correctAnswer: ['medisyen', 'ergo', 'in', 'medisdom'],
            hint: 'Doctor + work + in + clinic'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Mi xa idi cel medisdom"',
            correctAnswers: ['I will go to the hospital', 'I will go to the clinic'],
            hint: 'I + will + go + to + clinic/hospital'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "Teachers work in school"',
            correctAnswers: ['Alimyen ergo in eskol'],
            hint: 'Teachers + work + in + school'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between "medisyen" and "medisdom"?',
            options: [
                'medisyen = doctor (person), medisdom = clinic (place)',
                'medisyen = clinic (place), medisdom = doctor (person)',
                'They mean the same thing'
            ],
            correctAnswer: 'medisyen = doctor (person), medisdom = clinic (place)',
            hint: '-yen = person, -dom = place'
        }
    ]
};
