export default class {

  constructor(duration) {
    this.duration = duration;
    this.count = 0;
    this.interval = null;
  };

  increment() {
    this.count++;

    if (typeof this.onCount === `function`) {
      this.onCount();
    }

    if (this.count === this.duration && typeof this.onCountComplete === `function`) {
      this.onCountComplete();
    }

    if (this.count === this.duration) {
      this.stop();
    }
  }

  start() {
    this.interval = setInterval(() => this.increment(), 1000);
  }

  stop() {
    this.count = 0;
    clearInterval(this.interval);
  }

  returnDifference() {
    return this.duration - this.count;
  }

  returnValue() {
    return this.count;
  }
};