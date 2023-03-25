/**
 * 两数组都符合条件的交集
 * @param a
 * @param b
 * @param fn
 * @returns
 */
export const intersectionBy = (a: any[], b: any[], fn: (arg0: any) => unknown) => {
  const s = new Set(b.map(fn));
  return a.filter((x) => s.has(fn(x)));
};
