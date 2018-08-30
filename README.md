# rollup-plugin-elm
Import .elm (Elm 0.19) files as ES6 modules.

## Usage
```javascript
import Elm from './App.elm'

const root = document.getElementById('app')
const app = Elm.App.init({ node: root })
```

### rollup.config.js
```javascript
import elm from 'rollup-plugin-elm'

export default {
  input: 'src/index.js',
  output: {
    file: `dist/bundle.js`,
    format: 'iife'
  },
  plugins: [
    elm({
      exclude: 'elm_stuff/**'
    })
  ]
}
```
Check the __examples/__ folder for a complete example.

## Options
```javascript
{
  include: [],
  exclude: [],
  compiler: {
    // Enable/Disable compiler optimizations (default: false)
    optimize: true,
    // Enable/Disable debug mode (default: false)
    debug: false,
    // Path to Elm executable (default: elm)
    pathToElm: path.resolve(__dirname, 'node_modules/elm/bin/elm')
  }
}
```

## Elm 0.18

Elm 0.18 is supported up to version __1.0.6__ of this package. It can installed by running:

```npm install --save-dev rollup-plugin-elm@1.0.6```