import React, { useLayoutEffect } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

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
        Hook useState
        <span role="img" aria-label="hook emoji">
          ⚓
        </span>
      </h1>
    </header>
  )
}
const App = () => {
  const [count, setState] = useState(1)

  const add = () => {
    setState(count + 1)
  }

  useEffect(() => {
    console.log('useEffect 1')
  }, [count])

  useEffect(() => {
    console.log('useEffect 2')
  }, [count])

  useLayoutEffect(() => {
    console.log('useLayoutEffect 1')
  }, [count])

  useLayoutEffect(() => {
    console.log('useLayoutEffect 2')
  }, [count])

  return (
    <div>
      <Header />
      <h1>App</h1>
      <button onClick={add}>Add ({count})</button>
    </div>
  )
}

export default App
