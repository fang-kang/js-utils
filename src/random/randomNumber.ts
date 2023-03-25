/**
 * 随机数字
 * @param min 最小值 默认0
 * @param max 最大值 默认1000
 * @returns {number} 随机数字,取值范围[min, max]
 */
export function randomNumber(min = 0, max = 1000): number {
  return Math.ceil(min + Math.random() * (max - min));
}
