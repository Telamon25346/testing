import { useState } from 'react'
import './card.css'
import ZondaRiviera from '../assets/ZondaRiviera.jpg'


function CardBoy() {
    return (
        <>
        <div class="card">
            <img src={ZondaRiviera} width="500px"></img>
            <h1>this is a ZONDA</h1>
            <p>it's amazing</p>
        </div>
        </>
    )
}

export default CardBoy; 