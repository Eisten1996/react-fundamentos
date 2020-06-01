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

import React from 'react'

class App extends React.Component {
  state = {
    text: '',
    evento: '',
  }
  manejador = (event) => {
    this.setState({
      text: event.target.value,
      evento: event.type,
    })
  }
  render = () => {
    return (
      <div>
        <input
          type="text"
          onChange={this.manejador}
          onCopy={this.manejador}
          onPaste={this.manejador}
        ></input>
        <h1>{this.state.text}</h1>
        <h3>{this.state.evento}</h3>
      </div>
    )
  }
}

export default App
