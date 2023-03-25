/**
 * 是否是IE浏览器
 * @returns
 */
export function isIE() {
  return navigator.userAgent.toLowerCase().indexOf('trident') > -1;
}
