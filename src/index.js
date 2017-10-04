import { createFilter } from 'rollup-pluginutils'
import UglifyJS from 'uglify-es'
import elmCompiler from 'node-elm-compiler'

const defaultOptions = {
  include: [],
  exclude: [],
  compiler: {
    debug: false
  }
}

export default function elm (options = {}) {
  const opt = Object.assign({}, defaultOptions, options)
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'elm',
    transform (source, id) {
      if (!/.elm$/i.test(id)) return null
      if (!filter(id)) return null

      return transform(source, id, opt)
      .catch(err => this.error(err))
    }
  }
}

async function transform (source, id, options) {
  const elm = await compile(id, options.compiler)
  const code = UglifyJS.minify(elm).code

  return {
    code,
    map: { mappings: '' }
  }
}


async function compile (filename, options) {
  const compilerOptions = {
    output: '.js',
    yes: true,
  }

  return await elmCompiler.compileToString(
    [ filename ],
    Object.assign({}, options, compilerOptions)
  )
}