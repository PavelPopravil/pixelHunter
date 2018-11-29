import createTempate from '../utils/createTemplate.js';
import renderGameTemplate from '../utils/renderGameTemplate.js';
import delegateElement from '../utils/delegateElement.js';
import game2 from './game-2.js';
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
        <form class="game__content">
          ${renderOption(questions[state.currentQuestionIndex].optionList[`option-1`], `option-1`)}
           ${renderOption(questions[state.currentQuestionIndex].optionList[`option-2`], `option-2`)}
        </form>
        ${renderStats(state.questionsStats)}
    </div>
    `);


  const gameForm = html.querySelector(`.game__content`);

  const gameOptions = html.querySelectorAll(`.game__option`);

  gameOptions.forEach((option) => {
    const imgType = option.querySelector(`img`).getAttribute(`data-type`);
    let totalAnswer = null;
    option.addEventListener(`click`, (e) => {
      if (e.target.tagName === `INPUT`) {
        totalAnswer = e.target.value;
        if (totalAnswer === imgType) {
          console.log(`correctAnswer`);
        } else {
          console.log(`incorrectAnswer`);
        }
      }
    });
  });

  // gameForm.addEventListener(`click`, (e) => {
  //
  //   if (delegateElement(e.target, e.currentTarget, `game__option`)) {
  //
  //   }
  //
  //   if (e.target.tagName === `INPUT`) {
  //     const name = e.target.name;
  //     gameData[name] = e.target.value;
  //     if (gameData[`option-1`] !== null && gameData[`option-2`] !== null) {
  //       renderGameTemplate(state, game2);
  //     }
  //   }
  // });

  const gameData = {
    'option-1': null,
    'option-2': null
  };

  return backToIntro(html);
};

export default moduleHtml;
