/**
 * 在指定元素之前插入新元素
 * @param el
 * @param htmlString
 * @returns
 */
export const insertBefore = (el: HTMLElement, htmlString: string) => el.insertAdjacentHTML('beforebegin', htmlString);
