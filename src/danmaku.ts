import { EventEmitterComponent } from 'wblib';
import { DanmakuConfig } from './types';

export class Danmaku extends EventEmitterComponent {
  track = 0;

  trackHeight = 0;

  constructor(container?: HTMLElement, config?: DanmakuConfig) {
    super(container);
  }

  enable() {

  }

  disable() {

  }

  play() {

  }

  pause() {

  }

  update(time: number) {

  }

  updateTrack() {

  }

  clear() {

  }
}
