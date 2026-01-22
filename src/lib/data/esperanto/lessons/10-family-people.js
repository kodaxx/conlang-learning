export default {
    id: '10-family-people',
    name: 'Family & People',
    description: 'Family members and the ge- (mixed) prefix',
    icon: '👨‍👩‍👧',
    xpReward: 20,
    teaching: [
        {
            title: 'Family Members',
            content: 'Family words typically start with the male form, and you add **-in** for female.',
            examples: [
                { esperanto: 'Patro (Father)', english: 'Patrino (Mother)' },
                { esperanto: 'Frato (Brother)', english: 'Fratino (Sister)' }
            ]
        },
        {
            title: 'The Ge- Prefix',
            content: 'To talk about a mixed group (both male and female), or to generalize, add the **ge-** prefix.',
            examples: [
                { esperanto: 'Gepatroj', english: 'Parents (Father and Mother)' },
                { esperanto: 'Gefratoj', english: 'Siblings (Brothers and Sisters)' }
            ]
        }
    ],
    vocabulary: [
        { word: 'patro', translation: 'father', phonetic: 'PAH-troh' },
        { word: 'patrino', translation: 'mother', phonetic: 'pah-TREE-noh' },
        { word: 'gepatroj', translation: 'parents', phonetic: 'geh-PAH-troy' },
        { word: 'frato', translation: 'brother', phonetic: 'FRAH-toh' },
        { word: 'fratino', translation: 'sister', phonetic: 'frah-TEE-noh' },
        { word: 'infano', translation: 'child', phonetic: 'in-FAH-noh' },
        { word: 'familio', translation: 'family', phonetic: 'fah-mee-LEE-oh' },
        { word: 'amiko', translation: 'friend', phonetic: 'ah-MEE-koh' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does the prefix "ge-" do?',
            options: ['Makes it plural', 'Includes both genders', 'Makes it opposite', 'Makes it a place'],
            correctAnswer: 'Includes both genders',
            hint: 'patro (father) -> gepatroj (parents)'
        },
        {
            type: 'translation',
            prompt: 'Translate: "La gepatroj"',
            correctAnswers: ['The parents'],
            hint: 'Father and mother together'
        },
        {
            type: 'matching',
            prompt: 'Match family',
            leftCards: [
                { id: 'l1', text: 'patro', pairId: 'p1' },
                { id: 'l2', text: 'patrino', pairId: 'p2' },
                { id: 'l3', text: 'frato', pairId: 'p3' },
                { id: 'l4', text: 'amiko', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'father', pairId: 'p1' },
                { id: 'r2', text: 'mother', pairId: 'p2' },
                { id: 'r3', text: 'brother', pairId: 'p3' },
                { id: 'r4', text: 'friend', pairId: 'p4' }
            ]
        },
        {
            type: 'fill-blank',
            prompt: 'Ŝi estas mia ___. (sister)',
            options: ['frato', 'fratino', 'patro', 'amiko'],
            correctAnswer: 'fratino',
            hint: 'Add -in for female'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "The family eats"',
            words: ['la', 'familio', 'manĝas', 'kuras'],
            correctAnswer: ['la', 'familio', 'manĝas'],
            hint: 'familio = family'
        }
    ]
};
