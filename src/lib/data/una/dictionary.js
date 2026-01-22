// Una Language Dictionary
// Official vocabulary from the Una Language Specification
// 200 root words organized by category

// ============================================
// 1. FUNCTION WORDS & PARTICLES (26)
// ============================================

export const pronouns = [
    { word: 'mi', translation: 'I, me', category: 'pronoun' },
    { word: 'wi', translation: 'you', category: 'pronoun' },
    { word: 'li', translation: 'he, she, they (animate)', category: 'pronoun' },
    { word: 'to', translation: 'it (inanimate)', category: 'pronoun' },
    { word: 'ni', translation: 'we, us', category: 'pronoun' }
];

export const particles = [
    { word: 'muna', translation: 'plural marker', category: 'particle' },
    { word: 'ne', translation: 'not (negation)', category: 'particle' },
    { word: 'ma', translation: 'yes/no question marker', category: 'particle' },
    { word: 'ke', translation: 'what / wh- marker', category: 'particle' },
    { word: 're', translation: 'again (aspect)', category: 'particle' },
    { word: 'mal', translation: 'opposite prefix', category: 'particle' },
    { word: 'olo', translation: 'all, every', category: 'particle' },
    { word: 'sola', translation: 'alone, only', category: 'particle' }
];

export const tensePrefixes = [
    { prefix: 'pas-', meaning: 'past tense', example: 'pas-mana = ate' },
    { prefix: 'pos-', meaning: 'future tense', example: 'pos-mana = will eat' }
];

export const modalPrefixes = [
    { prefix: 'po-', meaning: 'can (ability)', example: 'po-mana = can eat' },
    { prefix: 'te-', meaning: 'must (obligation)', example: 'te-mana = must eat' },
    { prefix: 'vol-', meaning: 'want (desire)', example: 'vol-mana = want to eat' },
    { prefix: 'pro-', meaning: 'try (attempt)', example: 'pro-mana = try to eat' }
];

export const connectors = [
    { word: 'an', translation: 'and', category: 'connector' },
    { word: 'min', translation: 'but', category: 'connector' },
    { word: 'kom', translation: 'with', category: 'preposition' },
    { word: 'in', translation: 'in', category: 'preposition' },
    { word: 'on', translation: 'on', category: 'preposition' },
    { word: 'at', translation: 'at', category: 'preposition' },
    { word: 'se', translation: 'of (possession)', category: 'preposition' }
];

// ============================================
// 2. DERIVATIONAL SUFFIXES (6)
// ============================================

export const suffixes = [
    { suffix: '-oni', meaning: 'person/agent', example: 'mekaoni = maker' },
    { suffix: '-lok', meaning: 'place', example: 'mekalok = factory' },
    { suffix: '-ka', meaning: 'tool', example: 'mekaka = machine' },
    { suffix: '-to', meaning: 'object/product', example: 'manato = food' },
    { suffix: '-sa', meaning: 'abstract quality', example: 'bonasa = goodness' },
    { suffix: '-do', meaning: 'act/event', example: 'manado = eating (act)' }
];

// ============================================
// 3. NUMBERS (10)
// ============================================

export const numbers = [
    { word: 'wan', translation: '1, one', category: 'number' },
    { word: 'tu', translation: '2, two', category: 'number' },
    { word: 'ti', translation: '3, three', category: 'number' },
    { word: 'po', translation: '4, four', category: 'number' },
    { word: 'pa', translation: '5, five', category: 'number' },
    { word: 'sik', translation: '6, six', category: 'number' },
    { word: 'sep', translation: '7, seven', category: 'number' },
    { word: 'ok', translation: '8, eight', category: 'number' },
    { word: 'nay', translation: '9, nine', category: 'number' },
    { word: 'ten', translation: '10, ten', category: 'number' }
];

// ============================================
// 4. VERBS (55)
// ============================================

