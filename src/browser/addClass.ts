import { hasClass } from './hasClass';

/**
 * 为元素添加class
 * @param ele
 * @param cls
 */
export function addClass(ele: HTMLElement, cls: string) {
  if (!hasClass(ele, cls)) {
    ele.className += ' ' + cls;
  }
}
