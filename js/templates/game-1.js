import {createTempate} from '../modules/createTemplate.js'
import renderTemplate from '../modules/renderTemplate.js'
import game_2 from './game-2.js'
import footer from './footer.js'

const moduleHtml = createTempate(`
    <div class="game">
        <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
        <form class="game__content">
            <div class="game__option">
                <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
                <label class="game__answer game__answer--photo">
                <input name="question1" type="radio" value="photo">
                <span>Фото</span>
                </label>
                <label class="game__answer game__answer--paint">
                <input name="question1" type="radio" value="paint">
                <span>Рисунок</span>
                </label>
            </div>
            <div class="game__option">
                <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
                <label class="game__answer  game__answer--photo">
                <input name="question2" type="radio" value="photo">
                <span>Фото</span>
                </label>
                <label class="game__answer  game__answer--paint">
                <input name="question2" type="radio" value="paint">
                <span>Рисунок</span>
                </label>
            </div>
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
    ${footer}
    `);

const game = moduleHtml.querySelector('.game');
const gameForm = game.querySelector('.game__content');
const btns = game.querySelectorAll('.game__answer');
const gameOptions = game.querySelectorAll('.game__option');

gameForm.addEventListener('click', function(e) {

    if (e.target.tagName === 'INPUT') {
        const name = e.target.name;
        gameData[name] = e.target.value;
        
        if (gameData.question1 !== null && gameData.question2 !== null) {
            renderTemplate(game_2);
        }
    }
    
});

const gameData = {
    question1: null,
    question2: null
};
    
export default moduleHtml;