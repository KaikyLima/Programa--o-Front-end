import { useNavigate } from "react-router-dom";

const NumberList = () => {
    const navigate = useNavigate()
    const numberArray = [1,2,3,4,5]
    
    const onClickNumber = () => {
        navigate(`/numbers/${number}`)
    }

    return (
        <div>
            {numberArray.map(number => (
                <h3 onClick={onClickNumber}> {number} </h3>
            ))}
        </div>
    );
}

export default NumberList;