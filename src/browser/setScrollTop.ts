/**
 * 设置滚动条距顶部的距离
 * @param value
 * @returns
 */
export function setScrollTop(value: number) {
  window.scrollTo(0, value);
  return value;
}
