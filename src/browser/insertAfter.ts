/**
 * 在指定元素之后插入新元素
 * @param el
 * @param htmlString
 * @returns
 */
export const insertAfter = (el: HTMLElement, htmlString: string) => el.insertAdjacentHTML('afterend', htmlString);
