import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './modern-normalize.css'
import './reset.css'
import App from './components/App.jsx'


let cards
async function getCards() {
  try {
    const response = await fetch('https://thronesapi.com/api/v2/Characters')
    const data = await response.json()
    cards = data.slice(0, 10).map(card => {
      return {
        id: card.id,
        imageUrl: card.imageUrl,
        fullName: card.fullName,
        selected: false
      }
    })
  } catch (error) {
    console.error("An error occurred:", error.message);
    cards = [
      {
        "id": 0,
        "firstName": "Daenerys",
        "lastName": "Targaryen",
        "fullName": "Daenerys Targaryen",
        "title": "Mother of Dragons",
        "family": "House Targaryen",
        "image": "daenerys.jpg",
        "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg"
      },
      {
        "id": 1,
        "firstName": "Samwell",
        "lastName": "Tarly",
        "fullName": "Samwell Tarly",
        "title": "Maester",
        "family": "House Tarly",
        "image": "sam.jpg",
        "imageUrl": "https://thronesapi.com/assets/images/sam.jpg"
      },
      {
        "id": 2,
        "firstName": "Jon",
        "lastName": "Snow",
        "fullName": "Jon Snow",
        "title": "King of the North",
        "family": "House Stark",
        "image": "jon-snow.jpg",
        "imageUrl": "https://thronesapi.com/assets/images/jon-snow.jpg"
      },
      {
        "id": 3,
        "firstName": "Arya",
        "lastName": "Stark",
        "fullName": "Arya Stark",
        "title": "No One",
        "family": "House Stark",
        "image": "arya-stark.jpg",
        "imageUrl": "https://thronesapi.com/assets/images/arya-stark.jpg"
      },
      {
        "id": 4,
        "firstName": "Sansa",
        "lastName": "Stark",
        "fullName": "Sansa Stark",
        "title": "Lady of Winterfell",
        "family": "House Stark",
        "image": "sansa-stark.jpeg",
        "imageUrl": "https://thronesapi.com/assets/images/sansa-stark.jpeg"
      },
      {
        "id": 5,
        "firstName": "Brandon",
        "lastName": "Stark",
        "fullName": "Brandon Stark",
        "title": "Lord of Winterfell",
        "family": "House Stark",
        "image": "bran-stark.jpg",
        "imageUrl": "https://thronesapi.com/assets/images/bran-stark.jpg"
      },
      {
        "id": 6,
        "firstName": "Ned",
        "lastName": "Stark",
        "fullName": "Ned Stark",
        "title": "Lord of Winterfell",
        "family": "House Stark",
        "image": "ned-stark.jpg",
        "imageUrl": "https://thronesapi.com/assets/images/ned-stark.jpg"
      },
      {
        "id": 7,
        "firstName": "Robert",
        "lastName": "Baratheon",
        "fullName": "Robert Baratheon",
        "title": "Lord of the Seven Kingdoms",
        "family": "House Baratheon",
        "image": "robert-baratheon.jpeg",
        "imageUrl": "https://thronesapi.com/assets/images/robert-baratheon.jpeg"
      },
      {
        "id": 8,
        "firstName": "Jamie",
        "lastName": "Lannister",
        "fullName": "Jamie Lannister",
        "title": "Lord Commander of the Kingsguard",
        "family": "House Lannister",
        "image": "jaime-lannister.jpg",
        "imageUrl": "https://thronesapi.com/assets/images/jaime-lannister.jpg"
      },
      {
        "id": 9,
        "firstName": "Cersei",
        "lastName": "Lannister",
        "fullName": "Cersei Lannister",
        "title": "Lady of Casterly Rock",
        "family": "House Lannister",
        "image": "cersei.jpg",
        "imageUrl": "https://thronesapi.com/assets/images/cersei.jpg"
      }
    ]
  } finally {
    console.log(cards)
    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <App cards={cards} />
      </StrictMode>,
    )
  }
}

getCards()
