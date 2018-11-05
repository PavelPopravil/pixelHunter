import {createTempate} from '../modules/createTemplate.js'
import renderTemplate from '../modules/renderTemplate.js'
import game_1 from './game-1.js'
import footer from './footer.js'

const moduleHtml = createTempate(`
    <div class="rules">
        <h1 class="rules__title">Правила</h1>
        <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
            src="img/photo_icon.png" width="16" height="16"> или рисунок <img
            src="img/paint_icon.png" width="16" height="16" alt="">.<br>
            Фотографиями или рисунками могут быть оба изображения.<br>
            На каждую попытку отводится 30 секунд.<br>
            Ошибиться можно не более 3 раз.<br>
            <br>
            Готовы?
        </p>
        <form class="rules__form">
            <input class="rules__input" type="text" placeholder="Ваше Имя">
            <button class="rules__button  continue" type="submit" disabled>Go!</button>
        </form>
    </div>
    ${footer}
    `);
    
const form = moduleHtml.querySelector('.rules__form');
const inpName = form.querySelector('.rules__input');
const submitBtn = form.querySelector('.rules__button');

inpName.addEventListener('input', function() {
    if (this.value.length > 0) {
        removeDisabledState();
    }
});

form.addEventListener('submit', function() {
    renderTemplate(game_1);
});

const removeDisabledState = () => {
    submitBtn.removeAttribute('disabled');
}

export default moduleHtml;
