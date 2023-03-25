/**
 * 判断网页访问端是否为微信浏览器
 * @returns
 */
export function isWeiXin() {
  const ua = navigator.userAgent.toLowerCase() as any;
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true;
  } else {
    return false;
  }
}
