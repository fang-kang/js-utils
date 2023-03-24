# is 判断

## isArray

判断是否是数组

```typescript
import { isArray } from '@fang-kang/js-utils';

isArray([]); // true
```

## isBool

判断是否是 boolean 类型

```typescript
import { isBool } from '@fang-kang/js-utils';

isBool(true); // true
```

## isColor

判断字符串是否是十六进制的颜色值

```typescript
import { isColor } from '@fang-kang/js-utils';

isColor('#ffffff'); // true
```

## isDef

判断元素不是 undefined

```typescript
import { isDef } from '@fang-kang/js-utils';

isDef(undefined); // false
```

## isEmail

判断是否是邮箱格式

```typescript
import { isEmail } from '@fang-kang/js-utils';

isEmail('@qq.com'); // false
```

## isEmpty

判断元素是否为空

```typescript
import { isEmpty } from '@fang-kang/js-utils';

isEmpty([]); // true
```

## isFn

判读是否是函数

```typescript
import { isFn } from '@fang-kang/js-utils';

isFn(function () {}); // true
```

## isIdCard

判断是否是身份证

```typescript
import { isIdCard } from '@fang-kang/js-utils';

isIdCard('111'); // false
```

## isNull

判断是否是 null

```typescript
import { isNull } from '@fang-kang/js-utils';

isNull(null); // true
```

## isObject

判断是否是对象

内部使用了`typeof value === 'object'`

```typescript
import { isObject } from '@fang-kang/js-utils';

isObject(null); // true
```

## isPhone

判断是否是手机号

```typescript
import { isPhone } from '@fang-kang/js-utils';

isPhone(123); // false
```

## isPlainObject

判断是否是{}类型

```typescript
import { isPlainObject } from '@fang-kang/js-utils';

isPlainObject(null); // false
```

## isPromise

判断是否是 promise

```typescript
import { isPromise } from '@fang-kang/js-utils';
isPromise(new Promise()); // true
```

## isString

判断是否是字符串类型

```typescript
import { isString } from '@fang-kang/js-utils';

isString('1'); // true
```

## isStringNumber

判断是否是字符串类型的数字

```typescript
import { isStringNumber } from '@fang-kang/js-utils';

isStringNumber('1'); // true
```

## isSymbol

判断是否是 symbol 类型

```typescript
import { isSymbol } from '@fang-kang/js-utils';

isSymbol(new Symbol('1')); // true
```

## isUndef

判断是否是 undefined

```typescript
import { isUndef } from '@fang-kang/js-utils';

isUndef(undefined); // true
```

## isUrl

判断是否是 url

```typescript
import { isUrl } from '@fang-kang/js-utils';

isUrl('http://www.baidu.com'); // true
```

## isEven

判断是否是偶数

```typescript
import { isEven } from '@fang-kang/js-utils';

isEven(1); // 否
```
