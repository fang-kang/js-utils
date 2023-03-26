import { isDef } from './isDef';

/**
 * 检查是否为浏览器环境
 * @returns
 */
export const isBrowser = () => isDef(window);
