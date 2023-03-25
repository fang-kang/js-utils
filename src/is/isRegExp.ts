/**
 * 是否是正则
 * @param o
 * @returns
 */
export function isRegExp(o: any): o is RegExp {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp';
}
