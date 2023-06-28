import { useEffect, useState } from "react";

const Componentes = ({props1}) => {
    console.log("testando", props1)

    const [nomeEstado, setNomeEstado] = useState()
    const onclickH3 = () => {
        setNomeEstado ('Teste')
    }

    useEffect(() =>{
        /*Montagem, atualiza quando a pagina abrir ou for atualizada*/ 
    },[])

    useEffect(() =>{
        /*Irá executar quando a props1 atualizar*/
    },[props1])

    return (
        <div>
            <h3 onClick={onclickH3}>
                Revisão final {props1}
            </h3>
            
        </div>
    );
}

export default Componentes;