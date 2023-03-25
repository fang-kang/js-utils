/**
 * 查找两个数组之间的差异
 * @param a
 * @param b
 * @returns
 */
export const difference = (a: any[], b: any[]) => {
  const s = new Set(b);
  return a.filter((x) => !s.has(x));
};
