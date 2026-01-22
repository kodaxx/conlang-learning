// Kokanu Language Curriculum
// Based on the official Kokanu guide at en.kokanu.com/guide/

import lesson01 from './lessons/01-sounds.js';
import lesson02 from './lessons/02-animals.js';
import lesson03 from './lessons/03-things-places.js';
import lesson04 from './lessons/04-pronouns.js';
import lesson05 from './lessons/05-verb-marker.js';
import lesson06 from './lessons/06-simple-sentences.js';
import lesson07 from './lessons/07-objects-communication.js';
import lesson08 from './lessons/08-giving-wanting.js';
import lesson09 from './lessons/09-questions-negation.js';
import lesson10 from './lessons/10-tense-aspect.js';
import lesson11 from './lessons/11-word-categories.js';
import lesson12 from './lessons/12-advanced-derivations.js';
import lesson13 from './lessons/13-tense.js';
import lesson14 from './lessons/14-aspect-mood.js';
import lesson15 from './lessons/15-questions.js';
import lesson16 from './lessons/16-clauses.js';
import lesson17 from './lessons/17-grammar-particles.js';
import lesson18 from './lessons/18-numbers.js';
import lesson19 from './lessons/19-names-directions.js';
import lesson20 from './lessons/20-review.js';
import kokanuDictionary from './dictionary.js';

export { kokanuDictionary };

export const kokanuCurriculum = {
    id: 'kokanu',
    name: 'Kokanu',
    icon: '🌏',
    description: 'Learn the globally accessible auxiliary language — comprehensive course covering all grammar!',
    totalWords: 380,
    lessons: [
        lesson01,  // Sounds & First Words (Phonology)
        lesson02,  // Animals
        lesson03,  // Things & Places
        lesson04,  // Pronouns
        lesson05,  // The Verb Marker
        lesson06,  // Simple Sentences
        lesson07,  // Objects & Communication
        lesson08,  // Giving & Wanting
        lesson09,  // Questions & Negation
        lesson10,  // Tense & Aspect
        lesson11,  // Word Categories
        lesson12,  // Advanced Derivations
        lesson13,  // Tense
        lesson14,  // Aspect & Mood
        lesson15,  // Questions
        lesson16,  // Clauses
        lesson17,  // Grammar Particles
        lesson18,  // Numbers & Amounts
        lesson19,  // Names & Directions
        lesson20   // Review & Practice
    ]
};

export function getLesson(lessonId) {
    return kokanuCurriculum.lessons.find(l => l.id === lessonId);
}
