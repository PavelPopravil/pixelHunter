const answerTime = 30;
const pointsMap = {
  correct: 100,
  fast: 150,
  slow: 50
};

export const handleCorrectAnswer = (currentTime) => {
  if (typeof currentTime !== `number`) {
    throw new Error(`Parament should be a number`);
  }
  switch (true) {
    case (currentTime < 10):
      return `fast`;
    case (currentTime > 20):
      return `slow`;
    default:
      return `correct`;
  }
};

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

export const questions = [
  {
    status: `unknown`,
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
  },
  {
    status: `unknown`,
    optionList: {
      'option-1': {
        isPhoto: true,
        url: pictures.photos[0],
        width: 705,
        height: 455
      }
    }
  },
  {
    status: `unknown`,
    optionList: {
      'option-1': {
        isPhoto: true,
        url: pictures.photos[1],
        width: 304,
        height: 455
      },
      'option-2': {
        isPhoto: false,
        url: pictures.paintings[1],
        width: 304,
        height: 455
      },
      'option-3': {
        isPhoto: true,
        url: pictures.photos[2],
        width: 304,
        height: 455
      }
    }
  }
];

export const initialState = Object.freeze({
  timeOut: 30,
  lifes: 3,
  maxLifes: 3,
  screen: `game-1`,
  questionsLength: questions.length,
  currentQuestionIndex: 0,
  questionsStats: questions.map((question) => question.status)
});

export const questStatusMap = {
  wrong: `stats__result--wrong`,
  slow: `stats__result--slow`,
  fast: `stats__result--fast`,
  correct: `stats__result--correct`,
  unknown: `stats__result--unknown`,
};