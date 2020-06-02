import React, { Component } from 'react'

class App extends Component {
  state = {
    user: {
      name: 'Eisten',
      country: 'Peru',
      twitter: '@Dipper',
      youtube: 'zDipper',
    },
  }
  render() {
    const { user } = this.state
    const keys = Object.keys(user)
    return (
      <div>
        <h3>Iterando propiedades de objetos</h3>
        <ul>
          {keys.map((key) => (
            <li>
              <strong>{key}</strong> : {user[key]}
            </li>
          ))}
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
