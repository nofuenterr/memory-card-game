import '../styles/Menu.css'
import titleImage from '../assets/images/title-image.png'

function Menu({ setGameState }) {

  return (
    <div className="menu">
      <div className='title-wrapper'>
        <div className='title-image'>
          <img src={titleImage} alt="Game of Thrones title image" />
        </div>
        <p>Memory Card Game</p>
      </div>
      <button onClick={() => setGameState('difficultySelect')} className="play">Play</button>
    </div>
  )
}

export default Menu