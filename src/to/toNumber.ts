import { isBool } from '../is/isBool';
import { isString } from '../is/isString';

/**
 * 转换成数字
 * @param {  number | string | boolean | undefined | null } val
 * @returns 数字
 */
export const toNumber = (val: number | string | boolean | undefined | null): number => {
  if (val == null) return 0;

  if (isString(val)) {
    val = parseFloat(val);
    val = Number.isNaN(val) ? 0 : val;
    return val;
  }

  if (isBool(val)) return Number(val);

  return val;
};
