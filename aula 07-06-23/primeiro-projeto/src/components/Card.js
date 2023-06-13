import './Card.css'

const Card = ({text, bgColor, contador}) => {

    return (
        <div className='cardContainer' style={{backgroundColor: bgColor}}>
            <p>{text}</p>
            <h3>{contador}</h3>
        </div>
    );
}

export default Card;