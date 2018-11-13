import {questStatusMap} from './data.js';

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