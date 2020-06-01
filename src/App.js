import React, { Component } from 'react'
import PropTypes from 'prop-types'

const noops = () => {}
class Profile extends Component {
  // npm i prop-types
  static propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
  }

  static defaultProps = {
    name: 'Eisten',
    onHello: noops,
  }

  saluda = () => {
    this.props.onHello()
  }

  render() {
    const { name, bio, email, age } = this.props
    return (
      <div>
        <h1>{name}</h1>
        <p>{bio}</p>
        <a href={`mailto:${email}`}>{email}</a>
        <p>{age}</p>
        <button onClick={this.saluda}>Saluda</button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Profile bio="..bio" email="eisten.flores@unmsm.edu.pe" age={23} />
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
