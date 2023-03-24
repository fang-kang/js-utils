/**
 * 判断元素是否有某个class
 * @param ele
 * @param cls
 * @returns
 */
export function hasClass(ele: HTMLElement, cls: string) {
  return new RegExp('(\\s|^)' + cls + '(\\s|$)').test(ele.className);
}
