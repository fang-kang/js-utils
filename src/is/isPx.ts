import { isNum } from './isNum';
import { isString } from './isString';

/**
 * 判断是否是px
 */
export const isPx = (value: unknown): value is string | number =>
  (isString(value) && value.endsWith('px')) || isNum(value);
