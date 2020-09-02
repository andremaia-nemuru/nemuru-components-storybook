import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

export default [{
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
},
  {
    input: 'src/main-theme.scss',
    output: [
      {
        file: "dist/main-theme.js",
        format: 'cjs'
      },
    ],
    plugins: [
      external(),
      postcss({
        modules: false
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      resolve(),
      commonjs()
    ]
  },
]