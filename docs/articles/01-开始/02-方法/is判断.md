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

isSymbol(Symbol('1')); // true
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

isEven(1); // false
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

## isAbsolute

判断是否是绝对路径

```typescript
import { isAbsolute } from '@fang-kang/js-utils';
```

## isBase64

判断是否是 base64 格式

```typescript
import { isBase64 } from '@fang-kang/js-utils';
```

## isBlob

判断是否是 Blob 格式

```typescript
import { isBlob } from '@fang-kang/js-utils';
```

## isBottom

判断滚动条到达窗口底部

```typescript
import { isBottom } from '@fang-kang/js-utils';

/**
 * @param distance
 */
```

## isCalc

判断字符串是 calc()

```typescript
import { isCalc } from '@fang-kang/js-utils';
```

## isComment

判断是否是<! -- xxx -->注释

```typescript
import { isComment } from '@fang-kang/js-utils';
```

## isContainCn

判断是否包含中文

```typescript
import { isContainCn } from '@fang-kang/js-utils';
```

## isDivElement

判断是否是 div

```typescript
import { isDivElement } from '@fang-kang/js-utils';
```

## isElement

判断是否是 dom

```typescript
import { isElement } from '@fang-kang/js-utils';
```

## isEqual

判断 2 个对象是否相等

```typescript
import { isEqual } from '@fang-kang/js-utils';
```

## isEsModule

判断对象是 ESmodule

```typescript
import { isEsModule } from '@fang-kang/js-utils';
```

## isExist

判断文件是否存在

```typescript
import { isExist } from '@fang-kang/js-utils';
```

## isFile

判断是否是文件

```typescript
import { isFile } from '@fang-kang/js-utils';
```

## isFileType

判断文件类型

```typescript
import { isFileType } from '@fang-kang/js-utils';

/**
 * @param { string } file 文件路径
 * @param { string } appendix 文件类型
 */

// const isCss = isFileType('./useEventListener.css', 'css') // true
```

## isIFrameElement

判断是否是 iframe

```typescript
import { isIFrameElement } from '@fang-kang/js-utils';
```

## isImageElement

判断是否是 img

```typescript
import { isImageElement } from '@fang-kang/js-utils';
```

## isIPv4

判断是否是 ipv4

```typescript
import { isIPv4 } from '@fang-kang/js-utils';
```

## isIPv6

判断是否是 ipv6

```typescript
import { isIPv6 } from '@fang-kang/js-utils';
```

## isKeyOf

属性是否存在于对象

```typescript
import { isKeyOf } from '@fang-kang/js-utils';
```

## isLeapYear

判断是否是闰年

```typescript
import { isLeapYear } from '@fang-kang/js-utils';
```

## isMap

判断是否是 Map

```typescript
import { isMap } from '@fang-kang/js-utils';
```

## isNameCn

判断输入的是中文

```typescript
import { isNameCn } from '@fang-kang/js-utils';
```

## isNameEn

判断输入的是否是英文

```typescript
import { isNameEn } from '@fang-kang/js-utils';
```

## isNaN

判断是否是 NaN

```typescript
import { isNaN } from '@fang-kang/js-utils';
```

## isNullOrUndefined

判断是否是 null 或 undefined

```typescript
import { isNullOrUndefined } from '@fang-kang/js-utils';
```

## isNm

判断是否是 nodemodule 依赖

```typescript
import { isNm } from '@fang-kang/js-utils';
```

## isNode

判断是否是 node 节点

```typescript
import { isNode } from '@fang-kang/js-utils';
```

## isOnline

判断是否在线

```typescript
import { isOnline } from '@fang-kang/js-utils';
```

## isPercent

判断是否是百分比

```typescript
import { isPercent } from '@fang-kang/js-utils';
```

## isPostCode

判断是否是邮编

```typescript
import { isPostCode } from '@fang-kang/js-utils';
```

## isPx

判断是否是 px

```typescript
import { isPx } from '@fang-kang/js-utils';
```

## isRelative

判断是否是相对路径

```typescript
import { isRelative } from '@fang-kang/js-utils';
```

## isRem

判断是否是 rem

```typescript
import { isRem } from '@fang-kang/js-utils';
```

## isSameDay

判断是否是同一天

```typescript
import { isSameDay } from '@fang-kang/js-utils';
```

## isScriptElement

判断是否是 script 标签

```typescript
import { isScriptElement } from '@fang-kang/js-utils';
```

## isShadowRoot

判断是否是 shadow-root

```typescript
import { isShadowRoot } from '@fang-kang/js-utils';
```

## isSocketUrl

判断是否是 websocket 地址

```typescript
import { isSocketUrl } from '@fang-kang/js-utils';
```

## isSoldierId

判断是否是军官证

```typescript
import { isSoldierId } from '@fang-kang/js-utils';
```

## isStyleElement

判断是否是 style 标签

```typescript
import { isStyleElement } from '@fang-kang/js-utils';
```

## isSupportCamera

判断是否支持调用摄像头

```typescript
import { isSupportCamera } from '@fang-kang/js-utils';
```

## isSupportWebp

判断是否支持 webp 格式

```typescript
import { isSupportWebp } from '@fang-kang/js-utils';
```

## isTrainNumber

判断是否是火车号

```typescript
import { isTrainNumber } from '@fang-kang/js-utils';
```

## isVar

判断是否是 cssvar

```typescript
import { isVar } from '@fang-kang/js-utils';
```

## isVersion

判断是否是版本号

```typescript
import { isVersion } from '@fang-kang/js-utils';
```

## isVh

判断是否是 vh

```typescript
import { isVh } from '@fang-kang/js-utils';
```

## isVideo

判断是否是 video

```typescript
import { isVideo } from '@fang-kang/js-utils';
```

## isVue

判断文件是不是.vue

```typescript
import { isVue } from '@fang-kang/js-utils';
```

## isVw

判断是否是 vw

```typescript
import { isVw } from '@fang-kang/js-utils';
```

## isWeakMap

判断是否是 WeakMap

```typescript
import { isWeakMap } from '@fang-kang/js-utils';
```

## isWeakSet

判断是否是 WeakSet

```typescript
import { isWeakSet } from '@fang-kang/js-utils';
```

## isWritable

同步地测试用户对 path 指定的文件或目录的权限

```typescript
import { isWritable } from '@fang-kang/js-utils';
```
