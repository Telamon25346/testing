import './card.css'
import ManImage from '../assets/man.png'
import StarImage from '../assets/star.png'

function CardBoy () {
    return (
        <>
        <div className='card'>
            <img src={ManImage}></img>
            <div className='cardstats'>
                <img src={StarImage} className='starimage'></img>
                <span>5.0</span>
                <span className='rating'>(6) •</span>
                <span className='USA'>USA</span>
            </div>
            <p className='lifelessons'> Life Lessons with random guy</p>
            <p> <span className='bold'> From $126 </span> / person</p>
        </div>
        </>
    )
}

export default CardBoy; 