import createTempate from '../utils/createTemplate.js';
import renderGameTemplate from '../utils/renderGameTemplate.js';
import delegateElement from '../utils/delegateElement.js';
import game1 from './game-1.js';
import {games, questions} from '../game/data.js';
import renderOption from '../game/renderOption.js';
import renderStats from '../game/renderStats.js';

const moduleHtml = (state) => {
  const html = createTempate(`
    <div class="game">
      <p class="game__task">${games[state.screen].description}</p>
      <form class="game__content  game__content--triple">
        ${renderOption(questions[`question-${state.currentQuestion}`].optionList[`option-1`])}
        ${renderOption(questions[`question-${state.currentQuestion}`].optionList[`option-2`])}
        ${renderOption(questions[`question-${state.currentQuestion}`].optionList[`option-3`])}
      </form>
      ${renderStats(questions)}
    </div>
    `);

  const game = html.querySelector(`.game`);

  game.addEventListener(`click`, (e) => {

    if (delegateElement(e.target, e.currentTarget, `game__option`)) {
      renderGameTemplate(state, game1);
    }
  });

  return html;
};

export default moduleHtml;
