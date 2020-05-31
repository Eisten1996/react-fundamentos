// import React from 'react'
// import TarjetaFruta from './components/TarjetaFruta'
// const frutaExotica = 'Fruta del dragon'
// const App = () => (
//   <div>
//     <TarjetaFruta name="Sandia" price={4.5} />
//     <TarjetaFruta name={'Piña'} price={2.5}></TarjetaFruta>
//     <TarjetaFruta name={`${frutaExotica}`} price={10.5}></TarjetaFruta>
//   </div>
// )

// export default App

import React from 'react'

class Contador extends React.Component {
  state = {
    video: {
      title: 'Super video',
      likes: 0,
    },
  }

  add = () => {
    this.setState(({ video }) => ({
      video: {
        ...video,
        likes: video.likes + 1,
      },
    }))
  }

  render = () => {
    return (
      <div>
        <h1>{this.state.video.title}</h1>
        <button onClick={this.add}>Likes : ({this.state.video.likes})</button>
      </div>
    )
  }
}

const App = () => (
  <div>
    <Contador />
  </div>
)

export default App
