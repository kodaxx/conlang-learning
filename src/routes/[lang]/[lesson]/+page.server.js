import { error } from '@sveltejs/kit';
import { esperantoCurriculum, getLesson as getEsperantoLesson } from '$lib/data/esperanto/index.js';
import { tokiponaCurriculum, getLesson as getTokiPonaLesson } from '$lib/data/tokipona/index.js';
import { unaCurriculum, getLesson as getUnaLesson } from '$lib/data/una/index.js';
import { kokanuCurriculum, getLesson as getKokanuLesson } from '$lib/data/kokanu/index.js';
import { globasaCurriculum, getLesson as getGlobasaLesson } from '$lib/data/globasa/index.js';

const getLessonFuncs = {
    esperanto: getEsperantoLesson,
    tokipona: getTokiPonaLesson,
    una: getUnaLesson,
    kokanu: getKokanuLesson,
    globasa: getGlobasaLesson
};

export function load({ params }) {
    const { lang, lesson: lessonId } = params;

    const getLesson = getLessonFuncs[lang];
    if (!getLesson) {
        throw error(404, 'Language not found');
    }

    const lesson = getLesson(lessonId);
    if (!lesson) {
        throw error(404, 'Lesson not found');
    }

    return {
        language: lang,
        lesson
    };
}

