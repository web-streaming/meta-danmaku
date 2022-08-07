import { DanmakuConfig, RequiredDanmakuConfig } from './types';

export function getConfig(config?: DanmakuConfig): RequiredDanmakuConfig {
  return {
    fontSize: 24,
    fontSizeScale: 1,
    area: 1,
    opacity: 1,
    playbackRate: 1,
    speed: 1,
    duration: 5,
    unlimited: false,
    bottomUp: false,
    blocked: new Set(),
    hoverable: true,
    ...config,
  } as RequiredDanmakuConfig;
}
