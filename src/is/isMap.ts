/**
 * 判断是否是Map
 */
export function isMap(o: any): o is Map<any, any> {
  return Object.prototype.toString.call(o) === '[object Map]';
}
