# js 常用方法

## debounce

防抖的意思是，在连续的操作中，无论进行了多长时间，只有某一次的操作后在指定的时间内没有再操作，这一次才被判定有效。

具体场景可以搜索框输入关键字过程中实时 请求服务器匹配搜索结果，如果不进行处理，那么就是输入框内容一直变化，导致一直发送请求。如果进行防抖处理，结果就是当我们输入内容完成后，一定时间(比如 500ms)没有再 输入内容，这时再触发请求。

```typescript
import { debounce } from '@fang-kang/js-utils';

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait = 500 延时的时间
 * @param {Boolean} immediate= false 是否立即执行
 * @return null
 */
```

## throttle

节流的意思是，规定时间内，只触发一次。比如我们设定 500ms，在这个时间内，无论点击按钮多少次，它都只会触发一次。

具体场景可以是抢购时候，由于有无数人 快速点击按钮，如果每次点击都发送请求，就会给服务器造成巨大的压力，但是我们进行节流后，就会大大减少请求的次数。

```typescript
import { throttle } from '@fang-kang/js-utils';

/**
 * 节流原理：在一定时间内，只能触发一次
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait = 500 延时的时间
 * @param {Boolean} immediate = true 是否立即执行
 * @return null
 */
```

## deepClone

对象深度克隆

```typescript
import { deepClone } from '@fang-kang/js-utils';

const a = {
  name: 'a',
};

let b = deepClone(a);

b.name = 'b';

console.log(b); // 结果为 { name: 'b' }
console.log(a); // 结果为 { name: 'a' }
```

## deepMerge

对象深度合并

```typescript
import { deepMerge } from '@fang-kang/js-utils';

const a = {
  info: {
    name: 'mary',
  },
};

const b = {
  info: {
    age: '22',
  },
};

const c = deepMerge(a, b);

// c为我们期望的结果
c = {
  info: {
    age: '22',
    name: 'mary',
  },
};
```

## sleep

等待函数

```typescript
import { sleep } from '@fang-kang/js-utils';

async function test() {
  await sleep(3000);
  console.log(1); // 3s后打印
}

test();
```
