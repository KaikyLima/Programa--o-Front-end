import { useState } from "react";
import Box from "./Box";    

const NameRandom = () => {

    const [NameRandom, setNameRandom] = useState ("")

    const generateName = () => {
        if(NameRandom == ""){
            setNameRandom("Kaiky") 
        }else{
            setNameRandom("")
        }
    }

    return (
        <Box colorTex="#fff">
            <button onClick={generateName}> Button Name</button>
            <h1>{NameRandom}</h1>
            
        </Box>
    );
}

export default NameRandom;