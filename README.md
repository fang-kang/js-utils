# @fang-kang/js-utils

<p>
<a href="https://www.npmjs.com/package/@fang-kang/js-utils" target="__blank"><img src="https://img.shields.io/npm/v/@fang-kang/js-utils" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/@fang-kang/js-utils" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@fang-kang/js-utils"></a>
<a href="https://github.com/vuejs/vitepress" target="__blank"><img src="https://img.shields.io/badge/docs%20by-vitepress-blue?style=flat-square" alt="Docs & Demos"></a>
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/@fang-kang/js-utils">
<a href="https://github.com/fang-kang/js-utils" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/fang-kang/js-utils?style=social"></a>
</p>

## 🚀 What is js-utils？

@fang-kang/js-utils，是一个纯 javascript 实现的开箱即用工具库,主要用于简化开发过程，提高开发效率。

## 🦄 Usage

```typescript
import { uniqeArrayByKey } from '@fang-kang/js-utils';

const arr = [
  { id: 1, parentid: 0 },
  { id: 2, parentid: 1 },
  { id: 3, parentid: 1 },
  { id: 3, parentid: 1 },
];

uniqeArrayByKey(arr, 'id');

/**
 * [
  { id: 1, parentid: 0 },
  { id: 2, parentid: 1 },
  { id: 3, parentid: 1 },
];
 *
 */
```

Refer to [documentations](https://fang-kang.github.io/js-utils/) for more details.

## 📦 Install

```bash
npm i @fang-kang/js-utils
```

### CDN

```html
<script src="https://unpkg.com/@fang-kang/js-utils"></script>
```

It will be exposed to global as `window.JsUtils`

## 📄 License

[MIT License](https://github.com/fang-kang/js-utils/blob/master/LICENSE) © 2023-PRESENT [fang-kang](https://github.com/fang-kang)
