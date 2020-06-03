import React, { Component } from 'react'

const Unicorn = () => (
  <span role="img" aria-label="unicornio">
    🦄
  </span>
)
class App extends Component {
  state = {
    active: true,
  }

  handleChange = (event) => {
    this.setState({
      active: event.target.checked,
    })
  }

  render() {
    const { active } = this.state
    return (
      <div>
        <form>
          <input
            type="checkbox"
            checked={this.state.active}
            onChange={this.handleChange}
          ></input>
        </form>
        {active && (
          <h1>
            Etiqueta checkbox <Unicorn />
          </h1>
        )}
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
