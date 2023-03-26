export interface IsESModule {
  default: any;
}
/**
 * 判断对象是ESmodule
 * @param obj
 * @returns
 */
export function isESModule(obj: any): obj is IsESModule {
  return obj.__esModule || obj[Symbol.toStringTag] === 'Module';
}
