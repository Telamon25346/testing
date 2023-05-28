import './card.css';
import PhoneIcon from '../assets/phone-solid.svg';
import EnveloPe from '../assets/envelope-regular.svg';
import WHISKY from '../assets/mr-whiskerson.png';

function CardBoy(props) {

  return (
  <div className='contacts'>

    <div className="contact-card">
            <img src={WHISKY} className='cat-img'/>
            <h3>{props.name}</h3>
            <div className="phone-info">
                <img src={PhoneIcon} />
                <p>{props.phonenumber}</p>
            </div>
            <div className="envelope-info">
                <img src={EnveloPe} />
                <p>{props.email}</p>
            </div>
    </div>


  </div>
  );
}

export default CardBoy;
