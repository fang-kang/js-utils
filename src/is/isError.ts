/**
 * 是否是错误对象
 * @param o
 * @returns
 */
export function isError(o: any): o is Error {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Error';
}
