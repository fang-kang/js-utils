import { isString } from './isString';

/**
 * 判断是否是rem
 */
export const isRem = (value: unknown): value is string => isString(value) && value.endsWith('rem');
