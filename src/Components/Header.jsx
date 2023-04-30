import { useState } from 'react'
import './Header.css'
import PaganiLogo from '../assets/pagani.png'

function Header() {
  return (
    <>
    <div>
      <header>
        <img src={PaganiLogo} width="100px"></img>
        <h1 className='reactfax'>Pagani zonda Riviera</h1>
        <a className='course' href="#">Home</a>
        <a href="#">Gallery </a>
      </header>
    </div>
    </>
  )
}

export default Header;


