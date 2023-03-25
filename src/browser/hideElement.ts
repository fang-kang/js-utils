/**
 * 隐藏所有的指定标签
 * @param el
 * @returns
 */
export const hideElement = (...el: HTMLElement[]) => [...el].forEach((e) => (e.style.display = 'none'));
