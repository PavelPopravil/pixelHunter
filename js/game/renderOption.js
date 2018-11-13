/**
 *  Генерирует строку HTNL, опции игры на основе переданного объекта
 *  @type {function}
 *  @param {object} optionData
 *  @param {string} name - имя ответа
 *  @return {string} string of html
 */
export default (optionData, name) => {
  return `
    <div class="game__option">
      <img src='${optionData.url}' alt='${optionData.alt}' width='${optionData.width}' height='${optionData.height}'>
      ${name ? ` <label class="game__answer game__answer--photo">
        <input name="${name}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="${name}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>` : ``}
    </div>`;
};
