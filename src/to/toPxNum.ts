import { isNum, isPx, isRem, isString, isVh, isVw } from 'src/is';
import { toNumber } from './toNumber';

/**
 * 将长度单位转换为数字
 * @param value
 * @returns
 */
export const toPxNum = (value: unknown): number => {
  if (isNum(value)) return value;

  if (isPx(value)) return +(value as string).replace('px', '');

  if (isVw(value)) return (+(value as string).replace('vw', '') * window.innerWidth) / 100;

  if (isVh(value)) return (+(value as string).replace('vh', '') * window.innerHeight) / 100;

  if (isRem(value)) {
    const num = +(value as string).replace('rem', '');
    const rootFontSize = window.getComputedStyle(document.documentElement).fontSize;

    return num * parseFloat(rootFontSize);
  }

  if (isString(value)) return toNumber(value);

  // % and other
  return 0;
};
