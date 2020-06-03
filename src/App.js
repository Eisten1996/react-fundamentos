import React, { Component } from 'react'

const Unicorn = () => (
  <span role="img" aria-label="unicornio">
    🦄
  </span>
)
class App extends Component {
  state = {
    techs: ['Vue'],
  }

  handleChange = (event) => {
    const techs = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    )

    console.log(techs)

    this.setState({ techs })
  }

  render() {
    return (
      <div>
        <h1>
          Etiqueta Select <Unicorn />
        </h1>
        <form>
          <select
            value={this.state.techs}
            onChange={this.handleChange}
            multiple
          >
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>
        <ul>
          {this.state.techs.map((tech) => (
            <li key={tech}>{tech}</li>
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
