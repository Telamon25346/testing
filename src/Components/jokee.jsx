import './jokee.css'

function Jokee({setup, punchline}){

    return(
        <div className='thejoke'>
            <p>{setup}</p>
            <p>{punchline}</p>
        </div>
    )
}

export default Jokee;