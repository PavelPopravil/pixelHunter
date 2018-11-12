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


export const pictures = {
  paintings: [
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    `http://i.imgur.com/1KegWPz.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};

export const questionList = {
  // 'question-1': {
  //   ,
  // }
};

export const question = {
  type: `type-1`,
  optionList: {
    'option-1': {
      isPhoto: true,
      url: pictures.photos[0],
      width: 468,
      height: 458
    },
    'option-2': {
      isPic: false,
      url: pictures.paintings[0],
      width: 468,
      height: 458
    }
  }
};