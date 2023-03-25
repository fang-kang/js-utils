/**
 * 检查是否为浏览器环境
 * @returns
 */
export const isBrowser = () => ![typeof window, typeof document].includes('undefined');
