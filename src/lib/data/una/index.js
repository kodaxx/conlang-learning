import lesson01 from './lessons/01-first-words.js';
import lesson02 from './lessons/02-verbs-actions.js';
import lesson03 from './lessons/03-adjectives-negation.js';
import lesson04 from './lessons/04-tense-system.js';
import lesson05 from './lessons/05-modal-verbs.js';
import unaDictionary from './dictionary.js';

export { unaDictionary };

export const unaCurriculum = {
    id: 'una',
    name: 'Una',
    icon: '🌐',
    description: 'A minimalist analytic language with strict SVO order and productive word-building',
    totalWords: 200,
    lessons: [
        lesson01,
        lesson02,
        lesson03,
        lesson04,
        lesson05
    ]
};

export function getLesson(lessonId) {
    return unaCurriculum.lessons.find(l => l.id === lessonId);
}
