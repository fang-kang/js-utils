/**
 * 返回指定元素的生效样式
 * @param el
 * @param ruleName
 * @returns
 */
export const getStyle = (el: HTMLElement, ruleName: keyof CSSStyleDeclaration) => getComputedStyle(el)[ruleName];
