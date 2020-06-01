import React, { Component } from 'react'

const Title = ({ uiColor, children }) => {
  const styles = {
    padding: '0.3em',
    color: '#FFF',
    background: uiColor,
    borderRadius: '0.3em',
    textAlign: 'center',
    fontSize: '50px',
  }
  return <h1 style={styles}>{children}</h1>
}
class App extends Component {
  state = {
    uiColor: 'tomato',
  }
  render() {
    const { uiColor } = this.state
    return (
      <div>
        <Title uiColor={uiColor}>
          Super <em>Ninja</em>
        </Title>
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
