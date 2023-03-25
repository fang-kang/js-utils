/**
 * 判断网页访问端是否是 QQ 浏览器
 * @returns
 */
export function isQQBrowser() {
  const ua = navigator.userAgent.toLowerCase();
  return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i);
}