export const verbs = [
    // Basic actions
    { word: 'mana', translation: 'eat', category: 'action' },
    { word: 'pina', translation: 'drink', category: 'action' },
    { word: 'sipa', translation: 'sleep', category: 'action' },
    { word: 'meka', translation: 'do, make', category: 'action' },
    { word: 'usa', translation: 'use', category: 'action' },
    { word: 'kipa', translation: 'keep', category: 'action' },
    { word: 'puta', translation: 'put', category: 'action' },
    { word: 'napa', translation: 'take', category: 'action' },
    { word: 'paka', translation: 'give', category: 'action' },
    { word: 'kuta', translation: 'cut', category: 'action' },
    { word: 'wasa', translation: 'wash', category: 'action' },
    { word: 'kuka', translation: 'cook', category: 'action' },

    // Motion
    { word: 'go', translation: 'go', category: 'motion' },
    { word: 'nema', translation: 'come', category: 'motion' },
    { word: 'waka', translation: 'walk', category: 'motion' },
    { word: 'lupa', translation: 'run', category: 'motion' },
    { word: 'pelya', translation: 'fly', category: 'motion' },
    { word: 'kasa', translation: 'fall', category: 'motion' },
    { word: 'mowa', translation: 'move', category: 'motion' },

    // Perception
    { word: 'wisa', translation: 'see', category: 'perception' },
    { word: 'sona', translation: 'hear', category: 'perception' },
    { word: 'toka', translation: 'touch', category: 'perception' },
    { word: 'senta', translation: 'feel', category: 'perception' },
    { word: 'wata', translation: 'watch', category: 'perception' },
    { word: 'sika', translation: 'seek, look for', category: 'perception' },

    // Communication
    { word: 'kama', translation: 'speak, call', category: 'communication' },
    { word: 'saya', translation: 'say', category: 'communication' },
    { word: 'leta', translation: 'read', category: 'communication' },
    { word: 'pena', translation: 'write', category: 'communication' },
    { word: 'tila', translation: 'tell', category: 'communication' },

    // Cognition
    { word: 'nasi', translation: 'know', category: 'cognition' },
    { word: 'tana', translation: 'understand', category: 'cognition' },
    { word: 'mena', translation: 'think', category: 'cognition' },

    // Emotional
    { word: 'ama', translation: 'love', category: 'emotion' },
    { word: 'laka', translation: 'like', category: 'emotion' },
    { word: 'lapa', translation: 'laugh', category: 'emotion' },

    // Position
    { word: 'sita', translation: 'sit', category: 'position' },
    { word: 'sata', translation: 'stand', category: 'position' },
    { word: 'pana', translation: 'open', category: 'action' },
    { word: 'klos', translation: 'close', category: 'action' },
    { word: 'sopa', translation: 'stop', category: 'action' },
    { word: 'suta', translation: 'start', category: 'action' },

    // Commerce
    { word: 'pola', translation: 'buy', category: 'commerce' },
    { word: 'sela', translation: 'sell', category: 'commerce' },
    { word: 'pela', translation: 'pay', category: 'commerce' },
    { word: 'moka', translation: 'work', category: 'commerce' },

    // Other
    { word: 'pila', translation: 'play', category: 'action' },
    { word: 'yupa', translation: 'help', category: 'action' },
    { word: 'wita', translation: 'wait', category: 'action' },
    { word: 'nisa', translation: 'need', category: 'action' },
    { word: 'kapa', translation: 'catch', category: 'action' },
    { word: 'lusa', translation: 'lose', category: 'action' },
    { word: 'wina', translation: 'win', category: 'action' },
    { word: 'moli', translation: 'die', category: 'action' },
    { word: 'kila', translation: 'kill', category: 'action' }
];

// ============================================
// 5. NOUNS (58)
// ============================================

