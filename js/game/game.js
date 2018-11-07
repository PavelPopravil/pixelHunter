// Глобальный объект игры
export default {
  status: ``, // fail or win
  screens: [], // intro, greeings ...
  results: {}
};

// Объект экрана-игры (object)
const gameScreen = {
  screenType: gameTypes.game1, // (string) 1 из 3-ёх типов игры
  stat: gameStat.stat1
};

// Объект типов игры (object) всего - 3
const gameTypes = {
  game1: {
    text: `Угадайте для каждого изображения фото или рисунок?`,
    questHtml: ``,
    answer: {
      status: true, // (boolean) Правильный либо нет ответ
      imgSrc: `` // ссылка на изображение
    }
  },
  game2: {},
  game3: {}
};

// Объект стутуса игры (object) всего - 5
const gameStat = {
  stat1: ``, // будет содержать  вью конерктного статуса + возможно кол-во заработанных очков
  stat2: ``,
  stat3: ``,
  stat4: ``,
  stat5: ``,
};
