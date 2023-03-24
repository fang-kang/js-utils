/**
 * 简单数组去重
 * @param arr
 * @returns
 */
export const uniqueArray = <T>(arr: T[]) => [...new Set(arr)];
