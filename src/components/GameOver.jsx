function GameOver({ ref, best, score, result, setGameState, handleModal }) {

  return (
    <dialog ref={ref} className="modal">
      <p>{result ? 'You win!' : 'You lose'}</p>
      <p>Best: {best}</p>
      <p>Score: {score}</p>
      <button onClick={() => setGameState('menu')} className="back-to-menu">Menu</button>
      <button onClick={() => {
        handleModal(false)
      }} className="retry">Retry</button>
    </dialog>
  )
}

export default GameOver