import { isString } from './isString';

/**
 * 是否是字符串类型的数字
 * @param val
 * @returns
 */
export function isStringNumber(val: string): boolean {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
}
