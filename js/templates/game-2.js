import createTempate from '../utils/createTemplate.js';
import renderGameTemplate from '../utils/renderGameTemplate.js';
import game3 from './game-3.js';
import {games, questions} from '../game/data.js';
import renderOption from '../game/renderOption.js';
import renderStats from '../game/renderStats.js';
import backToIntro from '../game/backToIntro.js';
import header from './header.js';

const moduleHtml = (state) => {
  const html = createTempate(`
    ${header(state)}
    <div class="game">
        <p class="game__task">${games[state.screen].description}</p>
        <form class="game__content  game__content--wide">
           ${renderOption(questions[`question-${state.currentQuestion}`].optionList[`option-1`], `option-1`)}
        </form>
        ${renderStats(state.questionStats)}
    </div>
    `);
  const game = html.querySelector(`.game`);
  const gameForm = game.querySelector(`.game__content`);

  gameForm.addEventListener(`click`, (e) => {

    if (e.target.tagName === `INPUT`) {
      const name = e.target.name;
      gameData[name] = e.target.value;
      if (gameData[`option-1`] !== null) {
        renderGameTemplate(state, game3);
      }
    }
  });

  const gameData = {
    'option-1': null
  };

  return backToIntro(html);
};

export default moduleHtml;
