/**
 * 计算函数执行时间
 * @param callback
 * @returns
 */
export const timeTaken = (callback: () => any) => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};
