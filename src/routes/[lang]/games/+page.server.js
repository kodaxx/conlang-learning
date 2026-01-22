import { error } from '@sveltejs/kit';

export function load({ params }) {
    const supportedLanguages = ['tokipona', 'esperanto', 'globasa'];

    if (!supportedLanguages.includes(params.lang)) {
        throw error(404, 'Language not found');
    }

    return {
        language: params.lang
    };
}
