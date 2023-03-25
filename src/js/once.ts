/**
 * 只调用一次的函数
 * @param fn
 * @returns
 */
export const once = (fn: Function) => {
  let called = false;
  let _this = this;
  return function () {
    if (!called) {
      called = true;
      fn.apply(_this, arguments);
    }
  };
};
