import { isArray, isObject, isString } from 'src/is';

/**
 * 获取不同类型变量的长度
 * @param val
 * @returns
 */
export const getSize = (val: any) =>
  isArray(val)
    ? val.length
    : isObject(val)
    ? val.size || val.length || Object.keys(val).length
    : isString(val)
    ? new Blob([val]).size
    : 0;
