/**
 * 是否Set对象
 * @param o
 * @returns
 */
export function isSet(o: any): o is Set<any> {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set';
}
