// Lesson 05: Modal Verbs in Una
// Covers po-, te-, vol-, pro- modal prefixes and stacking order

export default {
    id: '05-modal-verbs',
    name: 'Modal Verbs',
    description: 'Learn to express ability, obligation, desire, and attempts',
    icon: '💪',
    xpReward: 40,

    teaching: [
        {
            title: "Modal Prefixes",
            content: `Una uses **modal prefixes** to express ability, obligation, desire, and attempts.

**The Four Modal Prefixes:**
• **po-** = can (ability)
• **te-** = must (obligation)
• **vol-** = want (desire)
• **pro-** = try (attempt)

These attach directly to the verb root.`,
            vocabulary: [
                { word: 'po-', translation: 'can (ability)' },
                { word: 'te-', translation: 'must (obligation)' },
                { word: 'vol-', translation: 'want (desire)' },
                { word: 'pro-', translation: 'try (attempt)' }
            ]
        },
        {
            title: "Ability with po-",
            content: `**po-** expresses what you CAN do:

• **mi po-kama** = I can speak
• **li po-lupa kyla** = He/she can run fast
• **kano po-wisa** = The dog can see

**Negation:**
• **mi ne po-kama** = I cannot speak`,
            examples: [
                { una: 'mi po-mana', english: 'I can eat' },
                { una: 'wi po-tana', english: 'You can understand' },
                { una: 'li ne po-pelya', english: 'He/she cannot fly' }
            ]
        },
        {
            title: "Obligation with te-",
            content: `**te-** expresses what you MUST do:

• **mi te-moka** = I must work
• **wi te-mana** = You must eat
• **ni te-go** = We must go

**Negation:**
• **wi ne te-go** = You do not have to go (not obligated)`,
            examples: [
                { una: 'mi te-sipa', english: 'I must sleep' },
                { una: 'li te-pela mani', english: 'He/she must pay money' },
                { una: 'kini te-leta puko', english: 'The child must read the book' }
            ]
        },
        {
            title: "Desire with vol-",
            content: `**vol-** expresses what you WANT to do:

• **mi vol-mana pomo** = I want to eat an apple
• **li vol-pina wata** = He/she wants to drink water
• **wi vol-go siti** = You want to go to the city

**Negation:**
• **mi ne vol-moka** = I do not want to work`,
            examples: [
                { una: 'mi vol-pila', english: 'I want to play' },
                { una: 'kini vol-sipa', english: 'The child wants to sleep' },
                { una: 'li ne vol-kama', english: 'He/she does not want to speak' }
            ]
        },
        {
            title: "Attempt with pro-",
            content: `**pro-** expresses what you TRY to do:

• **mi pro-tana** = I try to understand
• **li pro-pelya** = He/she tries to fly
• **wi pro-meka to** = You try to make it

**Negation:**
• **mi ne pro-meka** = I do not try to make`,
            examples: [
                { una: 'mi pro-leta puko', english: 'I try to read the book' },
                { una: 'kano pro-kapa piya', english: 'The dog tries to catch the bird' },
                { una: 'ni pro-tana wola', english: 'We try to understand the word' }
            ]
        },
        {
            title: "Stacking Order: TENSE → MODAL → ROOT",
            content: `When combining tense and modal prefixes, follow this order:

**TENSE → MODAL → ROOT**

**Examples:**
• **mi pas-vol-mana** = I wanted to eat
• **li pos-po-kama** = He/she will be able to speak
• **wi pas-te-moka** = You had to work
• **ni pos-pro-tana** = We will try to understand

The tense prefix (pas-/pos-) comes FIRST, then the modal (po-/te-/vol-/pro-), then the verb root.`,
            tip: "Order matters! TENSE → MODAL → ROOT",
            examples: [
                { una: 'mi pas-vol-pina wata malhota', english: 'I wanted to drink cold water' },
                { una: 'li pos-te-go', english: 'He/she will have to go' },
                { una: 'wi pas-pro-tana', english: 'You tried to understand' }
            ]
        },
        {
            title: "Complex Sentences",
            content: `Let's combine everything we've learned:

• **mano kuna pas-mana pomo malkuna**
  = The big man ate the small apple

• **wi vol-pina wata malhota ma?**
  = Do you want to drink cold water?

• **mi ne pos-po-go**
  = I will not be able to go`,
            examples: [
                { una: 'mano kuna pas-mana pomo malkuna', english: 'The big man ate the small apple' },
                { una: 'kini malkuna vol-pila', english: 'The small child wants to play' },
                { una: 'ni pas-po-wisa yama', english: 'We were able to see the mountain' }
            ]
        }
    ],

    vocabulary: [
        { word: 'po-', translation: 'can (ability)', phonetic: 'poh' },
        { word: 'te-', translation: 'must (obligation)', phonetic: 'teh' },
        { word: 'vol-', translation: 'want (desire)', phonetic: 'vohl' },
        { word: 'pro-', translation: 'try (attempt)', phonetic: 'proh' },
        { word: 'moka', translation: 'work', phonetic: 'MOH-kah' },
        { word: 'pelya', translation: 'fly', phonetic: 'PEL-yah' },
        { word: 'yama', translation: 'mountain', phonetic: 'YAH-mah' },
        { word: 'mano', translation: 'man', phonetic: 'MAH-noh' },
        { word: 'kini', translation: 'child', phonetic: 'KEE-nee' },
        { word: 'puko', translation: 'book', phonetic: 'POO-koh' },
        { word: 'mani', translation: 'money', phonetic: 'MAH-nee' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'What does "po-" express?',
            options: ['must (obligation)', 'want (desire)', 'can (ability)', 'try (attempt)'],
            correctAnswer: 'can (ability)',
            hint: 'About being able to do something'
        },
        {
            type: 'translation',
            prompt: 'Translate to Una: "I want to eat"',
            correctAnswers: ['mi vol-mana'],
            hint: 'vol- for want'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the correct stacking order?',
            options: ['MODAL → TENSE → ROOT', 'ROOT → TENSE → MODAL', 'TENSE → MODAL → ROOT', 'MODAL → ROOT → TENSE'],
            correctAnswer: 'TENSE → MODAL → ROOT',
            hint: 'Tense comes first!'
        },
        {
            type: 'translation',
            prompt: 'Translate to Una: "She tried to understand"',
            correctAnswers: ['li pas-pro-tana'],
            hint: 'past tense first, then pro- for try'
        },
        {
            type: 'multiple-choice',
            prompt: 'What does "te-moka" mean?',
            options: ['can work', 'want to work', 'must work', 'try to work'],
            correctAnswer: 'must work',
            hint: 'te- is about obligation'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "mi ne po-pelya"',
            correctAnswers: ['i cannot fly', 'i can not fly'],
            hint: 'ne = not, po- = can, pelya = fly'
        },
        {
            type: 'multiple-choice',
            prompt: 'How do you say "He will be able to speak"?',
            options: ['li po-pos-kama', 'li pos-po-kama', 'li kama-pos-po', 'li pos-kama-po'],
            correctAnswer: 'li pos-po-kama',
            hint: 'Tense first, then modal, then verb'
        },
        {
            type: 'translation',
            prompt: 'Translate to Una: "Do you want to drink cold water?"',
            correctAnswers: ['wi vol-pina wata malhota ma', 'wi vol-pina wata malhota ma?'],
            hint: 'vol- for want, malhota = cold (mal- + hota), ma = question'
        }
    ]
};
