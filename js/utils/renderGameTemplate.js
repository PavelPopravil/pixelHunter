import {games} from '../game/data.js';
import renderTemplate from './renderTemplate.js';
import stats from '../templates/stats.js';

export default (state, screenTemplate) => {
  let questCaunt = state.questions - 1;
  if (questCaunt > 0) {
    renderTemplate(screenTemplate(Object.assign({}, state, {
      screen: games[state.screen].nextScreen,
      questions: questCaunt
    })));
  } else {
    renderTemplate(stats);
  }
};