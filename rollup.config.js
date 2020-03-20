/* eslint-disable import/no-default-export */

import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
import typescript from 'rollup-plugin-typescript2'
import svgr from '@svgr/rollup'

export default {
  input: `${process.cwd()}/src/index.tsx`,
  output: [
    {
      file: `${process.cwd()}/dist/index.esm.js`,
      format: 'esm',
      sourcemap: true,
      globals: {
        react: 'React',
      },
    },
    {
      file: `${process.cwd()}/dist/index.js`,
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
    typescript(),
    resolve({
      preferBuiltins: false,
    }),
    svgr(),
    builtins(),
    commonjs(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
  ],
}
