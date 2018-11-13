import {questStatusMap} from './data.js';

/**
 * @type {function}
 * @param {object} questions - объект с вопросами игр
 * @return {string} string of html
 */
export default (questions) => {
  return `
    <div class="stats">
      <ul class="stats">
        ${[...Object.keys(questions)].map((question) => {
          return `<li class="stats__result ${questStatusMap[questions[question].status]}"></li>`;
        })}
      </ul>
    </div>`;
};