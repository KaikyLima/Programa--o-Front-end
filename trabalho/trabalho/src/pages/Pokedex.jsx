import axios from "axios";
import { useCallback, useEffect, useState } from "react";



const Pagination = ({request, offset}) => {

    const nextPage = () => {
        request(offset + 20)
    }

    const previousPage = () => {
        if (offset <= 20) return
        request(offset - 20)
    }

    return (
        <div>
            <button onClick={nextPage}> + </button>
            <button onClick={previousPage}> - </button>
        </div>
    )

    
}


const Pokedex = () => {

    const [pokeData, setPokeData] = useState ([])
    const [offset, setOffset] = useState(20);
    const fetchPokeData = useCallback (async (paramOffset) =>{
        console.log('teste')
        try{
            const{data} = await axios.get('https://restcountries.com/v3.1/all')
            setPokeData(data)
            console.log(data)
        }catch(error){
            console.error(error)
        }
    },[])

    useEffect(() => {
        fetchPokeData()
    },[])

    const renderPokeData = () => {
        return (
            <div>
                {pokeData.slice(0,offset).map(poke =>(
                    <div>
                        <h4>{poke.name.common}</h4>
                        <img src= {poke.flags.png} alt="" />
                    </div>
            ))}
            </div>
        )
    }


    return (
        <div>
        <h1>Listagem dos Países</h1>
            {renderPokeData()}
            <Pagination offset={offset} request={(e) => setOffset(e)}/>
        </div>
    );
}

export default Pokedex;