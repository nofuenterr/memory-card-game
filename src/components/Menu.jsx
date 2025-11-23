function Menu({ setGameState }) {

  return (
    <div className="menu">
      <h1>Game of Throats</h1>
      <p>Memory Card Game</p>
      <button onClick={() => setGameState('difficultySelect')} className="play">Play</button>
    </div>
  )
}

export default Menu