import type { Bullet } from './bullet';
import type { Danmaku } from './danmaku';

export type DanmakuItemType = 'scroll' | 'top' | 'bottom';

export interface BulletConfig {
  color?: string;
  time?: number;
  type?: DanmakuItemType;
  priority?: number;
  content?: string | HTMLElement | DocumentFragment;
  isMe?: boolean;
  span?: number;
  force?: boolean;
  [key: string]: any;
}

export interface BulletSetting {
  track: number;
  prev?: Bullet;
}

export interface DanmakuConfig {
  opacity?: number;
  area?: number;
  fontSize?: number;
  fontSizeScale?: number;
  playbackRate?: number;
  speed?: number;
  unlimited?: boolean;
  bottomUp?: boolean;
  blocked?: Set<(DanmakuItemType | 'color')>;
  items?: BulletConfig[];
  duration?: number;
  hoverable?: boolean;
  render?: (cfg: BulletConfig, danmaku: Danmaku) => void | false;
  onBulletHoverIn?: (bullet: Bullet, danmaku: Danmaku) => void;
  onBulletHoverOut?: (bullet: Bullet, danmaku: Danmaku) => void | boolean;
}

export type RequiredDanmakuConfig = Required<DanmakuConfig>;
