import React, { Component } from 'react'

class InputControlado extends Component {
  state = {
    text: '',
    // tieneError: false,
    color: '#E8E8E8',
  }

  actualizar = (event) => {
    const text = event.target.value
    // const tieneError = text !== '' && text.length < 5
    let color = 'green'
    if (text.trim() === '') {
      color = '#E8E8E8'
    }
    if (text.trim() !== '' && text.trim().length < 5) {
      color = 'red'
    }
    this.setState({
      text,
      color,
    })

    this.props.onChange(this.props.name, text)
  }

  render() {
    const styles = {
      border: `1px solid ${this.state.color}`,
      padding: '0.3em 0.6em',
      outline: 'none',
    }
    return (
      <input
        type="text"
        value={this.state.text}
        onChange={this.actualizar}
        placeholder={this.props.placeholder}
        style={styles}
      />
    )
  }
}

class App extends Component {
  state = {
    name: '',
    email: '',
  }
  actualizar = (name, text) => {
    this.setState({
      [name]: text,
    })
  }
  render() {
    return (
      <div>
        <h1>Inputs Contralados</h1>
        <InputControlado
          onChange={this.actualizar}
          placeholder="Nombre Completo"
          name="name"
        />
        <InputControlado
          onChange={this.actualizar}
          placeholder="Email"
          name="email"
        />
        <h2>NOMBRE : {this.state.name}</h2>
        <h2>EMAIL : {this.state.email}</h2>
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
