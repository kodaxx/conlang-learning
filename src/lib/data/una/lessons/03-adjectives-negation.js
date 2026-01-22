// Lesson 03: Adjectives & Negation in Una
// Covers adjective placement, adverbs, negation with "ne", and the mal- prefix

export default {
    id: '03-adjectives-negation',
    name: 'Adjectives & Negation',
    description: 'Learn how adjectives work and how to negate statements',
    icon: '🚫',
    xpReward: 30,

    teaching: [
        {
            title: "Adjective Placement Review",
            content: `Remember: in Una, adjectives **always follow** the noun:

• **somo kuna** = big house
• **kano bona** = good dog
• **wata sena** = clean water

This is the opposite of English!

**More Adjectives:**
• **nawa** = new
• **sena** = clean
• **suka** = happy
• **luma** = light, bright`,
            vocabulary: [
                { word: 'nawa', translation: 'new' },
                { word: 'sena', translation: 'clean' },
                { word: 'suka', translation: 'happy' },
                { word: 'luma', translation: 'light, bright' }
            ],
            examples: [
                { una: 'somo nawa', english: 'new house' },
                { una: 'wata sena', english: 'clean water' },
                { una: 'kini suka', english: 'happy child' }
            ]
        },
        {
            title: "Adjectives as Adverbs",
            content: `In Una, adjectives can function as **adverbs** without changing form.

Place them **after the verb** to modify the action:

• **mi mana kyla** = I eat fast
• **li kama lowa** = He/she speaks loudly
• **wi meka bona** = You do (it) well

The same word works for both!`,
            vocabulary: [
                { word: 'kyla', translation: 'fast' },
                { word: 'lowa', translation: 'loud' }
            ],
            tip: "After noun = adjective. After verb = adverb.",
            examples: [
                { una: 'kano lupa kyla', english: 'The dog runs fast' },
                { una: 'mi meka bona', english: 'I do (it) well' },
                { una: 'li kama lowa', english: 'He/she speaks loudly' }
            ]
        },
        {
            title: "Negation with 'ne'",
            content: `To negate something, place **ne** directly **before** what you're negating:

**Negating verbs:**
• **mi mana** = I eat
• **mi ne mana** = I do not eat

**Negating adjectives (with zero copula):**
• **somo kuna** = The house is big
• **somo ne kuna** = The house is not big`,
            vocabulary: [
                { word: 'ne', translation: 'not (negation)' }
            ],
            examples: [
                { una: 'mi ne mana', english: 'I do not eat' },
                { una: 'li ne go', english: 'He/she does not go' },
                { una: 'somo ne kuna', english: 'The house is not big' }
            ]
        },
        {
            title: "More Negation Examples",
            content: `**ne** always goes right before what's being negated:

• **kano ne bona** = The dog is not good
• **wi ne wisa to** = You do not see it
• **mi ne nasi** = I do not know
• **pomo ne suna** = The apple is not red

The position of **ne** is important!`,
            vocabulary: [
                { word: 'suna', translation: 'red' }
            ],
            examples: [
                { una: 'kano ne bona', english: 'The dog is not good' },
                { una: 'wi ne tana', english: 'You do not understand' },
                { una: 'wata ne sena', english: 'The water is not clean' }
            ]
        },
        {
            title: "The Opposite Prefix 'mal-'",
            content: `The prefix **mal-** creates **direct semantic opposites** of adjectives with clear binary opposites.

**Core Rule:** The bare root is always the positive form.

**Canonical Pairs:**
• **bona** (good) → **malbona** (bad)
• **kuna** (big) → **malkuna** (small)
• **suka** (happy) → **malsuka** (sad)
• **luma** (light) → **malluma** (dark)
• **powa** (strong) → **malpowa** (weak)
• **tasa** (easy) → **maltasa** (difficult)
• **nawa** (new) → **malnawa** (old)
• **sena** (clean) → **malsena** (dirty)
• **hota** (hot) → **malhota** (cold)`,
            vocabulary: [
                { word: 'powa', translation: 'strong' },
                { word: 'tasa', translation: 'easy' },
                { word: 'hota', translation: 'hot' }
            ],
            examples: [
                { una: 'oni malsuka', english: 'sad person' },
                { una: 'kano malpowa', english: 'weak dog' },
                { una: 'to maltasa', english: 'it is difficult' }
            ]
        },
        {
            title: "mal- vs ne: Important Difference",
            content: `**ne** and **mal-** mean different things!

**ne bona** = "not good"
→ Neutral, ambiguous, merely absent of goodness

**malbona** = "bad"
→ The clear, direct opposite of good

**Examples:**
• **somo ne kuna** = The house is not big (neutral)
• **to ne tasa** = It's not easy (could be medium)
• **to maltasa** = It's difficult (definite opposite)`,
            tip: "Use ne for neutral negation, mal- for true opposites",
            examples: [
                { una: 'li ne suka', english: 'He/she is not happy (neutral)' },
                { una: 'li malsuka', english: 'He/she is sad (opposite)' },
                { una: 'wata ne sena', english: 'The water is not clean (neutral)' },
                { una: 'wata malsena', english: 'The water is dirty (opposite)' }
            ]
        },
        {
            title: "When NOT to Use mal-",
            content: `**mal-** only works with adjectives that have clear binary opposites.

**Do NOT use mal- with:**

1. **Nouns** — No malsomo, malwata, malkano
   → Use separate roots instead

2. **Colors** — No malsuna (opposite of red?)
   → Use separate color roots: lani (blue), kela (green)

3. **Adjectives without clear opposites**
   → mata (angry), sili (silly) have no mal- forms

**For nouns, express opposites with separate roots or descriptions.**`,
            vocabulary: [
                { word: 'lani', translation: 'blue' },
                { word: 'kela', translation: 'green' }
            ]
        }
    ],

    vocabulary: [
        { word: 'ne', translation: 'not (negation)', phonetic: 'neh' },
        { word: 'nawa', translation: 'new', phonetic: 'NAH-wah' },
        { word: 'sena', translation: 'clean', phonetic: 'SEH-nah' },
        { word: 'suka', translation: 'happy', phonetic: 'SOO-kah' },
        { word: 'luma', translation: 'light, bright', phonetic: 'LOO-mah' },
        { word: 'kyla', translation: 'fast', phonetic: 'KY-lah' },
        { word: 'lowa', translation: 'loud', phonetic: 'LOH-wah' },
        { word: 'powa', translation: 'strong', phonetic: 'POH-wah' },
        { word: 'tasa', translation: 'easy', phonetic: 'TAH-sah' },
        { word: 'hota', translation: 'hot', phonetic: 'HOH-tah' },
        { word: 'suna', translation: 'red', phonetic: 'SOO-nah' },
        { word: 'lani', translation: 'blue', phonetic: 'LAH-nee' },
        { word: 'kela', translation: 'green', phonetic: 'KEH-lah' },
        { word: 'malbona', translation: 'bad', phonetic: 'mal-BOH-nah' },
        { word: 'malsuka', translation: 'sad', phonetic: 'mal-SOO-kah' },
        { word: 'malluma', translation: 'dark', phonetic: 'mal-LOO-mah' }
    ],

    exercises: [
        {
            type: 'multiple-choice',
            prompt: 'How do you say "I do not eat" in Una?',
            options: ['mi mana ne', 'ne mi mana', 'mi ne mana', 'mana ne mi'],
            correctAnswer: 'mi ne mana',
            hint: 'ne goes before the verb'
        },
        {
            type: 'translation',
            prompt: 'Translate to Una: "new house"',
            correctAnswers: ['somo nawa'],
            hint: 'Adjective follows the noun'
        },
        {
            type: 'multiple-choice',
            prompt: 'What is the difference between "ne bona" and "malbona"?',
            options: ['They mean the same thing', 'ne bona = not good (neutral), malbona = bad (opposite)', 'malbona = very good', 'ne bona = opposite'],
            correctAnswer: 'ne bona = not good (neutral), malbona = bad (opposite)',
            hint: 'One is neutral, one is a true opposite'
        },
        {
            type: 'translation',
            prompt: 'Translate to Una: "sad person"',
            correctAnswers: ['oni malsuka'],
            hint: 'mal- + suka (happy) = sad'
        },
        {
            type: 'multiple-choice',
            prompt: 'Can you say "malsomo" (opposite of house)?',
            options: ['Yes, it means "not a house"', 'Yes, it means "bad house"', 'No, mal- does not apply to nouns', 'Yes, it means "destroyed house"'],
            correctAnswer: 'No, mal- does not apply to nouns',
            hint: 'mal- only works with certain adjectives'
        },
        {
            type: 'translation',
            prompt: 'Translate to English: "to maltasa"',
            correctAnswers: ['it is difficult', 'it is hard', 'that is difficult', 'that is hard'],
            hint: 'maltasa = opposite of easy'
        },
        {
            type: 'multiple-choice',
            prompt: 'Which adjectives can take mal-?',
            options: ['All adjectives', 'Only adjectives with clear binary opposites', 'Colors', 'All words'],
            correctAnswer: 'Only adjectives with clear binary opposites',
            hint: 'Not all adjectives have opposites'
        },
        {
            type: 'translation',
            prompt: 'Translate to Una: "The dog is not strong" (neutral)',
            correctAnswers: ['kano ne powa'],
            hint: 'Use ne for neutral negation'
        }
    ]
};
