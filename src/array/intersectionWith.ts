/**
 * 先比较后返回交集
 * @param a
 * @param b
 * @param comp
 * @returns
 */
export const intersectionWith = (a: any[], b: any[], comp: (arg0: any, arg1: any) => any) =>
  a.filter((x) => b.findIndex((y) => comp(x, y)) !== -1);