export const nouns = [
    // People
    { word: 'oni', translation: 'person', category: 'people' },
    { word: 'mano', translation: 'man', category: 'people' },
    { word: 'woma', translation: 'woman', category: 'people' },
    { word: 'kini', translation: 'child', category: 'people' },
    { word: 'mama', translation: 'mother', category: 'people' },
    { word: 'papa', translation: 'father', category: 'people' },

    // Places
    { word: 'somo', translation: 'house', category: 'places' },
    { word: 'siti', translation: 'city', category: 'places' },
    { word: 'waya', translation: 'way, road', category: 'places' },
    { word: 'loka', translation: 'place', category: 'places' },
    { word: 'ruma', translation: 'room', category: 'places' },
    { word: 'sukul', translation: 'school', category: 'places' },

    // Nature
    { word: 'sola', translation: 'sun', category: 'nature' },
    { word: 'luna', translation: 'moon', category: 'nature' },
    { word: 'kaya', translation: 'sky', category: 'nature' },
    { word: 'tela', translation: 'earth, land', category: 'nature' },
    { word: 'yoka', translation: 'tree', category: 'nature' },
    { word: 'pala', translation: 'fire', category: 'nature' },
    { word: 'wata', translation: 'water', category: 'nature' },
    { word: 'liwa', translation: 'river', category: 'nature' },
    { word: 'leko', translation: 'lake', category: 'nature' },
    { word: 'yama', translation: 'mountain', category: 'nature' },

    // Animals
    { word: 'kano', translation: 'dog', category: 'animals' },
    { word: 'misu', translation: 'cat', category: 'animals' },
    { word: 'piya', translation: 'bird', category: 'animals' },
    { word: 'pisa', translation: 'fish', category: 'animals' },

    // Food
    { word: 'pomo', translation: 'apple', category: 'food' },

    // Time
    { word: 'tem', translation: 'time', category: 'time' },
    { word: 'daya', translation: 'day', category: 'time' },
    { word: 'nita', translation: 'night', category: 'time' },

    // Abstract
    { word: 'kos', translation: 'reason', category: 'abstract' },
    { word: 'mosa', translation: 'method', category: 'abstract' },
    { word: 'kusa', translation: 'thing', category: 'abstract' },
    { word: 'nama', translation: 'name', category: 'abstract' },
    { word: 'wola', translation: 'word', category: 'abstract' },
    { word: 'numa', translation: 'number', category: 'abstract' },
    { word: 'kesa', translation: 'question', category: 'abstract' },
    { word: 'ansi', translation: 'answer', category: 'abstract' },

    // Objects
    { word: 'tola', translation: 'door', category: 'objects' },
    { word: 'wila', translation: 'window', category: 'objects' },
    { word: 'mesa', translation: 'table', category: 'objects' },
    { word: 'kato', translation: 'car, cart', category: 'objects' },
    { word: 'botu', translation: 'boat', category: 'objects' },
    { word: 'poko', translation: 'box', category: 'objects' },
    { word: 'beka', translation: 'bag', category: 'objects' },
    { word: 'puko', translation: 'book', category: 'objects' },
    { word: 'pepa', translation: 'paper', category: 'objects' },
    { word: 'mani', translation: 'money', category: 'objects' },
    { word: 'kosa', translation: 'clothes', category: 'objects' },
    { word: 'suwa', translation: 'shoe', category: 'objects' },
    { word: 'koto', translation: 'coat', category: 'objects' },
    { word: 'topa', translation: 'top', category: 'objects' },

    // Body parts
    { word: 'pama', translation: 'hand', category: 'body' },
    { word: 'pota', translation: 'foot', category: 'body' },
    { word: 'kapa', translation: 'head', category: 'body' },
    { word: 'oka', translation: 'eye', category: 'body' },
    { word: 'iya', translation: 'ear', category: 'body' },
    { word: 'muta', translation: 'mouth', category: 'body' }
];

// ============================================
// 6. ADJECTIVES (45)
// ============================================

