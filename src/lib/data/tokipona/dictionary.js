// Toki Pona Extended Dictionary
// Includes core words and common compound word combinations

// Core Toki Pona words (~120 official pu words)
export const coreWords = [
    { word: 'a', translation: 'ah, emphasis, emotion', category: 'particle' },
    { word: 'akesi', translation: 'reptile, amphibian, lizard', category: 'nature' },
    { word: 'ala', translation: 'no, not, nothing, zero', category: 'particle' },
    { word: 'alasa', translation: 'hunt, gather, search', category: 'action' },
    { word: 'ale', translation: 'all, everything, universe', category: 'abstract' },
    { word: 'anpa', translation: 'bottom, down, below, humble', category: 'position' },
    { word: 'ante', translation: 'different, other, change', category: 'abstract' },
    { word: 'anu', translation: 'or', category: 'particle' },
    { word: 'awen', translation: 'stay, wait, remain, continue', category: 'action' },
    { word: 'e', translation: 'object marker', category: 'particle' },
    { word: 'en', translation: 'and (between subjects)', category: 'particle' },
    { word: 'esun', translation: 'shop, market, trade, buy', category: 'places' },
    { word: 'ijo', translation: 'thing, object, matter', category: 'abstract' },
    { word: 'ike', translation: 'bad, negative, complex', category: 'quality' },
    { word: 'ilo', translation: 'tool, device, machine', category: 'things' },
    { word: 'insa', translation: 'inside, center, stomach', category: 'position' },
    { word: 'jaki', translation: 'dirty, gross, garbage', category: 'quality' },
    { word: 'jan', translation: 'person, people, human', category: 'people' },
    { word: 'jelo', translation: 'yellow, lime', category: 'color' },
    { word: 'jo', translation: 'have, carry, contain', category: 'action' },
    { word: 'kala', translation: 'fish, sea creature', category: 'nature' },
    { word: 'kalama', translation: 'sound, noise, voice', category: 'abstract' },
    { word: 'kama', translation: 'come, arrive, become, future', category: 'action' },
    { word: 'kasi', translation: 'plant, vegetation, leaf', category: 'nature' },
    { word: 'ken', translation: 'can, ability, possible', category: 'action' },
    { word: 'kepeken', translation: 'use, using, with', category: 'preposition' },
    { word: 'kili', translation: 'fruit, vegetable, mushroom', category: 'food' },
    { word: 'kiwen', translation: 'rock, stone, hard', category: 'nature' },
    { word: 'ko', translation: 'powder, paste, clay', category: 'things' },
    { word: 'kon', translation: 'air, breath, spirit, soul', category: 'nature' },
    { word: 'kule', translation: 'color, colorful, paint', category: 'abstract' },
    { word: 'kulupu', translation: 'group, community, society', category: 'people' },
    { word: 'kute', translation: 'ear, hear, listen', category: 'body' },
    { word: 'la', translation: 'context separator (if/when)', category: 'particle' },
    { word: 'lape', translation: 'sleep, rest', category: 'action' },
    { word: 'laso', translation: 'blue, green', category: 'color' },
    { word: 'lawa', translation: 'head, mind, control, lead', category: 'body' },
    { word: 'len', translation: 'cloth, fabric, clothing', category: 'things' },
    { word: 'lete', translation: 'cold, cool, raw', category: 'quality' },
    { word: 'li', translation: 'is, are, predicate marker', category: 'particle' },
    { word: 'lili', translation: 'small, little, few, young', category: 'quality' },
    { word: 'linja', translation: 'line, rope, hair, thread', category: 'things' },
    { word: 'lipu', translation: 'paper, document, book, website', category: 'things' },
    { word: 'loje', translation: 'red, orange', category: 'color' },
    { word: 'lon', translation: 'at, in, on, exist, true', category: 'preposition' },
    { word: 'luka', translation: 'hand, arm, five', category: 'body' },
    { word: 'lukin', translation: 'eye, see, look, watch, read', category: 'body' },
    { word: 'lupa', translation: 'hole, door, window, orifice', category: 'places' },
    { word: 'ma', translation: 'earth, land, country, place', category: 'places' },
    { word: 'mama', translation: 'parent, ancestor, creator', category: 'people' },
    { word: 'mani', translation: 'money, wealth, livestock', category: 'things' },
    { word: 'meli', translation: 'woman, female, wife', category: 'people' },
    { word: 'mi', translation: 'I, me, we, us', category: 'people' },
    { word: 'mije', translation: 'man, male, husband', category: 'people' },
    { word: 'moku', translation: 'food, eat, drink, consume', category: 'food' },
    { word: 'moli', translation: 'death, dead, kill, dying', category: 'abstract' },
    { word: 'monsi', translation: 'back, behind, butt', category: 'position' },
    { word: 'mu', translation: 'animal sound, moo, meow', category: 'abstract' },
    { word: 'mun', translation: 'moon, star, night sky object', category: 'nature' },
    { word: 'musi', translation: 'fun, play, game, art', category: 'action' },
    { word: 'mute', translation: 'many, much, more, very', category: 'quality' },
    { word: 'nanpa', translation: 'number, ordinal', category: 'abstract' },
    { word: 'nasa', translation: 'strange, crazy, drunk, unusual', category: 'quality' },
    { word: 'nasin', translation: 'way, path, method, doctrine', category: 'abstract' },
    { word: 'nena', translation: 'bump, hill, mountain, nose', category: 'nature' },
    { word: 'ni', translation: 'this, that', category: 'particle' },
    { word: 'nimi', translation: 'name, word', category: 'abstract' },
    { word: 'noka', translation: 'foot, leg, bottom', category: 'body' },
    { word: 'o', translation: 'hey!, command marker, vocative', category: 'particle' },
    { word: 'olin', translation: 'love, affection, compassion', category: 'abstract' },
    { word: 'ona', translation: 'they, them, he, she, it', category: 'people' },
    { word: 'open', translation: 'open, begin, start, turn on', category: 'action' },
    { word: 'pakala', translation: 'break, damage, mistake, oops', category: 'action' },
    { word: 'pali', translation: 'do, work, make, build', category: 'action' },
    { word: 'palisa', translation: 'stick, rod, branch', category: 'things' },
    { word: 'pan', translation: 'bread, grain, cereal', category: 'food' },
    { word: 'pana', translation: 'give, send, emit, provide', category: 'action' },
    { word: 'pi', translation: 'of (regrouping particle)', category: 'particle' },
    { word: 'pilin', translation: 'heart, feeling, emotion, sense', category: 'body' },
    { word: 'pimeja', translation: 'black, dark, shadow', category: 'color' },
    { word: 'pini', translation: 'end, finish, past, completed', category: 'action' },
    { word: 'pipi', translation: 'bug, insect, spider', category: 'nature' },
    { word: 'poka', translation: 'side, hip, nearby', category: 'position' },
    { word: 'poki', translation: 'container, box, bowl, cup', category: 'things' },
    { word: 'pona', translation: 'good, simple, positive, fix', category: 'quality' },
    { word: 'pu', translation: 'the official Toki Pona book', category: 'things' },
    { word: 'sama', translation: 'same, similar, sibling, like', category: 'abstract' },
    { word: 'seli', translation: 'fire, heat, hot, warm', category: 'nature' },
    { word: 'selo', translation: 'skin, shell, bark, boundary', category: 'body' },
    { word: 'seme', translation: 'what?, which?, question word', category: 'particle' },
    { word: 'sewi', translation: 'up, above, sky, divine, sacred', category: 'position' },
    { word: 'sijelo', translation: 'body, torso, physical state', category: 'body' },
    { word: 'sike', translation: 'circle, ball, round, cycle', category: 'things' },
    { word: 'sin', translation: 'new, fresh, another, extra', category: 'quality' },
    { word: 'sina', translation: 'you', category: 'people' },
    { word: 'sinpin', translation: 'face, front, wall', category: 'position' },
    { word: 'sitelen', translation: 'image, picture, write, draw', category: 'abstract' },
    { word: 'sona', translation: 'know, knowledge, wisdom', category: 'abstract' },
    { word: 'soweli', translation: 'animal, mammal, land animal', category: 'nature' },
    { word: 'suli', translation: 'big, large, important, adult', category: 'quality' },
    { word: 'suno', translation: 'sun, light, brightness, day', category: 'nature' },
    { word: 'supa', translation: 'surface, table, floor, bed', category: 'things' },
    { word: 'suwi', translation: 'sweet, cute, adorable, candy', category: 'quality' },
    { word: 'tan', translation: 'from, because, cause, origin', category: 'preposition' },
    { word: 'taso', translation: 'but, only, however', category: 'particle' },
    { word: 'tawa', translation: 'to, toward, for, moving', category: 'preposition' },
    { word: 'telo', translation: 'water, liquid, beverage', category: 'nature' },
    { word: 'tenpo', translation: 'time, moment, period', category: 'abstract' },
    { word: 'toki', translation: 'language, speak, communicate', category: 'action' },
    { word: 'tomo', translation: 'house, building, room, indoor', category: 'places' },
    { word: 'tu', translation: 'two, divide, split', category: 'number' },
    { word: 'unpa', translation: 'sex, sexual, have sex', category: 'action' },
    { word: 'uta', translation: 'mouth, lips, oral', category: 'body' },
    { word: 'utala', translation: 'fight, battle, challenge', category: 'action' },
    { word: 'walo', translation: 'white, light-colored, pale', category: 'color' },
    { word: 'wan', translation: 'one, unique, unite', category: 'number' },
    { word: 'waso', translation: 'bird, flying creature', category: 'nature' },
    { word: 'wawa', translation: 'power, strong, energy', category: 'quality' },
    { word: 'weka', translation: 'away, absent, remove, ignore', category: 'action' },
    { word: 'wile', translation: 'want, need, must, require', category: 'action' }
];

