import { error } from '@sveltejs/kit';
import { tokiponaDictionary } from '$lib/data/tokipona/index.js';
import { unaDictionary } from '$lib/data/una/index.js';
import { kokanuDictionary } from '$lib/data/kokanu/index.js';
import { esperantoDictionary } from '$lib/data/esperanto/index.js';
import { globasaDictionary } from '$lib/data/globasa/index.js';

const dictionaries = {
    tokipona: {
        core: tokiponaDictionary.core,
        compounds: tokiponaDictionary.compounds,
        getCategories: () => tokiponaDictionary.getCategories()
    },
    una: {
        core: unaDictionary.coreWords,
        compounds: unaDictionary.derivedWords,
        getCategories: () => unaDictionary.getCategories()
    },
    kokanu: {
        core: kokanuDictionary.coreWords,
        compounds: kokanuDictionary.derivedWords,
        getCategories: () => kokanuDictionary.getCategories()
    },
    esperanto: {
        core: esperantoDictionary.coreWords,
        compounds: [],
        getCategories: () => esperantoDictionary.getCategories()
    },
    globasa: {
        core: globasaDictionary.coreWords,
        compounds: globasaDictionary.derivedWords,
        getCategories: () => [...new Set(globasaDictionary.coreWords.map(w => w.category))]
    }
};

export function load({ params }) {
    const dictionary = dictionaries[params.lang];

    if (!dictionary) {
        throw error(404, 'Dictionary not available for this language');
    }

    return {
        language: params.lang,
        dictionary: {
            core: dictionary.core,
            compounds: dictionary.compounds,
            categories: dictionary.getCategories()
        }
    };
}
