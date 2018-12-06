export const handleCorrectAnswer = (currentTime) => {
  if (typeof currentTime !== `number`) {
    throw new RangeError(`Parameter should be a number`);
  }
  if (currentTime < 0) {
    throw new RangeError(`Can't be negative number`);
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