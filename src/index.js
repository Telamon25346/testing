import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function OrderList (){
  return (
    <div>
      <h1>hello this is a heading</h1>

      <ol>
        <li>I love react</li>
        <li>react is working so well</li>
        <li>hope this list works</li>
      </ol>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<OrderList />)