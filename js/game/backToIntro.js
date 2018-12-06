import * as utils from '../utils/utils.js';
import greetings from '../templates/greeting.js';

export default (html) => {
  const backBtn = html.querySelector(`.header__back`);
  backBtn.addEventListener(`click`, () => {
      utils.renderTemplate(greetings());
  });
  return html;
};