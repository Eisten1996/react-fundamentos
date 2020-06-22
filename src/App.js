import React, { useState } from 'react'
import { useContext } from 'react'

const Header = () => {
  const styles = {
    background: 'linear-gradient(20deg, #6813cb, #2575fc)',
    textAlign: 'center',
    borderRadius: '0.2em',
    color: '#FFF',
    padding: '0.3em',
    margin: '0.3em',
    fontSize: '14px',
  }

  return (
    <header style={styles}>
      <h1>
        Hook useContext
        <span role="img" aria-label="hook emoji">
          ⚓
        </span>
      </h1>
    </header>
  )
}

// Uso normal de context
// const Nieto = () => {
//   return (
//     <MyContext.Consumer>
//       {(context) => (
//         <div>
//           <p>Nieto {context.num}</p>
//           <button onClick={context.addNum}>Nieto Dispatcher</button>
//         </div>
//       )}
//     </MyContext.Consumer>
//   )
// }

const Nieto = () => {
  const { addNum, num } = useContext(MyContext)
  return (
    <div>
      <p>Nieto {num}</p>
      <button onClick={addNum}>Nieto Dispatcher</button>
    </div>
  )
}

const Hijo = () => {
  return (
    <div>
      <p>Hijo</p>
      <Nieto />
    </div>
  )
}

const MyContext = React.createContext()

const App = () => {
  const [num, setNum] = useState(0)

  const addNum = () => {
    setNum(num + 1)
  }

  return (
    <MyContext.Provider
      value={{
        num,
        addNum,
      }}
    >
      <div>
        <Header />
        <button onClick={addNum}>App ({num})</button>
        <Hijo />
      </div>
    </MyContext.Provider>
  )
}

export default App
