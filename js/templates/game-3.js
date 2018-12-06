import * as utils from '../utils/utils.js';
import header from './header.js';
import renderGameTemplate from '../game/renderGameTemplate.js';
import game1 from './game-1.js';
import {games, questions} from '../game/data.js';
import Timer from '../game/timer.js';
import renderOption from '../game/renderOption.js';
import renderStats from '../game/renderStats.js';
import backToIntro from '../game/backToIntro.js';
import {handleCorrectAnswer} from '../game/game.js';


const moduleHtml = (state) => {
  const html = utils.createTemplate(`
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

  const headerTimer = html.querySelector(`.game__timer`);
  const game = html.querySelector(`.game`);

  const gameData = Object.freeze({
    'answer': games[state.screen].type
  });

  const updateHeaderTime = (time) => {
    headerTimer.innerHTML = time;
  };

  const gameTimer = new Timer(state.timeOut);

  gameTimer.onCountComplete = () => {
    renderGameTemplate(state, game1, `wrong`);
  };

  gameTimer.onCount = () => {
    updateHeaderTime(gameTimer.returnDifference());
  };

  gameTimer.start();

  // const timer
  game.addEventListener(`click`, (e) => {
    const gameAnswer = utils.delegateElement(e.target, e.currentTarget, `game__option`).querySelector(`img`).getAttribute(`data-type`);
    if (gameAnswer.toLowerCase() === gameData.answer) {
      renderGameTemplate(state, game1, handleCorrectAnswer(gameTimer.returnValue()));
    } else {
      renderGameTemplate(state, game1, `wrong`);
    }
  });

  return backToIntro(html);
};

export default moduleHtml;
