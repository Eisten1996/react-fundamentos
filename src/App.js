import React, { useState } from 'react'
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
  const [clicks, setClick] = useState(0)
  const [emojin, setEmojin] = useState('🦁')
  // 🙊🎇

  const addClicks = () => {
    setClick(clicks + 1)
  }

  useEffect(() => {
    alert('useEffet 🎇')
  }, [clicks])

  const toggleEmojin = () => {
    const nextEmoji = emojin === '🦁' ? '🙊' : '🦁'
    setEmojin(nextEmoji)
  }

  return (
    <div>
      <Header />
      <button onClick={addClicks}> Clicks {clicks}</button>
      <button onClick={toggleEmojin}>Alternar Emojin</button>
      <h1>{emojin}</h1>
    </div>
  )
}

export default App
