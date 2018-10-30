import introBlock from './templates/intro.js';
import greetingBlock from './templates/greeting.js';
import rulesBlock from './templates/rules.js';
import game1Block from './templates/game-1.js';
import game2Block from './templates/game-2.js';
import game3Block from './templates/game-3.js';
import statsBlock from './templates/stats.js';
import renderTemplate from './modules/renderTemplate.js';

console.log(renderTemplate(statsBlock));

// const screens = [...document.querySelectorAll('template')];

// const initialState = {
//     startScreen: 0,
//     currentScreen: 0,
//     screenLength: screens.length
// };

// document.addEventListener('keydown', (e) => {

//     if (e.altKey && e.keyCode === 39) {
//         if (initialState.currentScreen < initialState.screenLength - 1) {
//             showScreen(screens[++initialState.currentScreen]);
//         }
//     } else if (e.altKey && e.keyCode === 37) {
//         if (initialState.currentScreen > 0) {
//             showScreen(screens[--initialState.currentScreen]);
//         }
    
//     }
// });

// showScreen(screens[initialState.startScreen]);