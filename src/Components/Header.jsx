import { useState } from 'react'
import './Header.css'
import ReactImage from '../assets/reactimag.png'

function Header() {
  return (
    <>
    <div>
      <header>
        <img src={ReactImage} width="40px"></img>
        <h1 className='reactfax'>ReactFacts</h1>
        <h1 className='course'>React Course - Project 1</h1>
      </header>
    </div>
    </>
  )
}

export default Header;


