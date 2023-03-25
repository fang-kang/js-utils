import { isFullScreen } from 'src/is';

/**
 * 退出全屏模式
 * @returns
 */
export function exitFullscreen() {
  if (!isFullScreen()) return;
  try {
    const el: any = document;
    const cfs =
      el?.cancelFullScreen ||
      el?.webkitExitFullscreen ||
      el?.webkitCancelFullScreen ||
      el?.msExitFullscreen ||
      el?.mozCancelFullScreen ||
      el?.exitFullScreen;
    if (cfs) cfs.call(el);
    else return new Error('切换失败,可尝试Esc退出');
  } catch (error: any) {
    throw new Error(error);
  }
}
