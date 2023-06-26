import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import './Pokedex.css'


const Pagination = ({request, offset}) => {

    const nextPage = () => {
        request(offset + 12)
    }

    const previousPage = () => {
        if (offset <= 12) return
        request(offset - 12)
    }

    return (
        <div>
            <button onClick={previousPage} className="buttonColor"> Carregar menos </button>
            <button onClick={nextPage} className="buttonColor"> Carregar mais </button>
        </div>
    )

    
}


const Pokedex = () => {

    const [pokeData, setPokeData] = useState ([])
    const [offset, setOffset] = useState(12);
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
            <div className="container">
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
            <details>
                <summary>Listagem dos Países</summary>
                <p>Clique sobre o nome do país para obter mais detalhes sobre ele</p>

            </details>
            {renderPokeData()}
            <Pagination offset={offset} request={(e) => setOffset(e)}/>
        </div>
    );
}

export default Pokedex;