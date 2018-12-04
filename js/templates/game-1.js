import createTempate from '../utils/createTemplate.js';
import renderGameTemplate from '../utils/renderGameTemplate.js';
import game2 from './game-2.js';
import {games, questions} from '../game/data.js';
import Timer from '../game/timer.js';
import renderOption from '../game/renderOption.js';
import renderStats from '../game/renderStats.js';
import answerHandler from '../game/answerHandler.js';
import backToIntro from '../game/backToIntro.js';
import {handleCorrectAnswer} from '../game/game.js';
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

  const headerTimer = html.querySelector(`.game__timer`);
  const gameOptions = html.querySelectorAll(`.game__option`);

  const gameData = Object.freeze({
    'option-1': null,
    'option-2': null
  });

  const updateHeaderTime = (time) => {
    headerTimer.innerHTML = time;
  };

  const gameTimer = new Timer(state.timeOut);

  gameTimer.onCountComplete = () => {
    renderGameTemplate(state, game2, `wrong`);
  };

  gameTimer.onCount = () => {
    updateHeaderTime(gameTimer.returnDifference());
  };

  gameTimer.start();

  const optionHandler = (data) => {
    if (data[`option-1`] && data[`option-2`]) {
      renderGameTemplate(state, game2, handleCorrectAnswer(gameTimer.returnValue()));
    } else if (data[`option-1`] === false || data[`option-2`] === false) {
      renderGameTemplate(state, game2, `wrong`);
    }
  };

  answerHandler(gameOptions, gameData, optionHandler);

  return backToIntro(html);
};

export default moduleHtml;
