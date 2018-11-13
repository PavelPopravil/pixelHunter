import createTempate from '../utils/createTemplate.js';
import renderGameTemplate from '../utils/renderGameTemplate.js';
import game2 from './game-2.js';
import {games, questions} from '../game/data.js';
import renderOption from '../game/renderOption.js';
import renderStats from '../game/renderStats.js';

const moduleHtml = (state) => {
  const html = createTempate(`
    <div class="game">
        <p class="game__task">${games[state.screen].description}</p>
        <form class="game__content">
          ${renderOption(questions[`question-${state.currentQuestion}`].optionList[`option-1`], `option-1`)}
          ${renderOption(questions[`question-${state.currentQuestion}`].optionList[`option-2`], `option-2`)}
        </form>
        ${renderStats(questions)}
    </div>
    `);

  const game = html.querySelector(`.game`);
  const gameForm = game.querySelector(`.game__content`);

  gameForm.addEventListener(`click`, (e) => {

    if (e.target.tagName === `INPUT`) {
      const name = e.target.name;
      gameData[name] = e.target.value;
      if (gameData[`option-1`] !== null && gameData[`option-2`] !== null) {
        renderGameTemplate(state, game2);
      }
    }
  });

  const gameData = {
    'option-1': null,
    'option-2': null
  };

  return html;
};

export default moduleHtml;
