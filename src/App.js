import React, { Component } from 'react'
import PubSub from 'pubsub-js'

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
    PubSub.publish('saludo', 'Hola desde el bisnieto')
  }

  componentDidMount() {
    PubSub.subscribe('otroEvento', (e, data) => {
      this.setState({
        messages: data.title,
      })
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe()
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
    PubSub.subscribe('saludo', (e, data) => {
      alert(data)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe()
  }

  handlerClick = () => {
    PubSub.publish('otroEvento', {
      title: 'Hola desde App',
    })
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
