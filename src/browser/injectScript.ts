/**
 * 动态引入js
 * @param src
 */
export function injectScript(src: string) {
  const s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = src;
  const t = document.getElementsByTagName('script')[0];
  (t.parentNode as any).insertBefore(s, t);
}
