import assert from 'assert';

describe(`test suit`, () => {
  it(`should return -1`, () => {
    assert.equal(-1, [1, 2, 3].indexOf(4));
  });
});