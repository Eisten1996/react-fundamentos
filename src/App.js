import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

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
        React Api Conetext
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
        <p>Hijo</p>
        <Nieto />
      </div>
    )
  }
}

const Nieto = () => (
  <Consumer>
    {({ clicks, addClick }) => (
      <div style={boxStyles}>
        <p>Nieto</p>
        <button onClick={addClick}>Disparar ({clicks})</button>
      </div>
    )}
  </Consumer>
)

class App extends Component {
  state = {
    clicks: 0,
  }

  addClick = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    })
  }

  render() {
    return (
      <Provider
        value={{
          clicks: this.state.clicks,
          addClick: this.addClick,
        }}
      >
        <div style={boxStyles}>
          <Header />
          <Hijo />
        </div>
      </Provider>
    )
  }
}

export default App
