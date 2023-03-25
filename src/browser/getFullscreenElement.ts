/**
 * 获取当前全屏的节点
 * @returns
 */
export function getFullscreenElement() {
  const el: any = document;
  return (
    el.fullscreenElement || el?.mozFullScreenElement || el?.msFullScreenElement || el?.webkitFullscreenElement || null
  );
}
