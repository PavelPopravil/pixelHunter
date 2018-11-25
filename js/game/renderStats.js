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
        ${questions.map((question) => {
          return `<li class="stats__result ${questStatusMap[question]}"></li>`;
        })}
      </ul>
    </div>`;
};
