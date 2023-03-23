import { isObject } from '../is';
import { deepClone } from './deepClone';

/**
 * JS对象深度合并
 * @param target
 * @param source
 * @returns
 */
export function deepMerge(target = {} as any, source = {} as any) {
  target = deepClone(target);
  if (!isObject(target) || !isObject(source)) return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (!isObject(target[prop])) {
        target[prop] = source[prop];
      } else {
        if (!isObject(source[prop])) {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}
