/**
 * 将多个空格统一处理
 * @param { string } str 字符串
 * @param { string } replacer 替换为 默认 ' '
 * @returns
 */
export function spaceFormat(str: string, replacer: string = ' ') {
  return str.replace(/\s+/g, replacer);
}
