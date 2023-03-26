import { isFn, isNull } from '../is';

let timeout: NodeJS.Timeout | null = null;

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
export function debounce(func: Function, wait: number = 500, immediate: boolean = false) {
  // 清除定时器
  if (!isNull(timeout)) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    let callNow = !timeout;
    timeout = setTimeout(() => {
      timeout = null;
    }, wait);
    if (callNow) isFn(func) && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(() => {
      isFn(func) && func();
    }, wait);
  }
}
