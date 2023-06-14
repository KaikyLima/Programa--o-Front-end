import { useState } from "react";
import Box from "./Box";

const RandomNumber = () => {

    const [RandomNumber, setRandomNumber] = useState()

    const generateRandomNumber = () =>{
        
    }

    return (
        <Box colorTex="#fff">
            <button onClick={generateRandomNumber}>Sortear número aleatório</button>
            <h3>O número aleatório é: {RandomNumber}</h3>
        </Box>
    );
}

export default RandomNumber;