/**
 * 获取HTML字符串中的文本内容
 * @param htmlStr HTML字符串
 * @returns
 */
export function getInnerHTML(htmlStr: string) {
  return htmlStr.replace(/(<([^>]+)>)/gi, '');
}
