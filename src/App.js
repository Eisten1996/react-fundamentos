import React, { Component } from 'react'

class App extends Component {
  state = {
    movie: {},
  }

  handlerSubmit = (event) => {
    event.preventDefault()
    const title = event.target[0].value
    alert(title)
    const url = 'http://www.omdbapi.com/?apikey=76ad082'
    fetch(url + '&t=' + title)
      .then((res) => res.json())
      .then((movie) => this.setState({ movie }))
  }

  render() {
    const { movie } = this.state
    return (
      <div>
        <h1>Ejemplo HTTP Buscador de Peliculas</h1>
        <form onSubmit={this.handlerSubmit}>
          <input type="text" placeholder="Nombre de la pelicula"></input>
          <button>Buscar</button>
        </form>
        <div>
          <h1>{movie.Title}</h1>
          <p>{movie.Plot}</p>
          <img src={movie.Poster} alt="poster"></img>
        </div>
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
