import path from 'path'
import elm from 'rollup-plugin-elm'

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