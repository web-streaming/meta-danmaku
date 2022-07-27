import { Danmaku } from './danmaku';

export type DanmakuItemType = 'scroll' | 'top' | 'bottom' | 'color';

export interface BulletConfig {
  color?: string;
  time?: number;
  type?: DanmakuItemType;
  priority?: number;
  content?: string | HTMLElement;
  isMe?: boolean;
  height?: number;
}

export interface DanmakuConfig {
  fontSize?: number | string;
  fontSizeScale?: number;
  opacity?: number;
  area?: number;
  speed?: number;
  unlimited?: boolean;
  bottomUp?: boolean;
  blocked?: DanmakuItemType[];
  render?: (cfg: BulletConfig, danmaku: Danmaku) => void | BulletConfig | HTMLElement | false;
}