// Adjectives with binary opposites (use mal- prefix)
export const adjectivesWithOpposites = [
    { word: 'bona', translation: 'good', opposite: 'malbona', oppositeTranslation: 'bad', category: 'quality' },
    { word: 'kuna', translation: 'big', opposite: 'malkuna', oppositeTranslation: 'small', category: 'size' },
    { word: 'nawa', translation: 'new', opposite: 'malnawa', oppositeTranslation: 'old', category: 'quality' },
    { word: 'sena', translation: 'clean', opposite: 'malsena', oppositeTranslation: 'dirty', category: 'quality' },
    { word: 'luma', translation: 'light (bright)', opposite: 'malluma', oppositeTranslation: 'dark', category: 'quality' },
    { word: 'tasa', translation: 'easy', opposite: 'maltasa', oppositeTranslation: 'difficult', category: 'quality' },
    { word: 'suka', translation: 'happy', opposite: 'malsuka', oppositeTranslation: 'sad', category: 'emotion' },
    { word: 'longa', translation: 'long', opposite: 'mallonga', oppositeTranslation: 'short', category: 'size' },
    { word: 'hota', translation: 'hot', opposite: 'malhota', oppositeTranslation: 'cold', category: 'temperature' },
    { word: 'weta', translation: 'wet', opposite: 'malweta', oppositeTranslation: 'dry', category: 'quality' },
    { word: 'pula', translation: 'full', opposite: 'malpula', oppositeTranslation: 'empty', category: 'quality' },
    { word: 'kyla', translation: 'fast', opposite: 'malkyla', oppositeTranslation: 'slow', category: 'quality' },
    { word: 'wela', translation: 'true', opposite: 'malwela', oppositeTranslation: 'false', category: 'quality' },
    { word: 'lita', translation: 'right (correct)', opposite: 'mallita', oppositeTranslation: 'wrong', category: 'quality' },
    { word: 'tala', translation: 'high, tall', opposite: 'maltala', oppositeTranslation: 'low, short', category: 'size' },
    { word: 'sama', translation: 'same', opposite: 'malsama', oppositeTranslation: 'different', category: 'quality' },
    { word: 'powa', translation: 'strong', opposite: 'malpowa', oppositeTranslation: 'weak', category: 'quality' },
    { word: 'yanga', translation: 'young', opposite: 'malyanga', oppositeTranslation: 'old (age)', category: 'age' },
    { word: 'nisa', translation: 'nice, pretty', opposite: 'malnisa', oppositeTranslation: 'ugly', category: 'quality' },
    { word: 'kaka', translation: 'hard (texture)', opposite: 'malkaka', oppositeTranslation: 'soft', category: 'texture' },
    { word: 'sapa', translation: 'safe', opposite: 'malsapa', oppositeTranslation: 'dangerous', category: 'quality' },
    { word: 'lata', translation: 'late', opposite: 'mallata', oppositeTranslation: 'early', category: 'time' },
    { word: 'lowa', translation: 'loud', opposite: 'mallowa', oppositeTranslation: 'quiet', category: 'quality' }
];

// Adjectives without binary opposites
export const adjectivesWithoutOpposites = [
    { word: 'mata', translation: 'mad, angry', category: 'emotion' },
    { word: 'pua', translation: 'poor', category: 'quality' },
    { word: 'lica', translation: 'rich', category: 'quality' },
    { word: 'bisi', translation: 'busy', category: 'quality' },
    { word: 'sili', translation: 'silly', category: 'quality' },
    { word: 'kalu', translation: 'cool', category: 'quality' },
    { word: 'wama', translation: 'warm', category: 'temperature' },
    { word: 'siki', translation: 'sick', category: 'quality' },
    { word: 'wisa', translation: 'wise', category: 'quality' },
    { word: 'kaina', translation: 'kind', category: 'quality' },
    { word: 'sata', translation: 'sweet', category: 'taste' },
    { word: 'sawa', translation: 'sour', category: 'taste' },
    { word: 'solu', translation: 'whole', category: 'quality' },
    { word: 'pili', translation: 'free', category: 'quality' },
    { word: 'muco', translation: 'much, many', category: 'quantity' },
    // Colors (no opposites)
    { word: 'suna', translation: 'red', category: 'color' },
    { word: 'lani', translation: 'blue', category: 'color' },
    { word: 'kela', translation: 'green', category: 'color' },
    { word: 'yelo', translation: 'yellow', category: 'color' },
    { word: 'mola', translation: 'black', category: 'color' },
    { word: 'wala', translation: 'white', category: 'color' }
];

// All adjectives combined
export const adjectives = [
    ...adjectivesWithOpposites.map(a => ({ word: a.word, translation: a.translation, category: a.category, hasOpposite: true })),
    ...adjectivesWithoutOpposites
];

