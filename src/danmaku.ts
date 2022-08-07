import {
  EventEmitterComponent, Rect, $, removeNode,
} from 'wblib';
import {
  BulletConfig, BulletSetting, DanmakuConfig, RequiredDanmakuConfig,
} from './types';
import { getConfig } from './config';
import { Bullet } from './bullet';
import { Timer } from './utils';

export class Danmaku extends EventEmitterComponent {
  readonly rect: Rect;

  readonly config: RequiredDanmakuConfig;

  readonly timer: Timer;

  enabled = true;

  track = 0;

  trackHeight = 0;

  fontSize = 0;

  speedScale = 1;

  private probeEl: HTMLElement;

  private bulletPool: Bullet[] = [];

  private aliveBullets: Set<Bullet> = new Set();

  private scrollBullets: (Bullet | undefined)[] = [];

  private topBullets: number[] = [];

  private bottomBullets: number[] = [];

  private items: BulletConfig[] = [];

  private pos = 0;

  private prevPauseTime = 0;

  constructor(container?: HTMLElement | DocumentFragment, config?: DanmakuConfig) {
    super(container, '.metad');
    this.config = getConfig(config);
    this.rect = new Rect(this.el);

    this.probeEl = this.el.appendChild($('.metad_item'));
    this.probeEl.textContent = 'M';
    const probeElStyle = this.probeEl.style;
    probeElStyle.pointerEvents = 'none';
    probeElStyle.opacity = '0';

    this.updateProperty();

    this.items = this.config.items || [];

    this.timer = new Timer();

    this.updateTrack();
  }

  getItems() {
    return this.items;
  }

  setItems(items: BulletConfig[]): void {
    this.items = items;
    this.pos = 0;
  }

  pushItems(items: BulletConfig[]) {
    // eslint-disable-next-line prefer-spread
    this.items.push.apply(this.items, items);
  }

  send(items: BulletConfig[]) {
    const time = this.timer.now();
    for (let i = 0, l = items.length, item: BulletConfig; i < l; ++i) {
      item = items[i];
      if (this.shouldDiscard(item)) continue;
      if (!this.insert(item, time)) break;
    }
  }

  enable() {
    if (this.enabled) return;
    this.enabled = true;
  }

  disable() {
    if (!this.enabled) return;
    this.enabled = false;
    this.clear();
  }

  /**
   * @override
   */
  destroy() {
    super.destroy();
  }

  play() {
    if (!this.timer.paused) return;
    this.timer.play();
    this.aliveBullets.forEach((bullet) => bullet.play(this.prevPauseTime));
  }

  pause() {
    if (this.timer.paused) return;
    this.prevPauseTime = this.timer.now();
    this.timer.pause();
    this.aliveBullets.forEach((bullet) => bullet.pause(this.prevPauseTime));
  }

  update(currentTime: number) {
    if (!this.enabled || this.timer.paused) return;
    const min = currentTime - 1;
    const max = currentTime + 1;
    const time = this.timer.now();
    for (let l = this.items.length, item: BulletConfig; this.pos < l; this.pos++) {
      item = this.items[this.pos];
      if (item.time != null) {
        if (item.time < min) continue;
        if (item.time > max) break;
      }
      if (this.shouldDiscard(item)) continue;
      if (!this.insert(item, time)) break;
    }
  }

  updateTrack() {
    const height = this.rect.height;
    if (!height || !this.config.area) {
      this.track = this.trackHeight = 0;
      return;
    }

    this.trackHeight = this.probeEl.getBoundingClientRect().height || (this.fontSize + 5);
    this.track = Math.floor(height * this.config.area / this.trackHeight);
  }

  updateConfig(cfg: DanmakuConfig) {
    Object.assign(this.config, cfg);
    this.updateProperty();
  }

  updateSize() {
    this.rect.update();
    this.updateProperty();
  }

