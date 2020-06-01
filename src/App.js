import React, { Component } from 'react'

const Computacion = () => (
  <React.Fragment>
    <li>Monitor</li>
    <li>Mouse</li>
    <li>Teclado</li>
  </React.Fragment>
)
const Ropa = () => (
  <>
    <li>Playera</li>
    <li>Jeans</li>
    <li>Shors</li>
  </>
)

class App extends Component {
  render() {
    return (
      <div>
        <Computacion />
        <Ropa />
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
