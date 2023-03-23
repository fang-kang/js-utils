/**
 * 根据key数组去重
 * @param arr
 * @param key
 * @returns
 */
export function uniqeArrayByKey(arr: any[], key: string) {
  const obj: Record<string, any> = {};
  return arr.reduce((prev, item) => {
    obj[item[key]] ? '' : (obj[item[key]] = true && prev.push(item));
    return prev;
  }, []);
}
