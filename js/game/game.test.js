import assert from 'assert';
import {handleCorrectAnswer, pointsCounter} from './game.js';
import {initialState} from './data.js';

describe(`game logic`, () => {

  describe(`Correct answer handling`, () => {

    it(`Should return status of correct answer`, () => {
      assert.equal(`slow`, handleCorrectAnswer(25));
    });

    it(`Should return status of correct answer`, () => {
      assert.equal(`fast`, handleCorrectAnswer(5));
    });

    it(`Should return default status of correct answer`, () => {
      assert.equal(`correct`, handleCorrectAnswer(20));
    });

    it(`Should throw an error if parameter is't a nubmer`, () => {
      assert.throws(() => {
        handleCorrectAnswer(`20`);
        handleCorrectAnswer({});
        handleCorrectAnswer([]);
        handleCorrectAnswer(null);
        handleCorrectAnswer(undefined);
        handleCorrectAnswer(NaN);
      });
    });

    it(`Can't get negarive numbers`, () => {
      assert.throws(() => {
        handleCorrectAnswer(-10);
      });
    });
  });
});