import Elm from './Main.elm'

export const app = Elm.Main.worker({
  value: 0
})

app.ports.updated.subscribe(model => {
  console.log('UPDATED', model)
})

app.ports.increment.send(null)
app.ports.increment.send(null)
app.ports.increment.send(null)