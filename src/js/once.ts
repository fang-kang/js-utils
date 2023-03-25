/**
 * 只调用一次的函数
 * @param fn
 * @returns
 */
export function once(fn: Function): Function {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}