// DERIVED WORDS & COMPOUNDS
// ============================================

// First, the mal- opposites from adjectives
const malOpposites = adjectivesWithOpposites.map(a => ({
    compound: a.opposite,
    literal: `mal- + ${a.word}`,
    meaning: a.oppositeTranslation,
    category: 'opposite'
}));

// Agent nouns with -oni (person who does X)
const agentNouns = [
    { compound: 'mekaoni', literal: 'meka + -oni', meaning: 'maker, creator', category: 'people' },
    { compound: 'manaoni', literal: 'mana + -oni', meaning: 'eater', category: 'people' },
    { compound: 'mokaoni', literal: 'moka + -oni', meaning: 'worker', category: 'people' },
    { compound: 'kukaoni', literal: 'kuka + -oni', meaning: 'cook, chef', category: 'people' },
    { compound: 'kamaoni', literal: 'kama + -oni', meaning: 'speaker, caller', category: 'people' },
    { compound: 'letaoni', literal: 'leta + -oni', meaning: 'reader', category: 'people' },
    { compound: 'penaoni', literal: 'pena + -oni', meaning: 'writer', category: 'people' },
    { compound: 'pilaoni', literal: 'pila + -oni', meaning: 'player', category: 'people' },
    { compound: 'yupaoni', literal: 'yupa + -oni', meaning: 'helper', category: 'people' },
    { compound: 'polaoni', literal: 'pola + -oni', meaning: 'buyer, customer', category: 'people' },
    { compound: 'selaoni', literal: 'sela + -oni', meaning: 'seller', category: 'people' },
    { compound: 'wisaoni', literal: 'wisa + -oni', meaning: 'seer, watcher', category: 'people' },
    { compound: 'nasioni', literal: 'nasi + -oni', meaning: 'knowledgeable person, expert', category: 'people' },
    { compound: 'amaoni', literal: 'ama + -oni', meaning: 'lover', category: 'people' },
    { compound: 'kilaoni', literal: 'kila + -oni', meaning: 'killer', category: 'people' },
];

// Place nouns with -lok (place where X happens)
const placeNouns = [
    { compound: 'mekalok', literal: 'meka + -lok', meaning: 'factory, workshop', category: 'places' },
    { compound: 'manalok', literal: 'mana + -lok', meaning: 'restaurant, eating place', category: 'places' },
    { compound: 'pinalok', literal: 'pina + -lok', meaning: 'bar, drinking place', category: 'places' },
    { compound: 'sipalok', literal: 'sipa + -lok', meaning: 'bedroom, sleeping place', category: 'places' },
    { compound: 'mokalok', literal: 'moka + -lok', meaning: 'workplace, office', category: 'places' },
    { compound: 'kukalok', literal: 'kuka + -lok', meaning: 'kitchen', category: 'places' },
    { compound: 'wasalok', literal: 'wasa + -lok', meaning: 'bathroom, washroom', category: 'places' },
    { compound: 'letalok', literal: 'leta + -lok', meaning: 'library, reading room', category: 'places' },
    { compound: 'pilalok', literal: 'pila + -lok', meaning: 'playground, play area', category: 'places' },
    { compound: 'sitalok', literal: 'sita + -lok', meaning: 'seating area, waiting room', category: 'places' },
    { compound: 'polalok', literal: 'pola + -lok', meaning: 'market, shop', category: 'places' },
];

// Tool nouns with -ka (tool for doing X)
const toolNouns = [
    { compound: 'mekaka', literal: 'meka + -ka', meaning: 'machine, tool', category: 'tools' },
    { compound: 'manaka', literal: 'mana + -ka', meaning: 'eating utensil, fork/spoon', category: 'tools' },
    { compound: 'kutaka', literal: 'kuta + -ka', meaning: 'cutting tool, knife', category: 'tools' },
    { compound: 'wisaka', literal: 'wisa + -ka', meaning: 'viewing tool, glasses/telescope', category: 'tools' },
    { compound: 'sonaka', literal: 'sona + -ka', meaning: 'listening device, headphones', category: 'tools' },
    { compound: 'penaka', literal: 'pena + -ka', meaning: 'writing tool, pen', category: 'tools' },
    { compound: 'kukaka', literal: 'kuka + -ka', meaning: 'cooking tool, pot/pan', category: 'tools' },
    { compound: 'wasaka', literal: 'wasa + -ka', meaning: 'washing tool, soap', category: 'tools' },
    { compound: 'pinaka', literal: 'pina + -ka', meaning: 'drinking vessel, cup/glass', category: 'tools' },
];

