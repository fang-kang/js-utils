import typescript from 'rollup-plugin-typescript2';

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
      name: 'fragment',
    },
  ],
  plugins: [
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
