import React, { Component } from 'react'

const Unicorn = () => (
  <span role="img" aria-label="unicornio">
    🦄
  </span>
)

class InputNoControlado extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const nombre = event.target[0].value
    const email = event.target[1].value

    // manejo de datos
    this.props.onSend({ nombre, email })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Nombres" />
        <input type="text" placeholder="Email" />
        <button>Enviar</button>
      </form>
    )
  }
}
class App extends Component {
  send = (data) => {
    console.log(data)
  }
  render() {
    return (
      <div>
        <h1>
          Inputs No Contralados Refs <Unicorn />
        </h1>
        <InputNoControlado onSend={this.send} />
      </div>
    )
  }
}

// const App = () => (
//   <div>
//     <div>
//       <h1>Ninja Pro</h1>
//     </div>
//   </div>
// )

export default App
