/**
 * 判断当前是否全屏
 * @returns
 */
export function isFullScreen() {
  const el = document as any;
  return !!(el.fullscreen || el.mozFullScreen || el.webkitIsFullScreen || el.webkitFullScreen || el.msFullScreen);
}
