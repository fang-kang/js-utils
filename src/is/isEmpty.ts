import { isArray } from './isArray';
import { isPlainObject } from './isPlainObject';

/**
 * 判断元素是否为空
 * @param val
 * @returns
 */
export function isEmpty(val: unknown) {
  return (
    val === undefined ||
    val === null ||
    val === '' ||
    (isArray(val) && !val.length) ||
    (isPlainObject(val) && Object.keys(val).length === 0)
  );
}
