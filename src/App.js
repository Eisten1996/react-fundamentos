import React, { Component } from 'react'

class Contador extends Component {
  // constructor(props) {
  //   super(props)

  //   this.agregar = this.agregar.bind(this)

  //   this.title = React.createRef()

  //   this.state = {
  //     num: props.num,
  //   }
  // }
  // agregar() {
  //   this.setState((state) => ({
  //     num: state.num + 1,
  //   }))
  // }

  title = React.createRef()

  state = {
    num: this.props.num,
  }

  agregar = () => {
    this.setState({
      num: this.state.num + 1,
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.num}</p>
        <button onClick={this.agregar}>Incrementar</button>
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <h1>Metodo constructor</h1>
        <Contador num={5} />
        <Contador num={20} />
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
