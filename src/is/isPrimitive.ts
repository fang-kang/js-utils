/**
 * 判断是否是原始类型
 * @param value
 * @returns
 */
export function isPrimitive(value: any): boolean {
  return (
    typeof value === 'string' || typeof value === 'number' || typeof value === 'symbol' || typeof value === 'boolean'
  );
}
