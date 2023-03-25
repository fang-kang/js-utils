/**
 * 是否是Chrome
 * @returns
 */
export function isChrome() {
  return navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
}
