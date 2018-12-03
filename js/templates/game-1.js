import createTempate from '../utils/createTemplate.js';
import renderGameTemplate from '../utils/renderGameTemplate.js';
import delegateElement from '../utils/delegateElement.js';
import game2 from './game-2.js';
import {games, questions} from '../game/data.js';
import renderOption from '../game/renderOption.js';
import renderStats from '../game/renderStats.js';
import answerHandler from '../game/answerHandler.js';
import backToIntro from '../game/backToIntro.js';
import header from './header.js';

const moduleHtml = (state) => {
  const html = createTempate(`
    ${header(state)}
    <div class="game">
        <p class="game__task">${games[state.screen].description}</p>
        <form class="game__content">
          ${renderOption(questions[state.currentQuestionIndex].optionList[`option-1`], `option-1`)}
           ${renderOption(questions[state.currentQuestionIndex].optionList[`option-2`], `option-2`)}
        </form>
        ${renderStats(state.questionsStats)}
    </div>
    `);

  const gameOptions = html.querySelectorAll(`.game__option`);

  const gameData = Object.freeze({
    'option-1': null,
    'option-2': null
  });

  const optionHandler = (data) => {
    if (data[`option-1`] && data[`option-2`]) {
      renderGameTemplate(state, game2);
    } else if (data[`option-1`] === false || data[`option-2`] === false) {
      renderGameTemplate(state, game2);
    }
  };

  answerHandler(gameOptions, gameData, optionHandler);

  return backToIntro(html);
};

export default moduleHtml;
