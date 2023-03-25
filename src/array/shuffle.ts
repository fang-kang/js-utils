/**
 * 洗牌算法随机
 * @param arr
 * @returns
 */
export function shuffle(arr: any[]) {
  let result = [],
    random;
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length);
    result.push(arr[random]);
    arr.splice(random, 1);
  }
  return result;
}
