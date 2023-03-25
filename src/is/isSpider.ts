/**
 * 是否是爬虫
 * @returns
 */
export function isSpider() {
  const ua = navigator.userAgent.toLowerCase();
  return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(
    ua
  );
}
