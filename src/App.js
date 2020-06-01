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
class App extends Component {
  state = {
    marcado: `
    <h1>Inyectando HTML con React</h1>
    <br/>
    <hr/>
    <a href="#">ALgun link</a>
    `,
  }
  render() {
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: this.state.marcado,
          }}
        ></div>
      </div>
    )
  }
}

// const App = () => <div></div>

export default App