// Product/object nouns with -to (product of X)
const productNouns = [
    { compound: 'manato', literal: 'mana + -to', meaning: 'food', category: 'food' },
    { compound: 'pinato', literal: 'pina + -to', meaning: 'drink, beverage', category: 'food' },
    { compound: 'mekato', literal: 'meka + -to', meaning: 'product, creation', category: 'things' },
    { compound: 'penato', literal: 'pena + -to', meaning: 'writing, document', category: 'things' },
    { compound: 'kukato', literal: 'kuka + -to', meaning: 'cooked dish, meal', category: 'food' },
    { compound: 'wisato', literal: 'wisa + -to', meaning: 'sight, view', category: 'abstract' },
    { compound: 'sonato', literal: 'sona + -to', meaning: 'sound', category: 'abstract' },
];

// Abstract quality nouns with -sa (quality of being X)
const qualityNouns = [
    { compound: 'bonasa', literal: 'bona + -sa', meaning: 'goodness', category: 'abstract' },
    { compound: 'kunasa', literal: 'kuna + -sa', meaning: 'bigness, size', category: 'abstract' },
    { compound: 'sukasa', literal: 'suka + -sa', meaning: 'happiness', category: 'abstract' },
    { compound: 'powasa', literal: 'powa + -sa', meaning: 'strength', category: 'abstract' },
    { compound: 'kylasa', literal: 'kyla + -sa', meaning: 'speed, quickness', category: 'abstract' },
    { compound: 'lumasa', literal: 'luma + -sa', meaning: 'brightness, light', category: 'abstract' },
    { compound: 'welasa', literal: 'wela + -sa', meaning: 'truth', category: 'abstract' },
    { compound: 'pilisa', literal: 'pili + -sa', meaning: 'freedom', category: 'abstract' },
    { compound: 'wisasa', literal: 'wisa + -sa', meaning: 'wisdom', category: 'abstract' },
    { compound: 'nawasa', literal: 'nawa + -sa', meaning: 'newness', category: 'abstract' },
    { compound: 'samasa', literal: 'sama + -sa', meaning: 'sameness, equality', category: 'abstract' },
];

// Action/event nouns with -do (act of doing X)
const eventNouns = [
    { compound: 'manado', literal: 'mana + -do', meaning: 'eating, meal event', category: 'events' },
    { compound: 'mokado', literal: 'moka + -do', meaning: 'work session, job', category: 'events' },
    { compound: 'pilado', literal: 'pila + -do', meaning: 'game, play session', category: 'events' },
    { compound: 'sipado', literal: 'sipa + -do', meaning: 'sleep, rest', category: 'events' },
    { compound: 'kamado', literal: 'kama + -do', meaning: 'speech, conversation', category: 'events' },
    { compound: 'amado', literal: 'ama + -do', meaning: 'loving, romance', category: 'events' },
    { compound: 'godo', literal: 'go + -do', meaning: 'going, journey, trip', category: 'events' },
    { compound: 'nemado', literal: 'nema + -do', meaning: 'arrival, coming', category: 'events' },
    { compound: 'winado', literal: 'wina + -do', meaning: 'victory, win', category: 'events' },
    { compound: 'lusado', literal: 'lusa + -do', meaning: 'loss, defeat', category: 'events' },
];

