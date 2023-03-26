/**
 * 判断是否是WeakSet
 */
export function isWeakSet(o: any): o is WeakSet<any> {
  return Object.prototype.toString.call(o) === '[object WeakSet]';
}
