export default {
    id: '12-correlatives-1',
    name: 'Correlatives 1',
    description: 'Questions (Ki-) and Pointers (Ti-)',
    icon: '📊',
    xpReward: 25,
    teaching: [
        {
            title: 'The Table of Words',
            content: 'Esperanto has a logical table of "Correlatives" (question and answer words). You combine a beginning part + an ending part.',
            examples: []
        },
        {
            title: 'Ki- (Questions) vs Ti- (Pointers)',
            content: '**Ki-** starts a question words. **Ti-** starts a pointer word.',
            examples: [
                { esperanto: 'Kio? (What?)', english: 'Tio (That thing)' },
                { esperanto: 'Kiu? (Who/Which?)', english: 'Tiu (That person/one)' },
                { esperanto: 'Kie? (Where?)', english: 'Tie (There)' }
            ]
        },
        {
            title: 'Endings',
            content: '**-o** = Thing. **-u** = Person. **-e** = Place.',
            examples: [
                { esperanto: 'Kio (What thing)', english: 'Kiu (Who)', breakdown: 'Ki (question) + o/u' }
            ]
        }
    ],
    vocabulary: [
        { word: 'kiu', translation: 'who/which', phonetic: 'KEE-oo' },
        { word: 'tiu', translation: 'that person/one', phonetic: 'TEE-oo' },
        { word: 'kio', translation: 'what', phonetic: 'KEE-oh' },
        { word: 'tio', translation: 'that thing', phonetic: 'TEE-oh' },
        { word: 'kie', translation: 'where', phonetic: 'KEE-eh' },
        { word: 'tie', translation: 'there', phonetic: 'TEE-eh' },
        { word: 'kiel', translation: 'how', phonetic: 'KEE-el' },
        { word: 'tiel', translation: 'so/in that way', phonetic: 'TEE-el' }
    ],
    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "kiu" mean?',
            options: ['where', 'who', 'how', 'when'],
            correctAnswer: 'who',
            hint: '-u endings refer to individuals'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "where"?',
            options: ['kie', 'tie', 'kio', 'tio'],
            correctAnswer: 'kie',
            hint: '-e endings refer to place'
        },
        {
            type: 'matching',
            prompt: 'Match pairs',
            leftCards: [
                { id: 'l1', text: 'kiu', pairId: 'p1' },
                { id: 'l2', text: 'tiu', pairId: 'p2' },
                { id: 'l3', text: 'kie', pairId: 'p3' },
                { id: 'l4', text: 'tie', pairId: 'p4' }
            ],
            rightCards: [
                { id: 'r1', text: 'who', pairId: 'p1' },
                { id: 'r2', text: 'that one', pairId: 'p2' },
                { id: 'r3', text: 'where', pairId: 'p3' },
                { id: 'r4', text: 'there', pairId: 'p4' }
            ]
        },
        {
            type: 'translation',
            prompt: 'Translate: "Kiu vi estas?"',
            correctAnswers: ['Who are you?'],
            hint: 'Asking for identity'
        },
        {
            type: 'word-bank',
            prompt: 'Build: "Where is that thing?"',
            words: ['kie', 'estas', 'tio', 'tie', 'tiu'],
            correctAnswer: ['kie', 'estas', 'tio'],
            hint: 'tio = that thing'
        },
        {
            type: 'fill-blank',
            prompt: 'Mi loĝas ___. (there)',
            options: ['tie', 'kie', 'tio', 'kio'],
            correctAnswer: 'tie',
            hint: 'Follows the pattern of kie/tie'
        },
        {
            type: 'translation',
            prompt: 'Translate: "Tio estas bona"',
            correctAnswers: ['That is good', 'That thing is good'],
            hint: 'Tio refers to a general thing/concept'
        }
    ]
};
