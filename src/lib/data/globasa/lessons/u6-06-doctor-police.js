// Unit 6: Communication - Lesson 6: Doctor & Police
// New words: medisyen (doctor), polisiyen (police officer)

export default {
    id: 'u6-06-doctor-police',
    name: 'Doctor & Police',
    unit: 6,
    unitName: 'Communication',
    lessonNumber: 6,
    description: 'Learn more occupation words using the -yen suffix',
    icon: '👨‍⚕️',
    xpReward: 15,

    teaching: [
        {
            title: 'Doctor',
            content: '**Medisyen** means "doctor" (medis = medicine + yen = person):',
            vocabulary: [
                { word: 'medisyen', translation: 'doctor' }
            ],
            examples: [
                { globasa: 'Medisyen sen in dom', english: 'The doctor is in the building' },
                { globasa: 'Mi xa idi cel medisyen', english: 'I will go to the doctor' }
            ]
        },
        {
            title: 'Police Officer',
            content: '**Polisiyen** means "police officer" (polisi = police + yen = person):',
            vocabulary: [
                { word: 'polisiyen', translation: 'police officer' }
            ],
            examples: [
                { globasa: 'Polisiyen le ata', english: 'The police officer came' },
                { globasa: 'Te sen polisiyen', english: 'He/She is a police officer' }
            ]
        },
        {
            title: 'The -yen Pattern',
            content: 'Notice the pattern for creating occupation words:',
            examples: [
                { globasa: 'alim (teach) + yen → alimyen', english: 'teacher' },
                { globasa: 'medis (medicine) + yen → medisyen', english: 'doctor' },
                { globasa: 'polisi (police) + yen → polisiyen', english: 'police officer' }
            ],
            tip: 'You can create many occupation words by adding -yen!'
        }
    ],

    vocabulary: [
        { word: 'medisyen', translation: 'doctor' },
        { word: 'polisiyen', translation: 'police officer' }
    ],

    reviewVocabulary: [
        // Recent lessons
        'yen', 'alimyen', 'idi', 'ata', 'cel',
        // Earlier
        'sen', 'dom', 'le', 'xa', 'bon'
    ],

    exercises: [
        {
            type: 'matching',
            prompt: 'Match occupations',
            pairs: [
                { word: 'medisyen', translation: 'doctor' },
                { word: 'polisiyen', translation: 'police officer' },
                { word: 'alimyen', translation: 'teacher' }
            ]
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "medisyen" literally mean?',
            options: ['Medicine place', 'Medicine person', 'Medical building'],
            correctAnswer: 'Medicine person',
            hint: 'medis + yen'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The police officer came"',
            words: ['polisiyen', 'medisyen', 'le', 'ata', 'idi'],
            correctAnswer: ['polisiyen', 'le', 'ata'],
            hint: 'Police officer + past + come'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Medisyen sen in dom"',
            correctAnswers: ['The doctor is in the building'],
            hint: 'Doctor + is + in + building'
        },
        {
            type: 'translation',
            prompt: 'Translate to Globasa: "She is a police officer"',
            correctAnswers: ['Te sen polisiyen'],
            hint: 'She + is + police officer'
        },
        {
            type: 'multiple-choice',
            prompt: 'All of these words use -yen suffix except:',
            options: ['alimyen', 'medisyen', 'eskol', 'polisiyen'],
            correctAnswer: 'eskol',
            hint: 'Eskol means school, not a person'
        }
    ]
};
