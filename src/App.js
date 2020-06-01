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
  state = {}
  manejador = (e) => {
    e.preventDefault()
    console.log(e.nativeEvent)
  }
  render = () => {
    return (
      <div>
        <a href="https://www.google.com/" onClick={this.manejador}>
          Google
        </a>
      </div>
    )
  }
}

export default App
