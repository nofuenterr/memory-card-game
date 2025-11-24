import { useState, useRef } from 'react';
import GameOver from './GameOver';
import '../styles/InGame.css'
import titleImage from '../assets/images/title-image.png'

const getActiveCards = (deck, limit, score) => {
  if (score < deck.length) {
    let nonSelectedCard = false
    const randomActiveCards = []
    const availableCards = deck

    const getRandomActiveCard = () => {
      const availableCardsCount = availableCards.length
      const randomId = Math.floor(Math.random() * availableCardsCount);
      const randomActiveCard = availableCards[randomId]
      return [randomActiveCard, randomId]
    }

    const getRandomNonSelectedActiveCard = () => {
      const nonSelectedCards = availableCards.filter(card => !card.selected)
      const nonSelectedCardsCount = nonSelectedCards.length
      const randomId = Math.floor(Math.random() * nonSelectedCardsCount);
      const randomNonSelectedActiveCard = nonSelectedCards[randomId]
      return randomNonSelectedActiveCard
    }

    for (let i = 0; i < limit; i += 1) {
      if (!nonSelectedCard && limit - 1 === i) {
        const randomNonSelectedActiveCard = getRandomNonSelectedActiveCard()
        const availableCardsCount = availableCards.length
        const randomId = Math.floor(Math.random() * availableCardsCount);
        randomActiveCards.splice(randomId, 0, randomNonSelectedActiveCard)
      } else {
        const [randomActiveCard, randomId] = getRandomActiveCard()
        if (!randomActiveCard.selected) nonSelectedCard = true
        randomActiveCards.push(randomActiveCard)
        availableCards.splice(randomId, 1)
      }
    }

    return randomActiveCards
  }
}

const getActiveCardsLimit = (difficulty) => {
  let activeCardsLimit
  switch (difficulty) {
    case 'easy':
      activeCardsLimit = 3
      return activeCardsLimit
    case 'normal':
      activeCardsLimit = 4
      return activeCardsLimit
    case 'hard':
      activeCardsLimit = 5
      return activeCardsLimit
    default:
      activeCardsLimit = 4
      return activeCardsLimit
  }
}

const getDeck = (difficulty, cards) => {
  let deck
  switch (difficulty) {
    case 'easy':
      deck = cards.slice(0, 5)
      return deck
    case 'normal':
      deck = cards.slice(0, 7)
      return deck
    case 'hard':
      deck = cards.slice(0, 10)
      return deck
    default:
      deck = cards.slice(0, 7)
      return deck
  }
}

function InGame({ best, difficulty, cards, setGameState, setBestScore }) {
  const gameOverModalRef = useRef(null)
  const [score, setScore] = useState(0)

  const [gameDeck, setGameDeck] = useState(() => getDeck(difficulty, cards))
  const [activeCardsLimit] = useState(() => getActiveCardsLimit(difficulty))

  const [activeCards, setActiveCards] = useState(() => getActiveCards([...gameDeck], activeCardsLimit, score))

  function handleSetScore(cardId) {
    const card = gameDeck.find(card => card.id === cardId)
    const isSelected = card.selected
    if (!isSelected) {
      setScore(() => score + 1) 
      const isGameOver = score + 1 === gameDeck.length
      isGameOver ? handleModal(true, score + 1) : handleSelectedCard(cardId)
    } else {
      handleModal(true, score)
    }
  }

  function handleSelectedCard(cardId) {
    setGameDeck(gameDeck.map(card => {
      if (card.id === cardId) {
        card.selected = true
      }
      return card
    }))
    
    setActiveCards(getActiveCards([...gameDeck], activeCardsLimit, score))
  }

  function handleCloseModal() {
    setScore(0)
    setGameDeck(() => getDeck(difficulty, cards).map(card => {
      card.selected = false
      return card
    }))
    setActiveCards(getActiveCards([...gameDeck], activeCardsLimit, 0))
    gameOverModalRef.current.close()
  }

  function handleShowModal(finalScore) {
    if (finalScore > best) setBestScore(finalScore)
      gameOverModalRef.current.showModal()
  }
  
  function handleModal(isGameOver, finalScore) {
    isGameOver
      ? handleShowModal(finalScore)
      : handleCloseModal()
  }

  return (
    <>
      <div className="in-game">
        <div className="in-game__header">
          <div className="title-wrapper">
            <div className='title-image'>
              <img src={titleImage} alt="Game of Thrones title image" />
            </div>
            <p>Memory Card Game</p>
          </div>
          <div className="scores">
            <p>Best: {best}</p>
            <p>Score: {score}</p>
          </div>
        </div>
        <div className="in-game__body">
          <ul className="active-cards">
            {activeCards.map(card => {
              return (
                <li
                  data-tilt
                  className='card tiltcard' 
                  tabIndex={0} 
                  key={card.id} 
                  id={card.id} 
                  onClick={(e) => {
                    const cardId = +e.target.closest('.card').id
                    handleSetScore(cardId)
                  }}>
                  <div className='card__image' style={{background: 'url(' + card.imageUrl + ') center / cover no-repeat'}}>
                    {/* <img src={card.imageUrl} alt={card.fullName} /> */}
                  </div>
                  <p>{card.fullName}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <GameOver
        ref={gameOverModalRef}
        best={best}
        score={score}
        result={gameDeck.length === score}
        setGameState={setGameState}
        handleModal={handleModal}
      />
    </>
  )
}

export default InGame