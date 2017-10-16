import commonjs from 'rollup-plugin-commonjs'
import elm from 'rollup-plugin-elm'

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
  ],
  watch: {
    include: 'src/**'
  }
}