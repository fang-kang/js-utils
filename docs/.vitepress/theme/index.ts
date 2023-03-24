import { type Theme } from 'vitepress';
import { AntdTheme } from 'vite-plugin-vitepress-demo/theme';
import DefaultTheme from 'vitepress/theme';
// @ts-ignore
import Utterances from './components/Utterances.vue';
// @ts-ignore
import Layout from './components/Layout.vue';
import './styles/index.css';

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Demo', AntdTheme);
    app.component('Utterances', Utterances);
  },
  setup() {},
} as Theme;
