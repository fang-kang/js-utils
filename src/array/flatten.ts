/**
 * 指定深度扁平化数组
 * @param arr
 * @param depth
 * @returns
 */
export function flatten(arr: any[], depth = 1): any[] {
  return arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
}
