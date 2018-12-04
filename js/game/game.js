export const handleCorrectAnswer = (currentTime) => {
  if (typeof currentTime !== `number`) {
    throw new Error(`Parameter should be a number`);
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