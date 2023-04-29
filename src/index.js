import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import myImage from './logo192.png'

function Header (){
  return (
    <div>
      <header>
      <nav className="headernav">
      <img className="reactimage" src={myImage} alt="Link to React website"></img>
          <ul>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

function Footer (){
  return(
    <div>
      <footer>
        <small>© 2023 kanchisa development. All rights reserved.</small>
    </footer>
    </div>

  )
}

function MainContent (){
  return (
    <div>
      <h1> Welcome to ReactFacts! </h1>
      <p className="bodyparagraph">Here are some wonderful tidbits about the react.js library:</p>
      <ol>
        <li>I love react</li>
        <li>react is working so well</li>
        <li>hope this list works</li>
      </ol>
    </div>
  )
}

function Page (){
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page />)