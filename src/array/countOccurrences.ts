/**
 * 检测数值出现次数
 * @param arr
 * @param val
 * @returns
 */
export function countOccurrences(arr: any[], val: any) {
  return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
}
