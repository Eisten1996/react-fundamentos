import React, { Component } from 'react'

const Unicorn = () => (
  <span role="img" aria-label="unicornio">
    🦄
  </span>
)
class App extends Component {
  state = {
    tech: 'Vue',
  }

  handleChange = (event) => {
    this.setState({
      tech: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <h1>
          Etiqueta Select <Unicorn />
        </h1>
        <form>
          <select value={this.state.tech} onChange={this.handleChange}>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>
        <h2>{this.state.tech}</h2>
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
