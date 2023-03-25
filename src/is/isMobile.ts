/**
 * 判断是否为移动端
 * @returns
 */
export function isMobile() {
  return /Android|webOS|iPhone|iPod|BlackBerry|SymbianOS|Windows Phone/i.test(navigator.userAgent);
}
