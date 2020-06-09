import React, { Component } from 'react'

class Timer extends Component {
  state = {
    time: 0,
    isPlaying: true,
  }

  tick = null

  play = () => {
    this.setState({
      isPlaying: true,
    })
    this.tick = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      })
    }, 1000)
  }

  pause = () => {
    this.setState({
      isPlaying: false,
    })
    clearInterval(this.tick)
  }

  componentDidMount() {
    this.play()
  }

  componentWillUnmount() {
    this.props.onDestroyer()
    this.pause()
  }

  toggle = () => {
    if (this.state.isPlaying) {
      this.pause()
    } else {
      this.play()
    }
  }

  render() {
    const { time, isPlaying } = this.state
    return (
      <div>
        <h1>{time}</h1>
        <button onClick={this.toggle}>{isPlaying ? 'pause' : 'play'}</button>
      </div>
    )
  }
}

class App extends Component {
  state = {
    mostrar: true,
    mensaje: '',
  }
  desmontar = () => {
    this.setState({
      mostrar: false,
    })
  }

  handlerDestroy = () => {
    this.setState({
      mensaje: 'El componente contador fue destruido',
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.mensaje}</h3>
        <button onClick={this.desmontar}>Desmontar</button>
        {this.state.mostrar && <Timer onDestroyer={this.handlerDestroy} />}
      </div>
    )
  }
}

export default App
