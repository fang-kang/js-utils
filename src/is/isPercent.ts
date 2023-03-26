import { isString } from './isString';

/**
 * 判断是否是百分比
 */
export const isPercent = (value: unknown): value is string => isString(value) && value.endsWith('%');
