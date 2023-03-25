# css

## useNamespace

css BEM

```typescript
import { useNamespace } from '@fang-kang/js-utils';

const namespace = useNamespace('vi');
const button = namespace('btn');
button.b('primary'); // vi-btn-primary
```

## getStyle

返回指定元素的生效样式

```typescript
import { getStyle } from '@fang-kang/js-utils';

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
