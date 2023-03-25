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

内部使用了 `value !== null && typeof value === 'object'`

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
isPromise(Promise.resove(1)); // true
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

## isPrimitive

判断是否是原始类型

```typescript
import { isPrimitive } from '@fang-kang/js-utils';

isPrimitive(1); // true
```

## isTrue

判断是否 === true

```typescript
import { isTrue } from '@fang-kang/js-utils';

isTrue(1); // false
```

## isFalse

判断是否 === false

```typescript
import { isFalse } from '@fang-kang/js-utils';

isFalse(0); // false
```

## isFullScreen

判断当前是否全屏

```typescript
import { isFullScreen } from '@fang-kang/js-utils';

isFullScreen();
```

## isMobile

判断是否为移动端

```typescript
import { isMobile } from '@fang-kang/js-utils';

isMobile();
```

## isWeiXin

判断网页访问端是否为微信浏览器

```typescript
import { isWeiXin } from '@fang-kang/js-utils';

isWeiXin();
```

## isQQBrowser

判断网页访问端是否是 QQ 浏览器

```typescript
import { isQQBrowser } from '@fang-kang/js-utils';

isQQBrowser();
```

## isAndroid

判断是否为安卓

```typescript
import { isAndroid } from '@fang-kang/js-utils';

isAndroid();
```

## isIOS

判断是否为 IOS

```typescript
import { isIOS } from '@fang-kang/js-utils';

isIOS();
```

## isDate

判断是否是时间

```typescript
import { isDate } from '@fang-kang/js-utils';

isDate(new Date()); // true
```

## isRegExp

判断是否为正则

```typescript
import { isRegExp } from '@fang-kang/js-utils';

isRegExp(/^([0-9]{3,4}-)?[0-9]{7,8}$/); // true
```

## isError

判断是否是错误对象

```typescript
import { isError } from '@fang-kang/js-utils';

isError(new Error()); // true
```

## isSet

判断是否 Set 对象

```typescript
import { isSet } from '@fang-kang/js-utils';

isSet(new Set()); // true
```

## isSpider

判断是否是爬虫

```typescript
import { isSpider } from '@fang-kang/js-utils';

isSpider();
```

## isPC

判断是否为 PC 端

```typescript
import { isPC } from '@fang-kang/js-utils';

isPC();
```

## isChrome

判断是否为 Chrome

```typescript
import { isChrome } from '@fang-kang/js-utils';

isChrome();
```

## isSafari

判断是否为 Safari

```typescript
import { isSafari } from '@fang-kang/js-utils';

isSafari();
```

## isIE

判断是否是 IE 浏览器

```typescript
import { isIE } from '@fang-kang/js-utils';

isIE();
```

## isBrowser

检查是否为浏览器环境

可用于确定当前运行时环境是否为浏览器。这有助于避免在服务器（节点）上运行前端模块时出错。

```typescript
import { isBrowser } from '@fang-kang/js-utils';

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```

## isBrowserTabFocused

检查当前标签页是否活动

```typescript
import { isBrowserTabFocused } from '@fang-kang/js-utils';

isBrowserTabFocused();
```
