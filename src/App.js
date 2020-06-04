import React, { Component } from 'react'

class Boton extends Component {
  state = {
    dispatchError: false,
  }
  dispatchError = () => {
    this.setState({ dispatchError: true })
  }
  render() {
    if (this.state.dispatchError) {
      throw new Error('Lo siento he fallado')
    }
    return <button onClick={this.dispatchError}>Boton con Bugg</button>
  }
}

class LimiteErrores extends Component {
  state = {
    tieneError: false,
  }

  componentDidCatch = (error, errorInfo) => {
    this.setState({
      tieneError: true,
      error,
    })
  }

  render() {
    if (this.state.tieneError) {
      return (
        <div>
          Wops! algo ha salido mal puedes recargar
          <div style={{ color: 'orange' }}>
            {this.state.error && this.state.error.toString()}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <LimiteErrores>
          <Boton />
        </LimiteErrores>
        <LimiteErrores>
          <Boton />
        </LimiteErrores>
        <LimiteErrores>
          <Boton />
        </LimiteErrores>
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
