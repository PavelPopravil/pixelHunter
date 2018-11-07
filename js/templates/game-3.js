import createTempate from '../utils/createTemplate.js';
import renderTemplate from '../utils/renderTemplate.js';
import delegateElement from '../utils/delegateElement.js';
import stats from './stats.js';

const moduleHtml = createTempate(`
    <div class="game">
        <p class="game__task">Найдите рисунок среди изображений</p>
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

const game = moduleHtml.querySelector(`.game`);

game.addEventListener(`click`, (e) => {

  if (delegateElement(e.target, e.currentTarget, `game__option`)) {
    renderTemplate(stats);
  }
});

export default moduleHtml;
