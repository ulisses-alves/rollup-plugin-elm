import commonjs from 'rollup-plugin-commonjs'
import elm from '../../dist/rollup-plugin-elm.es'

export default {
  input: 'src/index.js',
  output: {
    file: `dist/bundle.js`,
    format: 'cjs'
  },
  plugins: [
    elm({
      exclude: 'elm-stuff/**',
      compiler: {
        debug: true
      }
    }),
    commonjs({
      extensions: ['.js', '.elm']
    })
  ]
}