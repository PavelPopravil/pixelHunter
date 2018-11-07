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
    description: `Угадай, фото или рисунок?`,
    nextScreen: `game-1`
  }
});