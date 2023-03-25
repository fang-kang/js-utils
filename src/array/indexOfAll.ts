/**
 * 返回数组中某值的所有索引
 * @param arr
 * @param val
 * @returns
 */
export const indexOfAll = (arr: any[], val: any) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
