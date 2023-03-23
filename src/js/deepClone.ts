import { isArray, isObject, isFn } from '../is';

// 深度克隆
export function deepClone(obj: any) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (!isObject(obj) && !isFn(obj)) {
    //原始类型直接返回
    return obj;
  }
  const o = isArray(obj) ? ([] as any[]) : ({} as any);

  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = isObject(obj[i]) ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}
