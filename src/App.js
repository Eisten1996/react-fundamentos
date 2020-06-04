import React, { Component } from 'react'

class App extends Component {
  state = {
    users: [],
    cargando: true,
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ users, cargando: false }))
      .catch((error) => {
        // Manejo del Error
      })
  }
  render() {
    if (this.state.cargando) {
      return <h1>Cargando...</h1>
    }
    return (
      <div>
        <h1>Peticiones HTTP</h1>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              {user.name}
              <a href={`http://${user.website}`}>WebSite</a>
            </li>
          ))}
        </ul>
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
