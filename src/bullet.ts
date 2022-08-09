import {
  $, clamp, isString, Rect,
} from 'wblib';
import type { Danmaku } from './danmaku';
import { BulletConfig, BulletSetting, DanmakuItemType } from './types';
import { Timer } from './utils';

const itemClass = 'metad_item';

export class Bullet {
  readonly el: HTMLElement;

  readonly rect: Rect;

  config!: BulletConfig;

  width = 0;

  left = 0;

  length = 0; // w + l

  startAt = 0;

  showAt = 0;

  endAt = 0;

  speed = 0;

  track = 0;

  type!: DanmakuItemType;

  ended = false;

  color = '';

  private centerTimer!: any;

  private prevPauseTime = 0;

  private timer?: Timer;

  private inTimer: any;

  private outTimer: any;

  constructor(container: HTMLElement, private danmaku: Danmaku, cfg: BulletConfig, setting: BulletSetting) {
    this.el = container.appendChild($(`.${itemClass}`));
    this.rect = new Rect(this.el);
    this.init(cfg, setting);

    this.el.addEventListener('mouseenter', this.onMouseenter);
    this.el.addEventListener('mouseleave', this.onMouseleave);
  }

  /**
   * @internal
   */
  init(cfg: BulletConfig, setting: BulletSetting): this {
    this.config = cfg;
    const style = this.el.style;

    if (isString(cfg.content)) {
      this.el.textContent = cfg.content;
    } else {
      this.el.appendChild(cfg.content!);
    }

    const danmaku = this.danmaku;
    this.type = cfg.type || 'scroll';
    this.track = setting.track;
    if (cfg.color) this.el.style.color = this.color = cfg.color;
    if (cfg.isMe) this.el.classList.add('metad_item-me');

    this.startAt = danmaku.timer.now();
    let duration = danmaku.config.duration;

    if (this.type === 'scroll') {
      this.el.addEventListener('transitionend', this.end);
      this.rect.update();
      this.width = this.rect.width + danmaku.trackHeight;
      const danmakuWidth = danmaku.rect.width;
      const prev = setting.prev;
      this.left = danmakuWidth;
      this.speed = danmaku.speedScale * (danmakuWidth + this.width) / duration;

      if (prev && !prev.ended) {
        const s = prev.length - danmakuWidth - (this.startAt - prev.startAt) * prev.speed;
        if (s >= 0) {
          this.speed = prev.speed;
          this.left += s;
        } else {
          const maxSpeed = danmakuWidth / (prev.endAt - this.startAt);
          if (maxSpeed > 0 && this.speed > maxSpeed) this.speed = maxSpeed;
        }
      }

      this.length = this.left + this.width;
      const t = this.length / this.speed;
      this.showAt = this.startAt + (this.length - danmakuWidth) / this.speed;
      this.endAt = this.startAt + t;

      this.updateStyle();
      style.left = `${this.left}px`;
      style.width = `${this.width}px`;
      style.transition = `transform ${t}s linear`;
      style.transform = `translate3d(-${this.length}px,0,0)`;
    } else {
      style[this.type as any] = this.pos();
      this.el.classList.add('metad_item-center');
      duration /= danmaku.speedScale;
      this.endAt = this.startAt + duration;
      this.centerTimer = setTimeout(this.end, duration * 1000);
    }

    this.ended = false;
    this.show();

    if (this.danmaku.timer.paused) this.pause(this.startAt);

    return this;
  }

  show() {
    this.el.style.visibility = '';
  }

  hide() {
    this.el.style.visibility = 'hidden';
  }

  pause(time?: number) {
    if (time == null) {
      if (this.danmaku.timer.paused) return;
      if (!this.timer) this.timer = Timer.from(this.danmaku.timer);
    }

    if (this.timer) {
      this.prevPauseTime = time = this.timer.now();
      if (this.timer.paused) return;
      this.timer.pause();
    }

    if (this.type === 'scroll') {
      const style = this.el.style;
      style.transition = 'transform 0s linear';
      style.transform = `translate3d(-${(time! - this.startAt) * this.speed}px,0,0)`;
    } else {
      clearTimeout(this.centerTimer);
    }
  }

  play(time?: number) {
    if (time == null) {
      if (this.danmaku.timer.paused) return;
      time = this.prevPauseTime;
    }

    if (this.timer) {
      if (!this.timer.paused) return;
      time = this.prevPauseTime;
      this.timer.play();
    }

    if (this.type === 'scroll') {
      const style = this.el.style;
      style.transition = `transform ${this.endAt - time}s linear`;
      style.transform = `translate3d(-${this.length}px,0,0)`;
    } else {
      this.centerTimer = setTimeout(this.end, (this.endAt - time) * 1000);
    }
  }

  /**
   * @internal
   */
  resetDom() {
    this.el.innerHTML = '';
    this.el.style.cssText = '';
    this.hide();
    this.el.className = itemClass;
  }

  /**
   * @internal
   */
  end = () => {
    this.el.removeEventListener('transitionend', this.end);
    clearTimeout(this.centerTimer);
    this.color = '';
    this.ended = true;
    this.timer = undefined;
    this.danmaku.recycleBullet(this);
  };

  /**
   * @internal
   */
  updateStyle() {
    const style = this.el.style;
    const danmaku = this.danmaku;
    if (this.type === 'scroll') {
      style.top = style.bottom = '';
      style[danmaku.config.bottomUp ? 'bottom' : 'top'] = this.pos();
    }
    style.height = `${(this.config.span || 1) * danmaku.trackHeight}px`;
    const blocked = danmaku.config.blocked;
    if (this.track >= danmaku.track
      || blocked.has(this.type)
      || (this.color && blocked.has('color'))
    ) {
      this.hide();
    } else {
      this.show();
    }
  }

  private pos() {
    return `${this.track * this.danmaku.trackHeight + 2}px`;
  }

  private onMouseenter = () => {
    this.pause();
    const { onBulletHoverIn } = this.danmaku.config;
    if (onBulletHoverIn) {
      clearTimeout(this.inTimer);
      this.inTimer = setTimeout(() => {
        const { menu, rect, trackHeight } = this.danmaku;

        if (menu.enabled) {
          const mRect = menu.rect;
          if (mRect.width) {
            menu.tryClearTimer(this);
            this.rect.update();

            const l = clamp(
              this.rect.x - rect.x + (this.rect.width - mRect.width - trackHeight) / 2,
              0,
              rect.width - mRect.width,
            );

            let t = this.rect.y - rect.y + this.rect.height;
            let b = 0;
            if (mRect.height + t > rect.height) {
              b = rect.height - t + this.rect.height;
              t = 0;
            }

            menu.setPosition(l, t, b);
            menu.show(this);
          }
        }

        onBulletHoverIn(this, this.danmaku);
      }, 50);
    }
  };

  private onMouseleave = () => {
    clearTimeout(this.inTimer);
    clearTimeout(this.outTimer);
    this.outTimer = setTimeout(() => {
      const menu = this.danmaku.menu;
      if (!menu.enabled || menu.canRelease(this)) {
        this.onHoverOut();
      } else {
        menu.register(this.onHoverOut);
      }
    }, 100);
  };

  private onHoverOut = () => {
    this.danmaku.menu.hide(this);
    if (!this.danmaku.config.onBulletHoverOut?.(this, this.danmaku)) {
      this.play();
    }
  };
}
