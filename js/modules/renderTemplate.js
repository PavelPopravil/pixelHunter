const mainScreen = document.querySelector('.central');

export default (screen) => {
    mainScreen.innerHTML = '';
    mainScreen.appendChild(screen);
} 