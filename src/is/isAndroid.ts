/**
 * 判断是否为安卓
 * @returns
 */
export function isAndroid() {
  return /android/i.test(navigator.userAgent);
}
