/**
 * 判断两个数组是否相等
 * @param arr1
 * @param arr2
 * @returns
 */
export function arrayEqual(arr1: any[], arr2: any[]) {
  if (arr1 === arr2) return true;
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
