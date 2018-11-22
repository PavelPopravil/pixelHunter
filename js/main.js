import renderTemplate from './utils/renderTemplate.js';
// import introBlock from './templates/intro.js';
import rulesBlock from './templates/rules.js';
// import game1Block from './templates/game-1.js';
// import game2Block from './templates/game-2.js';
// import game3Block from './templates/game-3.js';
// import statsBlock from './templates/stats.js';


document.addEventListener(`DOMContentLoaded`, function () {
  renderTemplate(rulesBlock());
});
