import lesson01 from './lessons/01-first-words.js';
import lesson02 from './lessons/02-things-people.js';
import lesson03 from './lessons/03-li-particle.js';
import lesson04 from './lessons/04-actions.js';
import lesson05 from './lessons/05-e-particle.js';
import lesson06 from './lessons/06-modifiers.js';
import lesson07 from './lessons/07-questions.js';
import lesson08 from './lessons/08-prepositions.js';
import lesson09 from './lessons/09-commands.js';
import lesson10 from './lessons/10-context.js';
import lesson11 from './lessons/11-pi.js';
import lesson12 from './lessons/12-body.js';
import lesson13 from './lessons/13-nature.js';
import lesson14 from './lessons/14-numbers-colors.js';
import lesson15 from './lessons/15-mastery.js';
import tokiponaDictionary from './dictionary.js';

export { tokiponaDictionary };

export const tokiponaCurriculum = {
    id: 'tokipona',
    name: 'Toki Pona',
    icon: '🗿',
    description: 'Master the language of simplicity — only ~120 words!',
    totalWords: 80,
    lessons: [
        lesson01,
        lesson02,
        lesson03,
        lesson04,
        lesson05,
        lesson06,
        lesson07,
        lesson08,
        lesson09,
        lesson10,
        lesson11,
        lesson12,
        lesson13,
        lesson14,
        lesson15
    ]
};

export function getLesson(lessonId) {
    return tokiponaCurriculum.lessons.find(l => l.id === lessonId);
}
