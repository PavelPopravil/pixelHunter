import createTempate from '../utils/createTemplate.js';
import renderGameTemplate from '../utils/renderGameTemplate.js';
import delegateElement from '../utils/delegateElement.js';
import game1 from './game-1.js';
import {games, questions} from '../game/data.js';
import renderOption from '../game/renderOption.js';
import renderStats from '../game/renderStats.js';
import backToIntro from '../game/backToIntro.js';
import header from './header.js';

const moduleHtml = (state) => {
  const html = createTempate(`
    ${header(state)}
    <div class="game" data-answer="${games[state.screen].type}">
      <p class="game__task">${games[state.screen].description}</p>
      <form class="game__content  game__content--triple">
        ${renderOption(questions[state.currentQuestionIndex].optionList[`option-1`])}
        ${renderOption(questions[state.currentQuestionIndex].optionList[`option-2`])}
        ${renderOption(questions[state.currentQuestionIndex].optionList[`option-3`])}
      </form>
      ${renderStats(state.questionsStats)}
    </div>
    `);

  const game = html.querySelector(`.game`);

  const gameData = Object.freeze({
    'answer': games[state.screen].type
  });

  game.addEventListener(`click`, (e) => {
    const gameAnswer = delegateElement(e.target, e.currentTarget, `game__option`).querySelector(`img`).getAttribute(`data-type`);
    if (gameAnswer.toLowerCase() === gameData.answer) {
      renderGameTemplate(state, game1, `correct`);
    } else {
      renderGameTemplate(state, game1, `wrong`);
    }
  });

  return backToIntro(html);
};

export default moduleHtml;
