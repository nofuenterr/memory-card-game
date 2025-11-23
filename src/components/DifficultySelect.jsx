import '../styles/DifficultySelect.css'

function DifficultySelect({ setDifficulty, setGameState }) {

  return (
    <div className="difficulty-select">
      <button 
        onClick={() => {
          setDifficulty('easy')
          setGameState('inGame')
        }} 
        tabIndex={0}
        className="difficulty difficulty--easy"
      >
        Easy
      </button>
      <button
        onClick={() => {
          setDifficulty('normal')
          setGameState('inGame')
        }} 
        tabIndex={0}
        className="difficulty difficulty--normal"
      >
        Normal
      </button>
      <button 
        onClick={() => {
          setDifficulty('hard')
          setGameState('inGame')
        }} 
        tabIndex={0} 
        className="difficulty difficulty--hard"
      >
        Hard
      </button>
    </div>
  )
}

export default DifficultySelect