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

const Saluda = (props) => {
  return (
    <div>
      <div>{props.name && <strong>{props.name}</strong>}</div>
      {props.saluda ? (
        <h1>Hola, tu eres genial !</h1>
      ) : (
        <p>Wops, no hay saludo para ti!</p>
      )}
    </div>
  )

  //   if (props.saluda) {
  //     return <h1>Hola, tu eres genial !</h1>
  //   }

  //   return <p>Wops, no hay saludo para ti!</p>
}

const App = () => (
  <div>
    <Saluda saluda name="Eisten" />
  </div>
)

export default App
