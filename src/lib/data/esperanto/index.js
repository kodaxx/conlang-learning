import basics1 from './lessons/01-basics-1.js';
import basics2 from './lessons/02-basics-2.js';
import accusative from './lessons/03-accusative.js';
import adjectivesAdverbs from './lessons/04-adjectives-adverbs.js';
import questionsNegation from './lessons/05-questions-negation.js';
import verbTenses from './lessons/06-verb-tenses.js';
import affixes1 from './lessons/07-affixes-1.js';
import numbersTime from './lessons/08-numbers-time.js';
import prepositions from './lessons/09-prepositions.js';
import familyPeople from './lessons/10-family-people.js';
import foodDrink from './lessons/11-food-drink.js';
import correlatives1 from './lessons/12-correlatives-1.js';
import correlatives2 from './lessons/13-correlatives-2.js';
import imperative from './lessons/14-imperative.js';
import conditional from './lessons/15-conditional.js';
import affixes2 from './lessons/16-affixes-2.js';
import reflexive from './lessons/17-reflexive.js';
import comparison from './lessons/18-comparison.js';
import participles from './lessons/19-participles.js';
import review from './lessons/20-review.js';

export const esperantoCurriculum = {
    id: 'esperanto',
    name: 'Esperanto',
    icon: '🌍',
    description: 'The international auxiliary language with millions of speakers worldwide',
    lessons: [
        basics1,
        basics2,
        accusative,
        adjectivesAdverbs,
        questionsNegation,
        verbTenses,
        affixes1,
        numbersTime,
        prepositions,
        familyPeople,
        foodDrink,
        correlatives1,
        correlatives2,
        imperative,
        conditional,
        affixes2,
        reflexive,
        comparison,
        participles,
        review
    ]
};

export * as esperantoDictionary from './dictionary.js';

export function getLesson(lessonId) {
    return esperantoCurriculum.lessons.find(l => l.id === lessonId);
}
