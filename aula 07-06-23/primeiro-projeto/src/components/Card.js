import './Card.css'

const Card = ({text, bgColor, contador, children}) => {

    return (
        <div className='cardContainer' style={{backgroundColor: bgColor}}>
            <p>{text}</p>
            <h3>{contador}</h3>
            {children}
        </div>
    );
}

export default Card;