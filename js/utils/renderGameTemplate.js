import {games} from '../game/data.js';
import renderTemplate from './renderTemplate.js';
import stats from '../templates/stats.js';

export default (state, screenTemplate) => {
  const questStats = state.questionsStats.slice();
  questStats[state.currentQuestionIndex] = `correct`;
  const questCount = state.questionsLength - 1;
  const currentQuest = state.currentQuestionIndex + 1;
  if (questCount > 0) {
    renderTemplate(screenTemplate(Object.assign({}, state, {
      screen: games[state.screen].nextScreen,
      questionsLength: questCount,
      currentQuestionIndex: currentQuest,
      questionsStats: questStats
    })), state);
  } else {
    renderTemplate(stats());
  }
};