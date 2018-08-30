import path from 'path'
import elm from '../../dist/rollup-plugin-elm.es'

export default {
  input: 'src/index.js',
  output: {
    file: `dist/bundle.js`,
    format: 'iife'
  },
  plugins: [
    elm({
      exclude: 'elm-stuff/**',
      compiler: {
        optimize: true,
        debug: false,
        pathToElm: path.resolve(__dirname, 'node_modules/elm/bin/elm')
      }
    }),
  ]
}