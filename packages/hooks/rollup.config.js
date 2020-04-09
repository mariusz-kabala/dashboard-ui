import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: `./src/index.ts`,
  output: [
    {
      file: `./dist/index.esm.js`,
      format: 'esm',
      sourcemap: true,
      globals: {
        react: 'React',
      },
    },
    {
      file: `./dist/index.js`,
      format: 'cjs',
      sourcemap: true,
      globals: {
        react: 'React',
      },
    },
  ],
  external: [
    'react',
    'react-dom',
    'react-router-dom',
    'classnames',
    'reactstrap',
    'recharts',
    'react-smooth-scrollbar',
  ],
  plugins: [
    resolve({
      preferBuiltins: false,
    }),
    builtins(),
    commonjs(),
    typescript(),
  ],
}
