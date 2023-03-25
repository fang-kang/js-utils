/**
 * 滚动到指定元素区域
 * @param element
 */
export function scrollToElement(element: string) {
  (document.querySelector(element) as HTMLElement)?.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
