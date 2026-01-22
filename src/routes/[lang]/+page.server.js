import { error } from '@sveltejs/kit';
import { getAllProgress } from '$lib/server/queries.js';
import { esperantoCurriculum } from '$lib/data/esperanto/index.js';
import { tokiponaCurriculum } from '$lib/data/tokipona/index.js';
import { unaCurriculum } from '$lib/data/una/index.js';
import { kokanuCurriculum } from '$lib/data/kokanu/index.js';
import { globasaCurriculum } from '$lib/data/globasa/index.js';
import { coreWords as tokiponaCoreWords, compoundWords as tokiponaCompounds } from '$lib/data/tokipona/dictionary.js';
import { coreWords as unaCoreWords, derivedWords as unaCompounds } from '$lib/data/una/dictionary.js';
import { coreWords as kokanuCoreWords, derivedWords as kokanuCompounds } from '$lib/data/kokanu/dictionary.js';
import { coreWords as esperantoCoreWords } from '$lib/data/esperanto/dictionary.js';
import { coreWords as globasaCoreWords, derivedWords as globasaDerived } from '$lib/data/globasa/dictionary.js';

const curricula = {
    esperanto: esperantoCurriculum,
    tokipona: tokiponaCurriculum,
    una: unaCurriculum,
    kokanu: kokanuCurriculum,
    globasa: globasaCurriculum
};

const dictionaryStats = {
    tokipona: { core: tokiponaCoreWords.length, compounds: tokiponaCompounds.length },
    una: { core: unaCoreWords.length, compounds: unaCompounds.length },
    kokanu: { core: kokanuCoreWords.length, compounds: kokanuCompounds.length },
    esperanto: { core: esperantoCoreWords.length, compounds: 0 },
    globasa: { core: globasaCoreWords.length, compounds: globasaDerived.length }
};

export function load({ params, locals }) {
    const { lang } = params;

    const curriculum = curricula[lang];
    if (!curriculum) {
        throw error(404, 'Language not found');
    }

    // Get user-specific progress if logged in
    const lessonProgress = locals.userId ? getAllProgress(lang, locals.userId) : [];

    return {
        language: lang,
        curriculum,
        lessonProgress,
        dictionaryStats: dictionaryStats[lang] || null
    };
}
