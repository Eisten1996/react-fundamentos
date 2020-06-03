import React, { Component } from 'react'

const FancyInput = React.forwardRef((props, ref) => (
  <div>
    <input type="text" ref={ref} />
  </div>
))
class App extends Component {
  entrada = React.createRef()
  componentDidMount() {
    console.log(this.entrada)
  }
  render() {
    return (
      <div>
        <h1>Reenvio de Refs</h1>
        <FancyInput ref={this.entrada} />
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
