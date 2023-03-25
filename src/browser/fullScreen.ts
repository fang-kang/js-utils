import { isFullScreen } from 'src/is';

/**
 * 全屏模式
 * @param element 不传入dom默认document.documentElement全屏
 * @returns
 */
export function fullScreen(element?: HTMLElement) {
  if (isFullScreen()) return;
  try {
    const el: any = element || document.documentElement;
    const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;
    if (rfs) rfs.call(el);
    else return new Error('浏览器不支持全屏');
  } catch (error: any) {
    throw new Error(error);
  }
}
