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
const styles = {
  height: '200px',
  background: 'gold',
  padding: '1em',
  boxSizing: 'border-box',
}
class App extends React.Component {
  state = {
    x: 0,
    y: 0,
  }
  manejador = ({ clientX, clientY }) => {
    this.setState({
      x: clientX,
      y: clientY,
    })
  }
  render = () => {
    return (
      <div style={styles} onMouseMove={this.manejador}>
        <div>{this.state.x}</div>
        <div>{this.state.y}</div>
      </div>
    )
  }
}

export default App
