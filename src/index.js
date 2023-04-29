import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header.js'
import Footer from './Footer.js'



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