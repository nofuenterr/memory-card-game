function DifficultySelect({ setDifficulty, setGameState }) {

  return (
    <>
      <div className="difficulty-select">
        <div onClick={() => {
          setDifficulty('easy')
          setGameState('inGame')
        }} tabIndex={0} className="difficulty difficulty--easy">
          {/* <div><img src="" alt="" /></div> */}
          <p>Easy</p>
        </div>
        <div onClick={() => {
          setDifficulty('normal')
          setGameState('inGame')
        }} tabIndex={0} className="difficulty difficulty--normal">
          {/* <div><img src="" alt="" /></div> */}
          <p>Normal</p>
        </div>
        <div onClick={() => {
          setDifficulty('hard')
          setGameState('inGame')
        }} tabIndex={0} className="difficulty difficulty--hard">
          {/* <div><img src="" alt="" /></div> */}
          <p>Hard</p>
        </div>
      </div>
      <button onClick={() => setGameState('menu')} className="back-to-menu">Menu</button>
    </>
  )
}

export default DifficultySelect