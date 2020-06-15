import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Counter from './components/counter'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h3>App</h3>
          <Counter />
        </div>
      </Provider>
    )
  }
}

export default App