// Common compound words and phrases (~100 entries)
// These are widely-used combinations in the Toki Pona community
export const compoundWords = [
    // Places & Buildings
    { compound: 'tomo telo', literal: 'water-building', meaning: 'bathroom, restroom', category: 'places' },
    { compound: 'tomo moku', literal: 'food-building', meaning: 'kitchen, restaurant', category: 'places' },
    { compound: 'tomo lape', literal: 'sleep-building', meaning: 'bedroom', category: 'places' },
    { compound: 'tomo sona', literal: 'knowledge-building', meaning: 'school, library', category: 'places' },
    { compound: 'tomo pali', literal: 'work-building', meaning: 'office, workplace', category: 'places' },
    { compound: 'tomo esun', literal: 'trade-building', meaning: 'store, shop, market', category: 'places' },
    { compound: 'tomo tawa', literal: 'moving-building', meaning: 'car, vehicle', category: 'places' },
    { compound: 'tomo tawa kon', literal: 'moving-building air', meaning: 'airplane', category: 'places' },
    { compound: 'tomo tawa telo', literal: 'moving-building water', meaning: 'boat, ship', category: 'places' },
    { compound: 'tomo musi', literal: 'fun-building', meaning: 'theater, amusement park', category: 'places' },
    { compound: 'ma tomo', literal: 'land building', meaning: 'city, town', category: 'places' },
    { compound: 'ma kasi', literal: 'land plant', meaning: 'garden, forest, park', category: 'places' },
    { compound: 'ma telo', literal: 'land water', meaning: 'swamp, wetland, lake area', category: 'places' },
    { compound: 'tomo lipu', literal: 'book-building', meaning: 'library, bookstore', category: 'places' },
    { compound: 'tomo pi jan lawa', literal: 'building of leading person', meaning: 'government building, capitol', category: 'places' },

    // People & Relationships
    { compound: 'jan pona', literal: 'good-person', meaning: 'friend', category: 'people' },
    { compound: 'jan ike', literal: 'bad-person', meaning: 'enemy, bad person', category: 'people' },
    { compound: 'jan lawa', literal: 'head-person', meaning: 'leader, boss, president', category: 'people' },
    { compound: 'jan pali', literal: 'work-person', meaning: 'worker, employee', category: 'people' },
    { compound: 'jan sona', literal: 'knowledge-person', meaning: 'teacher, expert, scholar', category: 'people' },
    { compound: 'jan utala', literal: 'fight-person', meaning: 'warrior, soldier, fighter', category: 'people' },
    { compound: 'jan pi tomo moku', literal: 'person of food building', meaning: 'chef, cook, waiter', category: 'people' },
    { compound: 'jan pi pali musi', literal: 'person of fun work', meaning: 'artist, performer, entertainer', category: 'people' },
    { compound: 'jan sewi', literal: 'divine-person', meaning: 'god, angel, holy person', category: 'people' },
    { compound: 'jan ante', literal: 'different-person', meaning: 'stranger, foreigner', category: 'people' },
    { compound: 'jan sama', literal: 'same-person', meaning: 'sibling, peer', category: 'people' },
    { compound: 'jan lili', literal: 'small-person', meaning: 'child, kid', category: 'people' },
    { compound: 'jan suli', literal: 'big-person', meaning: 'adult, grown-up', category: 'people' },
    { compound: 'jan sin', literal: 'new-person', meaning: 'newcomer, beginner', category: 'people' },
    { compound: 'meli olin', literal: 'love-woman', meaning: 'girlfriend, wife, beloved woman', category: 'people' },
    { compound: 'mije olin', literal: 'love-man', meaning: 'boyfriend, husband, beloved man', category: 'people' },

    // Food & Drink
    { compound: 'telo nasa', literal: 'crazy-water', meaning: 'alcohol, alcoholic drink', category: 'food' },
    { compound: 'telo wawa', literal: 'strong-water', meaning: 'coffee, energy drink', category: 'food' },
    { compound: 'telo kili', literal: 'fruit-water', meaning: 'juice, fruit juice', category: 'food' },
    { compound: 'telo suwi', literal: 'sweet-water', meaning: 'soda, sweet drink', category: 'food' },
    { compound: 'pan suwi', literal: 'sweet-bread', meaning: 'cake, pastry, dessert', category: 'food' },
    { compound: 'kili suwi', literal: 'sweet-fruit', meaning: 'sweet fruit, dessert fruit', category: 'food' },
    { compound: 'moku seli', literal: 'hot-food', meaning: 'hot meal, cooked food', category: 'food' },
    { compound: 'moku lete', literal: 'cold-food', meaning: 'cold food, raw food, salad', category: 'food' },
    { compound: 'namako', literal: 'extra, spice', meaning: 'spice, flavoring, extra', category: 'food' },
    { compound: 'soweli moku', literal: 'edible-animal', meaning: 'meat, livestock', category: 'food' },

    // Body & Health
    { compound: 'pilin pona', literal: 'good-feeling', meaning: 'happiness, feeling good, well-being', category: 'body' },
    { compound: 'pilin ike', literal: 'bad-feeling', meaning: 'sadness, pain, feeling bad', category: 'body' },
    { compound: 'sijelo pona', literal: 'good-body', meaning: 'health, healthy body', category: 'body' },
    { compound: 'sijelo ike', literal: 'bad-body', meaning: 'sickness, illness, disease', category: 'body' },
    { compound: 'linja lawa', literal: 'head-line', meaning: 'hair (head hair)', category: 'body' },
    { compound: 'linja sinpin', literal: 'face-line', meaning: 'beard, facial hair', category: 'body' },
    { compound: 'nena lawa', literal: 'head-bump', meaning: 'brain', category: 'body' },
    { compound: 'telo sijelo', literal: 'body-water', meaning: 'blood, bodily fluid', category: 'body' },
    { compound: 'telo loje', literal: 'red-water', meaning: 'blood', category: 'body' },
    { compound: 'luka pona', literal: 'good-hand', meaning: 'right hand (for right-handed)', category: 'body' },

    // Time & Schedule
    { compound: 'tenpo suno', literal: 'sun-time', meaning: 'day, daytime', category: 'time' },
    { compound: 'tenpo pimeja', literal: 'dark-time', meaning: 'night, nighttime', category: 'time' },
    { compound: 'tenpo mun', literal: 'moon-time', meaning: 'month', category: 'time' },
    { compound: 'tenpo sike', literal: 'circle-time', meaning: 'year, cycle', category: 'time' },
    { compound: 'tenpo moku', literal: 'food-time', meaning: 'mealtime, lunch break', category: 'time' },
    { compound: 'tenpo lape', literal: 'sleep-time', meaning: 'bedtime, sleeping hours', category: 'time' },
    { compound: 'tenpo pali', literal: 'work-time', meaning: 'working hours, shift', category: 'time' },
    { compound: 'tenpo kama', literal: 'coming-time', meaning: 'future', category: 'time' },
    { compound: 'tenpo pini', literal: 'past-time', meaning: 'past, history', category: 'time' },
    { compound: 'tenpo ni', literal: 'this-time', meaning: 'now, present, today', category: 'time' },
    { compound: 'tenpo lili', literal: 'small-time', meaning: 'moment, short time, soon', category: 'time' },
    { compound: 'tenpo suli', literal: 'big-time', meaning: 'long time, era', category: 'time' },

    // Technology & Tools
    { compound: 'ilo sona', literal: 'knowledge-tool', meaning: 'computer', category: 'technology' },
    { compound: 'ilo toki', literal: 'speaking-tool', meaning: 'phone, telephone', category: 'technology' },
    { compound: 'ilo sitelen', literal: 'image-tool', meaning: 'camera, drawing tool', category: 'technology' },
    { compound: 'ilo kalama', literal: 'sound-tool', meaning: 'musical instrument, speaker', category: 'technology' },
    { compound: 'ilo moku', literal: 'food-tool', meaning: 'utensils, fork, spoon, chopsticks', category: 'technology' },
    { compound: 'ilo open', literal: 'opening-tool', meaning: 'key, opener', category: 'technology' },
    { compound: 'ilo lukin', literal: 'seeing-tool', meaning: 'glasses, telescope, microscope', category: 'technology' },
    { compound: 'ilo tawa', literal: 'moving-tool', meaning: 'transportation, vehicle', category: 'technology' },
    { compound: 'ilo pali', literal: 'work-tool', meaning: 'work tool, equipment', category: 'technology' },
    { compound: 'lipu sona', literal: 'knowledge-document', meaning: 'textbook, encyclopedia', category: 'technology' },
    { compound: 'lipu musi', literal: 'fun-document', meaning: 'novel, comic, game book', category: 'technology' },
    { compound: 'sitelen tawa', literal: 'moving-image', meaning: 'video, movie, animation', category: 'technology' },
    { compound: 'kalama musi', literal: 'fun-sound', meaning: 'music, song', category: 'technology' },

    // Nature & Weather
    { compound: 'telo sewi', literal: 'sky-water', meaning: 'rain', category: 'nature' },
    { compound: 'ko walo', literal: 'white-powder', meaning: 'snow, frost', category: 'nature' },
    { compound: 'seli suno', literal: 'sun-heat', meaning: 'sunshine, sunny weather', category: 'nature' },
    { compound: 'kon wawa', literal: 'strong-air', meaning: 'wind, storm', category: 'nature' },
    { compound: 'suno pimeja', literal: 'dark-sun', meaning: 'eclipse', category: 'nature' },
    { compound: 'telo suli', literal: 'big-water', meaning: 'ocean, sea, large lake', category: 'nature' },
    { compound: 'nena suli', literal: 'big-bump', meaning: 'mountain', category: 'nature' },
    { compound: 'ma weka', literal: 'far-land', meaning: 'foreign country, distant place', category: 'nature' },
    { compound: 'kasi kule', literal: 'colorful-plant', meaning: 'flower', category: 'nature' },
    { compound: 'kiwen seli', literal: 'hot-rock', meaning: 'lava, volcanic rock', category: 'nature' },

    // Abstract Concepts
    { compound: 'nasin pona', literal: 'good-way', meaning: 'virtue, moral path, good method', category: 'abstract' },
    { compound: 'nasin toki', literal: 'language-way', meaning: 'grammar, way of speaking', category: 'abstract' },
    { compound: 'nasin musi', literal: 'fun-way', meaning: 'game rules, art style', category: 'abstract' },
    { compound: 'sona pona', literal: 'good-knowledge', meaning: 'wisdom, good understanding', category: 'abstract' },
    { compound: 'wile suli', literal: 'big-want', meaning: 'goal, ambition, strong desire', category: 'abstract' },
    { compound: 'pilin wawa', literal: 'strong-feeling', meaning: 'passion, strong emotion', category: 'abstract' },
    { compound: 'pona mute', literal: 'very-good', meaning: 'excellent, great, wonderful', category: 'abstract' },
    { compound: 'ike mute', literal: 'very-bad', meaning: 'terrible, awful, horrible', category: 'abstract' },
    { compound: 'seme la', literal: 'what context', meaning: 'why?, for what reason?', category: 'abstract' },
    { compound: 'tan seme', literal: 'from what', meaning: 'why?, because of what?', category: 'abstract' },

    // Actions & Activities
    { compound: 'musi kalama', literal: 'sound-fun', meaning: 'sing, play music', category: 'actions' },
    { compound: 'musi sitelen', literal: 'image-fun', meaning: 'draw, paint, art hobby', category: 'actions' },
    { compound: 'musi sijelo', literal: 'body-fun', meaning: 'dance, sports, exercise', category: 'actions' },
    { compound: 'pali sona', literal: 'knowledge-work', meaning: 'study, research, learn', category: 'actions' },
    { compound: 'tawa noka', literal: 'foot-moving', meaning: 'walk, walking', category: 'actions' },
    { compound: 'tawa wawa', literal: 'strong-moving', meaning: 'run, running', category: 'actions' },
    { compound: 'tawa telo', literal: 'water-moving', meaning: 'swim, swimming', category: 'actions' },
    { compound: 'pana sona', literal: 'give-knowledge', meaning: 'teach, teaching', category: 'actions' },
    { compound: 'kama sona', literal: 'become-knowing', meaning: 'learn, learning', category: 'actions' },
    { compound: 'toki pona', literal: 'good-speak', meaning: 'speak well, compliment', category: 'actions' },
    { compound: 'toki ike', literal: 'bad-speak', meaning: 'insult, speak badly, criticize', category: 'actions' },

    // Colors (compound)
    { compound: 'loje walo', literal: 'red white', meaning: 'pink', category: 'colors' },
    { compound: 'laso loje', literal: 'blue red', meaning: 'purple', category: 'colors' },
    { compound: 'laso jelo', literal: 'blue yellow', meaning: 'green (precise)', category: 'colors' },
    { compound: 'jelo loje', literal: 'yellow red', meaning: 'orange', category: 'colors' },
    { compound: 'pimeja walo', literal: 'black white', meaning: 'gray', category: 'colors' },
    { compound: 'walo jelo', literal: 'white yellow', meaning: 'light yellow, cream', category: 'colors' }
];

// Combine for full dictionary access
export const fullDictionary = {
    core: coreWords,
    compounds: compoundWords,

    // Helper function to search all entries
    search(query) {
        const q = query.toLowerCase();
        const coreResults = coreWords.filter(w =>
            w.word.includes(q) || w.translation.toLowerCase().includes(q)
        );
        const compoundResults = compoundWords.filter(w =>
            w.compound.includes(q) || w.meaning.toLowerCase().includes(q) || w.literal.toLowerCase().includes(q)
        );
        return { core: coreResults, compounds: compoundResults };
    },

    // Get all categories
    getCategories() {
        const coreCategories = [...new Set(coreWords.map(w => w.category))];
        const compoundCategories = [...new Set(compoundWords.map(w => w.category))];
        return [...new Set([...coreCategories, ...compoundCategories])].sort();
    },

    // Filter by category
    filterByCategory(category) {
        return {
            core: coreWords.filter(w => w.category === category),
            compounds: compoundWords.filter(w => w.category === category)
        };
    }
};

export default fullDictionary;
