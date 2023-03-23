/**
 * 判断是否是promise
 */
export function isPromise(o: any): o is Promise<any> {
  return Object.toString.call(o) === '[object Promise]';
}
