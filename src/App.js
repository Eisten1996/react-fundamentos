import React, { Component } from 'react'

const Header = () => {
  const subtitleSyle = {
    fontWeigth: 'blod',
  }

  return (
    <header style={headerStyle}>
      <div>(Hijo a Padre)</div>
      <div style={subtitleSyle}>
        Event Bubbling
        <span role="img" aria="img">
          🔥
        </span>
      </div>
    </header>
  )
}

const headerStyle = {
  margin: '0.5em',
  padding: '0.5em',
  borderRadius: '0.3em',
  border: '1px solid gray',
  textAlign: 'center',
}

class Hijo extends Component {
  handlerClick = (e) => {
    // e.stopPropagation()
    e.saludo = 'Hola mensaje desde el hijo'
    console.log('Click en Hijo')
  }

  render() {
    return (
      <div style={headerStyle} onClick={this.handlerClick}>
        <p>Hijo</p>
      </div>
    )
  }
}
class App extends Component {
  handlerClick = (e) => {
    console.log('Click en Padre', e.saludo)
  }

  render() {
    return (
      <div style={headerStyle} onClick={this.handlerClick}>
        <Header />
        <Hijo />
      </div>
    )
  }
}

export default App
