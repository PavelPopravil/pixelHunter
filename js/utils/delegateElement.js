export default (el, ctx, cls) => {
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