  seek() {
    if (!this.enabled) return;
    this.clear();
    this.pos = 0;
  }

  clear() {
    Array.from(this.aliveBullets).forEach((b) => b.end());
    this.topBullets = [];
    this.bottomBullets = [];
  }

  /**
   * @internal
   */
  recycleBullet(bullet: Bullet) {
    if (this.bulletPool.length > 20) {
      this.unmountBullet(bullet);
    } else {
      bullet.resetDom();
      this.bulletPool.push(bullet);
    }
    this.aliveBullets.delete(bullet);
    if (bullet.type === 'scroll' && this.scrollBullets[bullet.track] === bullet) {
      for (let i = 0, l = bullet.config.span || 1; i < l; ++i) {
        if (this.scrollBullets[i + bullet.track] === bullet) {
          this.scrollBullets[i + bullet.track] = undefined;
        }
      }
    }
  }

  private createBullet(item: BulletConfig, setting: BulletSetting) {
    let bullet = this.bulletPool.pop();
    if (bullet) {
      bullet.init(item, setting);
    } else {
      bullet = new Bullet(this.el, this, item, setting);
    }
    this.aliveBullets.add(bullet);
    return bullet;
  }

  private unmountBullet(bullet: Bullet) {
    removeNode(bullet.el);
  }

  private shouldDiscard(item: BulletConfig) {
    const { render, blocked } = this.config;

    if (render) {
      if (render(item, this) === false) return true;
    }

    return !item.content
   || blocked.has(item.type || 'scroll')
   || (item.color && blocked.has('color'));
  }

  private updateProperty() {
    const cfg = this.config;

    this.fontSize = cfg.fontSize * cfg.fontSizeScale;
    this.speedScale = cfg.speed * cfg.playbackRate;

    const style = this.el.style;
    style.opacity = String(cfg.opacity);
    style.fontSize = `${this.fontSize}px`;
    style.pointerEvents = cfg.hoverable ? 'auto' : 'none';

    this.updateTrack();

    this.aliveBullets.forEach((x) => {
      x.updateStyle();
    });
  }

  private insert(item: BulletConfig, time: number): boolean {
    if (!item.type || item.type === 'scroll') {
      const [track, bullet] = this.getShortestTrack(item.span);
      const canDiscard = !item.force && bullet && bullet.showAt > (time + 2);
      if (canDiscard && !this.config.unlimited) return false;
      const b = this.createBullet(item, { track, prev: canDiscard ? undefined : bullet });
      for (let i = 0, l = item.span || 1; i < l; ++i) {
        this.scrollBullets[track + i] = b;
      }
      return true;
    }

    const list = item.type === 'top' ? this.topBullets : this.bottomBullets;
    let track = this.getEmptyTrack(time, list);
    track = track === -1 && item.force ? 0 : track;
    if (track !== -1) {
      const endAt = this.createBullet(item, { track }).endAt;
      for (let i = 0, l = item.span || 1; i < l; ++i) {
        list[i + track] = endAt;
      }
      return true;
    }
    return false;
  }

  private getShortestTrack(h?: number): [number, Bullet | undefined] {
    h = h || 1;

    let track = 0;
    let shortest;
    let sItem;
    for (let i = 0, item; i < this.track; ++i) {
      sItem = undefined;
      for (let y = 0; y < h; ++y) {
        item = this.scrollBullets[y + i];
        if (item && (!sItem || item.showAt > sItem.showAt)) {
          sItem = item;
        }
      }

      if (!sItem) return [i] as any;

      if (!shortest || shortest.showAt > sItem.showAt) {
        track = i;
        shortest = sItem;
      }

      if (i + h >= this.track) break;
    }

    return [track, shortest];
  }

  private getEmptyTrack(time: number, list: number[]): number {
    for (let i = 0; i < this.track; ++i) {
      if (!list[i] || list[i] <= time) return i;
    }
    return -1;
  }
}
