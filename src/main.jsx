import React from 'react'
import ReactDOM from 'react-dom/client'

/* styling */
import './index.css'

/* components you would like to import */
import NavBar from './Components/navbar.jsx'
import HeroPage from './Components/heropage.jsx'
import CardBoy from './Components/card.jsx'
import Jokee from './Components/Jokee.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Jokee 
    setup="Why did the scarecrow win an award?"
    punchline="Because he was outstanding in his field."
    />
    <Jokee 
    setup="What do you call a fish with no eyes?"
    punchline="Fsh!"
    />
    <Jokee 
    setup="Why did the bicycle fall over?"
    punchline="Because it was two tired."
    />
    <Jokee 
    setup="What do you call a cow with no legs?"
    punchline="Ground beefFF!"
    />

    
  </React.StrictMode>,
)

     /* <CardBoy 
      imageSource="mr-whiskerson.png"
      name="Mr.Whiskerson"
      phonenumber="(123) 456-7890"
      email="allthe@gmail.com"
    />

    <CardBoy 
      imageSource="fluffykins.png"
      name="fluffykins"
      phonenumber="(215) 456-7890"
      email="emails@gmail.com"
    />
    <CardBoy 
      imageSource="pumpkin.png"
      name="whiskerson the 2nd"
      phonenumber="(123) 456-7890"
      email="have@gmail.com"
    />
    <CardBoy 
      imageSource="felix.png"
      name="notsofluffykins"
      phonenumber="(123) 456-7890"
      email="changed@gmail.com"
    />  */