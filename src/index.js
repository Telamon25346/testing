import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header.js'
import Footer from './Footer.js'
import MainContent from './Maincontent.js'




function App (){
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)