// Tense forms (examples showing verb conjugation patterns)
const tenseForms = [
    { compound: 'pas-mana', literal: 'pas- + mana', meaning: 'ate (past)', category: 'verb-form' },
    { compound: 'pos-mana', literal: 'pos- + mana', meaning: 'will eat (future)', category: 'verb-form' },
    { compound: 'pas-go', literal: 'pas- + go', meaning: 'went (past)', category: 'verb-form' },
    { compound: 'pos-go', literal: 'pos- + go', meaning: 'will go (future)', category: 'verb-form' },
    { compound: 'pas-wisa', literal: 'pas- + wisa', meaning: 'saw (past)', category: 'verb-form' },
    { compound: 'pos-nema', literal: 'pos- + nema', meaning: 'will come (future)', category: 'verb-form' },
];

// Modal forms (examples showing modal patterns)
const modalForms = [
    { compound: 'po-kama', literal: 'po- + kama', meaning: 'can speak', category: 'verb-form' },
    { compound: 'te-moka', literal: 'te- + moka', meaning: 'must work', category: 'verb-form' },
    { compound: 'vol-mana', literal: 'vol- + mana', meaning: 'want to eat', category: 'verb-form' },
    { compound: 'pro-tana', literal: 'pro- + tana', meaning: 'try to understand', category: 'verb-form' },
    { compound: 'po-pelya', literal: 'po- + pelya', meaning: 'can fly', category: 'verb-form' },
    { compound: 'te-pela', literal: 'te- + pela', meaning: 'must pay', category: 'verb-form' },
];

// Combined tense + modal forms
const combinedForms = [
    { compound: 'pas-vol-mana', literal: 'pas- + vol- + mana', meaning: 'wanted to eat', category: 'verb-form' },
    { compound: 'pos-po-kama', literal: 'pos- + po- + kama', meaning: 'will be able to speak', category: 'verb-form' },
    { compound: 'pas-te-moka', literal: 'pas- + te- + moka', meaning: 'had to work', category: 'verb-form' },
    { compound: 'pos-pro-tana', literal: 'pos- + pro- + tana', meaning: 'will try to understand', category: 'verb-form' },
];

// Combine all derived words
export const derivedWords = [
    ...malOpposites,
    ...agentNouns,
    ...placeNouns,
    ...toolNouns,
    ...productNouns,
    ...qualityNouns,
    ...eventNouns,
    ...tenseForms,
    ...modalForms,
    ...combinedForms,
];

// ============================================
// QUESTION COMPOUNDS
// ============================================

export const questionWords = [
    { word: 'ke', translation: 'what', category: 'question' },
    { word: 'ke-lok', translation: 'where (what-place)', category: 'question' },
    { word: 'ke-oni', translation: 'who (what-person)', category: 'question' },
    { word: 'ke-tem', translation: 'when (what-time)', category: 'question' },
    { word: 'ke-kos', translation: 'why (what-reason)', category: 'question' },
    { word: 'ke-mosa', translation: 'how (what-method)', category: 'question' }
];

// ============================================
// ALL CORE WORDS COMBINED
// ============================================

export const coreWords = [
    ...pronouns.map(w => ({ ...w, type: 'pronoun' })),
    ...particles.map(w => ({ ...w, type: 'particle' })),
    ...connectors.map(w => ({ ...w, type: 'connector' })),
    ...numbers.map(w => ({ ...w, type: 'number' })),
    ...verbs.map(w => ({ ...w, type: 'verb' })),
    ...nouns.map(w => ({ ...w, type: 'noun' })),
    ...adjectives.map(w => ({ ...w, type: 'adjective' }))
];

// ============================================
// DICTIONARY OBJECT
// ============================================

export const unaDictionary = {
    pronouns,
    particles,
    tensePrefixes,
    modalPrefixes,
    connectors,
    suffixes,
    numbers,
    verbs,
    nouns,
    adjectives,
    adjectivesWithOpposites,
    adjectivesWithoutOpposites,
    derivedWords,
    questionWords,
    coreWords,

    search(query) {
        const q = query.toLowerCase();
        return coreWords.filter(w =>
            w.word.includes(q) || w.translation.toLowerCase().includes(q)
        );
    },

    getCategories() {
        return [...new Set(coreWords.map(w => w.category))].sort();
    }
};

export default unaDictionary;
