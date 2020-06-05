import React, { Component } from 'react'

class UserDetails extends Component {
  state = {
    user: {},
    isFetching: false,
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.userId !== prevProps.userId) {
      this.fetchData()
    }
  }
  fetchData = () => {
    this.setState({
      isFetching: true,
    })
    const url =
      'https://jsonplaceholder.typicode.com/users/' + this.props.userId
    fetch(url)
      .then((res) => res.json())
      .then((user) => this.setState({ user, isFetching: false }))
  }

  render() {
    return (
      <div>
        <h2>User Details</h2>
        {this.state.isFetching ? (
          <div>
            <h1>Cargando.....</h1>
          </div>
        ) : (
          <pre>{JSON.stringify(this.state.user, null, 4)}</pre>
        )}
      </div>
    )
  }
}

class App extends Component {
  state = {
    id: 5,
  }

  aumentar = () => {
    this.setState((state) => ({
      id: state.id + 1,
    }))
  }
  render() {
    const { id } = this.state
    return (
      <div>
        <h1>componentDidUpdate</h1>
        <h2>ID : {id}</h2>
        <button onClick={this.aumentar}>Aumentar</button>
        <UserDetails userId={id} />
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
