import '../styles/GameOver.css'

function GameOver({ ref, best, score, result, setGameState, handleModal }) {

  return (
    <dialog ref={ref} className="gameover-modal">
      <div className="gameover-wrapper">
        <p className='gameover-title'>{result ? 'You win!' : 'You lose'}</p>
        <p className='gameover-item-wrapper'><span>Best:</span><span>{best}</span></p>
        <p className='gameover-item-wrapper'><span>Score:</span><span>{score}</span></p>
        <button onClick={() => 
          setGameState('menu')
        } className="back-to-menu gameover-item-button">Menu</button>
        <button onClick={() => {
          handleModal(false)
        }} className="retry gameover-item-button">Retry</button>
      </div>
    </dialog>
  )
}

export default GameOver