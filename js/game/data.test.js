import assert from 'assert';
import {handleCorrectAnswer} from './data.js';

describe(`Тестирование функции-обработчка правильного ответа на вопрос`, () => {

  it(`Should return status of correct answer`, () => {
      assert.equal(`slow`, handleCorrectAnswer(25));
  });

  it(`Should return status of correct answer`, () => {
      assert.equal(`fast`, handleCorrectAnswer(5));
  });

  it(`Should return default status of correct answer`, () => {
      assert.equal(`correct`, handleCorrectAnswer(20));
  });

  // it(`Should throw an error if parameter is't a nubmer`, () => {
  //     assert.throws(handleCorrectAnswer(`20`));
  // });
});