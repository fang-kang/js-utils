/**
 * 缓存函数
 * @param fn
 * @returns
 */
export function memoize(fn: Function): Function {
  const cache = Object.create(null);
  return function cachedFn(str: string) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
