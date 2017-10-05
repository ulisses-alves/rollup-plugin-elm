# rollup-plugin-elm
Import .elm files as ES6 modules.

## Usage
```javascript
import Elm from './App.elm'

const root = document.getElementById('app')
const app = Elm.App.embed(root)
```

### rollup.config.js
```javascript
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
      exclude: 'elm_stuff/**'
    }),
    commonjs({
      // add .elm extension
      extensions: ['.js', '.elm']
    })
  ],
  watch: {
    // add .elm files to watched files
    include: 'src/**'
  }
}
```

## Options
```javascript
{
  include: [],
  exclude: [],
  compiler: {
    // provides --debug to elm-make if enabled
    debug: false
  }
}
```