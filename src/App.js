import React, { Component } from 'react'

class App extends Component {
  getList = () => {
    return (
      <ul>
        <li>Fresa</li>
        <li>Mango</li>
        <li>Pera</li>
      </ul>
    )
  }
  render() {
    if (true) {
      return null
    }
    return (
      <div>
        <h1>Metodo Render</h1>
        {this.getList()}
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
