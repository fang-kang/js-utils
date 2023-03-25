/**
 * 两数组的交集
 * @param a
 * @param b
 * @returns
 */
export const intersection = (a: any[], b: any[]) => {
  const s = new Set(b);
  return a.filter((x) => s.has(x));
};
