import { useEffect, useState } from "react";
import axios from "axios";

const Componentes = ({props1}) => {
    console.log("testando", props1)

    const [nomeEstado, setNomeEstado] = useState()
    const onclickH3 = () => {
        setNomeEstado ('Teste')
    }

    const request = async () => {
        try{
            const response = axios.get('http://sdasd.asdasd.cdasd/asd')
            response.data
        }catch(error){
            console.error(error);
        }finally{

        }
    }

    useEffect(() =>{
        /*Montagem, atualiza quando a pagina abrir ou for atualizada*/ 
    },[])

    useEffect(() =>{
        /*Irá executar quando a props1 atualizar*/
    },[props1])

    useEffect(() => {
        return () =>{
            /*Essa função só executa quando o componente desmontar*/
        }
    },[])

    return (
        <div>
            <h3 onClick={onclickH3}>
                Revisão final {props1}
            </h3>
            
        </div>
    );
}

export default Componentes;