import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const Atividade1 = () => {


    const [atividadeatData1, setAtividadeData1] = useState ([])

    const fetchAtividade1 = useCallback (async () =>{
        console.log('teste')
        try{
            const{data} = await axios.get(`https://jsonplaceholder.typicode.com/albums`)
            setAtividadeData1(data)
            console.log(data)
        }catch(error){
            console.error(error)
        }
    },[])

    useEffect(() => {
        fetchAtividade1()
    },[])

    return (
        
    );
}

export default Atividade1;