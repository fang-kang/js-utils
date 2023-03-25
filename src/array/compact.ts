/**
 * 去除数组中的无效/无用值
 * @param arr
 * @returns
 */
export function compact(arr: any[]) {
  return arr.filter(Boolean);
}
