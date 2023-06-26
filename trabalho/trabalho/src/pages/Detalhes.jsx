import { useParams } from "react-router-dom";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./Detalhes.css"

const Detalhes = () => {

    const {name} = useParams()
    
    const [pokeData, setPokeData] = useState ([])
    const fetchPokeData = useCallback (async (paramOffset) =>{
        console.log('teste')
        try{
            const{data} = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
            setPokeData(data)
            console.log(data)
        }catch(error){
            console.error(error)
        }
    },[])

    useEffect(() => {
        fetchPokeData()
    },[])

    const listLg = () => {
        const list = []
        for(const lg in pokeData[0].languages) {
            console.log(pokeData[0].languages)
        }
    }

    const renderPokeData = () => {
        return (
            <div className="container">
                {pokeData.map(poke =>(
                    <div className=".container">
                        <h4>Nome: {poke.name.common}</h4>
                        <img src= {poke.flags.png} alt="" />
                        <h4>Capital: {poke.capital[0]}</h4>
                        <h4>Continete: {poke.continents[0]}</h4>
                        <h4>População: {poke.population}</h4>
                        <h4>Horário local: {poke.timezones[0]}</h4>
                        {listLg()}
                    </div>
                    
                    
            ))}
            </div>
        )
    }

    return (
        <div>
            {renderPokeData()}
        </div>
    );
}

export default Detalhes;