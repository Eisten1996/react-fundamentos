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
      <div>( Hermanos )</div>
      <div style={subtitleSyle}>
        Parent Componet
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

const blueStyle = {
  ...boxStyles,
  border: '1px solid blue',
}
const redStyle = {
  ...boxStyles,
  border: '1px solid red',
}

class ComponentA extends Component {
  render() {
    const { num } = this.props
    return (
      <div style={blueStyle}>
        <button onClick={this.props.onAdd}>Component A ({num})</button>
      </div>
    )
  }
}

class ComponentB extends Component {
  render() {
    const { num } = this.props
    return (
      <div style={redStyle}>
        <button onClick={this.props.onAdd}>Component B ({num})</button>
      </div>
    )
  }
}

class App extends Component {
  state = {
    countA: 0,
    countB: 0,
  }
  handlerA = () => {
    this.setState({
      countA: this.state.countA + 1,
    })
  }

  handlerB = () => {
    this.setState({
      countB: this.state.countB + 2,
    })
  }
  render() {
    const { countA, countB } = this.state
    return (
      <div style={boxStyles}>
        <Header />
        <ComponentA num={countA} onAdd={this.handlerB} />
        <ComponentB num={countB} onAdd={this.handlerA} />
      </div>
    )
  }
}

export default App
