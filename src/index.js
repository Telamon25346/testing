import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import myImage from './logo192.png'

function OrderList (){
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#"><img src={myImage} alt="Link to React website" width="16px"></img></a></li>
          </ul>
        </nav>
      </header>
      <h1> welcome to my react website! </h1>
      <p>here are some of the many wonderful reasons why I love react.js:</p>
      <ol>
        <li>I love react</li>
        <li>react is working so well</li>
        <li>hope this list works</li>
      </ol>
      <footer>
        <p>© 20xx kanchisa development. All rights reserved.</p>
      </footer>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<OrderList />)