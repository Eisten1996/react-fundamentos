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

class PersistenciaEventos extends Component {
  state = {
    color: 'blue',
  }
  handlerChange = (event) => {
    // event.persist()
    // console.log(event.target.value)
    // this.setState({
    //   color: event.target.value,
    // })

    const color = event.target.value
    this.setState({
      color,
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handlerChange}></input>
        <h1 style={{ color: this.state.color }}>{this.state.color}</h1>
      </div>
    )
  }
}

const App = () => (
  <div>
    <PersistenciaEventos />
  </div>
)

export default App
