import React, { Component } from 'react'

const frutas = ['fresa', 'melon', 'durazno', 'sandia']

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          {frutas.map((fruta) => {
            return (
              <li>
                {frutas.indexOf(fruta)}.- {fruta.toUpperCase()}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

// class App extends Component {
//   render() {
//     return <div></div>
//   }
// }

// const App = () => (
//   <div>
//     <div>
//       <h1>Ninja Pro</h1>
//     </div>
//   </div>
// )

export default App
