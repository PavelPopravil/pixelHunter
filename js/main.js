import mpdule from './modules/util.js' 

console.log(mpdule);

const screens = [...document.querySelectorAll('template')];

const initialState = {
    startScreen: 0,
    currentScreen: 0,
    screenLength: screens.length
};

const mainScreen = document.querySelector('.central');

const showScreen = ((screen) => {
    mainScreen.innerHTML = '';
    const template = screen.content.cloneNode(true);
    mainScreen.appendChild(template);
});

document.addEventListener('keydown', (e) => {

    if (e.altKey && e.keyCode === 39) {
        if (initialState.currentScreen < initialState.screenLength - 1) {
            showScreen(screens[++initialState.currentScreen]);
        }
    } else if (e.altKey && e.keyCode === 37) {
        if (initialState.currentScreen > 0) {
            showScreen(screens[--initialState.currentScreen]);
        }
    
    }
});

showScreen(screens[initialState.startScreen]);