/**
 * 是否时间对象
 * @param o
 * @returns
 */
export function isDate(o: any): o is Date {
  return o instanceof Date;
}
