import React, { Component } from 'react'

const Header = () => {
  const subtitleSyle = {
    fontWeigth: 'blod',
  }

  const headerStyle = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monoespace',
    fontSize: '17px',
  }

  return (
    <header style={headerStyle}>
      <div>Comunicacion entre componente</div>
      <div style={subtitleSyle}>
        Metodos de Instancia
        <span role="img" aria="img">
          🔥
        </span>
      </div>
    </header>
  )
}

class Hijo extends Component {
  state = {
    mensaje: '****',
  }

  dispatchAlert = (e, mensaje = 'Alert desde el hijo') => {
    alert(mensaje)
    this.setState({ mensaje })
  }

  render() {
    return (
      <div>
        <h2>{this.state.mensaje}</h2>
        <button onClick={this.dispatchAlert}>Hijo</button>
      </div>
    )
  }
}

class App extends Component {
  hijo = React.createRef()

  handlerClick = () => {
    this.hijo.current.dispatchAlert(null, 'Hola desde el padre')
  }
  render() {
    return (
      <div>
        <Header />
        <Hijo ref={this.hijo} />
        <button onClick={this.handlerClick}>Padre</button>
      </div>
    )
  }
}

export default App
