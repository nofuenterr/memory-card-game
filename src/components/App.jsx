import { useState, useRef } from 'react'
import '../styles/App.css'
import UtilityMenu from './UtilityMenu.jsx'
import Menu from './Menu.jsx'
import DifficultySelect from './DifficultySelect.jsx'
import InGame from './InGame.jsx'
import Settings from './Settings.jsx'

function App({ cards }) {
  const [gameState, setGameState] = useState('menu')
  const [bestScore, setBestScore] = useState(0)
  const [cardsList] = useState(cards)
  const [difficulty, setDifficulty] = useState('normal')
  const settingsModalRef = useRef(null)

  function handleSettingsModal(isSettingsOpen) {
    isSettingsOpen
      ? settingsModalRef.current.showModal()
      : settingsModalRef.current.close()
  }

  const renderScreen = () => {
    if (gameState === 'menu') return (
      <Menu setGameState={setGameState} />
    );
    if (gameState === 'difficultySelect') return (
      <DifficultySelect 
        setDifficulty={setDifficulty} 
        setGameState={setGameState}
      />
    );
    if (gameState === 'inGame') {
      return (
        <InGame 
          best={bestScore}
          difficulty={difficulty}
          cards={cardsList}
          setGameState={setGameState}
          setBestScore={setBestScore}
        />
      );
    }
  };

  return (
    <>
      {renderScreen()}
      <UtilityMenu 
        handleSettingsModal={handleSettingsModal}
      />
      <Settings 
        ref={settingsModalRef} 
        setGameState={setGameState}
        handleSettingsModal={handleSettingsModal}
      />
    </>
  );
}

export default App
