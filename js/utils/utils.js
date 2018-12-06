export const renderTemplate = (screen) => {
  const mainScreen = document.querySelector(`.central`);
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen);
};

export const createTemplate = (html) => {
  const template = document.createElement(`template`);
  template.innerHTML = html;
  return template.content.cloneNode(true);
};

export const delegateElement = (el, ctx, cls) => {
  if (!el.className) {
    return false;
  }
  const reg = new RegExp(cls, `\g`);
  while (el !== ctx) {
    if (reg.test(el.className)) {
      return el;
    }
    el = el.parentNode;
  }
};
