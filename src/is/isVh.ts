import { isString } from './isString';

/**
 * 判断是否是vh
 */
export const isVh = (value: unknown): value is string => isString(value) && value.endsWith('vh');
