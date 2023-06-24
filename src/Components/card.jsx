import './card.css';
import PhoneIcon from '../assets/phone-solid.svg';
import EnveloPe from '../assets/envelope-regular.svg';
function CardBoy({imageSource, name, phonenumber, email}) {

  return (
  <div className='contacts'>
    <div className="contact-card">

            <img src={imageSource} className='cat-img'/>
            <h3>{name}</h3>
            <div className="phone-info">
                <img src={PhoneIcon} />
                <p>{phonenumber}</p>
            </div>
            <div className="envelope-info">
                <img src={EnveloPe} />
                <p>{email}</p>
            </div>
    </div>
  </div>
  );
}

export default CardBoy;
