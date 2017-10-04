import uglify from 'rollup-plugin-uglify'
import optimize from 'rollup-plugin-optimize-js'
import babel from 'rollup-plugin-babel'

const name = 'rollup-plugin-elm'

export default {
  input: 'src/index.js',
  output: {
    file: `dist/rollup-plugin-elm.js`,
    format: 'cjs',
  },
  external: [
    'babel-runtime/regenerator',
    'babel-runtime/core-js/object/assign',
    'babel-runtime/helpers/asyncToGenerator',
    'node-elm-compiler',
    'rollup-pluginutils',
    'uglify-es'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
      runtimeHelpers: true
    }),
    uglify(),
    optimize()
  ]
}
