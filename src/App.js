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

const Title = (props) => {
  const styles = {
    padding: '0.3em',
    color: '#FFF',
    background: props.uiColor,
    borderRadius: '0.3em',
    textAlign: 'center',
    fontSize: '50px',
  }
  return <h1 style={styles}>{props.children}</h1>
}
class App extends Component {
  state = {
    uiColor: 'purple',
  }
  render() {
    return (
      <div>
        <Title uiColor={this.state.uiColor}>
          Super <em>Ninja</em>
        </Title>
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
