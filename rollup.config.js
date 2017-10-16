import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: `dist/rollup-plugin-elm.js`,
    format: 'es',
  },
  external: [
    'babel-runtime/regenerator',
    'babel-runtime/core-js/object/assign',
    'babel-runtime/helpers/asyncToGenerator',
    'node-elm-compiler',
    'rollup-pluginutils',
    'uglify-js'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    uglify({}, minify)
  ]
}
