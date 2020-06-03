import React, { Component } from 'react'
import styles from './App.module.css'

const images = [
  {
    author: {
      name: 'Vlad Bagacian',
      avatar:
        'https://images.pexels.com/users/avatars/381880/vlad-bagacian-302.jpeg?w=256&h=256&fit=crop&crop=faces',
    },
    source:
      'https://images.pexels.com/photos/1368388/pexels-photo-1368388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
    views: 153,
    id: 1,
  },
  {
    author: {
      name: 'Moreno Matković',
      avatar:
        'https://images.pexels.com/users/avatars/1265479/moreno-matkovic-149.jpeg?w=256&h=256&fit=crop&crop=faces',
    },
    source:
      'https://images.pexels.com/photos/2779539/pexels-photo-2779539.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
    views: 214,
    id: 2,
  },
]

const Image = ({ image }) => (
  <div className={styles.card}>
    <img src={image.source} alt="imagen" className={styles.image} />
    <div className={styles.footer}>
      <img src={image.author.avatar} alt="autor" className={styles.avatar} />
      <div>{image.author.name}</div>
      <div>{image.views}</div>
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className={styles.images}>
        {images.map((image) => (
          <Image image={image} key={image.id} />
        ))}
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
