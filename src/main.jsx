import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import NavBar from './Components/navbar.jsx'
import HeroPage from './Components/heropage.jsx'
import CardBoy from './Components/card.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <CardBoy 
      image="../assets/mr-whiskerson.png"
      name="Mr.Whiskerson"
      phonenumber="(123) 456-7890"
      email="allthe@gmail.com"
    />
    <CardBoy 
      name="fluffykins"
      phonenumber="(215) 456-7890"
      email="emails@gmail.com"
    />
    <CardBoy 
      name="whiskerson the 2nd"
      phonenumber="(123) 456-7890"
      email="have@gmail.com"
    />
    <CardBoy 
      name="notsofluffykins"
      phonenumber="(123) 456-7890"
      email="changed@gmail.com"
    />
  </React.StrictMode>,
)
