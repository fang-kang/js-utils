/**
 * 判断是否是对象
 */
export function isObject(value: any): boolean {
  return value !== null && typeof value === 'object';
}
