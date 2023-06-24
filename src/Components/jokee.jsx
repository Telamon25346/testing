import './jokee.css'

function Jokee({setup, punchline}){

    return(
        <div className='thejoke'>
            <p className='setup'>{setup}</p>
            <p className='punchline'>{punchline}</p>
        </div>
    );
}

export default Jokee;