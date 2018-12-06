import * as utils from '../utils/utils.js';
import {initialState} from '../game/data.js';
import backToIntro from '../game/backToIntro.js';
import game1 from './game-1.js';
import header from './header.js';

const moduleHtml = () => {
  const html = utils.createTempate(`
    ${header()}
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
    `);

  const form = html.querySelector(`.rules__form`);
  const inpName = form.querySelector(`.rules__input`);
  const submitBtn = form.querySelector(`.rules__button`);

  inpName.addEventListener(`input`, (e) => {
    if (e.target.value.length > 0) {
      submitBtn.removeAttribute(`disabled`);
    }
  });

  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
      utils.renderTemplate(game1(initialState));
  });

  return backToIntro(html);
};

export default moduleHtml;

