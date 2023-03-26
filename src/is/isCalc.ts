import { isString } from './isString';

/**
 * 判断字符串是calc()
 * @param value
 * @returns
 */
export const isCalc = (value: unknown): value is string => isString(value) && value.startsWith('calc(');
