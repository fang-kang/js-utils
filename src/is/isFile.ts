import fs from 'fs';
import { isString } from './isString';

/**
 * 判断是否是文件
 * @param o
 * @returns
 */
export function isFile(o: Blob | string): o is File {
  if (isString(o)) {
    try {
      return fs.statSync(o as string).isFile();
    } catch (error) {
      return false;
    }
  }
  return Object.prototype.toString.call(o) === '[object File]';
}
