import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './Components/navbar.jsx'
import HeroPage from './Components/heropage.jsx'
import './index.css'
import CardBoy from './Components/card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <HeroPage />
    <CardBoy />
  </React.StrictMode>,
)
