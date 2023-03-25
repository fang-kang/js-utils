import { isArray } from 'src/is';

/**
 * 递归扁平化数组
 * @param arr
 * @returns
 */
export function deepFlatten(arr: any[]): any[] {
  return [].concat(...arr.map((v) => (isArray(v) ? deepFlatten(v) : v)));
}
