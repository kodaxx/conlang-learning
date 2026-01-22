// Globasa Core Vocabulary
// Based on the most common Globasa words

export const coreWords = [
    // Pronouns
    { word: 'mi', translation: 'I/me', category: 'pronoun', phonetic: 'mee' },
    { word: 'yu', translation: 'you', category: 'pronoun', phonetic: 'yoo' },
    { word: 'te', translation: 'he/she/it', category: 'pronoun', phonetic: 'teh' },
    { word: 'imi', translation: 'we', category: 'pronoun', phonetic: 'ee-mee' },
    { word: 'uyu', translation: 'you (plural)', category: 'pronoun', phonetic: 'oo-yoo' },
    { word: 'ete', translation: 'they', category: 'pronoun', phonetic: 'eh-teh' },

    // Basic Nouns
    { word: 'insan', translation: 'person/human', category: 'noun', phonetic: 'in-SAN' },
    { word: 'femixu', translation: 'woman', category: 'noun', phonetic: 'feh-mee-SHOO' },
    { word: 'manixu', translation: 'man', category: 'noun', phonetic: 'mah-nee-SHOO' },
    { word: 'bete', translation: 'child', category: 'noun', phonetic: 'BEH-teh' },
    { word: 'doste', translation: 'friend', category: 'noun', phonetic: 'DOS-teh' },
    { word: 'sodar', translation: 'sibling', category: 'noun', phonetic: 'so-DAR' },
    { word: 'mama', translation: 'mother', category: 'noun', phonetic: 'MA-ma' },
    { word: 'papa', translation: 'father', category: 'noun', phonetic: 'PA-pa' },
    { word: 'dom', translation: 'house/home', category: 'noun', phonetic: 'dom' },
    { word: 'eskol', translation: 'school', category: 'noun', phonetic: 'es-KOL' },
    { word: 'aqua', translation: 'water', category: 'noun', phonetic: 'A-kwa' },
    { word: 'pingo', translation: 'apple', category: 'noun', phonetic: 'PIN-go' },
    { word: 'pano', translation: 'bread', category: 'noun', phonetic: 'PA-no' },
    { word: 'kafe', translation: 'coffee', category: 'noun', phonetic: 'KA-feh' },
    { word: 'cay', translation: 'tea', category: 'noun', phonetic: 'chai' },
    { word: 'kitabu', translation: 'book', category: 'noun', phonetic: 'kee-TA-boo' },

    // Verbs (root forms)
    { word: 'sen', translation: 'to be', category: 'verb', phonetic: 'sen' },
    { word: 'hare', translation: 'to have', category: 'verb', phonetic: 'HA-reh' },
    { word: 'yam', translation: 'to eat', category: 'verb', phonetic: 'yam' },
    { word: 'pije', translation: 'to drink', category: 'verb', phonetic: 'PEE-jeh' },
    { word: 'na', translation: 'to go', category: 'verb', phonetic: 'na' },
    { word: 'ata', translation: 'to come', category: 'verb', phonetic: 'A-ta' },
    { word: 'lala', translation: 'to speak/say', category: 'verb', phonetic: 'LA-la' },
    { word: 'oko', translation: 'to see', category: 'verb', phonetic: 'O-ko' },
    { word: 'audi', translation: 'to hear', category: 'verb', phonetic: 'OW-dee' },
    { word: 'suki', translation: 'to like', category: 'verb', phonetic: 'SOO-kee' },
    { word: 'amo', translation: 'to love', category: 'verb', phonetic: 'A-mo' },
    { word: 'jixi', translation: 'to know', category: 'verb', phonetic: 'JEE-shee' },
    { word: 'wole', translation: 'to want', category: 'verb', phonetic: 'WO-leh' },
    { word: 'pul', translation: 'to be able/can', category: 'verb', phonetic: 'pool' },
    { word: 'musi', translation: 'must/have to', category: 'verb', phonetic: 'MOO-see' },
    { word: 'xerca', translation: 'to search/look for', category: 'verb', phonetic: 'SHER-tsa' },
    { word: 'side', translation: 'to sit', category: 'verb', phonetic: 'SEE-deh' },

    // Adjectives
    { word: 'bon', translation: 'good', category: 'adjective', phonetic: 'bon' },
    { word: 'mal', translation: 'bad', category: 'adjective', phonetic: 'mal' },
    { word: 'day', translation: 'big', category: 'adjective', phonetic: 'dai' },
    { word: 'lil', translation: 'small', category: 'adjective', phonetic: 'lil' },
    { word: 'neo', translation: 'new', category: 'adjective', phonetic: 'NEH-o' },
    { word: 'lao', translation: 'old', category: 'adjective', phonetic: 'lao' },
    { word: 'velosi', translation: 'fast', category: 'adjective', phonetic: 'veh-LO-see' },
    { word: 'bati', translation: 'slow', category: 'adjective', phonetic: 'BA-tee' },
    { word: 'termo', translation: 'hot', category: 'adjective', phonetic: 'TER-mo' },
    { word: 'frigi', translation: 'cold', category: 'adjective', phonetic: 'FREE-gee' },
    { word: 'felixi', translation: 'happy', category: 'adjective', phonetic: 'feh-LEE-shee' },
    { word: 'triste', translation: 'sad', category: 'adjective', phonetic: 'TREES-teh' },

    // Tense/Aspect Markers
    { word: 'le', translation: '(past tense)', category: 'particle', phonetic: 'leh' },
    { word: 'xa', translation: '(future tense)', category: 'particle', phonetic: 'sha' },
    { word: 'nun', translation: 'now / (present, optional)', category: 'particle', phonetic: 'noon' },
    { word: 'le...ger', translation: '(past continuous)', category: 'particle', phonetic: 'leh...ger' },

    // Numbers
    { word: 'un', translation: 'one', category: 'number', phonetic: 'oon' },
    { word: 'dua', translation: 'two', category: 'number', phonetic: 'DOO-a' },
    { word: 'tiga', translation: 'three', category: 'number', phonetic: 'TEE-ga' },
    { word: 'care', translation: 'four', category: 'number', phonetic: 'CHA-reh' },
    { word: 'lima', translation: 'five', category: 'number', phonetic: 'LEE-ma' },
    { word: 'sisa', translation: 'six', category: 'number', phonetic: 'SEE-sa' },
    { word: 'sabe', translation: 'seven', category: 'number', phonetic: 'SA-beh' },
    { word: 'oco', translation: 'eight', category: 'number', phonetic: 'O-cho' },
    { word: 'nue', translation: 'nine', category: 'number', phonetic: 'NOO-eh' },
    { word: 'des', translation: 'ten', category: 'number', phonetic: 'des' },

    // Prepositions
    { word: 'fe', translation: 'at/in/on', category: 'preposition', phonetic: 'feh' },
    { word: 'cel', translation: 'to (destination)', category: 'preposition', phonetic: 'chel' },
    { word: 'de', translation: 'from/of', category: 'preposition', phonetic: 'deh' },
    { word: 'tas', translation: 'for', category: 'preposition', phonetic: 'tas' },
    { word: 'ji', translation: 'with', category: 'preposition', phonetic: 'jee' },
    { word: 'in', translation: 'inside', category: 'preposition', phonetic: 'in' },

    // Question words
    { word: 'ke', translation: 'what', category: 'question', phonetic: 'keh' },
    { word: 'hu', translation: 'who', category: 'question', phonetic: 'hoo' },
    { word: 'keloka', translation: 'where', category: 'question', phonetic: 'keh-LO-ka' },
    { word: 'kewatu', translation: 'when', category: 'question', phonetic: 'keh-WA-too' },
    { word: 'kesu', translation: 'why', category: 'question', phonetic: 'KEH-soo' },
    { word: 'kemaner', translation: 'how', category: 'question', phonetic: 'keh-ma-NER' },

    // Common Words
    { word: 'si', translation: 'yes', category: 'common', phonetic: 'see' },
    { word: 'no', translation: 'no/not', category: 'common', phonetic: 'no' },
    { word: 'e', translation: 'and', category: 'common', phonetic: 'eh' },
    { word: 'or', translation: 'or', category: 'common', phonetic: 'or' },
    { word: 'mas', translation: 'but', category: 'common', phonetic: 'mas' },
    { word: 'den', translation: 'then', category: 'common', phonetic: 'den' },
    { word: 'eger', translation: 'if', category: 'common', phonetic: 'EH-ger' },
    { word: 'muy', translation: 'very', category: 'common', phonetic: 'mooy' },
    { word: 'plu', translation: '(plural marker)', category: 'common', phonetic: 'ploo' },
    { word: 'hin', translation: 'this', category: 'common', phonetic: 'hin' },
    { word: 'den', translation: 'that', category: 'common', phonetic: 'den' }
];

export const derivedWords = [
    // Examples of derived/compound words
    { word: 'eskolloka', translation: 'school (place)', parts: 'eskol + loka' },
    { word: 'yamdom', translation: 'restaurant', parts: 'yam + dom' },
    { word: 'kitabuloka', translation: 'library', parts: 'kitabu + loka' }
];
