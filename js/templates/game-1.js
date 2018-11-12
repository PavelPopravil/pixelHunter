import createTempate from '../utils/createTemplate.js';
import renderGameTemplate from '../utils/renderGameTemplate.js';
import game2 from './game-2.js';
import {games, question} from '../game/data.js';
import gameOption from '../game/gameOption.js';

// console.log(question[`option-1`]);

const moduleHtml = (state) => {

  const html = createTempate(`
    <div class="game">
        <p class="game__task">${games[state.screen].description}</p>
        <form class="game__content">
           ${gameOption(question.optionList[`option-1`], `option-1`)}
           ${gameOption(question.optionList[`option-2`], `option-2`)}
        </form>
        <div class="stats">
            <ul class="stats">
                <li class="stats__result stats__result--wrong"></li>
                <li class="stats__result stats__result--slow"></li>
                <li class="stats__result stats__result--fast"></li>
                <li class="stats__result stats__result--correct"></li>
                <li class="stats__result stats__result--unknown"></li>
                <li class="stats__result stats__result--unknown"></li>
                <li class="stats__result stats__result--unknown"></li>
                <li class="stats__result stats__result--unknown"></li>
                <li class="stats__result stats__result--unknown"></li>
                <li class="stats__result stats__result--unknown"></li>
            </ul>
        </div>
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
