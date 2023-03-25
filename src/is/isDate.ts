/**
 * 是否时间对象
 * @param o
 * @returns
 */
export function isDate(o: any): o is Date {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
}
