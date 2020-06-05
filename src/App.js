import React, { Component } from 'react'
import faker from 'faker'

const chatstyle = {
  width: '450px',
  height: '500px',
  border: '1px solid gray',
  overflow: 'auto',
  font: 'monospace',
}

const messageStyle = { padding: '1em', borderBottom: '1px solid #DDD' }

const avatarSytle = { width: '50px', height: '50px', borderRadius: '50%' }
class Chat extends Component {
  box = React.createRef()

  getSnapshotBeforeUpdate() {
    const box = this.box.current
    if (box.scrollTop + box.offsetHeight >= box.scrollHeight) {
      return true
    }
    return false
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const box = this.box.current
    if (snapshot) {
      box.scrollTop = box.scrollHeight
    }
  }

  render() {
    return (
      <div style={chatstyle} ref={this.box}>
        {this.props.list.map((item) => (
          <div key={item.id} style={messageStyle}>
            <p>{item.message}</p>
            <div>{item.name}</div>
            <img src={item.avatar} alt={item.name} style={avatarSytle}></img>
          </div>
        ))}
      </div>
    )
  }
}

class App extends Component {
  state = {
    list: [],
  }

  addMessage = () => {
    const message = {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
      message: faker.hacker.phrase(),
    }

    this.setState((state) => ({
      list: [...state.list, message],
    }))
  }

  render() {
    return (
      <div>
        <h1>getSnapshotBeforeUpdate</h1>
        <Chat list={this.state.list} />
        <button onClick={this.addMessage}>New Message</button>
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
