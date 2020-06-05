import React, { Component } from 'react'

class Http extends Component {
  state = {
    photos: [],
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((photos) => this.setState({ photos }))
  }

  render() {
    return (
      <div>
        {this.state.photos.map((photo) => (
          <img key={photo.id} src={photo.url} alt="photon"></img>
        ))}
      </div>
    )
  }
}

class Events extends Component {
  state = {
    width: window.innerWidth,
  }

  componentDidMount() {
    window.addEventListener('resize', this.handlerResize)
  }

  handlerResize = () => {
    this.setState({
      width: window.innerWidth,
    })
  }

  render() {
    return (
      <div>
        <h2>Eventos {this.state.width}</h2>
      </div>
    )
  }
}

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>componentDidMount</h1>
        <Events />
        <Http />
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
