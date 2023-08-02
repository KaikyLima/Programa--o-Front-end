import { useState } from "react";
   

const NameRandom = () => {

    const [NameRandom, setNameRandom] = useState ("")

    const generateName = () => {
        if(NameRandom == ""){
            setNameRandom("Deu Bom") 
        }else{
            setNameRandom("")
        }
    }

    return (
        <div colorTex="#fff">
            <button onClick={generateName}> Button Name</button>
            <h1>{NameRandom}</h1>
            
        </div>
    );
}

export default NameRandom;