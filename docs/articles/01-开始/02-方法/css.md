# css

## useNamespace

css BEM

```typescript
import { useNamespace } from '@fang-kang/js-utils';

const namespace = useNamespace('vi');
const button = namespace('btn');
button.b('primary'); // vi-btn-primary
```
