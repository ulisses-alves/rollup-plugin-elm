import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: [
    'node-elm-compiler',
    'rollup-pluginutils'
  ],
  plugins: [
    uglify({}, minify)
  ]
}
