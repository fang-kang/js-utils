import { ConfigEnv, defineConfig } from 'vite';
import { SearchPlugin } from 'vitepress-plugin-search';
import { VitePluginVitepressDemo } from 'vite-plugin-vitepress-demo';
import flexSearchIndexOptions from 'flexsearch';
import { resolve } from 'path';

export default defineConfig((env: ConfigEnv) => {
  return {
    build: {
      chunkSizeWarningLimit: 4096,
    },
    plugins: [
      VitePluginVitepressDemo({ glob: './**/demo/**/*.{vue,jsx,tsx,js,ts}' }),
      [
        SearchPlugin({
          ...flexSearchIndexOptions,
          previewLength: 100, //搜索结果预览长度
          buttonLabel: '搜索',
          placeholder: '情输入关键词',
          tokenize: 'full',
        }),
      ],
    ],
    server: {
      hmr: {
        overlay: false,
      },
      fs: {
        allow: [resolve(__dirname, '..')],
      },
    },
    ssr: {},
  };
});
