import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default {
  input: './src/index.ts',
  output: [
    {
      file: './lib/index.cjs.js',
      format: 'cjs',
    },
    {
      file: './lib/index.es.js',
      format: 'es',
    },
    {
      file: './lib/index.umd.js',
      format: 'umd',
      name: 'JsUtils',
    },
  ],
  plugins: [
    terser(),
    nodePolyfills(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext',
        },
      },
      useTsconfigDeclarationDir: true, // 使用tsconfig中的声明文件目录配置
    }),
  ],
};
