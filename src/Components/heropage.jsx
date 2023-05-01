import HeroLogo from "../assets/heroimage.png"
import './heropage.css'

function HeroPage ()
{
    return (
        <>
        <section className="hero-section">
            <img src={HeroLogo} className="heroimage"></img>
            <h1 className="hero-h1">Online Experiences</h1>
            <p className="hero-text"> Join Unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
        </section>
        </>

    )
}

export default HeroPage; 