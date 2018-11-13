import {games} from '../game/data.js';
import renderTemplate from './renderTemplate.js';
import stats from '../templates/stats.js';

// toDo Выводить статус пройдуенных вопросов
export default (state, screenTemplate) => {
  let questCount = state.questionsLength - 1;
  let currentQuest = state.currentQuestion + 1;
  if (questCount > 0) {
    renderTemplate(screenTemplate(Object.assign({}, state, {
      screen: games[state.screen].nextScreen,
      questionsLength: questCount,
      currentQuestion: currentQuest
    })));
  } else {
    renderTemplate(stats);
  }
};