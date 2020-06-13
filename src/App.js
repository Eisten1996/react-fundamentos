import React, { Component } from 'react'

const Header = () => {
  const subtitleSyle = {
    fontWeight: 'bold',
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
      <div>( Cualquiera )</div>
      <div style={subtitleSyle}>
        Observer pattern
        <span role="img" aria="img">
          🔥
        </span>
      </div>
    </header>
  )
}

const boxStyles = {
  margin: '0.5em',
  padding: '0.5em',
  borderRadius: '0.3em',
  border: '1px solid gray',
  textAlign: 'center',
}

class Hijo extends Component {
  render() {
    return (
      <div style={boxStyles}>
        <h3>Hijo</h3>
        <Nieto />
      </div>
    )
  }
}

class Nieto extends Component {
  render() {
    return (
      <div style={boxStyles}>
        <h3>Nieto</h3>
        <Bisnieto />
      </div>
    )
  }
}

class Bisnieto extends Component {
  state = {
    messages: '******',
  }
  handlerClick = () => {
    this.setState({
      messages: window.title,
    })
  }

  render() {
    return (
      <div style={boxStyles}>
        <button onClick={this.handlerClick}>Nieto</button>
        <p>{this.state.messages}</p>
        <h3>Bisnieto</h3>
      </div>
    )
  }
}

class App extends Component {
  componentDidMount() {
    window.title = 'React es cool'
  }

  handlerClick = () => {
    window.title = '#####'
  }

  render() {
    return (
      <div style={boxStyles}>
        <button onClick={this.handlerClick}>PADRE</button>
        <Header />
        <Hijo />
      </div>
    )
  }
}

export default App
