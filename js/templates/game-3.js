import createTempate from '../utils/createTemplate.js';
import renderGameTemplate from '../utils/renderGameTemplate.js';
import delegateElement from '../utils/delegateElement.js';
import game1 from './game-1.js';
import {games} from '../game/data.js';

const moduleHtml = (state) => {
  const html = createTempate(`
    <div class="game">
        <p class="game__task">${games[state.screen].description}</p>
        <form class="game__content  game__content--triple">
            <div class="game__option">
                <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option  game__option--selected">
                <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option">
                <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
            </div>
        </form>
        <div class="stats">
            <ul class="stats">
                <li class="stats__result stats__result--wrong"></li>
                <li class="stats__result stats__result--slow"></li>
                <li class="stats__result stats__result--fast"></li>
                <li class="stats__result stats__result--correct"></li>
                <li class="stats__result stats__result--wrong"></li>
                <li class="stats__result stats__result--unknown"></li>
                <li class="stats__result stats__result--slow"></li>
                <li class="stats__result stats__result--unknown"></li>
                <li class="stats__result stats__result--fast"></li>
                <li class="stats__result stats__result--unknown"></li>
            </ul>
        </div>
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
