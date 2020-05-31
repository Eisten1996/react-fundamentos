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

const Gato = (props) => (
  <div>
    <h1>Gato</h1>
    <pre>{JSON.stringify(props, null, 4)}</pre>
  </div>
)

class App extends React.Component {
  state = {
    fuerza: 100,
    vidasRestantes: 7,
    name: 'Chimicuil',
  }
  render = () => {
    const otrosDatos = {
      raza: 'tropical',
      peleasNocturnas: 300,
    }
    return (
      <div>
        <Gato name="Garfiel" age="2 años" {...otrosDatos} {...this.state} />
      </div>
    )
  }
}

export default App
