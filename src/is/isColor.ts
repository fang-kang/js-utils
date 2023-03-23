/**
 * 判断字符串是否是十六进制的颜色值
 * @param value
 */
export function isColor(value: string): boolean {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
}
