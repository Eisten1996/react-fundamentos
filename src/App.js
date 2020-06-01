// import React from 'react'
// import TarjetaFruta from './components/TarjetaFruta'
// const frutaExotica = 'Fruta del dragon'
// const App = () => (
//   <div>
//     <TarjetaFruta name="Sandia" price={4.5} />
//     <TarjetaFruta name={'Piña'} price={2.5}></TarjetaFruta>
//     <TarjetaFruta name={`${frutaExotica}`} price={10.5}></TarjetaFruta>
//   </div>
// )

// export default App

import React, { Component } from 'react'
import './global.css'

class Hijo extends Component {
  manejador = () => {
    this.props.onSaluda('Eisten Flores')
  }
  render() {
    return (
      <div className="box blue">
        <h2>Hijo</h2>
        <button onClick={this.manejador}>Saludar</button>
      </div>
    )
  }
}
class App extends Component {
  state = {
    name: '',
  }
  manejador = (name) => {
    this.setState({ name })
  }
  render() {
    return (
      <div className="box red">
        <Hijo onSaluda={this.manejador} />
        <h1>Nombre : {this.state.name}</h1>
      </div>
    )
  }
}

export default App
