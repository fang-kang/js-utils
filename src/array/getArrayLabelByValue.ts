import { isArray } from 'src/is';

interface IParams {
  arr: any[];
  value: any;
  valueKey?: string;
  labelKey?: string;
  defaultValue?: string | number;
}

/**
 * 根据数组获取数组中的值
 * @param param
 * @returns
 */
export function getArrayLabelByValue({
  arr,
  value,
  valueKey = 'value',
  labelKey = 'label',
  defaultValue = undefined,
}: IParams) {
  if (!isArray(arr)) {
    throw new Error('Type requires an array');
  }
  const obj = arr.find((item) => String(item[valueKey]) === String(value));
  return obj ? obj[labelKey] : defaultValue;
}
