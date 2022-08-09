import {
  addClass, addDestroyableListener, Component, Rect, removeClass,
} from 'wblib';
import { Bullet } from './bullet';

const showCls = 'metad_menu-show';

export class Menu extends Component {
  hovering = false;

  enabled = false;

  readonly rect: Rect;

  private latest?: Bullet;

  private cb?: () => void;

  private leaveTimer?: any;

  constructor(container: HTMLElement, menuEl?: HTMLElement) {
    super(container, '.metad_menu');

    this.rect = new Rect(this.el);

    addDestroyableListener(this, this.el, 'mouseenter', this.onMouseenter);
    addDestroyableListener(this, this.el, 'mouseleave', this.onMouseleave);

    this.setChild(menuEl);
  }

  setChild(el?: HTMLElement | null) {
    if (el || el === null) {
      this.el.innerHTML = '';
      if (el) {
        this.el.appendChild(el);
        this.enabled = true;
      } else {
        this.enabled = false;
      }
    }
  }

  show(bullet: Bullet) {
    this.latest = bullet;
    addClass(this.el, showCls);
  }

  hide(bullet: Bullet) {
    if (this.latest === bullet) {
      removeClass(this.el, showCls);
      this.latest = undefined;
    }
  }

  isMe(bullet: Bullet) {
    return bullet === this.latest;
  }

  canRelease(bullet: Bullet) {
    return bullet !== this.latest || !this.hovering;
  }

  register(leaveRunner: () => void) {
    this.cb = leaveRunner;
  }

  setPosition(left: number, top: number, bottom: number) {
    const style = this.el.style;

    style.left = `${left}px`;
    if (top) {
      style.bottom = '';
      style.top = `${top}px`;
    } else {
      style.top = '';
      style.bottom = `${bottom}px`;
    }
  }

  tryClearTimer(bullet: Bullet) {
    if (this.latest === bullet) {
      clearTimeout(this.leaveTimer);
    }
  }

  private onMouseenter = () => {
    this.hovering = true;
  };

  private onMouseleave = () => {
    clearTimeout(this.leaveTimer);
    this.leaveTimer = setTimeout(() => {
      this.hovering = false;
      if (this.cb) this.cb();
      this.cb = undefined;
    }, 100);
  };
}
