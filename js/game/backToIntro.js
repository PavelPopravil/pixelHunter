import greetings from '../templates/greeting.js';
import renderTemplate from '../utils/renderTemplate.js';

export default (html) => {
  const backBtn = html.querySelector(`.header__back`);
  backBtn.addEventListener(`click`, () => {
    renderTemplate(greetings());
  });
  return html;
};