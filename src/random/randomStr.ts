const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
/**
 * 随机字符串
 * @param { number } size 长度 默认 16
 * @param { string } dict 从这些字符串中随机
 * @returns
 */
export function randomStr(size: number = 16, dict: string = urlAlphabet) {
  let id = '';
  let i = size;
  const len = dict.length;
  while (i--) id += dict[(Math.random() * len) | 0];
  return id;
}
