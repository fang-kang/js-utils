/**
 * 判断是否是WeakMap
 */
export function isWeakMap(o: any): o is WeakMap<any, any> {
  return Object.prototype.toString.call(o) === '[object WeakMap]';
}
