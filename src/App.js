import React, { Component } from 'react'

const users = [
  { id: 1, name: 'Gerado Gallegos', country: 'Mexico' },
  { id: 2, name: 'Leanne Graham', country: 'USA' },
  { id: 3, name: 'Ervin Howell', country: 'Colombia' },
  { id: 4, name: 'Rodrigo Fernandez', country: 'Peru' },
  { id: 5, name: 'Alfredo Bauch', country: 'Guatemala' },
]
class App extends Component {
  render() {
    return (
      <div>
        <h1>Iterando</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
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
