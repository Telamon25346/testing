import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'




const webpageboy = (
  <div>
    <img src={process.env.PUBLIC_URL + '/logo512.png'} width="300px" alt="Logo"></img>
  <h1>
    Fun facts about React
  </h1>
  <ul>
    <li>Was first released in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has well over 100K stars on Github</li>
    <li>Is maintained by Facebook</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
  </ul>
  </div>
)




let myr00T = ReactDOM.createRoot(document.getElementById("root"))


myr00T.render(webpageboy)
