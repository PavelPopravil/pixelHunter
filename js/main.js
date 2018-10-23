// import util from '/modules/util.js' 

// console.log(util);

const screens = [...document.querySelectorAll('template')];
const mainScreen = document.querySelector('.central');

const showScreen = ((screen) => {
    mainScreen.innerHTML = '';
    const template = screen.content.cloneNode(true);
    mainScreen.appendChild(template);
});

showScreen(screens[0]);

document.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
});