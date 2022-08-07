export class Timer {
  paused = false;

  private pausedTime = 0;

  private prevPauseTime = 0;

  now() {
    return ((this.paused ? this.prevPauseTime : Date.now()) - this.pausedTime) / 1000;
  }

  play() {
    if (!this.paused) return;
    this.pausedTime += (Date.now() - this.prevPauseTime);
    this.paused = false;
  }

  pause() {
    if (this.paused) return;
    this.prevPauseTime = Date.now();
    this.paused = true;
  }

  static from(t: Timer, c?: Timer) {
    const timer = c || new Timer();

    timer.paused = t.paused;
    timer.pausedTime = t.pausedTime;
    timer.prevPauseTime = t.prevPauseTime;

    return timer;
  }
}
