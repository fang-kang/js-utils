const WEIGHT = {
  '(': 100,
  '*': 99,
  '/': 99,
  '+': 98,
  '-': 98,
  ')': 0,
};

type WEIGHTKey = keyof typeof WEIGHT;

const NEGATIVE_FLAG = '@';

const NUM_REG = /@?\d+(\.\d+)?/;
const SPLIT_REG = /(@?\d+(\.\d+)?)|[+\-*/()]/g;
const NEGATIVE_REG = /([+\-*/])(-)/g;

class Calc {
  private value: number = 0;

  constructor(str: string) {
    try {
      const s = str.replace(/\s/g, '');
      const convertResult = this.convert(s);
      this.value = this.parse(convertResult);
    } catch (error) {
      //
    }
  }

  format(p = 2, needZero = true) {
    // 兼容处理非四舍五入保留全精度情况
    const precision = p >= 0 ? Math.min(12, p) : 12;
    try {
      const value = this.toFixed(this.value || 0, precision);
      const [int, decimals = '00'] = value.toString().split('.');
      let d = decimals;
      if (needZero) {
        d = decimals.padEnd(precision, '0');
      }
      d = d.slice(0, precision);
      return `${int}.${d}`;
    } catch (error) {
      return '0';
    }
  }

  private toFixed(num: number, precision: number): number {
    const p = Math.pow(10, precision);
    const value = num * p;
    return Math.round(value) / p;
  }

  private convert(exp: string) {
    const stack: string[] = [];
    let symbolStack: string[] = [];

    const matchs = exp.replace(NEGATIVE_REG, `$1${NEGATIVE_FLAG}`).match(SPLIT_REG)!;

    for (let i = 0; i < matchs.length; i++) {
      const item = matchs[i] as WEIGHTKey;
      const last = symbolStack[symbolStack.length - 1] as WEIGHTKey;
      const len = symbolStack.length;

      if (NUM_REG.test(item)) {
        stack.push(item);
      } else if (last === '(') {
        symbolStack.push(item);
      } else if (WEIGHT[item] > WEIGHT[last]) {
        symbolStack.push(item);
      } else if (item === ')') {
        const leftBracketIndex = symbolStack.lastIndexOf('(');
        stack.push(
          ...symbolStack
            .splice(leftBracketIndex, len - 1)
            .slice(1)
            .reverse()
        );
      } else {
        stack.push(...symbolStack.reverse());
        symbolStack = [item];
      }
    }
    return stack.concat(symbolStack);
  }

  private exec(strNumA: string, op: string, strNumB: string): number {
    const lens = [strNumA, strNumB].map((n) => (n.split('.')[1] ? n.split('.')[1].length : 0));
    const maxLen = Math.max.apply(null, lens);
    const p = 10 ** maxLen;
    const [calcA, calcB] = [strNumA, strNumB].map((n) => +n.replace(NEGATIVE_FLAG, '-') * p);
    switch (op) {
      case '+':
        return (calcA + calcB) / p;
      case '-':
        return (calcA - calcB) / p;
      case '*':
        return (calcA * calcB) / p / p;
      case '/':
        return calcA / calcB;
      default:
        return 0;
    }
  }

  private parse(stack: string[]): number {
    if (stack.length < 3) {
      return +stack[0];
    }
    for (let i = 0; i < stack.length; i++) {
      if (!NUM_REG.test(stack[i])) {
        const value = this.exec(String(stack[i - 2]), stack[i], String(stack[i - 1]));
        stack.splice(i - 2, 3, `${value}`);
        return this.parse(stack);
      }
    }
    return 0;
  }
}

export function calc(str: string) {
  return new Calc(`${str}+0`);
}
