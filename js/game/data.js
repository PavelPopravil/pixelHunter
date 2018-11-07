export const games = Object.freeze({
  'game-1': {
    description: `Угадайте для каждого изображения фото или рисунок?`,
    nextScreen: `game-2`
  },
  'game-2': {
    description: `Угадай, фото или рисунок?`,
    nextScreen: `game-3`
  },
  'game-3': {
    description: `Найдите рисунок среди изображений`,
    nextScreen: `game-1`
  }
});

export const initialState = Object.freeze({
  timeOut: 30,
  lifes: 3,
  maxLifes: 3,
  screen: `game-1`,
  questions: 10
});
