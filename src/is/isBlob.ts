/**
 * 判断是否是blob
 * @param o
 * @returns
 */
export function isBlob(o: any): o is Blob {
  return Object.prototype.toString.call(o) === '[object Blob]';
}
