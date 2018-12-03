/**
 * Обрабатывает ответ пользователя на вопрос игры
 * @type {function}
 * @param {NodeList} options Answer's DOM nodes
 * @param {object} gameData Initial gameData object
 * @param {function} cb Callback function
 * @param {string} type Type of question
 */
export default (options, gameData, cb, type = `type-1`) => {

  const gameObject = Object.assign({}, gameData);

  options.forEach((option) => {
    const imgType = option.querySelector(`img`).getAttribute(`data-type`);
    let totalAnswer = null;
    option.addEventListener(`click`, (e) => {
      if (e.target.tagName === `INPUT`) {
        totalAnswer = e.target.value;
        option.classList.add(`disabled`);
        totalAnswer.toLowerCase() === imgType.toLowerCase() ? gameObject[e.target.name] = true : gameObject[e.target.name] = false;
        cb(gameObject);
      }
    });
  });
};