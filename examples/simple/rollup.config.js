import commonjs from 'rollup-plugin-commonjs'
import elm from '../../src/index'

export default {
  input: 'src/index.js',
  output: {
    file: `dist/bundle.js`,
    format: 'cjs'
  },
  plugins: [
    elm({
      exclude: 'node_modules/**',
      compiler: {
        debug: true
      }
    }),
    commonjs({
      extensions: ['.js', '.elm']
    })
  ]
}