/**
 * 判断是否是{}类型
 */
export function isPlainObject(o: any): o is Record<any, any> {
  return Object.toString.call(o) === '[object Object]';
}
