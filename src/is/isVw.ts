import { isString } from './isString';

/**
 * 判断是否是vw
 */
export const isVw = (value: unknown): value is string => isString(value) && value.endsWith('vw');
