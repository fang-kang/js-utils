import { isString } from './isString';

/**
 * 判断是否是cssvar
 */
export const isVar = (value: unknown): value is string => isString(value) && value.startsWith('var(');
