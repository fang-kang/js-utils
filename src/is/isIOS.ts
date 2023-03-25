/**
 * 判断是否为IOS
 */
export function isIOS() {
  /ipad|iphone|mac/i.test(navigator.userAgent);
}
