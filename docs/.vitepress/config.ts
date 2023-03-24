import { defineConfig } from 'vitepress';
import { getSidebarData, getNavData } from './navSidebarUtil';
import updateInfo from './watchJson.json';
import { description, github, keywords, name } from './meta';
import socialLinks from './link';

console.log('【updateInfo】', updateInfo);

export default defineConfig({
  title: name,
  description,
  markdown: {
    lineNumbers: false,
  },
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { 'http-equiv': 'pragma', content: 'no-cache' }],
    ['meta', { 'http-equiv': 'Expires', content: '0' }],
    ['meta', { name: 'keywords', content: keywords }],
    ['meta', { name: 'author', content: 'fk' }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { name: 'application-name', content: name }],
    ['meta', { name: 'apple-mobile-web-app-title', content: name }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
  ],
  base: '/js-utils/',
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    socialLinks,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present fk',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '最后更新',
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '归档',
    editLink: {
      pattern: `${github}/tree/main/docs/:path`,
      text: '在 GitHub 上编辑此页',
    },
    outlineTitle: '导航栏',
    outline: 'deep',
    nav: getNavData(),
    sidebar: getSidebarData(),
  },
});
