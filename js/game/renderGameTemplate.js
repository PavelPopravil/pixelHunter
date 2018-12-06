import * as utils from '../utils/utils.js';
import stats from '../templates/stats.js';
import {games} from '../game/data.js';

// toDo Реализвать внутри рендер скрина подсчёт отчков на основе переменной questTate
export default (state, screenTemplate, questState = `wrong`) => {
  const questStats = state.questionsStats.slice();
  questStats[state.currentQuestionIndex] = questState;
  const questCount = state.questionsLength - 1;
  const currentQuest = state.currentQuestionIndex + 1;
  if (questCount > 0) {
    utils.renderTemplate(screenTemplate(Object.assign({}, state, {
      screen: games[state.screen].nextScreen,
      questionsLength: questCount,
      currentQuestionIndex: currentQuest,
      questionsStats: questStats
    })), state);
  } else {
    utils.renderTemplate(stats());
  }
};
