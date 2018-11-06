
export default (screen) => {
    const mainScreen = document.querySelector('.central');
    mainScreen.innerHTML = '';
    mainScreen.appendChild(screen);
} 