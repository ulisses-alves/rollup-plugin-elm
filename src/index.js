import { createFilter } from 'rollup-pluginutils'
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

      const transform = async (source, id, options) => {
        const elm = await compile(id, options.compiler)
        const dependencies = await elmCompiler.findAllDependencies(id)
        const compiled = {
          code: wrapElmCode(elm),
          map: { mappings: '' }
        }

        if (this.addWatchFile) {
          dependencies.forEach(this.addWatchFile)
        } else {
          compiled.dependencies = dependencies
        }

        return compiled
      }

      return transform(source, id, opt).catch(err => this.error(err))
    }
  }
}

async function compile (filename, options) {
  const compilerOptions = {
    output: '.js'
  }

  return await elmCompiler.compileToString(
    [ filename ],
    Object.assign({}, options, compilerOptions)
  )
}

function wrapElmCode (code) {
  return `let output = {}; (function () { ${code} }).call(output); export default output.Elm;`
}
